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
	slug: string;
	href: string;
	title: string;
	navLabel: string;
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
	approach: { title: string; body: string }[];
	faqs: { q: string; a: string }[];
	ctaTitle: string;
	ctaBody: string;
	ctaLabel: string;
};

export const servicePillars: ServicePillar[] = [
	{
		slug: 'digital-marketing',
		href: '/services/digital-marketing',
		title: 'Digital marketing',
		navLabel: 'Digital marketing',
		eyebrow: 'Search · Content · Lifecycle',
		headline: 'A digital system, not a pile of',
		headlineEm: 'posts',
		lead: 'SEO, content, email and analytics run as one loop — so every channel feeds the next instead of competing for budget.',
		blurb: 'SEO, content, email and measurement that compound instead of resetting every month.',
		img: '/Ads-try-1-F.jpg',
		imgAlt: 'Digital campaign creative by Orbitlee',
		items: ['SEO', 'Content', 'Email', 'Analytics', 'Amazon', 'Funnels'],
		story: 'Most brands in India still treat digital as a posting calendar plus a freelancer who “does SEO.” We treat it as infrastructure: how you get found, how you stay remembered, and how a stranger becomes a repeat buyer. The same pod that writes the landing page also instruments the pixel, the CRM tags and the weekly report — so you are not stitching three vendors together.',
		offerings: [
			{
				id: 'seo',
				title: 'Search & SEO',
				desc: 'Technical fixes, on-page architecture and content clusters aimed at the queries your buyers actually type — including the messy ones (Orbitly, Orbitli). We pair this with landing pages that deserve the click.',
			},
			{
				id: 'content-marketing',
				title: 'Content marketing',
				desc: 'Articles, guides and campaign stories written for search and for sales. Not a blog for the sake of a blog: each piece has a job — rank, nurture, or arm your team with proof.',
			},
			{
				id: 'email-crm',
				title: 'Email & CRM',
				desc: 'Welcome sequences, abandoned-intent flows and broadcasts that respect the list. We wire events from ads and the site so the next email is based on behaviour, not a guess.',
			},
			{
				id: 'analytics',
				title: 'Analytics & attribution',
				desc: 'GA4, pixels, UTMs and a reporting rhythm your founder can read. We define what “worked” before spend goes live, then hold creative and media to those numbers.',
			},
			{
				id: 'marketplace',
				title: 'Marketplace & Amazon creatives',
				desc: 'Listing imagery, A+ style assets and ads creative for marketplaces — the same discipline we use for Ortholite-style Amazon work, not leftover social crops.',
			},
			{
				id: 'funnels',
				title: 'Funnel & journey design',
				desc: 'From first impression to sales-ready lead: offers, lead magnets, thank-you paths and handoff to WhatsApp or your CRM. Built with the ads and web teams in the same sprint.',
			},
		],
		approach: [
			{
				title: 'One source of truth',
				body: 'Campaign names, UTMs and CRM stages are agreed before launch. If two tools disagree, we fix the plumbing — we do not pick the vanity number.',
			},
			{
				title: 'Content with a channel',
				body: 'Every asset is born knowing where it lives: search, email, organic or paid. That is how you avoid a hard drive of unused PDFs.',
			},
			{
				title: 'Weekly, not quarterly',
				body: 'Digital compounds when someone is looking. You get a weekly read on what moved, what stalled, and what we ship next.',
			},
		],
		faqs: [
			{
				q: 'Is digital marketing the same as running ads?',
				a: 'No. Ads sit under performance marketing. Digital marketing here is the always-on layer: search, content, email, analytics and journeys. Many retainers run both so paid traffic has somewhere intelligent to land.',
			},
			{
				q: 'Do you work with in-house teams?',
				a: 'Yes. We often own strategy and the messy integration (tracking, assets, reporting) while your team keeps day-to-day tools. Or we run the stack end to end.',
			},
		],
		ctaTitle: 'Need the digital layer to actually connect?',
		ctaBody: 'Bring the site, the ads account and the last three months of numbers. We will show you the gaps.',
		ctaLabel: 'Book a digital audit',
	},
	{
		slug: 'performance-marketing',
		href: '/services/performance-marketing',
		title: 'Performance marketing',
		navLabel: 'Performance marketing',
		eyebrow: 'Meta · Google · Pipeline',
		headline: 'Spend that you can',
		headlineEm: 'defend',
		lead: 'Meta, Google and YouTube bought against CAC, ROAS and pipeline — creative and media in the same weekly sprint, not a media buyer waiting on a designer.',
		blurb: 'Meta, Google and YouTube with creative, tracking and weekly optimisation in one pod.',
		img: '/8.jpg',
		imgAlt: 'Out-of-home and paid creative by Orbitlee',
		items: ['Meta Ads', 'Google Ads', 'YouTube', 'Lead gen', 'CRO', 'Reporting'],
		story: 'Performance is not “boost this post.” It is audience architecture, offer testing, pixel hygiene and creative that was made for the placement. We have managed ₹12Cr+ in media with the same operating rhythm: hypothesis, ship, read, kill or scale. If the landing page is slow or the lead form dumps into a spreadsheet nobody opens, that is our problem too — because we also ship web.',
		offerings: [
			{
				id: 'meta-ads',
				title: 'Meta Ads',
				desc: 'Facebook and Instagram prospecting, retargeting and catalog work. Creative is built for feed, stories and reels — including AI UGC variants when volume is the bottleneck.',
			},
			{
				id: 'google-ads',
				title: 'Google Ads',
				desc: 'Search, Performance Max, Display and demand-gen where intent already exists. Tight query mapping, negatives, and landing pages that match the keyword — not a homepage dump.',
			},
			{
				id: 'youtube',
				title: 'YouTube & video demand',
				desc: 'In-stream and in-feed that borrow from the films and UGC we already produce. Built to generate demand, not just cheap views.',
			},
			{
				id: 'lead-gen',
				title: 'Lead generation',
				desc: 'Instant forms, landing pages and WhatsApp capture with quality rules. We measure cost per qualified lead, not cost per random phone number.',
			},
			{
				id: 'cro',
				title: 'Conversion rate optimisation',
				desc: 'When media is fine and the page leaks: offer, proof, form friction, speed. Small page changes often beat another 20% of budget.',
			},
			{
				id: 'reporting',
				title: 'Media buying & reporting',
				desc: 'Budgets, bids and a founder-friendly weekly note: what we spent, what we got, what we are changing. No 40-tab dashboards you never open.',
			},
		],
		approach: [
			{
				title: 'Creative is a media lever',
				body: 'Most accounts are not under-budgeted; they are under-tested. We ship variants on a weekly cadence so the algorithm has something new that is still on-brand.',
			},
			{
				title: 'Track before you scale',
				body: 'Pixels, CAPI, enhanced conversions and a CRM stage beat vanity ROAS. We will slow a launch by a few days if the numbers would be fiction.',
			},
			{
				title: 'Kill fast',
				body: 'Losers die in days, not quarters. Winners get more budget and more creative children, not a victory slide.',
			},
		],
		faqs: [
			{
				q: 'What budgets do you work with?',
				a: 'We would rather be honest: if monthly media is too small to test, we will say so and point you at organic or a landing-page sprint first. When there is enough to learn, we run Meta, Google or both.',
			},
			{
				q: 'Do you only run ads?',
				a: 'We run ads as part of the same studio that makes the creative and the page. You can retain us for media only, but the compounding happens when those three sit together.',
			},
		],
		ctaTitle: 'Ready to spend with a thesis?',
		ctaBody: 'Free audit. We will tell you where the budget should go — and where it should stop.',
		ctaLabel: 'Book a media audit',
	},
	{
		slug: 'social-media',
		href: '/services/social-media',
		title: 'Social media management & marketing',
		navLabel: 'Social media',
		eyebrow: 'Organic · Community · Social ads',
		headline: 'A feed that behaves like a',
		headlineEm: 'channel',
		lead: 'Strategy, production, community and social ads for Instagram, LinkedIn and beyond — consistent enough to compound, sharp enough to sell.',
		blurb: 'Calendars, community, Reels and social ads that sound like the brand, not a template grid.',
		img: '/Post 3.png',
		imgAlt: 'Social campaign still by Orbitlee',
		items: ['Strategy', 'Reels', 'Community', 'LinkedIn', 'UGC', 'Social ads'],
		story: 'Social dies when it is outsourced as “please post 30 times.” We start from positioning: what this brand is allowed to say, who it is talking to, and which formats actually move that audience in India right now. Then we produce — carousels, Reels, UGC, stills — and we stay in the comments. When paid social is in the mix, organic and ads share a brief so the account does not look like two companies.',
		offerings: [
			{
				id: 'social-strategy',
				title: 'Social strategy & positioning',
				desc: 'Audience, pillars, tone and a 90-day narrative. We decide what you will never post, which is how a feed starts to look like a brand.',
			},
			{
				id: 'content-production',
				title: 'Content production',
				desc: 'Reels, carousels, stories and stills. Shot, designed or AI-assisted when volume needs it — always on-brand, never a random trend slap.',
			},
			{
				id: 'community',
				title: 'Community management',
				desc: 'Comments, DMs and the unglamorous reply work that turns reach into trust. Response windows and a voice guide so it does not sound like a bot.',
			},
			{
				id: 'organic-growth',
				title: 'Organic growth',
				desc: 'Instagram and LinkedIn growth that is not fake followers: collaborations, distribution, hooks and a posting rhythm you can sustain.',
			},
			{
				id: 'ugc-influencer',
				title: 'UGC & creator marketing',
				desc: 'AI UGC and real creators when the brief needs faces. Briefs, usage rights and cutdowns for organic and paid.',
			},
			{
				id: 'social-ads',
				title: 'Social advertising',
				desc: 'Boosting is not a strategy. We run social ads against the same creative system as organic, with proper pixels and a conversion event that matters.',
			},
		],
		approach: [
			{
				title: 'One brief for organic and paid',
				body: 'If the Reel and the ad disagree, the audience feels it. We plan both in the same weekly sprint.',
			},
			{
				title: 'Production you can actually ship',
				body: 'Calendars fail when they assume a film crew every week. We design a mix of studio, UGC and design that your reality can support.',
			},
			{
				title: 'Conversation is the product',
				body: 'We measure saves, replies and profile actions, not just impressions. A quiet comment section is a product bug.',
			},
		],
		faqs: [
			{
				q: 'Which platforms do you run?',
				a: 'Instagram is home for most of our consumer brands. LinkedIn when the buyer is B2B. YouTube and others when the content engine already exists. We will not spread you across six networks to look busy.',
			},
			{
				q: 'Can you just do posting?',
				a: 'We can, but we will still ask for a strategy hour. Posting without a point of view is how feeds go beige.',
			},
		],
		ctaTitle: 'Want a social presence that sells?',
		ctaBody: 'Send the last month of the grid. We will tell you what to keep, cut and double down on.',
		ctaLabel: 'Book a social audit',
	},
	{
		slug: 'software-app-development',
		href: '/services/software-app-development',
		title: 'Software & app development',
		navLabel: 'Software & apps',
		eyebrow: 'iOS · Android · SaaS',
		headline: 'Products that ship at',
		headlineEm: 'marketing speed',
		lead: 'MVPs, mobile apps and SaaS — scoped tight, instrumented from day one, and iterated in the same weekly cadence as your campaigns.',
		blurb: 'iOS, Android, SaaS and automation built to launch, learn and keep moving.',
		img: '/1.jpg',
		imgAlt: 'Product and interface work by Orbitlee',
		items: ['iOS', 'Android', 'SaaS', 'MVP', 'UI/UX', 'Automation'],
		story: 'We are a studio that also writes software, which means the app is not a six-month surprise at the end of a brand film. You get product thinking (who is this for, what is the first job-to-be-done), interface, engineering and the marketing site in one conversation. MVPs stay honest: auth, the core loop, analytics, a way to charge if you need it — then weekly releases instead of a mythical v2.',
		offerings: [
			{
				id: 'mobile-apps',
				title: 'iOS & Android apps',
				desc: 'Native or cross-platform depending on the brief. We care about store readiness, performance and a release train you can live with after launch.',
			},
			{
				id: 'saas',
				title: 'SaaS platforms',
				desc: 'Multi-tenant products with accounts, roles, billing-ready architecture and dashboards. Built to be sold, not just demoed.',
			},
			{
				id: 'mvp',
				title: 'MVP & product sprints',
				desc: 'The smallest thing a real user can love. We will argue to cut scope. That is the job. Twelve focused weeks beat a year of almost.',
			},
			{
				id: 'product-ux',
				title: 'Product UI/UX',
				desc: 'Flows, prototypes and UI systems before we concrete them in code. Especially when the buyer is not the user — common in B2B.',
			},
			{
				id: 'ai-automation',
				title: 'AI automation & internal tools',
				desc: 'Lead qualification, reporting, support assist, ops glue. We automate the boring path so your team spends time on the judgement path.',
			},
			{
				id: 'product-engineering',
				title: 'Ongoing product engineering',
				desc: 'Retainer sprints after launch: bugs, features, store updates. The same people who built it, not a fresh offshore ticket queue.',
			},
		],
		approach: [
			{
				title: 'Scope like a pessimist',
				body: 'We write down what v1 will not do. That list is how we hit dates.',
			},
			{
				title: 'Instrument on day one',
				body: 'Events, crashes, funnels. If you cannot see behaviour, you cannot product-manage.',
			},
			{
				title: 'Marketing sits in standup',
				body: 'When growth and product share a week, the paywall, the empty state and the ad all tell the same story.',
			},
		],
		faqs: [
			{
				q: 'Do you only build mobile apps?',
				a: 'No. Apps, SaaS, internal tools and AI workflows. If the right first surface is a web app, we will say so — see Web development.',
			},
			{
				q: 'How long to an MVP?',
				a: 'Simple tools can be weeks. A credible consumer or B2B MVP is often 8–12 weeks of focused build, assuming decisions are available. We will not invent a date without a scope.',
			},
		],
		ctaTitle: 'Have a product to get real?',
		ctaBody: 'We will sketch the smallest shippable version and the team it needs.',
		ctaLabel: 'Start a product sprint',
	},
	{
		slug: 'web-development',
		href: '/services/web-development',
		title: 'Web development',
		navLabel: 'Web development',
		eyebrow: 'Sites · Landings · Commerce',
		headline: 'Sites that load fast and',
		headlineEm: 'close',
		lead: 'Marketing sites, campaign landings, e-commerce and web apps — Core Web Vitals, SEO basics and a CMS your team can actually use.',
		blurb: 'Marketing sites, landing pages and web apps that ship in the same week as the campaign.',
		img: '/2.jpg',
		imgAlt: 'Web and marketplace creative by Orbitlee',
		items: ['Websites', 'Landings', 'E-commerce', 'Web apps', 'SEO', 'Care'],
		story: 'A website here is a sales asset, not a PDF of the brand guidelines. We build pages that match the ad that sent the click, that read well on a mid-range Android, and that a marketer can update without filing a ticket for every comma. When we also run your media, the landing page is in the sprint board next to the campaign — not in a separate agency’s backlog.',
		offerings: [
			{
				id: 'marketing-sites',
				title: 'Marketing websites',
				desc: 'Positioning-first sites: home, work, services, contact, the pages sales actually sends. Structured for SEO, designed for this studio’s standard of craft, not a leftover theme.',
			},
			{
				id: 'landing-pages',
				title: 'Landing pages',
				desc: 'Single-purpose pages for a campaign, offer or lead magnet. Live on the same calendar as ads. Variants when we are testing hooks.',
			},
			{
				id: 'ecommerce',
				title: 'E-commerce',
				desc: 'Storefronts and product storytelling — imagery, PDPs and checkout paths that do not fight the media you are buying.',
			},
			{
				id: 'web-apps',
				title: 'Web applications',
				desc: 'Logged-in tools, dashboards and customer portals when the browser is the right container. If it needs a store listing, we will push you to the apps practice.',
			},
			{
				id: 'technical-seo',
				title: 'Performance & technical SEO',
				desc: 'Core Web Vitals, metadata, sitemap hygiene, schema. Speed is a ranking and a conversion feature. We treat it as such.',
			},
			{
				id: 'care',
				title: 'Care & iteration',
				desc: 'Hosting, updates, small experiments, new sections. A site that never changes is a site that is slowly dying.',
			},
		],
		approach: [
			{
				title: 'Content before chrome',
				body: 'We write and structure first, then dress it. Pretty emptiness still bounces.',
			},
			{
				title: 'Ship with the campaign',
				body: 'If ads go live Thursday, the page is not “next sprint.” That is the whole point of one studio.',
			},
			{
				title: 'Editable by humans',
				body: 'Your team should be able to change an offer without breaking the layout. We design for that, or we stay on call.',
			},
		],
		faqs: [
			{
				q: 'How fast can a site go live?',
				a: 'A campaign landing can be days to two weeks. A full marketing site is typically a few weeks once copy and assets exist. Migrations and e-commerce take longer — we will scope honestly.',
			},
			{
				q: 'Do you use templates?',
				a: 'We use modern stacks, not a one-theme-fits-all look. If a client needs something disposable for a 10-day test, we will say so and keep it lean.',
			},
		],
		ctaTitle: 'Need a site that can take traffic?',
		ctaBody: 'Send the current URL and the campaign it needs to support.',
		ctaLabel: 'Start a web project',
	},
];

export const extraServices = [
	{
		href: '/services/branding-creative',
		title: 'Branding & Creative',
		blurb: 'Positioning, identity and production built to stop the scroll and stay consistent.',
		items: ['Strategy', 'Logo', 'Identity', 'AI UGC', 'Ads', 'Photography'],
		img: '/5.jpg',
	},
	{
		href: '/services/growth-consulting',
		title: 'Growth Consulting',
		blurb: 'Audits and roadmaps before you spend. Then the same team can execute.',
		items: ['Growth audit', 'Brand audit', 'GTM', 'Strategy'],
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
