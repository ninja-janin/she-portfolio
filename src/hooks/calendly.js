const SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';
let loaded = false;

function loadScript(timeout = 2500) {
  if (typeof window === 'undefined') return Promise.reject(new Error('window is undefined'));
  if (loaded) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    const finish = (ok, err) => {
      if (ok) { loaded = true; resolve(); } else reject(err);
    };
    if (existing) {
      if (existing.getAttribute('data-loaded') === '1') return resolve();
      existing.addEventListener('load', () => finish(true));
      existing.addEventListener('error', (e) => finish(false, e));
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_URL;
    s.async = true;
    s.onload = () => { s.setAttribute('data-loaded', '1'); finish(true); };
    s.onerror = (e) => finish(false, e);
    document.head.appendChild(s);

    // safety timeout
    setTimeout(() => {
      if (!loaded) reject(new Error('Calendly script load timed out'));
    }, timeout);
  });
}

function isCalendlyIframeVisible() {
  const ifr = document.querySelector('iframe[src*="calendly.com"]');
  if (!ifr) return false;
  // check if visible in layout
  return !!(ifr.offsetWidth || ifr.offsetHeight || ifr.getClientRects().length);
}

function cleanupCalendlyOverlay() {
  // remove any overlays Calendly may have added that block interaction
  try {
    const overlays = document.querySelectorAll('[class*="calendly"], [id*="calendly"]');
    overlays.forEach((el) => {
      // don't remove user's own elements; only remove widgets inserted by Calendly script
      if (el && el !== document.body && el !== document.head) {
        el.style.pointerEvents = 'auto';
      }
    });
    document.body.style.overflow = '';
  } catch (e) {
    // ignore
  }
}

export async function openCalendlyPopup(url) {
  console.debug('openCalendlyPopup: start', url);

  // Try to load script but fallback to opening link if it stalls.
  try {
    await loadScript();
  } catch (e) {
    console.warn('Calendly script failed to load or timed out, opening new tab', e);
    window.open(url, '_blank', 'noopener');
    return;
  }

  try {
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url });

      // If the popup hasn't appeared within 1s, fallback to opening in new tab and cleanup.
      setTimeout(() => {
        if (!isCalendlyIframeVisible()) {
          console.warn('Calendly popup not visible — falling back to new tab');
          cleanupCalendlyOverlay();
          window.open(url, '_blank', 'noopener');
        }
      }, 1000);
    } else {
      console.warn('Calendly global not present — opening new tab');
      window.open(url, '_blank', 'noopener');
    }
  } catch (err) {
    console.error('Error initializing Calendly popup', err);
    cleanupCalendlyOverlay();
    window.open(url, '_blank', 'noopener');
  }
}
