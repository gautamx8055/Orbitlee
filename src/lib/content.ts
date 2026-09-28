export const featuredWork = [
	{ client: 'Somany', tag: 'Alaska Natural tile', img: '/SOMANY-STATIC-1.png', href: '/work/' },
	{ client: 'Somany', tag: 'Elysia hand shower', img: '/SOMANY-STATIC-2.png', href: '/work/' },
	{ client: 'Somany', tag: 'Bathware social still', img: '/SOMANY-STATIC-3.png', href: '/work/' },
	{ client: 'Somany', tag: 'Crystalo Black tile', img: '/SOMANY-STATIC-4.png', href: '/work/' },
	{ client: 'Gym poster', tag: 'Fitness ad', img: '/Gym-poster.jpg', href: '/work/' },
	{ client: 'Shoei', tag: 'Helmet campaign', img: '/Shoei-Helmet-poster.jpg', href: '/work/' },
	{ client: 'Aurix', tag: 'Smart sunglasses', img: '/Aurix.jpg', href: '/work/' },
	{ client: 'Aurix', tag: 'Style campaign', img: '/Aurix2.jpg', href: '/work/' },
	{ client: 'Nike', tag: 'Basketball ad', img: '/Post 1.png', href: '/work/' },
	{ client: 'Ant Esports', tag: 'Gaming chair ad', img: '/Post 2.png', href: '/work/' },
	{ client: 'Wildcraft', tag: 'Hiking boots ad', img: '/Post 3.png', href: '/work/' },
	{ client: 'Xiaomi', tag: 'TV campaign', img: '/Post 4.png', href: '/work/' },
	{ client: 'XGIMI', tag: 'Projector campaign', img: '/Post-5.png', href: '/work/' },
];

