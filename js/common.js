/* shared: cursor, page curtain, safe storage */
(function () {
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };
  window.store = store;

  // cursor with lag — the ring trails behind the dot
  if (matchMedia('(hover:hover)').matches) {
    const ring = document.createElement('div'), dot = document.createElement('div');
    ring.className = 'cursor'; dot.className = 'cursor-dot'; document.body.append(ring, dot);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; }, { passive: true });
    (function tick() { rx += (x - rx) * .16; ry += (y - ry) * .16; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(tick); })();
    document.addEventListener('pointerover', e => {
      const t = e.target.closest('a,button,.drawer.live,[data-hover]');
      ring.classList.toggle('is-hover', !!t);
      ring.classList.toggle('is-grab', !!e.target.closest('.shape'));
    });
  }

  // page change: shapes drop in, ta-ta-tak, cover the screen, then tumble away on the next page
  const cur = document.createElement('div'); cur.className = 'curtain'; document.body.appendChild(cur);
  const KINDS = ['square', 'circle', 'hexagon', 'pentagon', 'triangle', 'diamond', 'star', 'octagon'];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function lay(color) {
    const P = window.SHAPE_COLORS || {}, cols = Object.keys(P).length ? ['ink', 'blue', 'pink', 'green', 'orange', 'lime', 'navy', 'lav'].map(k => P[k]).filter(Boolean) : ['#111'];
    const n = innerWidth < 700 ? 4 : 7, cell = innerWidth / n, rows = Math.ceil(innerHeight / cell) + 1;
    cur.style.setProperty('--cell', cell + 'px'); cur.style.setProperty('--bg', color || 'var(--ink)');
    let h = '<i class="cur-bg"></i>', k = 0;
    for (let r = 0; r < rows; r++) for (let c = 0; c < n; c++) {
      const kind = KINDS[(r * 3 + c * 5 + (r * c) % 3) % KINDS.length], col = cols[(r * 2 + c * 3) % cols.length];
      h += `<span style="left:${c * cell}px;top:${r * cell}px;--d:${c * 45 + (rows - 1 - r) * 28}ms;--x:${(Math.random() - .5) * 40}px;--r:${(Math.random() - .5) * 50}deg;--f:${Math.random() * 220}ms">${window.SHAPE_SVG ? SHAPE_SVG(kind, col) : ''}</span>`; k++;
    }
    cur.innerHTML = h;
  }
  // shapes only for the top navigation; moving through the portfolio (drawers, next room) is a quiet fade
  let arr = null; try { arr = JSON.parse(store.get('curtain') || 'null'); } catch (e) {}
  store.set('curtain', '');
  if (arr && !calm) {
    cur.style.setProperty('--bg', arr.c || 'var(--ink)');
    if (arr.m === 's') {
      cur.classList.add('cover');
      const run = () => { lay(arr.c); requestAnimationFrame(() => requestAnimationFrame(() => { cur.classList.add('fall'); setTimeout(() => { cur.className = 'curtain'; cur.innerHTML = ''; }, 1100); })); };
      if (window.SHAPE_SVG) run(); else addEventListener('DOMContentLoaded', run);
    } else {
      cur.classList.add('plain', 'on'); requestAnimationFrame(() => requestAnimationFrame(() => { cur.classList.remove('on'); setTimeout(() => { cur.className = 'curtain'; }, 600); }));
    }
  }
  window.go = function (href, color, mode) {
    if (calm) { location.href = href; return; }
    const shapes = mode === 'shapes';
    store.set('curtain', JSON.stringify({ m: shapes ? 's' : 'p', c: color || '' }));
    if (shapes) { lay(color); cur.className = 'curtain'; void cur.offsetWidth; cur.classList.add('drop'); setTimeout(() => { location.href = href; }, 820); }
    else { cur.style.setProperty('--bg', color || 'var(--ink)'); cur.className = 'curtain plain'; void cur.offsetWidth; cur.classList.add('on'); setTimeout(() => { location.href = href; }, 420); }
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-go]'); if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); const href = a.getAttribute('href');
    setTimeout(() => go(href, a.dataset.color, a.closest('.nav') ? 'shapes' : ''), 110); // a breath before leaving
  });
  addEventListener('pageshow', e => { if (e.persisted) { cur.className = 'curtain'; cur.innerHTML = ''; } });
})();
