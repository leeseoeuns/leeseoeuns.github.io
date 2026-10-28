/* Try room: the prototype runs right here — screens, hotspots, overlays, scrolling (no Figma embed) */
(function () {
  const q = new URLSearchParams(location.search), $ = id => document.getElementById(id);
  const idx = Math.max(0, ROOMS.findIndex(r => r.no === (q.get('r') || '06')));
  const R = ROOMS[idx], next = ROOMS[(idx + 1) % ROOMS.length];
  if (!R.try) { location.replace(roomHref(R)); return; }
  const root = document.documentElement;
  root.style.setProperty('--accent', R.ui || R.accent); root.style.setProperty('--paper', R.paper); root.style.setProperty('--paper-2', R.paper2); root.style.setProperty('--ink', R.ink);
  document.title = `${R.no} ${R.en} — Lee Seoeun`;
  $('roomNo').textContent = 'Room ' + R.no; $('roomEn').textContent = R.en; $('roomKo').textContent = R.ko;
  $('roomMeta').textContent = `${R.type} · Web · Mobile`; $('lead').textContent = R.lead;
  $('endTxt').textContent = `— End of Room ${R.no} —`;
  const nx = $('nextRoom'); nx.href = roomHref(next); nx.dataset.color = next.dark ? '#1C1428' : next.paper;
  nx.innerHTML = `<span class="tile">${SHAPE_SVG(next.shape, next.accent)}</span><span class="lbl">Next → ${next.en}</span>`;

  const { S, O, img, start } = PROTO;
  const dev = $('device'), btns = document.querySelectorAll('[data-v]');
  let v = q.get('v') === 'mobile' ? 'mobile' : 'web', cur = null, k = 1, ovl = null, timers = [];
  const cache = {};
  const load = id => { if (!cache[id]) { const im = new Image(); im.decoding = 'async'; im.src = img(id); cache[id] = im; } return cache[id]; };
  const prefetch = s => s.hs.forEach(h => h[5] && load(h[5]));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };

  // size the screen so it fills the stage (web: as wide as fits, mobile: as tall as fits)
  function fit() {
    const st = dev.parentElement.getBoundingClientRect(), small = innerWidth < 900;
    const availW = st.width - (small ? 0 : 80), availH = innerHeight - (small ? 150 : 110);
    const base = v === 'web' ? [1366, 850] : [393, 852];
    let w = Math.min(availW, availH * base[0] / base[1]);
    if (v === 'mobile') w = Math.min(w, small ? availW * .86 : 430);
    dev.style.width = w + 'px'; dev.style.height = w * base[1] / base[0] + 'px';
    k = w / base[0];
  }
  const px = n => (n * k) + 'px';
  const box = (el, [x, y, w, h]) => Object.assign(el.style, { left: px(x), top: px(y), width: px(w), height: px(h) });

  function hot(h, onDone) {
    const b = document.createElement('button'); b.className = 'hs'; b.setAttribute('aria-label', h[5] || h[4]); box(b, h);
    b.addEventListener('click', e => { e.stopPropagation(); act(h); }); return b;
  }
  function act(h) {
    const [, , , , a, t, o = {}] = h;
    if (a === 'go') { closeOvl(); show(t, o.soft ? 'soft' : 'fade'); }
    else if (a === 'ovl') openOvl(t);
    else if (a === 'swap') openOvl(t, true);
    else if (a === 'close') closeOvl();
  }
  function crop(id, s, [x, y, w, h]) {
    const d = document.createElement('div'); d.className = 'fx'; box(d, [x, y, w, h]);
    Object.assign(d.style, { backgroundImage: `url(${img(id)})`, backgroundSize: px(s.w) + ' auto', backgroundPosition: `-${px(x)} -${px(y)}` }); return d;
  }
  function show(id, how = 'cut') {
    const s = S[id]; if (!s) return; clear(); cur = id; prefetch(s);
    const layer = document.createElement('div'); layer.className = 'scr ' + how;
    const sc = document.createElement('div'); sc.className = 'scroll' + (s.h > (v === 'web' ? 860 : 860) ? ' long' : '');
    const page = document.createElement('div'); page.className = 'pg'; page.style.height = px(s.h);
    const im = load(id); const pic = im.cloneNode(); pic.alt = ''; page.appendChild(pic);
    s.hs.filter(h => !(h[6] && h[6].fixed)).forEach(h => page.appendChild(hot(h)));
    sc.appendChild(page); layer.appendChild(sc);
    const fix = document.createElement('div'); fix.className = 'fixed';
    (s.fix || []).forEach(r => fix.appendChild(crop(id, s, r)));
    if (s.foot) fix.appendChild(crop(PROTO.footer, S[PROTO.footer], [0, 800, 393, 52]));
    s.hs.filter(h => h[6] && h[6].fixed).forEach(h => fix.appendChild(hot(h)));
    layer.appendChild(fix);
    layer.addEventListener('click', hint);
    const old = [...dev.querySelectorAll('.scr')];
    dev.appendChild(layer);
    const done = () => { old.forEach(o => o.remove()); dev.classList.add('ready'); };
    if (pic.complete) requestAnimationFrame(() => layer.classList.add('in')); else pic.onload = () => layer.classList.add('in');
    setTimeout(done, how === 'cut' ? 0 : 320);
    if (s.auto) timers.push(setTimeout(() => show(s.auto[0], 'cut'), s.auto[1]));
  }
  function openOvl(id, swap) {
    const o = O[id]; if (!o) return; load(id);
    if (ovl && !swap) closeOvl(true);
    let wrap = swap && ovl;
    if (!wrap) {
      wrap = document.createElement('div'); wrap.className = 'ovl at-' + o.at; wrap.style.background = `rgba(0,0,0,${o.dim || 0})`;
      if (o.out) wrap.addEventListener('click', e => { if (e.target === wrap) closeOvl(); });
      if (!o.dim) wrap.style.pointerEvents = 'none';
      dev.appendChild(wrap); requestAnimationFrame(() => wrap.classList.add('in')); ovl = wrap;
    }
    const b = document.createElement('div'); b.className = 'ob'; b.style.width = px(o.w); b.style.height = px(o.h); b.style.pointerEvents = 'auto';
    if (o.r) b.style.borderRadius = px(o.r);
    if (o.clipTop) b.style.clipPath = `inset(${px(o.clipTop)} 0 0 0)`;
    const pic = load(id).cloneNode(); pic.alt = ''; b.appendChild(pic);
    o.hs.forEach(h => b.appendChild(hot(h)));
    b.addEventListener('click', hint);
    wrap.querySelectorAll('.ob').forEach(x => x.remove()); wrap.appendChild(b);
    o.hs.forEach(h => h[5] && load(h[5]));
    if (o.life) timers.push(setTimeout(() => closeOvl(), o.life));
  }
  function closeOvl(now) {
    if (!ovl) return; const w = ovl; ovl = null;
    if (now) return w.remove();
    w.classList.remove('in'); setTimeout(() => w.remove(), 250);
  }
  // a click that misses: flash where you can click, like Figma's hotspot hints
  function hint(e) {
    if (e.target.closest('.hs')) return;
    const scope = e.currentTarget; scope.classList.remove('hint'); void scope.offsetWidth; scope.classList.add('hint');
    setTimeout(() => scope.classList.remove('hint'), 700);
  }

  function mode(m) {
    v = m; btns.forEach(b => b.classList.toggle('is-on', b.dataset.v === v));
    dev.className = 'device ' + v; history.replaceState(null, '', `try.html?r=${R.no}&v=${v}`);
    closeOvl(true); dev.querySelectorAll('.scr').forEach(s => s.remove()); fit(); show(start[v]);
  }
  btns.forEach(b => b.addEventListener('click', () => b.dataset.v !== v && mode(b.dataset.v)));
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { const keep = cur; fit(); closeOvl(true); dev.querySelectorAll('.scr').forEach(s => s.remove()); show(keep); }, 150); });
  mode(v);
})();
