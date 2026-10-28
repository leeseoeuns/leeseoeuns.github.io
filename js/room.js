(function () {
  const q = new URLSearchParams(location.search).get('r') || '01';
  const idx = Math.max(0, ROOMS.findIndex(r => r.no === q));
  const R = ROOMS[idx], P = R.pages, N = P.length, next = ROOMS[(idx + 1) % ROOMS.length];
  const $ = id => document.getElementById(id), pad = n => String(n).padStart(2, '0');
  const root = document.documentElement;
  root.style.setProperty('--accent', R.accent);
  if (R.dark) root.classList.add('dark'); else root.style.setProperty('--paper', R.paper);
  document.title = `${R.no} ${R.en} — Lee Seoeun`;
  $('roomNo').textContent = 'Room ' + R.no; $('roomEn').textContent = R.en; $('roomKo').textContent = R.ko;
  $('roomMeta').textContent = `${R.type} · ${N} pages`;

  // ---------- Book: one continuous vertical strip (webtoon) ----------
  const book = $('book'), chapters = $('chapters');
  P.forEach((p, i) => {
    const f = document.createElement('figure'); f.className = 'page'; f.id = 'p' + (i + 1); f.style.aspectRatio = `1 / ${p.r}`;
    const im = new Image(); im.src = p.src; im.alt = `${R.en} — ${p.t}`; im.loading = i < 2 ? 'eager' : 'lazy'; im.decoding = 'async';
    im.width = 1440; im.height = Math.round(1440 * p.r); f.appendChild(im); book.appendChild(f);
    const li = document.createElement('li'); li.innerHTML = `<button><span class="n">${pad(i + 1)}</span><span>${p.t}</span></button>`;
    li.firstChild.addEventListener('click', () => glide(f)); chapters.appendChild(li);
  });
  const btns = [...chapters.querySelectorAll('button')];
  $('endTxt').textContent = `— End of Room ${R.no} —`;
  const nx = $('nextRoom'); nx.href = 'room.html?r=' + next.no; nx.dataset.color = next.dark ? '#1C1428' : next.paper;
  nx.innerHTML = `<span class="box"><span class="drawer live open" data-s="${next.shape}" style="pointer-events:none"><span class="cavity"></span><img class="cover" src="${next.pages[0].src}" alt=""><span class="front" style="--h:${next.accent}"><span class="handle"></span><span class="no">${next.no}<em>${next.en}</em></span></span></span></span><span>Next drawer → ${next.en}</span>`;

  const seen = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('seen'); seen.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  book.querySelectorAll('.page').forEach(p => seen.observe(p));

  // progress + active chapter
  const bar = $('bar'), pages = [...book.children];
  let cur = -1;
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    const mid = innerHeight * .4; let a = 0;
    for (let i = 0; i < pages.length; i++) if (pages[i].getBoundingClientRect().top < mid) a = i;
    if (a !== cur) { btns[cur] && btns[cur].classList.remove('on'); btns[a].classList.add('on'); cur = a; }
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function glide(el) {
    const to = el.getBoundingClientRect().top + scrollY, from = scrollY, d = to - from, D = Math.min(1200, 400 + Math.abs(d) * .15), t0 = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 4);
    (function s(now) { const p = Math.min(1, (now - t0) / D); scrollTo(0, from + d * ease(p)); if (p < 1) requestAnimationFrame(s); })(t0);
  }

  // ---------- modes ----------
  const modeBtns = document.querySelectorAll('[data-mode]');
  modeBtns.forEach(b => b.addEventListener('click', () => setTimeout(() => mode(b.dataset.mode), 120)));
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => mode('book')));
  let current = 'book';
  function mode(m) {
    current = m; modeBtns.forEach(b => b.classList.toggle('is-on', b.dataset.mode === m));
    $('docent').classList.toggle('show', m === 'docent'); $('screening').classList.toggle('show', m === 'screening');
    document.body.style.overflow = m === 'book' ? '' : 'hidden';
    if (m === 'docent') docent(Math.max(0, cur));
    if (m === 'screening') screening(Math.max(0, cur)); else stopScreen();
  }

  // ---------- Docent: read aloud, letter by letter ----------
  const dImg = $('dImg'), dHead = $('dHead'), dBody = $('dBody'); let di = 0, typer;
  $('dTitle').textContent = `Room ${R.no} · ${R.en}`;
  function words(p, i) { const d = R.docent[String(i + 1)]; return d ? { h: d[0], b: d[1] } : { h: p.t === 'Cover' ? `${R.en}\n${R.ko}` : p.t, b: '' }; }
  function docent(i) {
    di = (i + N) % N; const p = P[di], w = words(p, di);
    $('dCnt').textContent = `Docent · ${pad(di + 1)} / ${pad(N)}`; $('dTrack').style.width = ((di + 1) / N) * 100 + '%';
    dImg.classList.add('leave');
    setTimeout(() => {
      dImg.src = p.src; dImg.classList.remove('leave'); dImg.classList.add('enter'); void dImg.offsetWidth; dImg.classList.remove('enter');
      document.getElementById('docent').style.setProperty('--sx', (30 + Math.random() * 16) + '%');
    }, 280);
    clearInterval(typer); dBody.classList.remove('on'); dBody.textContent = w.b;
    dHead.innerHTML = [...w.h].map(c => c === '\n' ? '<br>' : `<span class="ch">${c}</span>`).join('');
    const chs = dHead.querySelectorAll('.ch'); let k = 0;
    typer = setInterval(() => { if (k < chs.length) chs[k++].classList.add('on'); else { clearInterval(typer); dBody.classList.add('on'); } }, 38);
  }
  $('dNext').onclick = () => docent(di + 1); $('dPrev').onclick = () => docent(di - 1);

  // ---------- Screening: auto-play with subtitles ----------
  const screen = $('screen'), segs = $('segs'), sub = $('sub'), DUR = 5200; let si = 0, timer, raf, t0, paused = false, left = DUR;
  $('sTitle').textContent = `Now screening · Room ${R.no} ${R.en}`;
  P.forEach((p, i) => { const s = document.createElement('i'); s.innerHTML = '<b></b>'; s.onclick = () => show(i); segs.appendChild(s); });
  const segEls = [...segs.children];
  function screening(i) { $('fin').classList.remove('show'); paused = false; $('sPlay').textContent = '❚❚ Pause'; show(i); }
  function show(i) {
    si = i; cancelAnimationFrame(raf); clearTimeout(timer);
    if (si >= N) { $('fin').classList.add('show'); return; }
    const p = P[si], w = words(p, si);
    const old = screen.querySelector('img.on'); if (old) { old.classList.remove('on'); setTimeout(() => old.remove(), 1200); }
    const im = new Image(); im.src = p.src; im.alt = p.t; im.style.setProperty('--dur', (DUR + 1200) + 'ms'); screen.appendChild(im);
    requestAnimationFrame(() => im.classList.add('on'));
    sub.firstElementChild.classList.remove('on');
    setTimeout(() => { sub.firstElementChild.textContent = w.b || w.h.replace('\n', ' '); sub.firstElementChild.classList.add('on'); }, 450);
    $('sNow').textContent = `${pad(si + 1)} / ${pad(N)} · ${p.t}`;
    segEls.forEach((s, k) => { s.classList.toggle('done', k < si); s.firstChild.style.width = k < si ? '100%' : '0'; });
    left = DUR; run();
  }
  function run() {
    t0 = performance.now(); const start = left;
    (function tick(now) {
      if (paused) return; left = start - (now - t0); const pr = 1 - Math.max(0, left) / DUR;
      segEls[si].firstChild.style.width = (pr * 100) + '%';
      if (left <= 0) show(si + 1); else raf = requestAnimationFrame(tick);
    })(t0);
  }
  function stopScreen() { cancelAnimationFrame(raf); paused = true; }
  $('sPlay').onclick = () => { paused = !paused; $('sPlay').textContent = paused ? '▶ Play' : '❚❚ Pause'; if (!paused) run(); };
  screen.onclick = () => $('sPlay').click();
  const fn = $('finNext'); fn.href = 'room.html?r=' + next.no; fn.textContent = `Next room → ${next.en}`; fn.dataset.color = '#000';
  $('finAgain').onclick = () => screening(0);

  addEventListener('keydown', e => {
    if (e.key === 'Escape' && current !== 'book') mode('book');
    if (current === 'docent') { if (e.key === 'ArrowRight') docent(di + 1); if (e.key === 'ArrowLeft') docent(di - 1); }
    if (current === 'screening') { if (e.key === 'ArrowRight') show(Math.min(N, si + 1)); if (e.key === 'ArrowLeft') show(Math.max(0, si - 1)); if (e.key === ' ') { e.preventDefault(); $('sPlay').click(); } }
  });
})();
