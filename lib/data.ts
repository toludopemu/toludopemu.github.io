import { Service, CaseStudy, BlogPost, Metric, PressFeature, Experience, CommunityContribution } from "@/types";

export const profileData = {
    name: "Nofisat Tolu Dopemu",
    title: "SEO Strategist & Digital Innovator",
    location: "United Kingdom",
    email: "toludopemu@gmail.com",
    linkedin: "https://www.linkedin.com/in/toludopemu/",
    phone: "+447950953088",
    bio: "SEO STRATEGIST & DIGITAL INNOVATOR  with 4 years of experience across both agency and in-house environments. As a former founder, I prioritise business impact and customer value. I bridge the gap between complex search data and actionable growth strategies. My portfolio spans high-impact work for global brands such as Audi, Guardian, Johnnie Walker, Volkswagen and Post Office Limited.",
    philosophy: "I believe in data-driven growth that prioritises user value and business impact. SEO is not just about rankings; it's about solving problems and creating seamless digital journeys.",
};

export const metrics: Metric[] = [
    { label: "Organic Growth", value: "+300", suffix: "%" },
    { label: "Projects Delivered", value: "50", suffix: "+" },
    { label: "Industries Served", value: "10", suffix: "+" },
    { label: "Audience Reach", value: "9.3", suffix: "M+" },
];

export const services: Service[] = [
    {
        id: "technical-seo",
        title: "Technical SEO",
        description: "Ensuring your website is crawlable, indexable, and optimized for maximum visibility.",
        icon: "Settings",
        details: [
            "Site architecture optimization",
            "Core Web Vitals improvement",
            "Schema markup implementation",
            "Migration support",
        ],
    },
    {
        id: "content-strategy",
        title: "Content Strategy",
        description: "Building content clusters that drive traffic and protect product visibility.",
        icon: "FileText",
        details: [
            "Keyword research & gap analysis",
            "Topic clustering",
            "E-E-A-T optimization",
            "Content lifecycle management",
        ],
    },
    {
        id: "growth-marketing",
        title: "Growth Marketing",
        description: "Holistic strategies combining SEO with other digital channels for maximum impact.",
        icon: "TrendingUp",
        details: [
            "Cross-functional campaign management",
            "Conversion Rate Optimization (CRO)",
            "Digital PR & Link Building",
            "Data-driven reporting",
        ],
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Leveraging AI to streamline SEO workflows and uncover insights.",
        icon: "Cpu",
        details: [
            "AI-driven content generation workflows",
            "Automated SEO auditing",
            "Predictive search trends analysis",
            "Custom tool integration",
        ],
    },
];

