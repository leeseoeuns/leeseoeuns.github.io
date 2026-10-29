/* Others — gallery data. Fill `images` with paths (assets/others/...) and it renders them.
   info: [title, line]  → shows the little shape + hover note. Leave info null to hide the shape.
   kind: package | surface | graphic | motion | textile   (decides the shape + colour)
   video: mp4 path or YouTube/Vimeo URL for motion work.
   r: placeholder ratio (height / width) used until real images are added.
   s: tile size — big (2×2) · tall (1×2) · wide (2×1) · none (1×1). Order is set so the grid has no holes at 4 and 2 columns. */
window.OTHERS = [
  { kind: 'package', s: 'big', info: ['바스리후레 패키지 리디자인', 'Package Design · 2026'], images: ['assets/others/pkg/01.jpg','assets/others/pkg/03.jpg','assets/others/pkg/04.jpg','assets/others/pkg/05.jpg','assets/others/pkg/08.jpg','assets/others/pkg/09.jpg','assets/others/pkg/10.jpg','assets/others/pkg/02.jpg','assets/others/pkg/06.jpg','assets/others/pkg/07.jpg'], r: 1.333 },
  { kind: 'surface', info: ['트라이앵글 스카프', 'Surface Design · 착용 이미지는 합성 목업'], images: ['assets/others/scarf/c02.jpg','assets/others/scarf/c01.jpg','assets/others/scarf/c03.jpg','assets/others/scarf/c04.jpg','assets/others/scarf/c05.jpg'], r: .595 },
  { kind: 'surface', s: 'wide', info: ['스카프 패턴 응용 제품', 'Surface Design · 패키지 · 노트 목업'], images: ['assets/others/scarf/d05.jpg','assets/others/scarf/d01.jpg','assets/others/scarf/d02.jpg','assets/others/scarf/d03.jpg','assets/others/scarf/d04.jpg'], r: .75 },
  { kind: 'surface', s: 'tall', info: ['트윌리 · 스퀘어 스카프', 'Surface Design · 실물 제작 · 착용 촬영'], images: ['assets/others/scarf/b02.jpg','assets/others/scarf/a02.jpg','assets/others/scarf/a01.jpg','assets/others/scarf/a03.jpg','assets/others/scarf/a04.jpg','assets/others/scarf/b06.jpg','assets/others/scarf/b01.jpg','assets/others/scarf/b04.jpg','assets/others/scarf/b03.jpg','assets/others/scarf/b05.jpg'], r: 1.742 },
  { kind: 'graphic', info: ['균형', 'Graphic Design · Poster'], images: ['assets/others/graphic/01.jpg'], r: 1.411 },
  { kind: 'graphic', s: 'big', info: ['깃이 번지다', 'Graphic Design · 포스터 · 배너 · 리플렛 · 모션 포스터'], images: ['assets/others/graphic/b02.jpg','assets/others/graphic/b03.jpg','assets/others/graphic/b04.jpg','assets/others/graphic/b01.jpg','assets/others/graphic/b05.jpg','assets/others/graphic/b06.jpg'], video: 'https://youtube.com/shorts/wv9fSH_8VlI', r: 1.5 },
  { kind: 'motion', s: 'wide', info: ["올빼미", "Motion Graphic · 영화 인트로"], images: [], poster: 'assets/others/motion/final.jpg', video: 'assets/others/motion/final.mp4', r: .5625 },
  { kind: 'surface', col: 'orange', s: 'tall', info: ['넥타이 · Orange', 'Surface Design · 넥타이 디자인 · 착용 촬영'], images: ['assets/others/tie/o03.jpg','assets/others/tie/o01.jpg','assets/others/tie/o02.jpg','assets/others/tie/o04.jpg','assets/others/tie/o05.jpg','assets/others/tie/o06.jpg','assets/others/tie/o07.jpg'], r: 1.333 },
  { kind: 'surface', s: 'tall', info: ['넥타이 · Blue', 'Surface Design · 넥타이 디자인 · 착용 촬영'], images: ['assets/others/tie/b05.jpg','assets/others/tie/b01.jpg','assets/others/tie/b02.jpg','assets/others/tie/b03.jpg','assets/others/tie/b04.jpg','assets/others/tie/b06.jpg','assets/others/tie/b07.jpg'], r: 1.333 },
  { kind: 'textile', s: 'big', info: ['위빙', 'Textile · 손으로 엮은 작품 · 행성을 소재로'], images: ['assets/others/textile/h01.jpg','assets/others/textile/h04.jpg','assets/others/textile/h07.jpg','assets/others/textile/h02.jpg','assets/others/textile/h05.jpg','assets/others/textile/h08.jpg','assets/others/textile/h03.jpg','assets/others/textile/h06.jpg','assets/others/textile/h09.jpg'], r: 1.414 },
  { kind: 'textile', s: 'tall', info: ['말라카이트 · 피터사이트 · 호피석', 'Textile · Weaving'], images: ['assets/others/textile/w01.jpg','assets/others/textile/w02.jpg','assets/others/textile/w03.jpg','assets/others/textile/w04.jpg','assets/others/textile/w05.jpg','assets/others/textile/w06.jpg'], r: 1.333 },
  { kind: 'motion', s: 'wide', info: ['동물 친구들', 'Motion Graphic'], images: [], poster: 'assets/others/motion/mid.jpg', video: 'assets/others/motion/mid.mp4', r: .5625 }
];

