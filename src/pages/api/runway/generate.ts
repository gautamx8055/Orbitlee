// On-demand route — everything else in this project stays statically generated.
// See https://docs.astro.build/en/guides/on-demand-rendering/
export const prerender = false;

import type { APIRoute } from 'astro';
import { generateAndWait, IMAGE_MODELS, VIDEO_MODELS, TaskFailedError, TaskTimedOutError, isImageModel, isVideoModel } from '../../../lib/runway';

export const POST: APIRoute = async ({ request }) => {
	let payload: Record<string, unknown>;
	try {
		payload = await request.json();
	} catch {
		return json({ error: 'Request body must be JSON.' }, 400);
	}

	const mode = payload.mode;
	const model = String(payload.model ?? '');
	const promptText = String(payload.promptText ?? '').trim();
	const ratio = String(payload.ratio ?? '');
	const duration = typeof payload.duration === 'number' ? payload.duration : undefined;

	if (mode !== 'image' && mode !== 'video') {
		return json({ error: 'mode must be "image" or "video".' }, 400);
	}
	if (!promptText) {
		return json({ error: 'promptText is required.' }, 400);
	}
	if (mode === 'image' && !isImageModel(model)) {
		return json({ error: `Unknown image model "${model}". Choose one of: ${Object.keys(IMAGE_MODELS).join(', ')}` }, 400);
	}
	if (mode === 'video' && !isVideoModel(model)) {
		return json({ error: `Unknown video model "${model}". Choose one of: ${Object.keys(VIDEO_MODELS).join(', ')}` }, 400);
	}
	if (!ratio) {
		return json({ error: 'ratio is required.' }, 400);
	}

	const resolvedDuration = mode === 'video' ? duration ?? VIDEO_MODELS[model as keyof typeof VIDEO_MODELS].duration.default : undefined;

	try {
		const task = await generateAndWait({ mode, model, promptText, ratio, duration: resolvedDuration });
		return json({ id: task.id, status: task.status, output: task.output, cost: task.cost }, 200);
	} catch (err) {
		if (err instanceof TaskFailedError) {
			const details = err.taskDetails;
			return json(
				{
					error: 'failure' in details ? details.failure : 'Task was cancelled.',
					failureCode: 'failureCode' in details ? details.failureCode : undefined,
					taskId: details.id,
				},
				422
			);
		}
		if (err instanceof TaskTimedOutError) {
			return json({ error: 'Task did not finish within the wait timeout. It may still complete — check it from the Dev Portal or Runway Dev MCP.', taskId: err.taskDetails.id }, 504);
		}
		if (err instanceof Error && err.message.includes('RUNWAYML_API_SECRET')) {
			return json({ error: err.message }, 500);
		}
		// Runway SDK APIError instances carry a `status`; surface it when present.
		const status = typeof (err as { status?: number })?.status === 'number' ? (err as { status: number }).status : 502;
		const message = err instanceof Error ? err.message : 'Unexpected error calling the Runway Dev API.';
		return json({ error: message }, status);
	}
};

function json(body: unknown, status: number) {
	return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}
