(function () {
  const field = new ShapeField(document.getElementById('field'), {
    avoid: [...document.querySelectorAll('.hero-copy > *, .hint, .nav a')]
  });
  setTimeout(() => field.resize(), 1200); // re-measure once fonts settle
  const loader = document.getElementById('loader'), say = document.getElementById('say'), count = document.getElementById('count');
  const first = store.get('seen') !== '1';

  // 1 · loading: shapes line up into a grid while the counter runs, then scatter into zero gravity
  function open() {
    document.body.classList.add('ready'); loader.classList.add('done');
    setTimeout(() => loader.remove(), 900);
  }
  if (first) {
    field.gather(6, 16);
    let n = 0; const t0 = performance.now(), D = 1700;
    (function run(now) {
      n = Math.min(100, Math.round(((now - t0) / D) * 100)); count.textContent = String(n).padStart(3, '0');
      if (n < 100) requestAnimationFrame(run);
      else { say.textContent = 'Read the Room'; setTimeout(() => { field.release(); open(); }, 380); }
    })(t0);
    store.set('seen', '1');
  } else { setTimeout(open, 60); }

  // 2 · cabinet: 6 × 4 drawers, four of them hold work
  const cab = document.getElementById('cabinet');
  const live = { 0: 0, 1: 1, 2: 2, 3: 3 };
  // 6 × 4: no shape twice in a row, none repeated straight down a column (same grid as Figma)
  const GRID = [['square','circle','triangle','pentagon','ring','hexagon'],['ring','diamond','circle','arch','hexagon','square'],['hexagon','square','diamond','ring','pentagon','arch'],['arch','ring','hexagon','square','triangle','diamond']].flat();
  for (let i = 0; i < 24; i++) {
    const r = ROOMS[live[i]];
    const d = document.createElement(r ? 'a' : 'div');
    d.className = 'drawer ' + (r ? 'live' : 'empty'); d.style.setProperty('--i', i);
    d.dataset.s = r ? r.shape : GRID[i];
    if (r) {
      d.href = 'room.html?r=' + r.no; d.setAttribute('aria-label', `Room ${r.no} — ${r.en}, ${r.ko}`);
      d.innerHTML = `<div class="cavity"></div><img class="cover" src="${r.pages[0].src}" alt="" loading="lazy">
        <div class="front" style="--h:${r.accent}"><span class="handle"></span><span class="no">${r.no}<em>${r.en}</em></span><span class="t">${r.en}</span></div>`;
      d.addEventListener('click', e => { e.preventDefault(); fly(d, r); });
    } else {
      d.innerHTML = `<div class="cavity"></div><div class="front"><span class="handle"></span></div>`;
      d.setAttribute('aria-hidden', 'true');
      d.addEventListener('pointerenter', () => { d.classList.remove('shake'); void d.offsetWidth; d.classList.add('shake'); });
    }
    cab.appendChild(d);
  }
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { cab.classList.add('in'); o.disconnect(); } }), { threshold: .15 }).observe(cab);

  // opening a drawer: the cover lifts out and grows to fill the screen, then the room opens
  function fly(d, r) {
    d.classList.add('open', 'quick');
    const img = d.querySelector('.cover');
    setTimeout(() => {
      const b = img.getBoundingClientRect(); const f = img.cloneNode(); f.className = 'flying';
      Object.assign(f.style, { left: b.left + 'px', top: b.top + 'px', width: b.width + 'px', height: b.height + 'px', transform: 'none' });
      document.body.appendChild(f); void f.offsetWidth;
      const W = Math.min(innerWidth * .8, 1100), H = W * 9 / 16;
      Object.assign(f.style, { left: (innerWidth - W) / 2 + 'px', top: (innerHeight - H) / 2 + 'px', width: W + 'px', height: H + 'px', transform: 'none' });
      setTimeout(() => go('room.html?r=' + r.no, r.dark ? '#1C1428' : r.paper), 620);
    }, 520);
  }

  // 3 · smooth anchor scroll with a short delay so the button press reads
  // profile opens from the name; it slides in, staggered
  const pf = document.getElementById('profile');
  pf.querySelectorAll('.pf-left > *, .pf-right > *').forEach((el, i) => { el.classList.add('reveal-p'); el.style.transitionDelay = (.25 + i * .07) + 's'; });
  const openPf = () => { pf.hidden = false; requestAnimationFrame(() => pf.classList.add('show')); document.body.style.overflow = 'hidden'; };
  const closePf = () => { pf.classList.remove('show'); document.body.style.overflow = ''; setTimeout(() => { pf.hidden = true; }, 700); };
  document.getElementById('brand').addEventListener('click', e => { e.preventDefault(); setTimeout(openPf, 110); });
  document.getElementById('pfClose').addEventListener('click', closePf);
  addEventListener('keydown', e => { if (e.key === 'Escape' && pf.classList.contains('show')) closePf(); });

  document.querySelectorAll('a[href^="#"]:not(#brand)').forEach(a => a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault();
    setTimeout(() => smooth(t.getBoundingClientRect().top + scrollY - (a.getAttribute('href') === '#top' ? 0 : 40)), 120);
  }));
  function smooth(to) {
    const from = scrollY, d = to - from, D = Math.min(1400, 500 + Math.abs(d) * .4), t0 = performance.now();
    const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    (function s(now) { const p = Math.min(1, (now - t0) / D); scrollTo(0, from + d * ease(p)); if (p < 1) requestAnimationFrame(s); })(t0);
  }

  // nav hides on scroll down, returns on scroll up
  const nav = document.getElementById('nav'); let ly = scrollY;
  addEventListener('scroll', () => { const y = scrollY; nav.classList.toggle('hide', y > ly && y > 200); ly = y; }, { passive: true });

  // little shapes on the statement cards
  const C = SHAPE_COLORS, map = { square: C.ink, circle: C.blue, triangle: C.pink };
  document.querySelectorAll('[data-shape]').forEach(el => { el.innerHTML = SHAPE_SVG(el.dataset.shape, map[el.dataset.shape]); });
})();