// image height/width ratios (generated) — used to pick a preview grid that doesn't crop badly
window.IMG_R = {"assets/others/graphic/01.jpg": 1.4111, "assets/others/graphic/b01.jpg": 1.4138, "assets/others/graphic/b02.jpg": 1.5, "assets/others/graphic/b03.jpg": 0.7064, "assets/others/graphic/b04.jpg": 0.6087, "assets/others/graphic/b05.jpg": 3.0, "assets/others/graphic/b06.jpg": 2.994, "assets/others/motion/final.jpg": 0.5633, "assets/others/motion/mid.jpg": 0.5633, "assets/others/pkg/01.jpg": 1.3333, "assets/others/pkg/02.jpg": 0.75, "assets/others/pkg/03.jpg": 1.3333, "assets/others/pkg/04.jpg": 1.3333, "assets/others/pkg/05.jpg": 1.3333, "assets/others/pkg/06.jpg": 1.3333, "assets/others/pkg/07.jpg": 1.3333, "assets/others/pkg/08.jpg": 1.3333, "assets/others/pkg/09.jpg": 1.3333, "assets/others/pkg/10.jpg": 1.3333, "assets/others/scarf/a01.jpg": 8.982, "assets/others/scarf/a02.jpg": 1.0, "assets/others/scarf/a03.jpg": 1.145, "assets/others/scarf/a04.jpg": 1.5625, "assets/others/scarf/b01.jpg": 2.1186, "assets/others/scarf/b02.jpg": 1.7442, "assets/others/scarf/b03.jpg": 1.7422, "assets/others/scarf/b04.jpg": 1.7422, "assets/others/scarf/b05.jpg": 1.7422, "assets/others/scarf/b06.jpg": 1.7422, "assets/others/scarf/c01.jpg": 1.655, "assets/others/scarf/c02.jpg": 0.5947, "assets/others/scarf/c03.jpg": 1.5576, "assets/others/scarf/c04.jpg": 1.7422, "assets/others/scarf/c05.jpg": 1.5957, "assets/others/scarf/d01.jpg": 1.1202, "assets/others/scarf/d02.jpg": 1.1202, "assets/others/scarf/d03.jpg": 1.1202, "assets/others/scarf/d04.jpg": 0.668, "assets/others/scarf/d05.jpg": 0.75, "assets/others/textile/h01.jpg": 1.4138, "assets/others/textile/h02.jpg": 1.4138, "assets/others/textile/h03.jpg": 1.4138, "assets/others/textile/h04.jpg": 1.3736, "assets/others/textile/h05.jpg": 1.1364, "assets/others/textile/h06.jpg": 1.2156, "assets/others/textile/h07.jpg": 1.3339, "assets/others/textile/h08.jpg": 1.3339, "assets/others/textile/h09.jpg": 1.25, "assets/others/textile/w01.jpg": 1.3333, "assets/others/textile/w02.jpg": 1.5, "assets/others/textile/w03.jpg": 1.3333, "assets/others/textile/w04.jpg": 1.0, "assets/others/textile/w05.jpg": 1.3514, "assets/others/textile/w06.jpg": 1.3329, "assets/others/tie/b01.jpg": 1.0121, "assets/others/tie/b02.jpg": 1.3333, "assets/others/tie/b03.jpg": 0.9913, "assets/others/tie/b04.jpg": 1.0007, "assets/others/tie/b05.jpg": 1.1424, "assets/others/tie/b06.jpg": 1.1321, "assets/others/tie/b07.jpg": 1.2, "assets/others/tie/o01.jpg": 1.3333, "assets/others/tie/o02.jpg": 1.2185, "assets/others/tie/o03.jpg": 1.268, "assets/others/tie/o04.jpg": 1.3333, "assets/others/tie/o05.jpg": 1.3333, "assets/others/tie/o06.jpg": 0.8987, "assets/others/tie/o07.jpg": 1.2417};