export const caseStudies: CaseStudy[] = [
    {
        slug: "post-office-cruise-insurance",
        title: "Driving Cruise Insurance Visibility",
        client: "Post Office Limited",
        clientUrl: "https://www.postoffice.co.uk",
        industry: "Financial Services / Insurance",
        challenge: "Post Office's cruise insurance product page ranked for zero keywords. A new content initiative was needed — but without cannibalising the existing high-performing product page which drove direct conversions.",
        strategy: "Built a structured content cluster using a top-middle-bottom funnel approach. Informational content at the top captured awareness-stage queries, middle-funnel pages addressed comparison intent, and the product page was preserved for transactional queries via careful internal linking and canonical strategy.",
        tactics: [
            "Full keyword gap analysis vs. comparison sites (MoneySuperMarket, GoCompare)",
            "Funnel mapping: awareness → consideration → conversion queries",
            "Internal link architecture to pass authority without triggering cannibalisation",
            "E-E-A-T optimisation with expert author sections and trust signals",
            "Schema markup: FAQPage, BreadcrumbList, Article",
            "Google Search Console tracking with custom segmentation per cluster",
        ],
        results: [
            { label: "Keywords Ranking", value: "193" },
            { label: "Starting Keywords", value: "0" },
            { label: "Timeframe", value: "6 Months" },
            { label: "Cannibalisation Events", value: "0" },
        ],
        takeaways: [
            "Content clusters outperform standalone pages in competitive finance SERPs.",
            "Canonical and internal link strategy is as important as the content itself.",
            "Regular GSC monitoring is critical to catch cannibalisation early.",
        ],
        imageUrl: "/1768121933380.jpeg",
        tags: ["Content Strategy", "Technical SEO", "Financial Services"],
        color: "from-rose-500 to-purple-600",
    },
    {
        slug: "post-office-digital-pr",
        title: "Scaling Authority via Digital PR",
        client: "Post Office Limited",
        clientUrl: "https://www.postoffice.co.uk",
        industry: "Financial Services / Insurance",
        challenge: "Post Office's backlink profile was predominantly made up of low-value directory links. To rank for competitive insurance terms, a significant uplift in domain authority through earned media was required.",
        strategy: "Directed 7 data-led Digital PR campaigns over 6 months based on seasonal and social trends. Each campaign was designed to generate earned media in high-authority publications relevant to insurance and financial services.",
        tactics: [
            "Campaign ideation based on seasonal news cycles and social trend data",
            "Journalist research and bespoke pitch creation per publication type",
            "Coverage booking tracking with CoverageBook",
            "Backlink profile monitoring via Ahrefs pre/post campaign",
            "Competitor backlink gap analysis uncovering 260+ target publications",
            "Agency briefing and output QA for each campaign",
        ],
        results: [
            { label: "Audience Reach", value: "9.3M+" },
            { label: "Placements", value: "1,400+" },
            { label: "Campaigns", value: "7" },
            { label: "Target Publications Found", value: "260+" },
        ],
        takeaways: [
            "Seasonal timing dramatically increases coverage rates for consumer-facing brands.",
            "Data-led stories outperform opinion pieces for national media placements.",
            "A competitive backlink gap analysis is the most efficient way to build a quality target list.",
        ],
        imageUrl: "/toludopemu/6.png",
        tags: ["Digital PR", "Link Building", "Brand Authority"],
        color: "from-amber-400 to-rose-500",
    },
    {
        slug: "johnnie-walker-ticket-sales",
        title: "Boosting Ticket Sales via Intent SEO",
        client: "Johnnie Walker / Diageo",
        clientUrl: "https://www.phdmedia.com/",
        industry: "Retail & Premium Experience",
        challenge: "Johnnie Walker's Prince Street location needed to drive awareness and ticket sales through organic search. The brand's search presence was dominated by product pages rather than experience-led content.",
        strategy: "Conducted deep keyword research to identify purchase-intent and experience-led queries being missed. Developed content that met potential visitors at different stages of their search journey.",
        tactics: [
            "Comprehensive keyword research across experience, event, and gifting intent clusters",
            "Content gap analysis vs. competitive experience venues",
            "Location-specific landing page optimisation",
            "Internal linking from brand pages to experience pages",
            "Collaboration with PPC team to identify high-value terms for organic priority",
        ],
        results: [
            { label: "Ticket Sales", value: "+75%" },
            { label: "Content Gaps Addressed", value: "12+" },
        ],
        takeaways: [
            "Experience brands often underinvest in content relative to product pages.",
            "Cross-team SEO/PPC collaboration surfaces the highest-value keyword targets.",
            "Purchase-intent content delivers faster revenue impact than awareness content.",
        ],
        imageUrl: "/public/thumb1.jpg",
        tags: ["Retail", "Intent SEO", "Growth"],
        color: "from-rose-400 to-orange-400",
    },
    {
        slug: "guardian-jobs-content",
        title: "Optimizing Media Content for Intent",
        client: "Guardian UK / PHD Media",
        clientUrl: "https://www.phdmedia.com/",
        industry: "Media & Publishing",
        challenge: "Underperforming jobs content failing to capture intent-driven search demand. Intent mismatch and thin keyword coverage meant pages were poorly positioned despite the site's significant domain authority.",
        strategy: "Enhanced existing content with intent-focused, data-backed keywords and structural SEO. Improved internal linking to pass authority from the main site to jobs section.",
        tactics: [
            "Intent audit of all existing jobs content against real Google query data",
            "Keyword enrichment using SEMrush and GSC opportunity data",
            "H-tag restructuring for topic clarity and ranking signal clarity",
            "Internal link injection from high-traffic pages to jobs section",
            "Content freshness updates to trigger re-crawling",
        ],
        results: [
            { label: "Page Views", value: "+75%" },
            { label: "Benchmark", value: "3-Year Best" },
            { label: "SEO Investment", value: "+100%" },
        ],
        takeaways: [
            "Intent alignment on existing content can outperform producing net-new pages.",
            "High-DA sites often have untapped internal link equity that can be redistributed.",
            "Measuring results vs. prior-year benchmarks gives more accurate signal than MoM.",
        ],
        imageUrl: "/toludopemu/1.png",
        tags: ["Content SEO", "Media"],
        color: "from-amber-400 to-yellow-600",
    },
];

