interface ModelOption {
	id: string;
	label: string;
	pricing: string;
	ratios: string[];
	defaultRatio: string;
	duration?: { min: number; max: number; default: number; fixedOptions?: number[] };
}

interface Catalog {
	image: ModelOption[];
	video: ModelOption[];
}

type Mode = 'image' | 'video';

const catalogEl = document.querySelector<HTMLScriptElement>('#lab-catalog');
const catalog: Catalog = catalogEl ? JSON.parse(catalogEl.textContent ?? '{}') : { image: [], video: [] };

const form = document.querySelector<HTMLFormElement>('#lab-form');
const modeButtons = document.querySelectorAll<HTMLButtonElement>('.lab__mode');
const modelSelect = document.querySelector<HTMLSelectElement>('#lab-model');
const ratioSelect = document.querySelector<HTMLSelectElement>('#lab-ratio');
const durationField = document.querySelector<HTMLElement>('#lab-duration-field');
const durationInput = document.querySelector<HTMLInputElement>('#lab-duration');
const promptInput = document.querySelector<HTMLTextAreaElement>('#lab-prompt');
const pricingEl = document.querySelector<HTMLElement>('#lab-pricing');
const submitBtn = document.querySelector<HTMLButtonElement>('#lab-submit');
const statusEl = document.querySelector<HTMLElement>('#lab-status');
const resultEl = document.querySelector<HTMLElement>('#lab-result');

let mode: Mode = 'image';

function modelsFor(m: Mode): ModelOption[] {
	return catalog[m] ?? [];
}

function currentModel(): ModelOption | undefined {
	return modelsFor(mode).find((m) => m.id === modelSelect?.value);
}

function renderModels() {
	if (!modelSelect) return;
	modelSelect.innerHTML = modelsFor(mode)
		.map((m) => `<option value="${m.id}">${m.label}</option>`)
		.join('');
	renderRatiosAndDuration();
}

function renderRatiosAndDuration() {
	const model = currentModel();
	if (ratioSelect) {
		const ratios = model?.ratios ?? [];
		ratioSelect.innerHTML = ratios.map((r) => `<option value="${r}">${r}</option>`).join('');
		if (model) ratioSelect.value = model.defaultRatio;
	}
	if (durationField && durationInput) {
		if (mode === 'video' && model?.duration) {
			durationField.style.display = '';
			durationInput.min = String(model.duration.min);
			durationInput.max = String(model.duration.max);
			durationInput.value = String(model.duration.default);
			durationInput.step = model.duration.fixedOptions ? String(model.duration.fixedOptions[1] - model.duration.fixedOptions[0]) : '1';
		} else {
			durationField.style.display = 'none';
		}
	}
	if (pricingEl) pricingEl.textContent = model ? model.pricing : '';
}

modeButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const next = btn.dataset.mode as Mode | undefined;
		if (!next || next === mode) return;
		mode = next;
		modeButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
		renderModels();
	});
});

modelSelect?.addEventListener('change', renderRatiosAndDuration);

function setBusy(busy: boolean) {
	submitBtn?.classList.toggle('lab__submit-disabled', busy);
	if (submitBtn) submitBtn.disabled = busy;
}

function setStatus(text: string, state?: 'error') {
	if (!statusEl) return;
	statusEl.textContent = text;
	if (state) statusEl.dataset.state = state;
	else delete statusEl.dataset.state;
}

function renderResult(output: string[]) {
	if (!resultEl) return;
	resultEl.innerHTML = output
		.map((url) =>
			mode === 'image'
				? `<img src="${url}" alt="Generated output" loading="lazy" />`
				: `<video src="${url}" controls playsinline></video>`
		)
		.join('');
}

form?.addEventListener('submit', async (e) => {
	e.preventDefault();
	const model = currentModel();
	if (!model || !promptInput) return;

	const body: Record<string, unknown> = {
		mode,
		model: model.id,
		promptText: promptInput.value.trim(),
		ratio: ratioSelect?.value,
	};
	if (mode === 'video' && durationInput?.value) body.duration = Number(durationInput.value);

	setBusy(true);
	resultEl!.innerHTML = '';
	setStatus(`Submitting to Runway (${model.label})… this can take a while, keep this tab open.`);

	try {
		const res = await fetch('/api/runway/generate', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
		});
		const data = await res.json();
		if (!res.ok) {
			setStatus(data.error ?? `Request failed (${res.status}).`, 'error');
			return;
		}
		setStatus(`Done — ${data.cost?.credits ?? '?'} credits charged.`);
		renderResult(data.output ?? []);
	} catch (err) {
		setStatus(err instanceof Error ? err.message : 'Network error.', 'error');
	} finally {
		setBusy(false);
	}
});

renderModels();
