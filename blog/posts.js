export const posts = [

  // ── 💰 Finance (8) ─────────────────────────────────────────────────────

  {
    title: "How to Calculate Your Monthly Mortgage Payment (With Formula and Examples)",
    slug: "how-to-calculate-mortgage-payments",
    description: "Learn the mortgage payment formula, work through real examples at different rates and terms, and understand amortization, PMI, and extra payments.",
    category: "Guides",
    tags: ["mortgage", "finance", "calculator", "home buying"],
    date: "2025-06-15",
    readTime: "9 min read",
    featured: true,
    relatedTools: ["mortgage-calculator", "loan-payoff-calculator", "compound-interest-calculator"]
  },
  {
    title: "Compound Interest Explained: How Your Money Grows (And How to Calculate It)",
    slug: "compound-interest-explained",
    description: "Understand compound vs simple interest, the Rule of 72, and see exactly how $10K grows over 10, 20, and 30 years with real examples and formulas.",
    category: "Guides",
    tags: ["compound interest", "investing", "savings", "finance"],
    date: "2025-06-20",
    readTime: "8 min read",
    featured: true,
    relatedTools: ["compound-interest-calculator", "investment-return-calculator", "savings-goal-calculator"]
  },
  {
    title: "How to Pay Off Credit Card Debt: Avalanche vs Snowball Method (With Calculator)",
    slug: "credit-card-debt-payoff-strategies",
    description: "Compare the avalanche and snowball debt payoff methods with real numbers. See how much each saves you and pick the right strategy for your situation.",
    category: "Guides",
    tags: ["credit card", "debt", "payoff", "finance"],
    date: "2025-07-01",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["credit-card-payoff-calculator", "loan-payoff-calculator", "roi-calculator"]
  },
  {
    title: "Salary vs Hourly Pay: How to Compare (And What You Actually Take Home)",
    slug: "salary-vs-hourly-which-is-better",
    description: "Learn how to convert hourly to annual salary, factor in overtime and benefits, and figure out which pay structure actually puts more money in your pocket.",
    category: "Comparisons",
    tags: ["salary", "hourly", "employment", "income"],
    date: "2025-07-10",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["hourly-to-salary-calculator", "tip-calculator", "profit-margin-calculator"]
  },
  {
    title: "ROI Explained: How to Calculate Return on Investment (Simple Guide)",
    slug: "understanding-roi-for-beginners",
    description: "Master the ROI formula, understand annualized returns (CAGR), and learn when ROI is misleading. Real examples from real estate, stocks, and business.",
    category: "Guides",
    tags: ["ROI", "investing", "business", "finance"],
    date: "2025-07-18",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["roi-calculator", "investment-return-calculator", "percentage-calculator"]
  },
  {
    title: "How Much Should Your Emergency Fund Be? (Calculate Your Number)",
    slug: "emergency-fund-how-much",
    description: "Calculate your personal emergency fund target based on your monthly expenses. Plus a step-by-step plan to build it from zero starting at $50 per week.",
    category: "Tips",
    tags: ["emergency fund", "savings", "budgeting", "finance"],
    date: "2025-07-25",
    readTime: "6 min read",
    featured: false,
    relatedTools: ["savings-goal-calculator", "compound-interest-calculator", "inflation-calculator"]
  },
  {
    title: "Rent vs Buy a Home in 2025: The Math Behind the Decision",
    slug: "rent-vs-buy-home-2025",
    description: "A no-nonsense financial comparison of renting vs buying a home. See the break-even calculation, price-to-rent ratio, and scenarios where each option wins.",
    category: "Comparisons",
    tags: ["rent", "buy", "home", "real estate", "finance"],
    date: "2025-08-01",
    readTime: "9 min read",
    featured: true,
    relatedTools: ["rent-vs-buy-calculator", "mortgage-calculator", "investment-return-calculator"]
  },
  {
    title: "What Is Inflation and How Does It Affect Your Money? (With Historical Data)",
    slug: "what-is-inflation-how-it-affects-you",
    description: "Understand what inflation is, how CPI works, and see how purchasing power has changed since 1970. Learn practical strategies to protect your savings.",
    category: "Guides",
    tags: ["inflation", "CPI", "purchasing power", "finance"],
    date: "2025-08-10",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["inflation-calculator", "compound-interest-calculator", "savings-goal-calculator"]
  },

  // ── 💻 Developer (5) ───────────────────────────────────────────────────

  {
    title: "JSON Formatting Best Practices: How to Write Clean, Readable JSON",
    slug: "json-formatting-best-practices",
    description: "Avoid common JSON mistakes, learn when to minify vs pretty-print, and follow naming conventions that make your APIs consistent and debuggable.",
    category: "Tips",
    tags: ["JSON", "formatting", "API", "developer"],
    date: "2025-08-18",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["json-formatter", "diff-checker", "base64-encoder-decoder"]
  },
  {
    title: "Regex Cheat Sheet: The Most Useful Regular Expressions (With Examples)",
    slug: "regex-cheat-sheet",
    description: "A practical regex reference with 20+ ready-to-use patterns for emails, URLs, dates, IPs, and more. Each pattern explained piece by piece with examples.",
    category: "How-To",
    tags: ["regex", "regular expressions", "developer", "reference"],
    date: "2025-08-25",
    readTime: "10 min read",
    featured: true,
    relatedTools: ["regex-tester", "hash-generator", "text-case-converter"]
  },
  {
    title: "JWT Tokens Explained: What They Are, How They Work, and How to Decode Them",
    slug: "jwt-tokens-explained",
    description: "Understand the three parts of a JWT, how the auth flow works, common security mistakes to avoid, and when to use JWTs vs session cookies.",
    category: "Guides",
    tags: ["JWT", "authentication", "tokens", "developer"],
    date: "2025-09-02",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["jwt-decoder", "base64-encoder-decoder", "hash-generator"]
  },
  {
    title: "Cron Expressions Explained: How to Schedule Tasks (Complete Guide With Examples)",
    slug: "cron-expressions-guide",
    description: "Learn the 5-field cron format, master special characters, and see 15 common cron expressions explained in plain English with scheduling examples.",
    category: "How-To",
    tags: ["cron", "scheduling", "linux", "developer"],
    date: "2025-09-10",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["cron-expression-parser", "timestamp-converter", "date-difference-calculator"]
  },
  {
    title: "SQL Formatting Guide: How to Write Clean, Maintainable SQL Queries",
    slug: "sql-formatting-style-guide",
    description: "Write SQL that's easy to read, debug, and review. Covers keyword casing, JOIN indentation, CTEs vs subqueries, and common anti-patterns to avoid.",
    category: "Tips",
    tags: ["SQL", "formatting", "database", "developer"],
    date: "2025-09-18",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["sql-formatter", "diff-checker", "text-case-converter"]
  },

  // ── ❤️ Health (4) ──────────────────────────────────────────────────────

  {
    title: "How to Calculate BMI: Formula, Categories, and What It Actually Means",
    slug: "how-to-calculate-bmi",
    description: "Learn the BMI formula for metric and imperial units, understand the category ranges, and know when BMI is useful versus misleading for your health.",
    category: "Guides",
    tags: ["BMI", "health", "weight", "fitness"],
    date: "2025-09-25",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["bmi-calculator", "body-fat-calculator", "ideal-weight-calculator"]
  },
  {
    title: "How to Calculate Your TDEE and Daily Calorie Needs (Step by Step)",
    slug: "tdee-calorie-calculator-guide",
    description: "Calculate your BMR with the Mifflin-St Jeor formula, apply activity multipliers, and find your TDEE for weight loss, maintenance, or muscle gain.",
    category: "Guides",
    tags: ["TDEE", "calories", "diet", "fitness"],
    date: "2025-10-02",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["calorie-calculator", "macro-calculator", "bmi-calculator"]
  },
  {
    title: "Macros Explained: How Much Protein, Carbs, and Fat Do You Actually Need?",
    slug: "macros-explained-protein-carbs-fat",
    description: "Understand macronutrients, how many grams of protein, carbs, and fat you need daily, and how to calculate your personal macro split from your TDEE.",
    category: "Guides",
    tags: ["macros", "nutrition", "diet", "fitness"],
    date: "2025-10-10",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["macro-calculator", "calorie-calculator", "percentage-calculator"]
  },
  {
    title: "How Is Your Pregnancy Due Date Calculated? (Methods and Accuracy)",
    slug: "pregnancy-due-date-how-calculated",
    description: "Learn how due dates are calculated using Naegele's rule, conception dating, and ultrasound. Understand why only 4% of babies arrive on the exact date.",
    category: "Guides",
    tags: ["pregnancy", "due date", "health", "prenatal"],
    date: "2025-10-18",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["pregnancy-due-date-calculator", "date-difference-calculator", "age-calculator"]
  },

  // ── 🛠️ Productivity & General (8) ─────────────────────────────────────

  {
    title: "The Best Free Online Tools in 2025: Our Top Picks Across Every Category",
    slug: "best-free-online-tools-2025",
    description: "A curated roundup of the best free browser-based tools for finance, development, health, images, PDFs, and productivity. No signups, no downloads.",
    category: "Lists",
    tags: ["free tools", "online tools", "productivity", "2025"],
    date: "2025-10-25",
    readTime: "10 min read",
    featured: true,
    relatedTools: ["mortgage-calculator", "json-formatter", "image-compressor", "pdf-merger", "password-generator", "calorie-calculator"]
  },
  {
    title: "How to Merge, Split, and Edit PDFs Online for Free (No Upload Required)",
    slug: "online-pdf-tools-guide",
    description: "A step-by-step guide to merging, splitting, extracting text, watermarking, and rotating PDFs entirely in your browser. Your files never leave your device.",
    category: "Guides",
    tags: ["PDF", "merge", "split", "convert", "documents"],
    date: "2025-11-01",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["pdf-merger", "pdf-splitter", "pdf-to-text", "pdf-watermark", "pdf-page-rotator", "image-to-pdf"]
  },
  {
    title: "How to Create Strong Passwords: A Complete Guide to Password Security in 2025",
    slug: "password-security-guide",
    description: "Learn what makes a password strong, why length beats complexity, how password generators work, and what to do if your credentials are leaked in a breach.",
    category: "Guides",
    tags: ["password", "security", "online safety", "privacy"],
    date: "2025-11-08",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["password-generator", "hash-generator", "uuid-generator"]
  },
  {
    title: "How to Compress Images for the Web Without Losing Quality",
    slug: "image-compression-web-guide",
    description: "Learn lossy vs lossless compression, when to use JPEG vs PNG vs WebP, and how to find the quality sweet spot that cuts file size without visible loss.",
    category: "How-To",
    tags: ["image compression", "web performance", "file size", "images"],
    date: "2025-11-15",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["image-compressor", "image-resizer", "image-format-converter"]
  },
  {
    title: "The Pomodoro Technique: How to Focus Better in 25-Minute Blocks",
    slug: "pomodoro-technique-guide",
    description: "A practical guide to the Pomodoro Technique: how it works, why 25 minutes is the sweet spot, common mistakes, and variations for deep work sessions.",
    category: "Guides",
    tags: ["pomodoro", "productivity", "time management", "focus"],
    date: "2025-11-22",
    readTime: "6 min read",
    featured: false,
    relatedTools: ["pomodoro-timer", "countdown-timer", "stopwatch"]
  },
  {
    title: "Unit Conversion Cheat Sheet: The Most Common Conversions You'll Ever Need",
    slug: "unit-conversion-reference",
    description: "Quick-reference tables for length, weight, volume, temperature, speed, and area conversions between metric and imperial units, with the formulas shown.",
    category: "How-To",
    tags: ["unit conversion", "metric", "imperial", "reference"],
    date: "2025-11-30",
    readTime: "8 min read",
    featured: false,
    relatedTools: ["unit-converter", "number-base-converter", "percentage-calculator"]
  },
  {
    title: "How to Create a Professional Invoice as a Freelancer (Template and Tips)",
    slug: "invoice-freelancer-guide",
    description: "Everything a freelancer needs on an invoice: line items, payment terms, tax handling, numbering, and follow-up etiquette for unpaid invoices.",
    category: "How-To",
    tags: ["invoice", "freelance", "billing", "business"],
    date: "2025-12-05",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["invoice-generator", "profit-margin-calculator", "sales-tax-calculator"]
  },
  {
    title: "How to Improve Your Typing Speed: From 30 WPM to 80+ WPM",
    slug: "typing-speed-improve-guide",
    description: "A practical plan to double your typing speed. Covers touch typing fundamentals, daily practice routines, bad habits to break, and how to track progress.",
    category: "Tips",
    tags: ["typing", "speed", "productivity", "WPM"],
    date: "2025-12-12",
    readTime: "7 min read",
    featured: false,
    relatedTools: ["typing-speed-test", "word-counter", "reading-time-estimator"]
  }
];