export const blogPosts: BlogPost[] = [
    {
        slug: "networking-for-introverts",
        title: "Networking for Introverts: It Doesn't Have to Be Draining",
        date: "2024-11-14",
        readTime: "4 min read",
        excerpt: "Lessons from Dale Carnegie and my own experience attending conferences as an introvert. Networking doesn't mean working the room.",
        content: `I’ve been reading **How to Win Friends & Influence People** by Dale Carnegie. 

One lesson that has stuck with me is that being genuine, truly listening, and seeing things from other people’s perspective is what actually builds meaningful connections. 

This comes to me naturally 🙂 and because I’m attending the Women in Tech SEO conference in London, I’m holding this reminder for myself. 

As an introvert, I’ve learned that networking doesn’t have to mean working the room or collecting as many contacts as possible. 

You don’t have to connect with everyone. A few intentional conversations can be enough to make it count.

And something I don’t think we talk about enough: checking in with yourself afterwards. 
How did the interaction make you feel? Energised? Drained? Seen?

That awareness matters just as much as the conversation itself.`,
        author: {
            name: "Nofisat Tolu Dopemu",
            image: "/1768121933380.jpeg",
        },
        tags: ["Networking", "Introversion", "Personal Growth"],
        color: "from-teal-500 to-emerald-500",
        linkedInUrl: "https://www.linkedin.com/posts/toludopemu_ive-been-reading-how-to-win-friends-influence-activity-7424866688451575810-sSbl",
    },
    {
        slug: "women-in-tech-seo-2024-recap",
        title: "WTS London 2024: Agentic AI, Storytelling, and Discovery",
        date: "2024-11-15",
        readTime: "3 min read",
        excerpt: "Key takeaways from the Women in Tech SEO conference in London, featuring insights on Agentic AI, data storytelling, and the future of search.",
        content: `What an amazing day it has been at the Women in Tech SEO conference in London! It was lovely meeting amazing people, learning, and leaving with so many lessons.

**Agentic AI & The Future**: The talks challenged my thinking about a world where AI search runs parallel to humans. We discussed generative LLMs, automation, and new ways to refine inconsistent AI output—especially for the "boring" stuff.

**Data & Communication**: I left thinking about how much better I can communicate data through storytelling. When presenting to stakeholders, I often find myself asking, "What’s the point?" to ensure every insight drives value.

**Measurement & Mistakes**: We explored the future of search and measurement, emphasizing the importance of embracing mistakes through a rigorous test-and-learn approach.`,
        author: {
            name: "Nofisat Tolu Dopemu",
            image: "/1768121933380.jpeg",
        },
        tags: ["SEO", "AI", "Conferences", "WTS"],
        color: "from-violet-500 to-purple-500",
        linkedInUrl: "https://www.linkedin.com/posts/toludopemu_what-an-amazing-day-it-has-been-women-in-activity-7425260932630589440-zWmp",
    },
    {
        slug: "the-reality-of-free-pr-ugc",
        title: "Why 'Free PR' Isn't Really Free: A Marketer's Take on UGC",
        date: "2024-12-05",
        readTime: "5 min read",
        excerpt: "Realizing that free PR is often a clever marketing persuasion technique. How UGC reviews boost brand visibility and trust signals.",
        content: `I used to think free PR was just a fun perk of being a creator until I realised what was really happening. I’ve been posting consistently on TikTok lately, and one thing I’ve learned from doing UGC is that when a brand reaches out for PR, it’s often not just about your community.

**The Persuasion Technique**: They offer you something for free, ask you to talk about it, and ultimately hope you’ll become a paying, loyal customer. And it worked—I spent over £35 on products all because of the initial item they sent me.

**Omnichannel Search**: We already know Google is indexing TikTok content. These UGC-style reviews aren't just "content"—they're powerful digital assets that boost brand visibility, trust signals, and user engagement. 

"Free PR" isn’t really free. It’s a well-crafted conversion strategy. The next time I receive a package, I’ll be thinking twice—not just as a creator, but as a marketer.`,
        author: {
            name: "Nofisat Tolu Dopemu",
            image: "/1768121933380.jpeg",
        },
        tags: ["UGC", "Digital PR", "TikTok SEO", "Marketing Strategy"],
        color: "from-pink-500 to-rose-500",
        linkedInUrl: "https://www.linkedin.com/posts/toludopemu_seo-seotip-ugc-activity-7388975375441211393-8Hp1",
    },
];

