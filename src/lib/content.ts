export const featuredWork = [
	{ client: '8Ease x Ortholite', tag: 'Cricket Pro pack', img: '/1.jpg', href: '/work/' },
	{ client: '8Ease', tag: 'Wet-foot guide', img: '/7.jpg', href: '/work/' },
	{ client: '8Ease', tag: 'Support insole ad', img: '/8.jpg', href: '/work/' },
	{ client: '8Ease', tag: 'Match-ready still', img: '/9.jpg', href: '/work/' },
	{ client: 'Aurix', tag: 'Smart sunglasses', img: '/Aurix.jpg', href: '/work/' },
	{ client: 'Aurix', tag: 'Style campaign', img: '/Aurix2.jpg', href: '/work/' },
	{ client: 'Nike', tag: 'Basketball ad', img: '/Post 1.png', href: '/work/' },
	{ client: 'Ant Esports', tag: 'Gaming chair ad', img: '/Post 2.png', href: '/work/' },
	{ client: 'Wildcraft', tag: 'Hiking boots ad', img: '/Post 3.png', href: '/work/' },
	{ client: 'Xiaomi', tag: 'TV campaign', img: '/Post 4.png', href: '/work/' },
	{ client: 'XGIMI', tag: 'Projector campaign', img: '/Post-5.png', href: '/work/' },
];

export const clientNames = [
	'Windsouls',
	'8Ease x Ortholite',
	'TMproduction',
	'Green Elixir',
	'Mantra Herbal',
	'Dibs Cafe',
	'Akki Mens Wear',
	'Prime Figurz',
	'All set events',
];

export const testimonials = [
	{ brand: 'TMproduction', person: 'Tatsam Malhotra', quote: 'The stills and the film finally came from the same brief.' },
	{ brand: '8Ease', person: 'Gaurav Bajargyan', quote: 'One team for the ads and the assets. That was the point.' },
	{ brand: 'Dibs Cafe', person: 'Shivang Singhal', quote: 'The feed looks like the cafe. Guests notice.' },
	{ brand: 'Mantra Herbal', person: 'Vedika Sharma Sethi', quote: 'Ads and the page said the same thing for once.' },
	{ brand: 'Prime Figurz', person: 'Anubhav Dubey', quote: 'Thumbnails that earn the click without looking cheap.' },
	{ brand: 'All set events', person: 'Shivam Singh', quote: 'Invite to ads, same look. No second designer.' },
];

export type ServiceOffering = {
	id: string;
	title: string;
	desc: string;
	icon: string;
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
	week: { t: string; d: string }[];
	fit: { t: string; d: string }[];
	weekly: { t: string; d: string }[];
};

