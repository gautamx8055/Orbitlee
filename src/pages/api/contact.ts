export const prerender = false;

import type { APIRoute } from 'astro';
import { verifyTurnstile } from '../../lib/turnstile';

const FORMSPREE_URL = 'https://formspree.io/f/moeajqjw';

export const POST: APIRoute = async (context) => {
	const { request } = context;
	const ip = readClientIp(request, () => context.clientAddress);
	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return json({ error: 'Request body must be a form.' }, 400);
	}

	const name = String(data.get('name') ?? '').trim();
	const email = String(data.get('email') ?? '').trim();
	const message = String(data.get('message') ?? '').trim();
	if (!name || !email || !message) {
		return json({ error: 'Please fill in name, email and a short message.' }, 400);
	}

	const token = String(data.get('cf-turnstile-response') ?? '').trim();
	const passed = await verifyTurnstile(token, ip);
	if (!passed) {
		return json({ error: 'Security check failed. Refresh the page and try again.' }, 403);
	}

	const forward = new FormData();
	for (const [key, value] of data.entries()) {
		if (key === 'cf-turnstile-response') continue;
		forward.append(key, value);
	}

	try {
		const res = await fetch(FORMSPREE_URL, {
			method: 'POST',
			body: forward,
			headers: { Accept: 'application/json' },
		});
		if (res.ok) return json({ ok: true }, 200);
		let error = 'Something went wrong. Please try again or email orbitleeee@gmail.com';
		try {
			const body = (await res.json()) as { errors?: { message?: string }[] };
			if (body.errors?.length) {
				error = body.errors.map((item) => item.message).filter(Boolean).join(', ') || error;
			}
		} catch {
			// Formspree sometimes returns an empty body.
		}
		return json({ error }, res.status);
	} catch {
		return json({ error: 'Network error. Please try again or email orbitleeee@gmail.com' }, 502);
	}
};

function readClientIp(request: Request, getAddress: () => string | undefined): string | undefined {
	try {
		const address = getAddress();
		if (address) return address;
	} catch {
		// clientAddress throws when the adapter has no socket address.
	}
	const forwarded = request.headers.get('x-forwarded-for');
	return forwarded?.split(',')[0]?.trim() || undefined;
}

function json(body: unknown, status: number) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json' },
	});
}