export const toolStack = [
    "Ahrefs", "SEMrush", "Google Search Console", "GA4", "Screaming Frog", "Sitebulb", "STAT", "Botify", "Jira", "Buzzsumo"
];

export const pressFeatures: PressFeature[] = [
    {
        id: "burnout-article",
        title: "How SEOs Are Managing Burnout",
        platform: "Search n Stuff",
        imageUrl: "/toludopemu/1.png",
        url: "https://searchnstuff.co.uk/blog/how-seos-are-managing-burnout/",
        type: "Article"
    },
    {
        id: "networking-article",
        title: "Networking as an Introvert",
        platform: "Moz",
        imageUrl: "/toludopemu/2.png",
        url: "https://moz.com/blog/networking-as-an-introvert",
        type: "Article"
    },
    {
        id: "wts-interview",
        title: "Interview with Nofisat Tolu Dopemu",
        platform: "Women in Tech SEO",
        imageUrl: "/toludopemu/3.png",
        url: "https://www.womenintechseo.com/interviews/nofisat-tolu-dopemu/",
        type: "Interview"
    },
    {
        id: "wts-newsletter",
        title: "WTS Newsletter Issue 50",
        platform: "Women in Tech SEO",
        imageUrl: "/toludopemu/4.png",
        url: "https://mailchi.mp/womenintechseo/wtsnewsletter-issue-50?e=876a27669d",
        type: "Interview"
    },
    {
        id: "apac-awards",
        title: "Judging Panels",
        platform: "APAC Search Awards",
        imageUrl: "/toludopemu/5.png",
        url: "https://apacsearchawards.com/judges/",
        type: "Award"
    },
    {
        id: "womens-aid",
        title: "Fundraising for Women's Aid",
        platform: "Enthuse",
        imageUrl: "/toludopemu/6.png",
        url: "https://womensaidfederationofengland.enthuse.com/pf/nofisat-dopemu",
        type: "Charity"
    },
    {
        id: "youtube-video",
        title: "Digital PR & SEO Insights",
        platform: "YouTube",
        imageUrl: "/toludopemu/7.png",
        url: "https://www.youtube.com/watch?v=o2SVDHKMSa4",
        type: "Video"
    },
    {
        id: "featured-image-8",
        title: "Industry Recognition",
        platform: "Featured",
        imageUrl: "/toludopemu/8.png",
        type: "Article"
    },
    {
        id: "moz-london-2025-1",
        title: "Moz London 2025 Highlights",
        platform: "Moz London",
        imageUrl: "/toludopemu/9.png",
        url: "https://moz.com",
        type: "Speaking"
    },
    {
        id: "moz-london-2025-2",
        title: "Industry Networking at Moz London",
        platform: "Moz London",
        imageUrl: "/toludopemu/10.png",
        url: "https://moz.com",
        type: "Speaking"
    },
    {
        id: "brighton-seo-2025-1",
        title: "BrightonSEO 2025 Sessions",
        platform: "BrightonSEO",
        imageUrl: "/toludopemu/11.png",
        url: "https://www.brightonseo.com",
        type: "Speaking"
    },
    {
        id: "brighton-seo-2025-2",
        title: "Expert Insights at BrightonSEO",
        platform: "BrightonSEO",
        imageUrl: "/toludopemu/12.png",
        url: "https://www.brightonseo.com",
        type: "Speaking"
    }
];

