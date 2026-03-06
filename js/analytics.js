import { consentGranted } from '/js/consent.js';

export function trackToolView(slug, category) {
  if (!consentGranted('analytics_storage')) return;
  gtag('event', 'tool_view', { tool_name: slug, tool_category: category });
}

export function trackSearch(query, resultCount) {
  if (!consentGranted('analytics_storage')) return;
  gtag('event', 'search', { search_term: query, result_count: resultCount });
}

export function trackCategoryFilter(category) {
  if (!consentGranted('analytics_storage')) return;
  gtag('event', 'category_filter', { category });
}

export function trackOutboundClick(url) {
  if (!consentGranted('analytics_storage')) return;
  gtag('event', 'click', { event_category: 'outbound', event_label: url });
}
