import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
gsap.registerPlugin(ScrollTrigger);

function applyTheme(theme: 'light' | 'dark') {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('orbitlee-theme', theme);
	const meta = document.getElementById('theme-color-meta');
	if (meta) meta.setAttribute('content', theme === 'light' ? '#F3F6EE' : '#07080A');
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

if (!prefersReducedMotion) {
	const heroCopy = document.querySelectorAll('.hero .eyebrow, .hero h1, .hero__lead, .hero__actions');
	if (heroCopy.length) {
		gsap.from(heroCopy, { y: 28, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.08 });
	}
	const heroVisual = document.querySelector('.hero__visual');
	if (heroVisual) {
		gsap.from(heroVisual, { y: 48, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 });
		const heroImg = heroVisual.querySelector('img');
		if (heroImg) {
			gsap.to(heroImg, {
				yPercent: 14,
				ease: 'none',
				scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
			});
		}
	}

	const reveal = document.querySelectorAll(
		'.h2, .lede, .kicker, .case, .svc-card, .step, .mosaic a, .cta-block, .pg h1, .pg .lead, .offer article, .stats li, .split > *, .form, .svc-mini a'
	);
	reveal.forEach((el, i) => {
		gsap.from(el, {
			y: 32,
			opacity: 0,
			duration: 0.75,
			ease: 'power3.out',
			delay: (i % 4) * 0.04,
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
