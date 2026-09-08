// Server-only helper around the official Runway Dev SDK (@runwayml/sdk).
// Never import this file from client-side code — it reads RUNWAYML_API_SECRET.
//
// Pattern follows the Runway Dev "runway-dev" skill: build one SDK request,
// chain `.waitForTaskOutput()` directly off `.create()` (no manual polling),
// and let TaskFailedError / TaskTimedOutError surface task details on failure.
import RunwayML, { TaskFailedError, TaskTimedOutError } from '@runwayml/sdk';
import type { TextToImageCreateParams } from '@runwayml/sdk/resources/text-to-image';
import type { TextToVideoCreateParams } from '@runwayml/sdk/resources/text-to-video';

let client: RunwayML | null = null;

/** Lazily construct the SDK client so a missing key fails at request time, not at import time. */
export function getRunwayClient(): RunwayML {
	if (!process.env.RUNWAYML_API_SECRET) {
		throw new Error(
			'RUNWAYML_API_SECRET is not set. Copy .env.example to .env, add a key from the Developer Portal (https://dev.runwayml.com → API Keys), and restart the dev server.'
		);
	}
	if (!client) client = new RunwayML();
	return client;
}

export { TaskFailedError, TaskTimedOutError };

// ---------------------------------------------------------------------------
// Curated model catalog for the /lab/generate tool.
//
// Runway offers many more models (see https://docs.dev.runwayml.com/guides/models.md)
// including ones that require an input image or video. This list is limited to
// models that only need a text prompt, so the starter UI stays a single form.
// Field names, enums and requirements below are taken directly from the
// installed @runwayml/sdk type definitions — do not hand-edit without checking
// node_modules/@runwayml/sdk/resources/{text-to-image,text-to-video}.d.ts.
// ---------------------------------------------------------------------------

export type ImageModelId = Extract<TextToImageCreateParams['model'], 'muse_image' | 'gen4_image' | 'gpt_image_2'>;
export type VideoModelId = Extract<TextToVideoCreateParams['model'], 'gen4.5' | 'veo3.1_fast' | 'wan3'>;

interface ModelOption {
	id: string;
	label: string;
	pricing: string;
	ratios: string[];
	defaultRatio: string;
}

interface VideoModelOption extends ModelOption {
	duration: { min: number; max: number; default: number; fixedOptions?: number[] };
}

export const IMAGE_MODELS: Record<ImageModelId, ModelOption> = {
	muse_image: {
		id: 'muse_image',
		label: 'Muse — fastest & cheapest',
		pricing: '1 credit / image',
		ratios: ['auto', '1600:1600', '1920:1280', '1280:1920', '2352:1008', '1152:2016'],
		defaultRatio: 'auto',
	},
	gen4_image: {
		id: 'gen4_image',
		label: 'Gen-4 Image',
		pricing: 'varies by resolution',
		ratios: ['1024:1024', '1080:1080', '1920:1080', '1080:1920', '1360:768', '1280:720', '720:1280'],
		defaultRatio: '1024:1024',
	},
	gpt_image_2: {
		id: 'gpt_image_2',
		label: 'GPT Image 2',
		pricing: 'varies by quality/resolution',
		ratios: ['auto', '1920:1088', '1088:1920', '2048:2048'],
		defaultRatio: 'auto',
	},
};

export const VIDEO_MODELS: Record<VideoModelId, VideoModelOption> = {
	'gen4.5': {
		id: 'gen4.5',
		label: 'Gen-4.5 — flagship',
		pricing: '12 credits / second',
		ratios: ['1280:720', '720:1280'],
		defaultRatio: '1280:720',
		duration: { min: 2, max: 10, default: 5 },
	},
	'veo3.1_fast': {
		id: 'veo3.1_fast',
		label: 'Veo 3.1 Fast',
		pricing: 'varies by duration',
		ratios: ['1280:720', '720:1280', '1920:1080', '1080:1920'],
		defaultRatio: '1280:720',
		duration: { min: 4, max: 8, default: 4, fixedOptions: [4, 6, 8] },
	},
	wan3: {
		id: 'wan3',
		label: 'Wan 3 — budget (480p)',
		pricing: '5 credits / second',
		ratios: ['auto_480p', 'auto_720p', 'auto_1080p'],
		defaultRatio: 'auto_480p',
		duration: { min: 2, max: 30, default: 5 },
	},
};

export function isImageModel(id: string): id is ImageModelId {
	return id in IMAGE_MODELS;
}

export function isVideoModel(id: string): id is VideoModelId {
	return id in VIDEO_MODELS;
}

interface GenerateInput {
	mode: 'image' | 'video';
	model: string;
	promptText: string;
	ratio: string;
	duration?: number;
}

/** Submit a generation request and wait for the terminal task. Long-running — the
 *  caller's request stays open until the task succeeds, fails, or times out. */
export async function generateAndWait(input: GenerateInput) {
	const client = getRunwayClient();

	if (input.mode === 'image') {
		if (!isImageModel(input.model)) throw new Error(`Unknown image model: ${input.model}`);
		const body = {
			model: input.model,
			promptText: input.promptText,
			ratio: input.ratio,
		} as TextToImageCreateParams;
		return client.textToImage.create(body).waitForTaskOutput();
	}

	if (!isVideoModel(input.model)) throw new Error(`Unknown video model: ${input.model}`);
	const body = {
		model: input.model,
		promptText: input.promptText,
		ratio: input.ratio,
		duration: input.duration,
	} as TextToVideoCreateParams;
	return client.textToVideo.create(body).waitForTaskOutput();
}
