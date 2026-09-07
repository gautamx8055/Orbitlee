export const featuredWork = [
	{ client: 'Ortholite', tag: 'Amazon creatives', img: '/2.jpg', href: '/work' },
	{ client: 'JK Junglee Honey', tag: 'Organic social', img: '/Post 3.png', href: '/work' },
	{ client: 'Green Elixir', tag: 'AI UGC', img: '/4.jpg', href: '/work' },
	{ client: 'Windsouls, Goa', tag: '70-page brochure', img: '/9.jpg', href: '/work' },
	{ client: 'Gaurya Farms', tag: 'Commercial film', img: '/7.jpg', href: '/work' },
	{ client: 'Budweiser', tag: 'OOH hoardings', img: '/8.jpg', href: '/work' },
	{ client: 'Aurix', tag: 'Social identity', img: '/AURIX-SM-BANNER.jpg', href: '/work' },
	{ client: 'Prime Figurzz', tag: 'Thumbnails', img: '/5.jpg', href: '/work' },
];

export type ServiceOffering = {
	id: string;
	title: string;
	desc: string;
};

export type ServicePillar = {
	lane: 'growth' | 'build';
	slug: string;
	href: string;
	title: string;
	navLabel: string;
	seoTitle: string;
	seoDescription: string;
	seoKeywords: string;
	eyebrow: string;
	headline: string;
	headlineEm: string;
	lead: string;
	blurb: string;
	img: string;
	imgAlt: string;
	items: string[];
	story: string;
	offerings: ServiceOffering[];
	faqs: { q: string; a: string }[];
	ctaTitle: string;
	ctaBody: string;
	ctaLabel: string;
};

