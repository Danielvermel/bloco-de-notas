/**
 * Counts taps on call, WhatsApp and email links, 14 November 2026.
 *
 * One listener on the document, so it covers every such link on every page, including the
 * ones other scripts add later. It posts `{ method, place, page }` to the shared counter at
 * clicks.teialoom.com (the `site-clicks` Worker, in teialoom's Cloudflare account), which
 * keeps the time and those three values and nothing else: no cookie, no IP address, no user
 * agent. That is why it needs no consent banner. The privacy page says so; keep the two in step.
 *
 * `defaultPrevented` skips a link whose click another script took over, such as a chat
 * button that opens a card instead of WhatsApp: only a tap that really leaves is counted.
 * `sendBeacon` does not wait for an answer, so the link opens exactly as it did before, and
 * a blocked or failed request is silent.
 */
const ENDPOINT = 'https://clicks.teialoom.com/click';
const BUBBLE = '.wa-bubble'; // this site has no floating bubble yet; kept so one can be added
const HEADER = '.site-header';
const FOOTER = '.site-footer';

document.addEventListener('click', (e) => {
  if (e.defaultPrevented) return;
  const link = e.target?.closest?.('a[href]');
  if (!link) return;
  const href = link.getAttribute('href') ?? '';
  const method = href.startsWith('tel:')
    ? 'call'
    : href.includes('wa.me/') || href.includes('api.whatsapp.com')
      ? 'whatsapp'
      : href.startsWith('mailto:')
        ? 'email'
        : null;
  if (!method) return;
  const place = link.closest(BUBBLE) ? 'bubble' : link.closest(HEADER) ? 'header' : link.closest(FOOTER) ? 'footer' : 'page';
  try {
    const body = JSON.stringify({ method, place, page: location.pathname });
    navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: 'text/plain' }));
  } catch {}
});