(function () {
  const C = SHAPE_COLORS;
  const KIND = { package: ['square', C.ink], surface: ['circle', C.blue], graphic: ['pentagon', C.green], motion: ['triangle', C.pink], textile: ['star', C.sky] };
  const colOf = w => w.col ? C[w.col] : KIND[w.kind][1];   // a work can carry its own spine colour (the orange tie)
  const g = document.getElementById('gallery'), $ = id => document.getElementById(id);
  const ytId = u => { const m = (u || '').match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/); return m && m[1]; };
  const hasImg = w => w.images && w.images.length;
  const tint = (w, op) => `color-mix(in srgb, ${colOf(w)} ${op}%, var(--paper))`;

  // ---------- bookshelf: every work is a book; hover pulls it out and its cover turns toward you ----------
  const BW = { package: 96, surface: 62, graphic: 76, motion: 84, textile: 70 };      // spine width by category
  const BH = [340, 316, 300, 332, 346, 310, 324, 296, 314, 340, 328, 304];          // spine heights (repeat)
  const SHADE = [0, 14, 0, 22, 8, 0, 18, 0, 10, 0, 20, 6];                          // mix a little paper in so neighbours differ
  const ink = w => (w.kind === 'textile' || w.col === 'orange') ? '#111111' : '#FFFFFF';
  const coverSrc = w => hasImg(w) ? w.images[0] : w.poster || '';
  const coverR = w => IMG_R[coverSrc(w)] || w.r || 1.3;
  const head = document.createElement('header'); head.className = 'sh-head';
  head.innerHTML = '<h1>Others</h1><p class="kr">무슨 책을 읽으실 건가요?</p>';
  const shelf = document.createElement('div'); shelf.className = 'shelf';
  const pull = document.createElement('div'); pull.className = 'pull'; pull.setAttribute('aria-hidden', 'true');
  // an open book: the front cover swings open to the left (its inside = page 1), the right page = page 2
  pull.innerHTML = '<div class="hb"><div class="hb-front"><img alt=""><video muted loop playsinline preload="none"></video><div class="band"><span class="ln"></span><b class="kr"></b><i></i></div></div><div class="hb-edge"></div></div>';
  g.append(head, shelf, pull);
  // shelf order (set by hand). Series stand together: the three scarves, and the two ties (Orange → Blue).
  // Otherwise no two same-colour spines side by side, and blue never next to sky. Indices point into OTHERS.
  const ORDER = [0, 1, 2, 3, 4, 6, 7, 8, 5, 9, 11, 10].filter(i => OTHERS[i]);
  OTHERS.forEach((w, i) => ORDER.includes(i) || ORDER.push(i));   // a newly added work goes to the end
  const NO = {}; ORDER.forEach((i, k) => NO[i] = k + 1);
  const books = ORDER.map(i => [OTHERS[i], i]).map(([w, i]) => {
    const b = document.createElement('button'); b.className = 'bk'; b.type = 'button';
    b.style.setProperty('--c', `color-mix(in srgb, ${colOf(w)} ${w.col ? 100 : 100 - SHADE[(NO[i] - 1) % SHADE.length]}%, #F3F1EC)`); b.style.color = ink(w);
    b.dataset.w = BW[w.kind]; b.dataset.h = BH[(NO[i] - 1) % BH.length];
    b.setAttribute('aria-label', w.info ? w.info.join(' — ') : 'work ' + (i + 1));
    b.innerHTML = `<span class="no">${String(NO[i]).padStart(2, '0')}</span><span class="tt kr">${w.info ? w.info[0] : ''}</span><span class="sh">${SHAPE_SVG(KIND[w.kind][0], ink(w))}</span>`;
    b.addEventListener('click', () => { hide(); openBook(i, b); });
    if (matchMedia('(hover:hover)').matches) { b.addEventListener('pointerenter', () => { preload(w); show(i, b); }); b.addEventListener('pointerleave', hide); b.addEventListener('focus', () => show(i, b)); b.addEventListener('blur', hide); }
    return b;
  });
  // fill the shelves: as many books per row as fit (max 10), a category shape as the bookend
  const ENDS = [['square', C.ink], ['quarter', C.lav], ['circle', C.blue], ['triangle', C.pink]];
  function build() {
    const wide = innerWidth > 900, s = wide ? 1 : .72, gap = wide ? 8 : 5, room = shelf.clientWidth - (wide ? 160 : 70);
    shelf.innerHTML = ''; let row = null, used = 0, n = 0, r = 0;
    const fit = Math.max(3, Math.min(10, Math.floor(room / ((70 * s) + gap)))), per = wide ? Math.min(fit, Math.max(8, Math.ceil(books.length / Math.ceil(books.length / fit)))) : Math.ceil(books.length / Math.ceil(books.length / fit));   // 8–10 books a shelf on desktop
    const newRow = () => { if (row) end(); row = document.createElement('div'); row.className = 'shelf-row'; shelf.appendChild(row); used = 0; n = 0; };
    const end = () => { const e = document.createElement('span'); const [k, c] = ENDS[r++ % ENDS.length]; e.className = 'bookend ' + k; e.innerHTML = SHAPE_SVG(k, c); row.appendChild(e); };
    books.forEach(b => {
      const w = +b.dataset.w * s, h = +b.dataset.h * s;
      if (!row || used + w > room || n >= per) newRow();
      b.style.width = w + 'px'; b.style.height = h + 'px'; row.appendChild(b); used += w + gap; n++;
      const tt = b.querySelector('.tt'), sh = b.querySelector('.sh'); tt.style.fontSize = ''; const max = sh.offsetTop - tt.offsetTop - 8;   // title must end above the shape
      for (let f = wide ? 13 : 11; tt.scrollHeight > max && f > 8; f--) tt.style.fontSize = f - 1 + 'px';
    });
    end();
  }
  build(); if (document.fonts) document.fonts.ready.then(build);   // re-fit spine titles once the web font has loaded
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 120); });
  requestAnimationFrame(() => g.classList.add('in'));

  // the pulled book, standing: its front cover is the work, with a white belly band carrying the title
  const pImg = pull.querySelector('img'), pVid = pull.querySelector('video'); let vt;
  const fillBand = (el, w) => { el.querySelector('.ln').textContent = w.info ? w.info[1] : ''; el.querySelector('b').textContent = w.info ? w.info[0] : ''; el.querySelector('i').innerHTML = SHAPE_SVG(KIND[w.kind][0], colOf(w)); };
  function show(i, b) {
    const w = OTHERS[i], src = coverSrc(w);
    books.forEach(x => x.classList.toggle('on', x === b));
    pull.classList.remove('show'); void pull.offsetWidth;
    pull.style.setProperty('--c', b.style.getPropertyValue('--c'));
    const cw = innerWidth > 900 ? 210 : 150, ch = Math.round(cw * 1.42);
    pull.style.setProperty('--cw', cw + 'px'); pull.style.setProperty('--ch', ch + 'px');
    pImg.src = src; fillBand(pull, w);
    pVid.removeAttribute('src'); pVid.load(); pull.classList.remove('playing'); clearTimeout(vt);
    if (w.video && /\.mp4$/.test(w.video)) vt = setTimeout(() => { pVid.src = w.video; pVid.play().catch(() => {}); pull.classList.add('playing'); }, 3000);   // motion plays after a 3s hover
    const gr = g.getBoundingClientRect(), br = b.getBoundingClientRect(), W = cw + 26;
    let x = br.right - gr.left + 16, flip = false; if (x + W > gr.width - 10) { x = br.left - gr.left - W - 16; flip = true; }
    const y = br.top - gr.top - 36 + br.height - ch;                 // stands on the same shelf line as the lifted spine
    pull.style.left = x + 'px'; pull.style.top = Math.max(y, 90) + 'px'; pull.classList.toggle('flip', flip);
    requestAnimationFrame(() => pull.classList.add('show'));
  }
  function hide() { books.forEach(x => x.classList.remove('on')); pull.classList.remove('show', 'playing'); clearTimeout(vt); pVid.pause(); }

  // viewer
  const V = $('viewer'), stage = $('vStage'), dots = $('vDots'), vinfo = $('vInfo'); let wi = 0, si = 0;
  function slides(w) { const S = []; if (hasImg(w)) w.images.forEach(s => S.push({ img: s })); if (w.video) S.push({ video: w.video }); else if (!S.length) for (let k = 0; k < (w.n || 1); k++) S.push({ ph: true }); return S; }
  const cache = {};
  const preload = w => (w.images || []).forEach(src => { if (!cache[src]) { const im = new Image(); im.decoding = 'async'; im.src = src; cache[src] = im; } });
  function open(i) { wi = i; si = 0; preload(OTHERS[i]); V.hidden = false; requestAnimationFrame(() => V.classList.add('show')); document.body.style.overflow = 'hidden'; render(); }
  function close() { V.classList.remove('show'); document.body.style.overflow = ''; setTimeout(() => { V.hidden = true; stage.innerHTML = ''; }, 450); }
  function embed(u) { const y = ytId(u); if (y) return `<iframe class="${/shorts/.test(u) ? 'tall' : ''}" src="https://www.youtube.com/embed/${y}?autoplay=1&rel=0&playsinline=1" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>`;
    const v = u.match(/vimeo\.com\/(\d+)/); if (v) return `<iframe src="https://player.vimeo.com/video/${v[1]}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`; return `<video src="${u}" controls autoplay playsinline></video>`; }
  function render() {
    const w = OTHERS[wi], S = slides(w), s = S[si];
      stage.innerHTML = s.video ? embed(s.video) : s.img ? `<img src="${s.img}" alt="">` : `<div class="ph" style="aspect-ratio:${w.kind === 'motion' ? '16/9' : '1/' + w.r};background:${tint(w, 30)}">${w.kind === 'motion' ? '<i class="g-play big"></i>' : ''}</div>`;
    stage.classList.remove('pop'); void stage.offsetWidth; stage.classList.add('pop');
    dots.innerHTML = S.length > 1 ? S.map((_, k) => `<button class="${k === si ? 'on' : ''}" aria-label="${k + 1}"></button>`).join('') : '';
    dots.querySelectorAll('button').forEach((b, k) => b.onclick = () => { si = k; render(); });
    vinfo.innerHTML = w.info ? `<span class="g-info show">${SHAPE_SVG(KIND[w.kind][0], colOf(w))}<span class="g-tip"><b>${w.info[0]}</b>${w.info[1] || ''}</span></span>` : '';
    $('vPrev').style.visibility = $('vNext').style.visibility = S.length > 1 ? 'visible' : 'hidden';
  }
  const step = d => { const S = slides(OTHERS[wi]); si = (si + d + S.length) % S.length; render(); };
  $('vPrev').onclick = () => step(-1); $('vNext').onclick = () => step(1); $('vClose').onclick = close;
  V.addEventListener('click', e => { if (e.target === V) close(); });
  addEventListener('keydown', e => { if (V.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); });
  let tx = 0; V.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  V.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });

  // ---------- click: the book is pulled off the shelf, comes forward, and opens; pages turn like a real book ----------
  const RD = document.createElement('div'); RD.className = 'reader'; RD.hidden = true;
  RD.innerHTML = '<button class="rd-x" aria-label="Close">Close</button><div class="rd-book"><div class="rd-pages"><div class="rd-p l"></div><div class="rd-p r"></div></div>'
    + '<div class="rd-leaf"><div class="lf-f"></div><div class="lf-b"></div></div>'
    + '<div class="rd-lid"><div class="face"><img alt=""><div class="band"><span class="ln"></span><b class="kr"></b><i></i></div></div><div class="back"></div></div></div>'
    + '<div class="rd-nav"><button class="rd-prev" aria-label="Previous">←</button><span class="rd-cnt"></span><button class="rd-next" aria-label="Next">→</button></div>';
  document.body.appendChild(RD);
  const rb = RD.querySelector('.rd-book'), lid = RD.querySelector('.rd-lid'), leaf = RD.querySelector('.rd-leaf'), PL = RD.querySelector('.rd-p.l'), PR = RD.querySelector('.rd-p.r');
  let bk = null, items = [], sp = 0, per = 2, from = null, busy = false;
  const page = it => !it ? '' : it.title ? `<div class="rd-tp"><span class="no">${String(it.no).padStart(2, '0')}</span><i>${SHAPE_SVG(KIND[it.title.kind][0], colOf(it.title))}</i><b class="kr">${it.title.info[0]}</b><span>${it.title.info[1]}</span></div>` : it.video ? (ytId(it.video) ? `<iframe class="${/shorts/.test(it.video) ? 'tall' : ''}" src="https://www.youtube.com/embed/${ytId(it.video)}?rel=0&playsinline=1" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>` : `<video src="${it.video}" controls playsinline></video>`) : `<img src="${it.img}" alt="">`;
  function size() {
    per = innerWidth < 760 ? 1 : 2;
    const H = Math.min(innerHeight - 150, 900), P = Math.min(per === 2 ? (innerWidth * .94) / 2 : innerWidth * .92, H / (per === 2 ? 1.22 : 1.3));   // big: the work is the point
    rb.style.setProperty('--P', P + 'px'); rb.style.setProperty('--H', H + 'px'); RD.classList.toggle('single', per === 1);
  }
  function fill() {
    const a = items[sp * per], b2 = per === 2 ? items[sp * per + 1] : null;
    if (per === 2) { PL.innerHTML = page(a); PR.innerHTML = page(b2); } else { PR.innerHTML = page(a); PL.innerHTML = ''; }
    const n = Math.ceil(items.length / per);
    RD.querySelector('.rd-cnt').textContent = `${String(sp + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
    RD.querySelector('.rd-prev').style.visibility = sp > 0 ? 'visible' : 'hidden'; RD.querySelector('.rd-next').style.visibility = sp < n - 1 ? 'visible' : 'hidden';
  }
  function openBook(i, b) {
    const w = OTHERS[i]; bk = b; from = b.getBoundingClientRect(); sp = 0; busy = true;
    items = (w.images || []).map(img => ({ img })); if (w.video) items.push({ video: w.video }); if (!items.length && w.poster) items.push({ img: w.poster });
    if (innerWidth >= 760) items.unshift({ title: w, no: NO[i] });   // the first left page is a title page, like the inside of a cover
    preload(w); size();
    rb.style.setProperty('--c', b.style.getPropertyValue('--c')); rb.style.color = ''; lid.querySelector('.face').style.color = b.style.color;
    lid.querySelector('.face img').src = coverSrc(w); fillBand(lid, w);
    fill(); RD.hidden = false; RD.className = 'reader' + (per === 1 ? ' single' : ''); b.classList.add('gone'); document.body.style.overflow = 'hidden';
    // 1 · the spine leaves the shelf: start the closed book on top of the spine, then fly to the centre
    const r = rb.getBoundingClientRect(), P = parseFloat(rb.style.getPropertyValue('--P')), H = parseFloat(rb.style.getPropertyValue('--H'));
    const cx = r.left + r.width / 2 + (per === 2 ? P / 2 : 0), cy = r.top + r.height / 2;     // centre of the closed book (right page)
    const sx = from.width / P, sy = from.height / H;
    rb.style.transition = 'none';
    rb.style.transform = `translate(${from.left + from.width / 2 - cx + (per === 2 ? -P / 2 : 0)}px, ${from.top + from.height / 2 - cy}px) scale(${sx}, ${sy})`;
    void rb.offsetWidth; RD.classList.add('in');
    rb.style.transition = 'transform .55s cubic-bezier(.3,.7,.15,1)'; rb.style.transform = per === 2 ? `translateX(${-P / 2}px)` : 'none';
    // 2 · the cover swings open
    setTimeout(() => { RD.classList.add('open'); if (per === 2) rb.style.transform = 'none'; }, 560);
    setTimeout(() => { busy = false; }, 1100);
  }
  function turn(d) {
    const n = Math.ceil(items.length / per); if (busy || sp + d < 0 || sp + d >= n) return; busy = true;
    const nxt = sp + d, a = items[nxt * per], b2 = per === 2 ? items[nxt * per + 1] : null;
    const F = leaf.querySelector('.lf-f'), B = leaf.querySelector('.lf-b');
    leaf.className = 'rd-leaf ' + (d > 0 ? 'fwd' : 'bwd');
    if (per === 1) { F.innerHTML = PR.innerHTML; B.innerHTML = ''; PR.innerHTML = page(a); }
    else if (d > 0) { F.innerHTML = PR.innerHTML; B.innerHTML = page(a); PR.innerHTML = page(b2); }
    else { F.innerHTML = PL.innerHTML; B.innerHTML = page(b2); PL.innerHTML = page(a); }
    void leaf.offsetWidth; leaf.classList.add('go');
    setTimeout(() => { sp = nxt; fill(); leaf.className = 'rd-leaf'; F.innerHTML = B.innerHTML = ''; busy = false; }, 520);
  }
  function closeBook() {
    if (RD.hidden || busy) return; busy = true; RD.querySelectorAll('video').forEach(v => v.pause());
    RD.classList.remove('open');
    const P = parseFloat(rb.style.getPropertyValue('--P')), H = parseFloat(rb.style.getPropertyValue('--H'));
    setTimeout(() => {
      const f = bk.getBoundingClientRect(), r = rb.getBoundingClientRect();
      const cx = r.left + r.width / 2 + (per === 2 ? P / 2 : 0), cy = r.top + r.height / 2;
      rb.style.transform = `translate(${f.left + f.width / 2 - cx + (per === 2 ? -P / 2 : 0)}px, ${f.top + f.height / 2 - cy}px) scale(${f.width / P}, ${f.height / H})`;
      RD.classList.remove('in');
    }, 380);
    setTimeout(() => { RD.hidden = true; bk.classList.remove('gone'); document.body.style.overflow = ''; PL.innerHTML = PR.innerHTML = ''; rb.style.transform = ''; busy = false; }, 950);
  }
  RD.querySelector('.rd-next').onclick = () => turn(1); RD.querySelector('.rd-prev').onclick = () => turn(-1); RD.querySelector('.rd-x').onclick = closeBook;
  RD.addEventListener('click', e => { if (e.target === RD) closeBook(); });
  rb.addEventListener('click', e => { if (!RD.classList.contains('open') || e.target.closest('video,iframe')) return; const r = rb.getBoundingClientRect(); turn(e.clientX > r.left + r.width / 2 ? 1 : -1); });
  addEventListener('keydown', e => { if (RD.hidden) return; if (e.key === 'Escape') closeBook(); if (e.key === 'ArrowRight') turn(1); if (e.key === 'ArrowLeft') turn(-1); });
  let rtx = 0; RD.addEventListener('touchstart', e => rtx = e.touches[0].clientX, { passive: true });
  RD.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - rtx; if (Math.abs(d) > 50) turn(d < 0 ? 1 : -1); });
})();
