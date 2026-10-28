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

  // curtain transitions between pages
  const cur = document.createElement('div'); cur.className = 'curtain'; document.body.appendChild(cur);
  if (store.get('curtain') === '1') { cur.classList.add('out'); store.set('curtain', '0'); }
  window.go = function (href, color) {
    if (color) cur.style.background = color;
    cur.classList.remove('out'); void cur.offsetWidth; cur.classList.add('in');
    store.set('curtain', '1');
    setTimeout(() => { location.href = href; }, 680);
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-go]'); if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); const href = a.getAttribute('href');
    setTimeout(() => go(href, a.dataset.color), 110); // a breath before leaving
  });
  addEventListener('pageshow', e => { if (e.persisted) { cur.classList.remove('in'); } });
})();