export const clientNames = [
	'Somany',
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
		seoDescription: 'Orbitlee is a digital marketing agency for SEO, content marketing and email. Same team as your ads and website. Free 30-minute chat.',
		seoKeywords: 'digital marketing agency, SEO agency, content marketing, email marketing, international SEO, Orbitlee',
		eyebrow: 'Search · Content · Email',
		headline: 'Digital marketing that stays',
		headlineEm: 'useful',
		lead: 'Hire Orbitlee as your digital marketing agency: SEO, content marketing and email so people find you, remember you, and come back.',
		blurb: 'SEO, content marketing and email that keep working after the campaign ends.',
		img: '/Post 1.png',
		imgAlt: 'Digital campaign creative by Orbitlee',
		items: ['SEO', 'Content', 'Email', 'Analytics'],
		story: 'We keep digital marketing simple: rank for what buyers search, publish content they can use, and follow up by email. Same crew as performance ads and web development, so the click and the page stay in one brief.',
		offerings: [
			{ id: 'seo', title: 'Search & SEO', desc: 'Pages and content for what your buyers actually search.', icon: 'search' },
			{ id: 'content-marketing', title: 'Content', desc: 'Guides and stories that help sales, not just the blog.', icon: 'file' },
			{ id: 'email-crm', title: 'Email', desc: 'Welcome notes and follow-ups based on what people did.', icon: 'mail' },
			{ id: 'analytics', title: 'Analytics', desc: 'A weekly view of what worked, in plain language.', icon: 'chart' },
			{ id: 'local-seo', title: 'Local & maps', desc: 'Show up where people nearby actually look.', icon: 'pin' },
			{ id: 'nurture', title: 'Nurture', desc: 'A sequence after the click, so the lead does not go cold.', icon: 'loop' },
		],
		faqs: [
			{ q: 'Is this the same as ads?', a: 'No. Ads sit under performance marketing. Digital marketing here is the always-on layer: SEO, content and email. Many clients hire both.' },
			{ q: 'Can you work with our in-house team?', a: 'Yes. We can own the SEO and content plan, or run the whole stack. You choose.' },
			{ q: 'Do you do SEO for sites that sell worldwide?', a: 'Yes. English-first pages, technical SEO, and content mapped to the queries your buyers actually type.' },
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
		seoDescription: 'Performance marketing agency for Meta ads, Google Ads and YouTube. Creative, tracking and a weekly ROAS report. Free 30-minute chat.',
		seoKeywords: 'performance marketing agency, Meta ads agency, Google Ads, YouTube ads, paid media, ROAS, Orbitlee',
		eyebrow: 'Meta · Google · YouTube',
		headline: 'Performance ads you can',
		headlineEm: 'explain',
		lead: 'Orbitlee is a performance marketing agency for Meta ads, Google Ads and YouTube: creative and media in the same week, with numbers you can share.',
		blurb: 'Meta ads, Google Ads and YouTube with creative, tracking and a clear weekly update.',
		img: '/SOMANY-STATIC-2.png',
		imgAlt: 'Paid creative by Orbitlee',
		items: ['Meta Ads', 'Google Ads', 'YouTube', 'Lead gen'],
		story: 'We don’t boost a post and hope. Performance marketing here means test offers, keep the pixel honest, and stop what is not earning. If the landing page is the leak, web development sits in the same week.',
		offerings: [
			{ id: 'meta-ads', title: 'Meta Ads', desc: 'Facebook and Instagram ads, with creative made for the feed.', icon: 'ads' },
			{ id: 'google-ads', title: 'Google Ads', desc: 'Search and demand when people are already looking.', icon: 'target' },
			{ id: 'lead-gen', title: 'Lead gen', desc: 'Forms and WhatsApp capture, judged on quality not volume.', icon: 'form' },
			{ id: 'reporting', title: 'Reporting', desc: 'What we spent, what you got, what we change next.', icon: 'report' },
			{ id: 'youtube-ads', title: 'YouTube', desc: 'Video ads when the story needs more than a still.', icon: 'play' },
			{ id: 'tracking', title: 'Tracking', desc: 'Pixels and events you can trust on Monday.', icon: 'pixel' },
		],
		faqs: [
			{ q: 'What budget do you need?', a: 'If spend is too small to learn, we’ll say so and suggest organic, SEO or a landing page first. On published paid accounts we report 2.7× average ROAS and $100K+ media run.' },
			{ q: 'Do you only run ads?', a: 'We can run Meta ads and Google Ads on their own. It works better when we also make the creative and the page.' },
			{ q: 'Can you run ads for brands outside India?', a: 'Yes. We run paid media for brands worldwide, in English, with weekly spend notes you can share.' },
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
		seoDescription: 'Social media agency for Instagram Reels, community and social ads. One voice in the feed and in paid. Book a free 30-minute chat.',
		seoKeywords: 'social media agency, Instagram management, Instagram Reels, social ads, community management, Orbitlee',
		eyebrow: 'Organic · Community · Ads',
		headline: 'Social media that sounds like',
		headlineEm: 'you',
		lead: 'Hire Orbitlee as a social media agency: strategy, Instagram Reels, replies and social ads, consistent enough to grow and sharp enough to sell.',
		blurb: 'Instagram calendars, Reels and community that feel like your brand.',
		img: '/Post 3.png',
		imgAlt: 'Social campaign still by Orbitlee',
		items: ['Strategy', 'Reels', 'Community', 'Social ads'],
		story: 'Social media management is not 30 random posts. We agree what you will say, then we make Reels and stills and stay in the comments. Organic and social ads share one brief with performance marketing.',
		offerings: [
			{ id: 'social-strategy', title: 'Strategy', desc: 'Who you’re talking to, and what you’ll never post.', icon: 'users' },
			{ id: 'content-production', title: 'Content', desc: 'Reels, carousels and stills that stay on-brand.', icon: 'camera' },
			{ id: 'community', title: 'Community', desc: 'Comments and DMs, in your voice.', icon: 'chat' },
			{ id: 'social-ads', title: 'Social ads', desc: 'Paid social with a real goal, not a boost button.', icon: 'boost' },
			{ id: 'calendar', title: 'Calendar', desc: 'A week you can actually ship, not 40 vague ideas.', icon: 'calendar' },
			{ id: 'reels', title: 'Reels', desc: 'Short film with a hook, not a slideshow with music.', icon: 'film' },
		],
		faqs: [
			{ q: 'Which platforms?', a: 'Instagram for most consumer brands. LinkedIn when the buyer is B2B. We will not spread a small team across six networks.' },
			{ q: 'Can you just post?', a: 'We can run Instagram management, but we still ask for a short strategy hour first.' },
			{ q: 'Do you make Reels and UGC?', a: 'Yes. Reels, AI UGC and social ads can come from the same Orbitlee brief as your Meta ads.' },
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
		seoTitle: 'App Development Agency | iOS, Android & SaaS | Orbitlee',
		seoDescription: 'App development and software development from Orbitlee: iOS, Android and SaaS MVPs, with marketing in the same team. Free 30-minute chat.',
		seoKeywords: 'app development agency, software development agency, iOS Android apps, SaaS MVP, Orbitlee',
		eyebrow: 'iOS · Android · SaaS',
		headline: 'Apps and software that',
		headlineEm: 'ship',
		lead: 'Orbitlee is an app development agency for iOS, Android and SaaS: scoped tight, launched, then improved week by week.',
		blurb: 'iOS, Android and SaaS MVPs built to launch and keep moving.',
		img: '/Shoei-Helmet-poster.jpg',
		imgAlt: 'Product and interface work by Orbitlee',
		items: ['iOS', 'Android', 'SaaS', 'MVP'],
		story: 'Software development here is not a six-month surprise after a brand film. We agree the first job the app must do, ship that MVP, and talk to the ads team in the same week.',
		offerings: [
			{ id: 'mobile-apps', title: 'iOS & Android', desc: 'Apps ready for the store, with a release rhythm you can live with.', icon: 'phone' },
			{ id: 'saas', title: 'SaaS', desc: 'Accounts, roles and dashboards built to be sold, not just demoed.', icon: 'cloud' },
			{ id: 'mvp', title: 'MVP', desc: 'The smallest version a real user can love. We’ll help you cut scope.', icon: 'cut' },
			{ id: 'product-ux', title: 'UI/UX', desc: 'Flows and screens before we lock them in code.', icon: 'layers' },
			{ id: 'apis', title: 'APIs', desc: 'The glue between the app, the ads, and the rest of the stack.', icon: 'code' },
			{ id: 'qa', title: 'QA & release', desc: 'Test, tag, ship. No mystery Friday deploys.', icon: 'test' },
		],
		faqs: [
			{ q: 'Do you only build mobile?', a: 'No. App development, SaaS and internal tools. If a marketing website is a better first step, we will say so.' },
			{ q: 'How long for an MVP?', a: 'Simple tools can be weeks. A solid MVP is often 8 to 12 weeks. We will not guess a date without a scope.' },
			{ q: 'Can a remote team ship our app?', a: 'Yes. We build remotely for clients worldwide, with weekly test builds you can tap, not a slide deck.' },
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
		seoTitle: 'Web Development Agency | Sites & Landing Pages | Orbitlee',
		seoDescription: 'Web development agency for marketing websites, landing pages and ecommerce. Fast sites that ship with your ads. Free 30-minute chat.',
		seoKeywords: 'web development agency, marketing website, landing pages, ecommerce website, Orbitlee',
		eyebrow: 'Sites · Landings · Shops',
		headline: 'Websites that load fast and',
		headlineEm: 'help',
		lead: 'Hire Orbitlee for web development: marketing websites, landing pages and shops that are fast, clear, and easy for your team to update.',
		blurb: 'Marketing websites and landing pages that ship with the campaign.',
		img: '/Aurix2.jpg',
		imgAlt: 'Web work by Orbitlee',
		items: ['Websites', 'Landings', 'E-commerce', 'Care'],
		story: 'A website here is a sales tool. Web development matches the Meta ad that sent the click, works on a phone, and your team can change an offer without a ticket for every comma.',
		offerings: [
			{ id: 'marketing-sites', title: 'Marketing sites', desc: 'Home, work, services, contact: the pages sales actually sends.', icon: 'globe' },
			{ id: 'landing-pages', title: 'Landing pages', desc: 'One job per page, live when the ads go live.', icon: 'layout' },
			{ id: 'ecommerce', title: 'E-commerce', desc: 'Product pages and checkout that don’t fight your ads.', icon: 'cart' },
			{ id: 'care', title: 'Care', desc: 'Updates and small experiments after launch.', icon: 'wrench' },
			{ id: 'speed', title: 'Speed', desc: 'Phone-first pages that don’t waste the click.', icon: 'zap' },
			{ id: 'cms', title: 'Easy edits', desc: 'Your team changes an offer without a ticket.', icon: 'edit' },
		],
		faqs: [
			{ q: 'How fast can a site go live?', a: 'A landing page can be days. A full marketing website is usually a few weeks once copy and assets are ready.' },
			{ q: 'Do you use templates?', a: 'We use modern stacks, not a one-look-fits-all theme. For a short ad test, we keep the landing page lean.' },
			{ q: 'Do landing pages ship with the ads?', a: 'Yes. That is the point of hiring a web development agency that also runs performance marketing.' },
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
		blurb: 'Brand strategy, logo, identity and ad creative that stays consistent.',
		items: ['Strategy', 'Logo', 'Identity', 'Ads'],
		img: '/Aurix.jpg',
	},
	{
		href: '/services/growth-consulting/',
		title: 'Growth Consulting',
		blurb: 'Growth consulting: audit, GTM and a 90-day map. Then we can run the work.',
		items: ['Audit', 'GTM', 'Strategy'],
		img: '/SOMANY-STATIC-1.png',
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
