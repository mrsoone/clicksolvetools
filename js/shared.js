import { tools, categories } from '/data/tools.js';
import { trackToolView } from '/js/analytics.js';

export function renderNav(toolName, toolIcon) {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm';
  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] transition-colors text-sm font-medium">
        <span>←</span>
        <span>All Tools</span>
      </a>
      <div class="flex items-center gap-2">
        <span class="text-lg">${toolIcon}</span>
        <span class="text-[#1e293b] font-semibold text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">${toolName}</span>
      </div>
      <div class="w-[72px]"></div>
    </div>
  `;
  container.appendChild(nav);

  const spacer = document.createElement('div');
  spacer.className = 'h-14';
  container.appendChild(spacer);
}

export function renderBlogNav(postTitle) {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const isIndex = !postTitle;
  const backHref = isIndex ? '/' : '/blog';
  const backLabel = isIndex ? 'All Tools' : 'Blog';

  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm';
  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="${backHref}" class="flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] transition-colors text-sm font-medium">
        <span>←</span>
        <span>${backLabel}</span>
      </a>
      <a href="/" class="flex items-center gap-1">
        <img src="/images/logo-nav.png" alt="ClickSolveTools" class="h-7">
      </a>
      <a href="/blog" class="text-[#64748b] hover:text-[#1e293b] transition-colors text-sm font-medium ${isIndex ? 'invisible' : ''}">All Posts</a>
    </div>
  `;
  container.appendChild(nav);

  const spacer = document.createElement('div');
  spacer.className = 'h-14';
  container.appendChild(spacer);
}

const FOOTER_HTML = `
  <footer class="bg-[#1e293b] mt-16">
    <div class="max-w-7xl mx-auto px-4 py-10 text-center">
      <div class="flex items-center justify-center gap-2 mb-4">
        <img src="/images/logo-white-nav.png" alt="ClickSolveTools" class="h-8">
      </div>
      <p class="text-[#94a3b8] text-sm mb-2">&copy; 2025 ClickSolveTools. All rights reserved.</p>
      <p class="text-[#64748b] text-xs mb-5">All tools run entirely in your browser. No data is sent to any server.</p>
      <div class="flex flex-wrap items-center justify-center gap-4 text-xs">
        <a href="/sitemap.xml" class="text-[#94a3b8] hover:text-white transition-colors">Sitemap</a>
        <span class="text-[#475569]">|</span>
        <a href="/about" class="text-[#94a3b8] hover:text-white transition-colors">About</a>
        <span class="text-[#475569]">|</span>
        <a href="/blog" class="text-[#94a3b8] hover:text-white transition-colors">Blog</a>
        <span class="text-[#475569]">|</span>
        <a href="/privacy" class="text-[#94a3b8] hover:text-white transition-colors">Privacy</a>
        <span class="text-[#475569]">|</span>
        <a href="/terms" class="text-[#94a3b8] hover:text-white transition-colors">Terms</a>
        <span class="text-[#475569]">|</span>
        <a href="/cookies" class="text-[#94a3b8] hover:text-white transition-colors">Cookies</a>
        <span class="text-[#475569]">|</span>
        <a href="/licenses" class="text-[#94a3b8] hover:text-white transition-colors">Licenses</a>
        <span class="text-[#475569]">|</span>
        <button onclick="import('/js/consent.js').then(m=>m.reopenConsent())" class="text-[#94a3b8] hover:text-white transition-colors cursor-pointer">Cookie Settings</button>
      </div>
    </div>
  </footer>
`;

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;
  container.innerHTML = FOOTER_HTML;
}

export async function renderMorePosts(currentSlug, category) {
  const container = document.getElementById('more-posts');
  if (!container) return;

  const { posts } = await import('/blog/posts.js');
  const related = posts
    .filter(p => p.category === category && p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) { container.remove(); return; }

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function fmtDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  container.innerHTML = `
    <section class="max-w-3xl mx-auto px-4 py-12">
      <h2 class="text-xl font-bold text-[#1e293b] mb-6">More Articles</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${related.map(p => `
          <a href="/blog/${p.slug}" class="block bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm hover:border-[#2563eb]/40 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-[#2563eb] px-2 py-0.5 rounded-full bg-[#eff6ff] inline-block mb-3">${p.category}</span>
            <h3 class="font-semibold text-[#1e293b] text-sm mb-2 leading-snug line-clamp-2">${p.title}</h3>
            <div class="flex items-center gap-2 text-xs text-[#94a3b8]">
              <time>${fmtDate(p.date)}</time>
              <span>·</span>
              <span>${p.readTime}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

export async function renderRelatedToolCards(toolSlugs) {
  const container = document.getElementById('related-tool-cards');
  if (!container || !toolSlugs || toolSlugs.length === 0) return;

  const matched = tools.filter(t => toolSlugs.includes(t.slug) && t.built);
  if (matched.length === 0) return;

  container.innerHTML = `
    <section class="mt-16 p-8 bg-white border border-[#e2e8f0] rounded-xl shadow-sm">
      <h2 class="text-xl font-bold text-[#1e293b] mb-2">Try These Tools</h2>
      <p class="text-[#94a3b8] text-sm mb-6">Put what you learned into practice with these free tools:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${matched.map(t => `
          <a href="/tools/${t.slug}" class="flex items-start gap-3 p-4 rounded-lg border border-[#e2e8f0] hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
            <span class="text-2xl leading-none mt-0.5">${t.icon}</span>
            <div>
              <div class="font-semibold text-[#1e293b] text-sm">${t.name}</div>
              <div class="text-[#64748b] text-xs leading-relaxed mt-0.5 line-clamp-2">${t.description}</div>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

export function renderRelatedTools(currentSlug, category) {
  const container = document.getElementById('related-tools');
  if (!container) return;

  const related = tools
    .filter(t => t.category === category && t.slug !== currentSlug && t.built)
    .slice(0, 4);

  if (related.length === 0) return;

  const categoryMeta = categories.find(c => c.name === category);
  const catIcon = categoryMeta ? categoryMeta.icon : '';

  container.innerHTML = `
    <section class="max-w-5xl mx-auto px-4 py-12">
      <h2 class="text-xl font-bold text-[#1e293b] mb-6">Related ${catIcon} ${category} Tools</h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        ${related.map(t => `
          <a href="/tools/${t.slug}" class="block bg-white border border-[#e2e8f0] rounded-lg p-4 shadow-sm hover:border-[#2563eb]/40 hover:shadow-lg hover:shadow-[#2563eb]/10 transition-all duration-200 hover:-translate-y-0.5">
            <div class="text-2xl mb-2">${t.icon}</div>
            <div class="font-semibold text-[#1e293b] text-sm mb-1">${t.name}</div>
            <div class="text-[#64748b] text-xs leading-relaxed line-clamp-2">${t.description}</div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

export function initToolPage(slug) {
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return;

  renderNav(tool.name, tool.icon);
  renderRelatedTools(tool.slug, tool.category);
  renderFooter();
  trackToolView(tool.slug, tool.category);
}
