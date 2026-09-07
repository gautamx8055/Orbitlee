import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
gsap.registerPlugin(ScrollTrigger);

function applyTheme(theme: 'light' | 'dark') {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('orbitlee-theme', theme);
	const meta = document.getElementById('theme-color-meta');
	if (meta) meta.setAttribute('content', theme === 'light' ? '#F4F1FB' : '#0C0814');
	const btn = document.getElementById('theme-toggle');
	if (btn) btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
}

const current = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark';
applyTheme(current);

document.getElementById('theme-toggle')?.addEventListener('click', () => {
	const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
	applyTheme(next);
});

const nav = document.querySelector<HTMLElement>('#studio-nav');
const navArc = document.querySelector<SVGCircleElement>('#nav-orbit-arc');
const progress = document.getElementById('scroll-progress');
const circ = 81.68;

const onScrollChrome = () => {
	const y = window.scrollY;
	if (nav) nav.classList.toggle('is-scrolled', y > 24);
	const max = document.documentElement.scrollHeight - window.innerHeight;
	const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
	if (navArc) navArc.style.strokeDashoffset = String(circ * (1 - p));
	if (progress) progress.style.transform = `scaleX(${p})`;
};
window.addEventListener('scroll', onScrollChrome, { passive: true });
onScrollChrome();

let lenis: Lenis | null = null;
if (!prefersReducedMotion) {
	lenis = new Lenis({ duration: 1.05, lerp: 0.1, smoothWheel: true });
	lenis.on('scroll', () => {
		ScrollTrigger.update();
		onScrollChrome();
	});
	gsap.ticker.add((time) => lenis!.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);
}

const burger = document.querySelector<HTMLButtonElement>('#studio-burger');
const mnav = document.querySelector<HTMLElement>('#studio-mnav');
if (burger && mnav) {
	burger.addEventListener('click', () => {
		const open = mnav.classList.toggle('is-open');
		burger.classList.toggle('is-open', open);
		burger.setAttribute('aria-expanded', String(open));
		mnav.setAttribute('aria-hidden', open ? 'false' : 'true');
		document.body.style.overflow = open ? 'hidden' : '';
		if (lenis) open ? lenis.stop() : lenis.start();
	});
	mnav.querySelectorAll('a').forEach((a) => {
		a.addEventListener('click', () => {
			mnav.classList.remove('is-open');
			burger.classList.remove('is-open');
			document.body.style.overflow = '';
			if (lenis) lenis.start();
		});
	});
}

const dropItem = document.querySelector<HTMLElement>('[data-nav-drop]');
const dropTrigger = document.querySelector<HTMLAnchorElement>('[data-nav-drop-trigger]');
const closeDrop = () => {
	dropItem?.classList.remove('is-open');
	dropTrigger?.setAttribute('aria-expanded', 'false');
};
if (dropItem && dropTrigger) {
	dropTrigger.addEventListener('click', (e) => {
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
			e.preventDefault();
			const open = dropItem.classList.toggle('is-open');
			dropTrigger.setAttribute('aria-expanded', String(open));
		}
	});
	document.addEventListener('click', (e) => {
		if (!dropItem.contains(e.target as Node)) closeDrop();
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') closeDrop();
	});
}

if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());

const mixRoot = document.querySelector<HTMLElement>('[data-mix-root]');
const mixLive = document.querySelector('.billboard__live');
const mixLabels: Record<string, string> = {
	all: 'Live mix · ads + product',
	growth: 'Live mix · ads & social',
	build: 'Live mix · sites & apps',
};
function applyMix(mix: string, buttons: NodeListOf<HTMLButtonElement>) {
	mixRoot?.setAttribute('data-mix-active', mix);
	if (mixLive) {
		const label = mixLabels[mix] ?? mixLabels.all;
		mixLive.innerHTML = `<span></span> ${label}`;
	}
	buttons.forEach((b) => {
		const on = b.getAttribute('data-mix') === mix;
		b.classList.toggle('is-on', on);
		b.setAttribute('aria-selected', String(on));
	});
}
if (mixRoot) {
	const buttons = mixRoot.querySelectorAll<HTMLButtonElement>('[data-mix]');
	buttons.forEach((btn) => {
		btn.addEventListener('click', () => applyMix(btn.getAttribute('data-mix') || 'all', buttons));
	});
}

if (!prefersReducedMotion) {
	const mWord = document.querySelector('.word--m');
	const tWord = document.querySelector('.word--t');
	const xWord = document.querySelector('.word--x');
	if (mWord && tWord) {
		gsap.from(mWord, { x: -80, opacity: 0, duration: 1, ease: 'power3.out' });
		gsap.from(tWord, { x: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.08 });
		if (xWord) gsap.from(xWord, { scale: 0.6, opacity: 0, duration: 0.6, ease: 'back.out(1.6)', delay: 0.2 });
	}
	const billboardBits = document.querySelectorAll('.billboard__title, .billboard__lead, .billboard .hero__actions, .billboard__live');
	if (billboardBits.length) {
		gsap.from(billboardBits, {
			y: 20, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.25,
		});
	}

	const reveal = document.querySelectorAll(
		'.h2, .lede, .kicker, .case, .svc-card, .step, .path__step, .mix-row, .reel__card, .mosaic a, .cta-block, .pg h1, .pg .lead, .offer article, .stats li, .split > *, .form, .svc-mini a, .board__item, .dept-list a'
	);
	reveal.forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 24,
			duration: 0.7,
			ease: 'power3.out',
			scrollTrigger: { trigger: el, start: 'top 88%', once: true },
		});
	});

	document.querySelectorAll('.case img, .mosaic img, .svc-card img, .split img:not(.about-logo)').forEach((img) => {
		gsap.fromTo(
			img,
			{ scale: 1.08 },
			{
				scale: 1,
				ease: 'none',
				scrollTrigger: { trigger: img, start: 'top 90%', end: 'bottom top', scrub: 0.5 },
			}
		);
	});
}
