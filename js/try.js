/* Try room: the work runs live (Figma prototype) inside a framed screen, web or mobile */
(function () {
  const q = new URLSearchParams(location.search), $ = id => document.getElementById(id);
  const idx = Math.max(0, ROOMS.findIndex(r => r.no === (q.get('r') || '06')));
  const R = ROOMS[idx], next = ROOMS[(idx + 1) % ROOMS.length], T = R.try;
  if (!T) { location.replace(roomHref(R)); return; }
  const root = document.documentElement;
  root.style.setProperty('--accent', R.ui || R.accent); root.style.setProperty('--paper', R.paper); root.style.setProperty('--paper-2', R.paper2); root.style.setProperty('--ink', R.ink);
  document.title = `${R.no} ${R.en} — Lee Seoeun`;
  $('roomNo').textContent = 'Room ' + R.no; $('roomEn').textContent = R.en; $('roomKo').textContent = R.ko;
  $('roomMeta').textContent = `${R.type} · Web · Mobile`; $('lead').textContent = R.lead;
  $('screens').innerHTML = R.screens.map((s, i) => `<li><button tabindex="-1"><span class="n">${String(i + 1).padStart(2, '0')}</span><span>${s}</span></button></li>`).join('');
  $('endTxt').textContent = `— End of Room ${R.no} —`;
  const nx = $('nextRoom'); nx.href = roomHref(next); nx.dataset.color = next.dark ? '#1C1428' : next.paper;
  nx.innerHTML = `<span class="tile">${SHAPE_SVG(next.shape, next.accent)}</span><span class="lbl">Next → ${next.en}</span>`;

  const dev = $('device'), poster = $('poster'), btns = document.querySelectorAll('[data-v]');
  let v = T[q.get('v')] ? q.get('v') : 'web', live = false, frame = null;
  function show(mode, run) {
    v = mode; const t = T[v];
    dev.className = 'device ' + v; dev.style.setProperty('--ar', t.ratio);
    btns.forEach(b => b.classList.toggle('is-on', b.dataset.v === v));
    poster.src = t.poster; $('openFig').href = t.open; $('playTxt').textContent = v === 'web' ? 'Try the web' : 'Try the app';
    history.replaceState(null, '', `try.html?r=${R.no}&v=${v}`);
    if (frame) { frame.remove(); frame = null; dev.classList.remove('live', 'ready'); }
    if (run) start();
  }
  function start() {
    live = true; dev.classList.add('live');
    frame = document.createElement('iframe'); frame.src = T[v].embed; frame.title = `${R.en} — ${v} prototype`;
    frame.allow = 'fullscreen'; frame.addEventListener('load', () => setTimeout(() => dev.classList.add('ready'), 600));
    dev.appendChild(frame);
  }
  btns.forEach(b => b.addEventListener('click', () => { if (b.dataset.v !== v) show(b.dataset.v, live); }));
  $('play').addEventListener('click', start);
  show(v, q.has('v'));   // coming from the drawer's Web / Mobile half starts it right away
})();