export const experience: Experience[] = [
    {
        role: "SEO & Content Manager",
        company: "Post Office Limited",
        period: "Mar 2025 – Present",
        location: "London / UK",
        url: "https://www.postoffice.co.uk/",
        responsibilities: "Leading overall SEO & Digital PR content strategy across insurance and financial services.",
        bullets: [
            "Built a top, middle and bottom content cluster for cruise insurance, increasing keyword visibility from 0 to 193 ranking keywords within 6 months while protecting the no 1 product page and avoiding cannibalisation.",
            "Directed agency relationships and delivered 7 digital PR campaigns over 6 months, securing 9.3M + audience reach and 1,400+ national and regional placements, significantly strengthening our backlink profile and supporting SEO performance for priority landing pages.",
            "Engineered a competitive backlink gap analysis to reverse-engineer rival acquisition tactics, uncovering a 260+ golden publication list to erode competitor search dominance systematically.",
        ],
        color: "bg-primary",
    },
    {
        role: "SEO Strategist",
        company: "NP Digital",
        period: "Nov 2024 – Jan 2025",
        location: "London / UK",
        url: "https://npdigital.com/uk/",
        clients: "Tiger recruitment, SKIM group, GFD Doors",
        responsibilities: "Overseeing client account management, SEO and content strategy of 3 client accounts.",
        bullets: [
            "Implemented a local SEO strategy, resulting in a 20% increase in sessions within 2 months",
            "Leveraged SEMrush to identify and exploit keyword opportunities, resulting in a 27% increase in organic traffic",
        ],
        color: "bg-violet-500",
    },
    {
        role: "SEO Senior Executive",
        company: "PHD Media",
        period: "Oct 2021 – Nov 2024",
        location: "London / UK",
        url: "https://www.phdmedia.com/",
        clients: "Johnnie Walker, Diageo, Guardian UK, McCain, Skoda, Audi",
        responsibilities: "I specialised in managing and growing multiple client accounts, performance, supporting holistic strategies and reporting.",
        bullets: [
            "Implemented strategic keyword analysis techniques, maintaining 96% click-through rates while paid search terms were paused.",
            "Led keyword research and content gap analysis for Johnnie Walker Prince Street, resulting in a 75% increase in ticket sales.",
            "Collaborated with the PPC team on a cross-functional campaign to absorb brand traffic, leading to a £5,000 savings in ad budget.",
            "Enhanced Guardian jobs' existing content with intent-focused and data-backed keywords, leading to 75% more page views than in the previous 3 years.",
            "Collaborated closely with the audio team to develop and produce a captivating radio ad for McCain's air fryer recipe page on Alexa, resulting in a 30% increase in page visits and engagement.",
            "Enhanced tracking of physical store traffic through the implementation of a local SEO strategy, resulting in a 40% increase in footfall to brick-and-mortar locations.",
            "Collaborated with cross-functional teams to ensure a seamless transition during the subdomain migration process, reducing downtime by 25% and minimising impact on user experience.",
            "Implemented a monthly reporting process on Audi for key stakeholders, including C-suite executives, which led to a 10% improvement in overall site visibility and a 5% increase in conversion rates.",
            "Implemented efficient project management techniques to streamline workflow processes, resulting in a 20% reduction in turnaround time for all deliverables.",
            "Led comprehensive analysis of Guardian UK website's market opportunity, identifying untapped customer segments and developing a targeted value proposition, resulting in a 100% increase in their SEO investment.",
            "Implemented data-driven link-building campaigns that increased high-quality backlinks by 50%, boosting domain authority and driving more targeted traffic to EV pages.",
        ],
        color: "bg-emerald-500",
    },
    {
        role: "Founder & Head of Product",
        company: "Travelotus Luxury Ltd",
        period: "May 2015 – Jan 2023",
        location: "Sheffield / UK",
        url: "#",
        responsibilities: "Founded and led an award-winning travel and experience brand. Curating tours, travel training and online courses within and outside Nigeria, accounting for over $500k in sales.",
        bullets: [
            "Winner: Destination Management Award (Africa), World Luxury Awards 2022.",
            "Managed a team of 4 and secured partnerships with Domino’s Pizza Nigeria and Coca-Cola Niger",
            "Created the Lotus Travel Summit, a roundtable for travel agents and travel providers to integrate and secure opportunities.",
            "Created the ‘jumpstart your side hustle’ series training over 300 individuals in various skills following the impact of COVID-19.",
        ],
        color: "bg-amber-500",
    },
];

export const communityContributions: CommunityContribution[] = [
    {
        id: "fcdc-mentoring",
        title: "BIPOC Talent Mentor",
        organization: "Freelance Coalition for Developing Countries (FCDC)",
        period: "Oct 2024 & 2025",
        url: "https://freelancecoalition.org/",
        type: "Mentoring",
        icon: "Users",
    },
    {
        id: "wts-contribution",
        title: "Active Member",
        organization: "Women in Tech SEO",
        period: "Ongoing",
        url: "https://www.womenintechseo.com/",
        type: "Community",
        icon: "Globe",
    },
];