export const servicePillars: ServicePillar[] = [
	{
		slug: 'digital-marketing',
		lane: 'growth',
		href: '/services/digital-marketing',
		title: 'Digital marketing',
		navLabel: 'Digital marketing',
		seoTitle: 'Digital Marketing Agency | SEO & Content | Orbitlee',
		seoDescription: 'Hire Orbitlee for digital marketing: SEO, content and email that keep working after the ads stop. Weekly updates. Free 30-minute chat.',
		seoKeywords: 'digital marketing agency, SEO agency, content marketing, email marketing, Orbitlee',
		eyebrow: 'Search · Content · Email',
		headline: 'Digital marketing that stays',
		headlineEm: 'useful',
		lead: 'SEO, content and email working together, so people find you, remember you, and come back.',
		blurb: 'SEO, content and email that keep working after the campaign ends.',
		img: '/Ads-try-1-F.jpg',
		imgAlt: 'Digital campaign creative by Orbitlee',
		items: ['SEO', 'Content', 'Email', 'Analytics'],
		story: 'We keep digital simple: show up in search, say something clear, and follow up with care. Same team as your ads and website, so nothing gets lost.',
		offerings: [
			{ id: 'seo', title: 'Search & SEO', desc: 'Pages and content for what your buyers actually search.' },
			{ id: 'content-marketing', title: 'Content', desc: 'Guides and stories that help sales, not just the blog.' },
			{ id: 'email-crm', title: 'Email', desc: 'Welcome notes and follow-ups based on what people did.' },
			{ id: 'analytics', title: 'Analytics', desc: 'A weekly view of what worked, in plain language.' },
		],
		faqs: [
			{ q: 'Is this the same as ads?', a: 'No. Ads sit under performance. This is the always-on layer: search, content and email. Many clients do both.' },
			{ q: 'Can you work with our in-house team?', a: 'Yes. We can own the plan, or run the whole stack. You choose.' },
		],
		ctaTitle: 'Want digital that actually connects?',
		ctaBody: 'Bring the site and last few months of numbers. We’ll keep it practical.',
		ctaLabel: 'Book a digital chat',
	},
	{
		slug: 'performance-marketing',
		lane: 'growth',
		href: '/services/performance-marketing',
		title: 'Performance marketing',
		navLabel: 'Performance marketing',
		seoTitle: 'Performance Marketing Agency | Meta & Google | Orbitlee',
		seoDescription: 'Performance marketing from Orbitlee: Meta, Google and YouTube ads with creative, tracking and a weekly report. Free 30-minute chat.',
		seoKeywords: 'performance marketing agency, Meta ads, Google Ads, YouTube ads, paid media, Orbitlee',
		eyebrow: 'Meta · Google · YouTube',
		headline: 'Performance ads you can',
		headlineEm: 'explain',
		lead: 'Meta, Google and YouTube: creative and media in the same week, with numbers you can share.',
		blurb: 'Paid ads with creative, tracking and a clear weekly update.',
		img: '/8.jpg',
		imgAlt: 'Paid creative by Orbitlee',
		items: ['Meta Ads', 'Google Ads', 'YouTube', 'Lead gen'],
		story: 'We don’t “boost a post.” We test offers, keep tracking honest, and stop what isn’t working. If the page is the problem, we fix that too.',
		offerings: [
			{ id: 'meta-ads', title: 'Meta Ads', desc: 'Facebook and Instagram ads, with creative made for the feed.' },
			{ id: 'google-ads', title: 'Google Ads', desc: 'Search and demand when people are already looking.' },
			{ id: 'lead-gen', title: 'Lead gen', desc: 'Forms and WhatsApp capture, judged on quality not volume.' },
			{ id: 'reporting', title: 'Reporting', desc: 'What we spent, what you got, what we change next.' },
		],
		faqs: [
			{ q: 'What budget do you need?', a: 'If spend is too small to learn, we’ll say so and suggest organic or a landing page first.' },
			{ q: 'Do you only run ads?', a: 'We can. It works better when we also make the creative and the page.' },
		],
		ctaTitle: 'Ready to spend with a plan?',
		ctaBody: 'Free 30 minutes. We’ll say where budget should go, and where it shouldn’t.',
		ctaLabel: 'Book a media chat',
	},
	{
		slug: 'social-media',
		lane: 'growth',
		href: '/services/social-media',
		title: 'Social media',
		navLabel: 'Social media',
		seoTitle: 'Social Media Agency | Reels & Community | Orbitlee',
		seoDescription: 'Social media management from Orbitlee: strategy, Reels, community and social ads in your brand voice. Book a free 30-minute chat.',
		seoKeywords: 'social media agency, Instagram management, Reels, social ads, community management, Orbitlee',
		eyebrow: 'Organic · Community · Ads',
		headline: 'Social media that sounds like',
		headlineEm: 'you',
		lead: 'Strategy, posts, replies and social ads: consistent enough to grow, sharp enough to sell.',
		blurb: 'Calendars, Reels and community that feel like your brand.',
		img: '/Post 3.png',
		imgAlt: 'Social campaign still by Orbitlee',
		items: ['Strategy', 'Reels', 'Community', 'Social ads'],
		story: 'Social isn’t “30 posts, please.” We agree what you’re allowed to say, then we make it and stay in the comments. Organic and ads share one brief.',
		offerings: [
			{ id: 'social-strategy', title: 'Strategy', desc: 'Who you’re talking to, and what you’ll never post.' },
			{ id: 'content-production', title: 'Content', desc: 'Reels, carousels and stills that stay on-brand.' },
			{ id: 'community', title: 'Community', desc: 'Comments and DMs, in your voice.' },
			{ id: 'social-ads', title: 'Social ads', desc: 'Paid social with a real goal, not a boost button.' },
		],
		faqs: [
			{ q: 'Which platforms?', a: 'Instagram for most consumer brands. LinkedIn when the buyer is B2B. We won’t spread you thin.' },
			{ q: 'Can you just post?', a: 'We can, but we’ll still ask for a short strategy hour first.' },
		],
		ctaTitle: 'Want social that sells?',
		ctaBody: 'Send last month’s grid. We’ll say what to keep, cut and double down on.',
		ctaLabel: 'Book a social chat',
	},
	{
		slug: 'software-app-development',
		lane: 'build',
		href: '/services/software-app-development',
		title: 'Software & apps',
		navLabel: 'Software & apps',
		seoTitle: 'App & Software Development Agency | Orbitlee',
		seoDescription: 'iOS, Android and SaaS from Orbitlee. MVPs that launch, then improve each week, with marketing in the same team. Free 30-minute chat.',
		seoKeywords: 'app development agency, software development, iOS Android apps, SaaS MVP, Orbitlee',
		eyebrow: 'iOS · Android · SaaS',
		headline: 'Apps and software that',
		headlineEm: 'ship',
		lead: 'Apps, SaaS and MVPs: scoped tight, launched, then improved week by week.',
		blurb: 'iOS, Android and SaaS built to launch and keep moving.',
		img: '/1.jpg',
		imgAlt: 'Product and interface work by Orbitlee',
		items: ['iOS', 'Android', 'SaaS', 'MVP'],
		story: 'The app isn’t a six-month surprise after a brand film. We agree the first job it must do, then we ship that, and talk to marketing in the same week.',
		offerings: [
			{ id: 'mobile-apps', title: 'iOS & Android', desc: 'Apps ready for the store, with a release rhythm you can live with.' },
			{ id: 'saas', title: 'SaaS', desc: 'Accounts, roles and dashboards built to be sold, not just demoed.' },
			{ id: 'mvp', title: 'MVP', desc: 'The smallest version a real user can love. We’ll help you cut scope.' },
			{ id: 'product-ux', title: 'UI/UX', desc: 'Flows and screens before we lock them in code.' },
		],
		faqs: [
			{ q: 'Do you only build mobile?', a: 'No. Apps, SaaS and internal tools. If the web is a better first step, we’ll say so.' },
			{ q: 'How long for an MVP?', a: 'Simple tools can be weeks. A solid MVP is often 8 to 12 weeks. We will not guess a date without a scope.' },
		],
		ctaTitle: 'Have a product to get real?',
		ctaBody: 'We’ll sketch the smallest version worth shipping.',
		ctaLabel: 'Start a product chat',
	},
	{
		slug: 'web-development',
		lane: 'build',
		href: '/services/web-development',
		title: 'Web development',
		navLabel: 'Web development',
		seoTitle: 'Web Development Agency | Sites & Landings | Orbitlee',
		seoDescription: 'Websites and landing pages from Orbitlee. Fast sites that ship with your ads. Easy to update. Free 30-minute chat.',
		seoKeywords: 'web development agency, marketing website, landing pages, ecommerce site, Orbitlee',
		eyebrow: 'Sites · Landings · Shops',
		headline: 'Websites that load fast and',
		headlineEm: 'help',
		lead: 'Marketing sites, landing pages and shops: fast, clear, and easy for your team to update.',
		blurb: 'Websites and landing pages that ship with the campaign.',
		img: '/2.jpg',
		imgAlt: 'Web work by Orbitlee',
		items: ['Websites', 'Landings', 'E-commerce', 'Care'],
		story: 'A site here is a sales tool. It matches the ad that sent the click, works on a phone, and your team can change an offer without a ticket for every comma.',
		offerings: [
			{ id: 'marketing-sites', title: 'Marketing sites', desc: 'Home, work, services, contact: the pages sales actually sends.' },
			{ id: 'landing-pages', title: 'Landing pages', desc: 'One job per page, live when the ads go live.' },
			{ id: 'ecommerce', title: 'E-commerce', desc: 'Product pages and checkout that don’t fight your ads.' },
			{ id: 'care', title: 'Care', desc: 'Updates and small experiments after launch.' },
		],
		faqs: [
			{ q: 'How fast can a site go live?', a: 'A landing page can be days. A full site is usually a few weeks once copy and assets are ready.' },
			{ q: 'Do you use templates?', a: 'We use modern stacks, not a one-look-fits-all theme. For a short test, we keep it lean.' },
		],
		ctaTitle: 'Need a site that can take traffic?',
		ctaBody: 'Send the current URL and what it needs to support.',
		ctaLabel: 'Start a web chat',
	},
];

export const extraServices = [
	{
		href: '/services/branding-creative',
		title: 'Branding & Creative',
		blurb: 'Positioning, identity and production that stays consistent.',
		items: ['Strategy', 'Logo', 'Identity', 'Ads'],
		img: '/5.jpg',
	},
	{
		href: '/services/growth-consulting',
		title: 'Growth Consulting',
		blurb: 'A clear look before you spend. Then we can do the work.',
		items: ['Audit', 'GTM', 'Strategy'],
		img: '/9.jpg',
	},
];

export const services = [
	...servicePillars.map((p) => ({
		href: p.href,
		title: p.title,
		blurb: p.blurb,
		items: p.items,
		img: p.img,
	})),
	...extraServices,
];

export function getServicePillar(slug: string) {
	const found = servicePillars.find((p) => p.slug === slug);
	if (!found) throw new Error(`Unknown service pillar: ${slug}`);
	return found;
}
