// Server-only. Never import this from client code. It reads TURNSTILE_SECRET_KEY.

const DEV_TEST_SECRET = '1x0000000000000000000000000000000AA';

function turnstileSecret(): string {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	if (secret) return secret;
	// Matches the test sitekey used on the contact form when no public key is set.
	const env = import.meta.env;
	if (env?.DEV && !env.PUBLIC_TURNSTILE_SITE_KEY) return DEV_TEST_SECRET;
	return '';
}

export async function verifyTurnstile(token: string | null | undefined, ip?: string | null): Promise<boolean> {
	if (!token) return false;

	const secret = turnstileSecret();
	if (!secret) return false;

	const body = new URLSearchParams({
		secret,
		response: token,
	});
	if (ip) body.append('remoteip', ip);

	try {
		const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body,
		});
		const data = (await res.json()) as { success?: boolean };
		return data.success === true;
	} catch {
		return false;
	}
}