export const servicePillars: ServicePillar[] = [
	{
		slug: 'digital-marketing',
		lane: 'growth',
		href: '/services/digital-marketing/',
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
		img: '/Post 1.png',
		imgAlt: 'Digital campaign creative by Orbitlee',
		items: ['SEO', 'Content', 'Email', 'Analytics'],
		story: 'We keep digital simple: show up in search, say something clear, and follow up with care. Same team as your ads and website, so nothing gets lost.',
		offerings: [
			{ id: 'seo', title: 'Search & SEO', desc: 'Pages and content for what your buyers actually search.', icon: 'search' },
			{ id: 'content-marketing', title: 'Content', desc: 'Guides and stories that help sales, not just the blog.', icon: 'file' },
			{ id: 'email-crm', title: 'Email', desc: 'Welcome notes and follow-ups based on what people did.', icon: 'mail' },
			{ id: 'analytics', title: 'Analytics', desc: 'A weekly view of what worked, in plain language.', icon: 'chart' },
			{ id: 'local-seo', title: 'Local & maps', desc: 'Show up where people nearby actually look.', icon: 'pin' },
			{ id: 'nurture', title: 'Nurture', desc: 'A sequence after the click, so the lead does not go cold.', icon: 'loop' },
		],
		faqs: [
			{ q: 'Is this the same as ads?', a: 'No. Ads sit under performance. This is the always-on layer: search, content and email. Many clients do both.' },
			{ q: 'Can you work with our in-house team?', a: 'Yes. We can own the plan, or run the whole stack. You choose.' },
		],
		ctaTitle: 'Want digital that actually connects?',
		ctaBody: 'Bring the site and last few months of numbers. We’ll keep it practical.',
		ctaLabel: 'Book a digital chat',
		week: [
			{ t: 'Listen', d: 'Search terms, emails, and the pages people bounce from.' },
			{ t: 'Map', d: 'What to rank for, what to write, what to send.' },
			{ t: 'Ship', d: 'Pages and notes that sales can actually use.' },
			{ t: 'Tune', d: 'What moved. What we skip next week.' },
		],
		fit: [
			{ t: 'Ads work, then die', d: 'You need search, content and email after the click.' },
			{ t: 'The site is invisible', d: 'Buyers search. You don’t show up.' },
			{ t: 'Email is a ghost', d: 'You have a list. Nothing useful goes out.' },
		],
		weekly: [
			{ t: 'Search notes', d: 'Queries, pages, and one fix worth doing.' },
			{ t: 'One useful piece', d: 'A page or story, not filler.' },
			{ t: 'A real send', d: 'Email tied to what people did.' },
		],
	},
	{
		slug: 'performance-marketing',
		lane: 'growth',
		href: '/services/performance-marketing/',
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
			{ id: 'meta-ads', title: 'Meta Ads', desc: 'Facebook and Instagram ads, with creative made for the feed.', icon: 'ads' },
			{ id: 'google-ads', title: 'Google Ads', desc: 'Search and demand when people are already looking.', icon: 'target' },
			{ id: 'lead-gen', title: 'Lead gen', desc: 'Forms and WhatsApp capture, judged on quality not volume.', icon: 'form' },
			{ id: 'reporting', title: 'Reporting', desc: 'What we spent, what you got, what we change next.', icon: 'report' },
			{ id: 'youtube-ads', title: 'YouTube', desc: 'Video ads when the story needs more than a still.', icon: 'play' },
			{ id: 'tracking', title: 'Tracking', desc: 'Pixels and events you can trust on Monday.', icon: 'pixel' },
		],
		faqs: [
			{ q: 'What budget do you need?', a: 'If spend is too small to learn, we’ll say so and suggest organic or a landing page first.' },
			{ q: 'Do you only run ads?', a: 'We can. It works better when we also make the creative and the page.' },
		],
		ctaTitle: 'Ready to spend with a plan?',
		ctaBody: 'Free 30 minutes. We’ll say where budget should go, and where it shouldn’t.',
		ctaLabel: 'Book a media chat',
		week: [
			{ t: 'Audit', d: 'Account, pixel, page. What’s lying to you.' },
			{ t: 'Test', d: 'Three offers. Creative made for the feed.' },
			{ t: 'Cut', d: 'Kill what didn’t earn the next dollar.' },
			{ t: 'Report', d: 'Monday numbers. Friday change.' },
		],
		fit: [
			{ t: 'Ready to spend', d: 'If the budget can’t learn, we’ll say so first.' },
			{ t: 'You have a page', d: 'Or we’ll build the landing with the ads.' },
			{ t: 'You want receipts', d: 'Spend, result, next test. No fog.' },
		],
		weekly: [
			{ t: 'Creative pack', d: 'New ads, not a resized banner.' },
			{ t: 'Spend note', d: 'What we bought and what it returned.' },
			{ t: 'Next tests', d: 'What we try. What we leave alone.' },
		],
	},
	{
		slug: 'social-media',
		lane: 'growth',
		href: '/services/social-media/',
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
			{ id: 'social-strategy', title: 'Strategy', desc: 'Who you’re talking to, and what you’ll never post.', icon: 'users' },
			{ id: 'content-production', title: 'Content', desc: 'Reels, carousels and stills that stay on-brand.', icon: 'camera' },
			{ id: 'community', title: 'Community', desc: 'Comments and DMs, in your voice.', icon: 'chat' },
			{ id: 'social-ads', title: 'Social ads', desc: 'Paid social with a real goal, not a boost button.', icon: 'boost' },
			{ id: 'calendar', title: 'Calendar', desc: 'A week you can actually ship, not 40 vague ideas.', icon: 'calendar' },
			{ id: 'reels', title: 'Reels', desc: 'Short film with a hook, not a slideshow with music.', icon: 'film' },
		],
		faqs: [
			{ q: 'Which platforms?', a: 'Instagram for most consumer brands. LinkedIn when the buyer is B2B. We won’t spread you thin.' },
			{ q: 'Can you just post?', a: 'We can, but we’ll still ask for a short strategy hour first.' },
		],
		ctaTitle: 'Want social that sells?',
		ctaBody: 'Send last month’s grid. We’ll say what to keep, cut and double down on.',
		ctaLabel: 'Book a social chat',
		week: [
			{ t: 'Voice', d: 'What you’re allowed to say. What you never post.' },
			{ t: 'Plan', d: 'A calendar that can survive a real week.' },
			{ t: 'Make', d: 'Reels and stills in your look, not a template pack.' },
			{ t: 'Stay', d: 'Comments, DMs, and the ads that use the same brief.' },
		],
		fit: [
			{ t: 'The feed looks random', d: 'Every post feels like a different brand.' },
			{ t: 'You need Reels', d: 'Still photos aren’t carrying the account.' },
			{ t: 'Organic and ads split', d: 'One brief. Two jobs.' },
		],
		weekly: [
			{ t: 'The grid', d: 'What went live. Why it exists.' },
			{ t: 'Replies', d: 'What people asked. How we answered.' },
			{ t: 'Social ads', d: 'Paid posts with a goal, not a boost.' },
		],
	},
	{
		slug: 'software-app-development',
		lane: 'build',
		href: '/services/software-app-development/',
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
			{ id: 'mobile-apps', title: 'iOS & Android', desc: 'Apps ready for the store, with a release rhythm you can live with.', icon: 'phone' },
			{ id: 'saas', title: 'SaaS', desc: 'Accounts, roles and dashboards built to be sold, not just demoed.', icon: 'cloud' },
			{ id: 'mvp', title: 'MVP', desc: 'The smallest version a real user can love. We’ll help you cut scope.', icon: 'cut' },
			{ id: 'product-ux', title: 'UI/UX', desc: 'Flows and screens before we lock them in code.', icon: 'layers' },
			{ id: 'apis', title: 'APIs', desc: 'The glue between the app, the ads, and the rest of the stack.', icon: 'code' },
			{ id: 'qa', title: 'QA & release', desc: 'Test, tag, ship. No mystery Friday deploys.', icon: 'test' },
		],
		faqs: [
			{ q: 'Do you only build mobile?', a: 'No. Apps, SaaS and internal tools. If the web is a better first step, we’ll say so.' },
			{ q: 'How long for an MVP?', a: 'Simple tools can be weeks. A solid MVP is often 8 to 12 weeks. We will not guess a date without a scope.' },
		],
		ctaTitle: 'Have a product to get real?',
		ctaBody: 'We’ll sketch the smallest version worth shipping.',
		ctaLabel: 'Start a product chat',
		week: [
			{ t: 'Job', d: 'The one thing the first version must do.' },
			{ t: 'Flows', d: 'Screens before we lock them in code.' },
			{ t: 'Build', d: 'iOS, Android or SaaS. Cut the rest.' },
			{ t: 'Ship', d: 'A build you can tap. Ads in the same week if you want.' },
		],
		fit: [
			{ t: 'You have a job, not a novel', d: 'We won’t start a 12-month spec.' },
			{ t: 'You need it in stores', d: 'iOS and Android with a release rhythm.' },
			{ t: 'Marketing sits next door', d: 'The hook and the product leave together.' },
		],
		weekly: [
			{ t: 'Build notes', d: 'What landed. What’s blocked.' },
			{ t: 'A test build', d: 'Something you can open, not a slide.' },
			{ t: 'The hook', d: 'How ads will talk about this version.' },
		],
	},
	{
		slug: 'web-development',
		lane: 'build',
		href: '/services/web-development/',
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
		img: '/Aurix2.jpg',
		imgAlt: 'Web work by Orbitlee',
		items: ['Websites', 'Landings', 'E-commerce', 'Care'],
		story: 'A site here is a sales tool. It matches the ad that sent the click, works on a phone, and your team can change an offer without a ticket for every comma.',
		offerings: [
			{ id: 'marketing-sites', title: 'Marketing sites', desc: 'Home, work, services, contact: the pages sales actually sends.', icon: 'globe' },
			{ id: 'landing-pages', title: 'Landing pages', desc: 'One job per page, live when the ads go live.', icon: 'layout' },
			{ id: 'ecommerce', title: 'E-commerce', desc: 'Product pages and checkout that don’t fight your ads.', icon: 'cart' },
			{ id: 'care', title: 'Care', desc: 'Updates and small experiments after launch.', icon: 'wrench' },
			{ id: 'speed', title: 'Speed', desc: 'Phone-first pages that don’t waste the click.', icon: 'zap' },
			{ id: 'cms', title: 'Easy edits', desc: 'Your team changes an offer without a ticket.', icon: 'edit' },
		],
		faqs: [
			{ q: 'How fast can a site go live?', a: 'A landing page can be days. A full site is usually a few weeks once copy and assets are ready.' },
			{ q: 'Do you use templates?', a: 'We use modern stacks, not a one-look-fits-all theme. For a short test, we keep it lean.' },
		],
		ctaTitle: 'Need a site that can take traffic?',
		ctaBody: 'Send the current URL and what it needs to support.',
		ctaLabel: 'Start a web chat',
		week: [
			{ t: 'Map', d: 'The pages sales actually sends people to.' },
			{ t: 'Write', d: 'Copy and layout that match the ad.' },
			{ t: 'Ship', d: 'Live when the campaign is live.' },
			{ t: 'Care', d: 'Your team can change an offer without a ticket.' },
		],
		fit: [
			{ t: 'Ads hit a dead page', d: 'Clicks land. Nobody converts.' },
			{ t: 'It’s slow or stuck', d: 'You can’t edit a headline without a developer.' },
			{ t: 'You need a shop', d: 'Product pages that don’t fight the ads.' },
		],
		weekly: [
			{ t: 'A live URL', d: 'Something to click, not a Figma dump.' },
			{ t: 'Speed check', d: 'Phone first. No mystery lag.' },
			{ t: 'An edit', d: 'Offer, price, or proof. Same week.' },
		],
	},
];

export const extraServices = [
	{
		href: '/services/branding-creative/',
		title: 'Branding & Creative',
		blurb: 'Positioning, identity and production that stays consistent.',
		items: ['Strategy', 'Logo', 'Identity', 'Ads'],
		img: '/Aurix.jpg',
	},
	{
		href: '/services/growth-consulting/',
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
