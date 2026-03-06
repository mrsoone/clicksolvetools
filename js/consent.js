const STORAGE_KEY = 'cookie_consent';

function updateConsent(analytics, ads) {
  gtag('consent', 'update', {
    'analytics_storage': analytics ? 'granted' : 'denied',
    'ad_storage': ads ? 'granted' : 'denied',
    'ad_user_data': ads ? 'granted' : 'denied',
    'ad_personalization': ads ? 'granted' : 'denied'
  });
}

function loadAdSense() {
  if (document.querySelector('script[src*="adsbygoogle"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

function applyConsent(analytics, ads) {
  updateConsent(analytics, ads);
  if (ads) loadAdSense();
}

function saveAndApply(value, analytics, ads) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  applyConsent(analytics, ads);
}

function createToggle(id, checked) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = id;
  btn.setAttribute('role', 'switch');
  btn.setAttribute('aria-checked', String(checked));
  btn.className = `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${checked ? 'bg-[#2563eb]' : 'bg-[#475569]'}`;

  const circle = document.createElement('span');
  circle.className = `pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 mt-0.5 ${checked ? 'translate-x-[1.375rem]' : 'translate-x-0.5'}`;
  btn.appendChild(circle);

  btn.addEventListener('click', () => {
    const on = btn.getAttribute('aria-checked') === 'true';
    const next = !on;
    btn.setAttribute('aria-checked', String(next));
    btn.className = `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${next ? 'bg-[#2563eb]' : 'bg-[#475569]'}`;
    circle.className = `pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 mt-0.5 ${next ? 'translate-x-[1.375rem]' : 'translate-x-0.5'}`;
  });

  return btn;
}

function buildBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.className = 'fixed bottom-0 inset-x-0 z-50 bg-[#1e293b] border-t border-[#334155]';

  const container = document.createElement('div');
  container.className = 'max-w-5xl mx-auto px-4 py-4 sm:px-6';
  banner.appendChild(container);

  const text = document.createElement('p');
  text.className = 'text-white text-sm leading-relaxed';
  text.innerHTML = 'We use cookies for analytics and advertising to improve your experience. '
    + '<span class="text-[#94a3b8]">You can accept all, reject non-essential, or customize your preferences.</span>';
  container.appendChild(text);

  // Customize panel (hidden initially)
  const customPanel = document.createElement('div');
  customPanel.id = 'consent-custom-panel';
  customPanel.className = 'hidden mt-4 space-y-3';

  const analyticsRow = document.createElement('div');
  analyticsRow.className = 'flex items-center justify-between gap-4';
  const analyticsLabel = document.createElement('div');
  analyticsLabel.innerHTML = '<p class="text-white text-sm font-medium">Analytics cookies (Google Analytics)</p>'
    + '<p class="text-[#94a3b8] text-xs">Help us understand which tools are popular and how visitors find the site.</p>';
  analyticsRow.appendChild(analyticsLabel);
  const analyticsToggle = createToggle('consent-analytics-toggle', true);
  analyticsRow.appendChild(analyticsToggle);
  customPanel.appendChild(analyticsRow);

  const adsRow = document.createElement('div');
  adsRow.className = 'flex items-center justify-between gap-4';
  const adsLabel = document.createElement('div');
  adsLabel.innerHTML = '<p class="text-white text-sm font-medium">Advertising cookies (Google AdSense)</p>'
    + '<p class="text-[#94a3b8] text-xs">Allow personalized ads to help fund the site.</p>';
  adsRow.appendChild(adsLabel);
  const adsToggle = createToggle('consent-ads-toggle', true);
  adsRow.appendChild(adsToggle);
  customPanel.appendChild(adsRow);

  container.appendChild(customPanel);

  // Button row
  const btnRow = document.createElement('div');
  btnRow.id = 'consent-btn-row';
  btnRow.className = 'mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2';

  const acceptBtn = document.createElement('button');
  acceptBtn.textContent = 'Accept All';
  acceptBtn.className = 'bg-[#2563eb] hover:bg-[#3b82f6] text-white rounded-lg px-5 py-2.5 font-medium text-sm cursor-pointer';

  const rejectBtn = document.createElement('button');
  rejectBtn.textContent = 'Reject Non-Essential';
  rejectBtn.className = 'bg-[#334155] hover:bg-[#475569] text-white rounded-lg px-5 py-2.5 font-medium text-sm cursor-pointer';

  const customizeBtn = document.createElement('button');
  customizeBtn.textContent = 'Customize';
  customizeBtn.className = 'text-[#94a3b8] hover:text-white underline text-sm cursor-pointer';

  btnRow.appendChild(acceptBtn);
  btnRow.appendChild(rejectBtn);
  btnRow.appendChild(customizeBtn);
  container.appendChild(btnRow);

  // Save row (hidden initially)
  const saveRow = document.createElement('div');
  saveRow.id = 'consent-save-row';
  saveRow.className = 'hidden mt-4';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save Preferences';
  saveBtn.className = 'bg-[#2563eb] hover:bg-[#3b82f6] text-white rounded-lg px-5 py-2.5 font-medium text-sm cursor-pointer w-full sm:w-auto';
  saveRow.appendChild(saveBtn);
  container.appendChild(saveRow);

  function closeBanner() {
    banner.remove();
  }

  acceptBtn.addEventListener('click', () => {
    saveAndApply('all', true, true);
    closeBanner();
  });

  rejectBtn.addEventListener('click', () => {
    saveAndApply('rejected', false, false);
    closeBanner();
  });

  customizeBtn.addEventListener('click', () => {
    customPanel.classList.remove('hidden');
    btnRow.classList.add('hidden');
    saveRow.classList.remove('hidden');
    analyticsToggle.focus();
  });

  saveBtn.addEventListener('click', () => {
    const analytics = analyticsToggle.getAttribute('aria-checked') === 'true';
    const ads = adsToggle.getAttribute('aria-checked') === 'true';
    saveAndApply({ analytics, ads }, analytics, ads);
    closeBanner();
  });

  banner.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      saveAndApply('rejected', false, false);
      closeBanner();
    }
  });

  return { banner, acceptBtn };
}

function showBanner() {
  const existing = document.getElementById('cookie-consent-banner');
  if (existing) existing.remove();

  const { banner, acceptBtn } = buildBanner();
  document.body.appendChild(banner);
  acceptBtn.focus();
}

export function initConsent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    if (raw === '"all"' || raw === 'all') {
      applyConsent(true, true);
    } else if (raw === '"rejected"' || raw === 'rejected') {
      applyConsent(false, false);
    } else {
      try {
        const prefs = JSON.parse(raw);
        applyConsent(!!prefs.analytics, !!prefs.ads);
      } catch (e) {
        showBanner();
      }
    }
    return;
  }
  showBanner();
}

export function reopenConsent() {
  localStorage.removeItem(STORAGE_KEY);
  showBanner();
}

export function consentGranted(type) {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  if (raw === '"all"' || raw === 'all') return true;
  if (raw === '"rejected"' || raw === 'rejected') return false;
  try {
    const prefs = JSON.parse(raw);
    if (type === 'analytics_storage') return !!prefs.analytics;
    if (type === 'ad_storage' || type === 'ad_user_data' || type === 'ad_personalization') return !!prefs.ads;
  } catch (e) { /* invalid stored value */ }
  return false;
}
