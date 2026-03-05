import { tools, categories } from '/data/tools.js';

export function renderNav(toolName, toolIcon) {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-[#334155]';
  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 text-[#38bdf8] hover:text-[#7dd3fc] transition-colors text-sm font-medium">
        <span>←</span>
        <span>All Tools</span>
      </a>
      <div class="flex items-center gap-2">
        <span class="text-lg">${toolIcon}</span>
        <h1 class="text-[#f1f5f9] font-semibold text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">${toolName}</h1>
      </div>
      <div class="w-[72px]"></div>
    </div>
  `;
  container.appendChild(nav);

  const spacer = document.createElement('div');
  spacer.className = 'h-14';
  container.appendChild(spacer);
}

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="border-t border-[#334155] mt-16">
      <div class="max-w-7xl mx-auto px-4 py-8 text-center">
        <p class="text-[#94a3b8] text-sm mb-2">&copy; 2025 ClickSolveTools. All rights reserved.</p>
        <p class="text-[#64748b] text-xs mb-4">All tools run entirely in your browser. No data is sent to any server.</p>
        <div class="flex items-center justify-center gap-4 text-xs">
          <a href="/sitemap.xml" class="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors">Sitemap</a>
          <span class="text-[#334155]">|</span>
          <a href="/about" class="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors">About</a>
          <span class="text-[#334155]">|</span>
          <a href="/privacy" class="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors">Privacy</a>
          <span class="text-[#334155]">|</span>
          <a href="/licenses" class="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors">Licenses</a>
        </div>
      </div>
    </footer>
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
      <h2 class="text-xl font-bold text-[#f1f5f9] mb-6">Related ${catIcon} ${category} Tools</h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        ${related.map(t => `
          <a href="/tools/${t.slug}" class="block bg-[#1e293b] border border-[#334155] rounded-lg p-4 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/5 transition-all duration-200 hover:-translate-y-0.5">
            <div class="text-2xl mb-2">${t.icon}</div>
            <div class="font-semibold text-[#f1f5f9] text-sm mb-1">${t.name}</div>
            <div class="text-[#94a3b8] text-xs leading-relaxed line-clamp-2">${t.description}</div>
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
}
