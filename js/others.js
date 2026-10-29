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
  { kind: 'surface', s: 'tall', info: ['넥타이 · Orange', 'Surface Design · 넥타이 디자인 · 착용 촬영'], images: ['assets/others/tie/o03.jpg','assets/others/tie/o01.jpg','assets/others/tie/o02.jpg','assets/others/tie/o04.jpg','assets/others/tie/o05.jpg','assets/others/tie/o06.jpg','assets/others/tie/o07.jpg'], r: 1.333 },
  { kind: 'surface', s: 'tall', info: ['넥타이 · Blue', 'Surface Design · 넥타이 디자인 · 착용 촬영'], images: ['assets/others/tie/b05.jpg','assets/others/tie/b01.jpg','assets/others/tie/b02.jpg','assets/others/tie/b03.jpg','assets/others/tie/b04.jpg','assets/others/tie/b06.jpg','assets/others/tie/b07.jpg'], r: 1.333 },
  { kind: 'textile', s: 'big', info: ['위빙', 'Textile · 손으로 엮은 작품 · 행성을 소재로'], images: ['assets/others/textile/h01.jpg','assets/others/textile/h04.jpg','assets/others/textile/h07.jpg','assets/others/textile/h02.jpg','assets/others/textile/h05.jpg','assets/others/textile/h08.jpg','assets/others/textile/h03.jpg','assets/others/textile/h06.jpg','assets/others/textile/h09.jpg'], r: 1.414 },
  { kind: 'textile', s: 'tall', info: ['말라카이트 · 피터사이트 · 호피석', 'Textile · Weaving'], images: ['assets/others/textile/w01.jpg','assets/others/textile/w02.jpg','assets/others/textile/w03.jpg','assets/others/textile/w04.jpg','assets/others/textile/w05.jpg','assets/others/textile/w06.jpg'], r: 1.333 },
  { kind: 'motion', s: 'wide', info: ['동물 친구들', 'Motion Graphic'], images: [], poster: 'assets/others/motion/mid.jpg', video: 'assets/others/motion/mid.mp4', r: .5625 }
];

// image height/width ratios (generated) — used to pick a preview grid that doesn't crop badly
window.IMG_R = {"assets/others/graphic/01.jpg": 1.4111, "assets/others/graphic/b01.jpg": 1.4138, "assets/others/graphic/b02.jpg": 1.5, "assets/others/graphic/b03.jpg": 0.7064, "assets/others/graphic/b04.jpg": 0.6087, "assets/others/graphic/b05.jpg": 3.0, "assets/others/graphic/b06.jpg": 2.994, "assets/others/motion/final.jpg": 0.5633, "assets/others/motion/mid.jpg": 0.5633, "assets/others/pkg/01.jpg": 1.3333, "assets/others/pkg/02.jpg": 0.75, "assets/others/pkg/03.jpg": 1.3333, "assets/others/pkg/04.jpg": 1.3333, "assets/others/pkg/05.jpg": 1.3333, "assets/others/pkg/06.jpg": 1.3333, "assets/others/pkg/07.jpg": 1.3333, "assets/others/pkg/08.jpg": 1.3333, "assets/others/pkg/09.jpg": 1.3333, "assets/others/pkg/10.jpg": 1.3333, "assets/others/scarf/a01.jpg": 8.982, "assets/others/scarf/a02.jpg": 1.0, "assets/others/scarf/a03.jpg": 1.145, "assets/others/scarf/a04.jpg": 1.5625, "assets/others/scarf/b01.jpg": 2.1186, "assets/others/scarf/b02.jpg": 1.7442, "assets/others/scarf/b03.jpg": 1.7422, "assets/others/scarf/b04.jpg": 1.7422, "assets/others/scarf/b05.jpg": 1.7422, "assets/others/scarf/b06.jpg": 1.7422, "assets/others/scarf/c01.jpg": 1.655, "assets/others/scarf/c02.jpg": 0.5947, "assets/others/scarf/c03.jpg": 1.5576, "assets/others/scarf/c04.jpg": 1.7422, "assets/others/scarf/c05.jpg": 1.5957, "assets/others/scarf/d01.jpg": 1.1202, "assets/others/scarf/d02.jpg": 1.1202, "assets/others/scarf/d03.jpg": 1.1202, "assets/others/scarf/d04.jpg": 0.668, "assets/others/scarf/d05.jpg": 0.75, "assets/others/textile/h01.jpg": 1.4138, "assets/others/textile/h02.jpg": 1.4138, "assets/others/textile/h03.jpg": 1.4138, "assets/others/textile/h04.jpg": 1.3736, "assets/others/textile/h05.jpg": 1.1364, "assets/others/textile/h06.jpg": 1.2156, "assets/others/textile/h07.jpg": 1.3339, "assets/others/textile/h08.jpg": 1.3339, "assets/others/textile/h09.jpg": 1.25, "assets/others/textile/w01.jpg": 1.3333, "assets/others/textile/w02.jpg": 1.5, "assets/others/textile/w03.jpg": 1.3333, "assets/others/textile/w04.jpg": 1.0, "assets/others/textile/w05.jpg": 1.3514, "assets/others/textile/w06.jpg": 1.3329, "assets/others/tie/b01.jpg": 1.0121, "assets/others/tie/b02.jpg": 1.3333, "assets/others/tie/b03.jpg": 0.9913, "assets/others/tie/b04.jpg": 1.0007, "assets/others/tie/b05.jpg": 1.1424, "assets/others/tie/b06.jpg": 1.1321, "assets/others/tie/b07.jpg": 1.2, "assets/others/tie/o01.jpg": 1.3333, "assets/others/tie/o02.jpg": 1.2185, "assets/others/tie/o03.jpg": 1.268, "assets/others/tie/o04.jpg": 1.3333, "assets/others/tie/o05.jpg": 1.3333, "assets/others/tie/o06.jpg": 0.8987, "assets/others/tie/o07.jpg": 1.2417};

(function () {
  const C = SHAPE_COLORS;
  const KIND = { package: ['square', C.ink], surface: ['circle', C.blue], graphic: ['pentagon', C.green], motion: ['triangle', C.pink], textile: ['star', C.orange] };
  const g = document.getElementById('gallery'), $ = id => document.getElementById(id);
  const ytId = u => { const m = (u || '').match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/); return m && m[1]; };
  const hasImg = w => w.images && w.images.length;
  const tint = (w, op) => `color-mix(in srgb, ${KIND[w.kind][1]} ${op}%, var(--paper))`;

  // ---------- bookshelf: every work is a book; hover pulls it out and its cover turns toward you ----------
  const BW = { package: 96, surface: 62, graphic: 76, motion: 84, textile: 70 };      // spine width by category
  const BH = [340, 316, 300, 332, 346, 310, 324, 296, 314, 340, 328, 304];          // spine heights (repeat)
  const SHADE = [0, 14, 0, 22, 8, 0, 18, 0, 10, 0, 20, 6];                          // mix a little paper in so neighbours differ
  const ink = w => w.kind === 'textile' ? '#111111' : '#FFFFFF';
  const coverSrc = w => hasImg(w) ? w.images[0] : w.poster || '';
  const coverR = w => IMG_R[coverSrc(w)] || w.r || 1.3;
  const head = document.createElement('header'); head.className = 'sh-head';
  head.innerHTML = '<h1>Others</h1><p class="kr">책등을 골라 보세요. 꺼내면 표지가 보여요.</p>';
  const shelf = document.createElement('div'); shelf.className = 'shelf';
  const pull = document.createElement('div'); pull.className = 'pull'; pull.setAttribute('aria-hidden', 'true');
  pull.innerHTML = '<div class="cv"><img alt=""><video muted loop playsinline preload="none"></video></div><div class="cap"><b></b><span></span></div>';
  g.append(head, shelf, pull);
  const books = OTHERS.map((w, i) => {
    const b = document.createElement('button'); b.className = 'bk'; b.type = 'button';
    b.style.setProperty('--c', `color-mix(in srgb, ${KIND[w.kind][1]} ${100 - SHADE[i % SHADE.length]}%, #F3F1EC)`); b.style.color = ink(w);
    b.dataset.w = BW[w.kind]; b.dataset.h = BH[i % BH.length];
    b.setAttribute('aria-label', w.info ? w.info.join(' — ') : 'work ' + (i + 1));
    b.innerHTML = `<span class="no">${String(i + 1).padStart(2, '0')}</span><span class="tt kr">${w.info ? w.info[0] : ''}</span><span class="sh">${SHAPE_SVG(KIND[w.kind][0], ink(w))}</span>`;
    b.addEventListener('click', () => open(i));
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
      const tt = b.querySelector('.tt'); tt.style.fontSize = ''; const max = h - (wide ? 104 : 78);
      for (let f = wide ? 13 : 11; tt.scrollHeight > max && f > 8; f--) tt.style.fontSize = f - 1 + 'px';
    });
    end();
  }
  build(); let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 120); });
  requestAnimationFrame(() => g.classList.add('in'));

  // the pulled-out cover
  const pImg = pull.querySelector('img'), pVid = pull.querySelector('video'); let vt;
  function show(i, b) {
    const w = OTHERS[i], src = coverSrc(w);
    books.forEach(x => x.classList.toggle('on', x === b));
    pull.style.setProperty('--c', b.style.getPropertyValue('--c'));
    const cw = innerWidth > 900 ? 200 : 150, ch = Math.min(cw * coverR(w), cw * 1.45);
    pImg.src = src; pImg.style.height = ch + 'px'; pImg.style.width = cw + 'px';
    pVid.removeAttribute('src'); pVid.load(); pull.classList.remove('playing'); clearTimeout(vt);
    if (w.video && /\.mp4$/.test(w.video)) vt = setTimeout(() => { pVid.src = w.video; pVid.play().catch(() => {}); pull.classList.add('playing'); }, 3000);   // motion plays after a 3s hover
    pull.querySelector('b').textContent = w.info ? w.info[0] : ''; pull.querySelector('.cap span').textContent = w.info ? w.info[1] : '';
    const gr = g.getBoundingClientRect(), br = b.getBoundingClientRect(), W = cw + 14;
    let x = br.right - gr.left - 6, flip = false;
    if (x + W > gr.width - 10) { x = br.left - gr.left - W + 6; flip = true; }
    const y = br.top - gr.top - 36 + br.height * .18 - ch * .35;       // top edge relative to the lifted book
    pull.style.left = x + 'px'; pull.style.top = Math.max(y, 90) + 'px';
    pull.classList.toggle('flip', flip); pull.classList.add('show');
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
    vinfo.innerHTML = w.info ? `<span class="g-info show">${SHAPE_SVG(KIND[w.kind][0], KIND[w.kind][1])}<span class="g-tip"><b>${w.info[0]}</b>${w.info[1] || ''}</span></span>` : '';
    $('vPrev').style.visibility = $('vNext').style.visibility = S.length > 1 ? 'visible' : 'hidden';
  }
  const step = d => { const S = slides(OTHERS[wi]); si = (si + d + S.length) % S.length; render(); };
  $('vPrev').onclick = () => step(-1); $('vNext').onclick = () => step(1); $('vClose').onclick = close;
  V.addEventListener('click', e => { if (e.target === V) close(); });
  addEventListener('keydown', e => { if (V.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); });
  let tx = 0; V.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  V.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });
})();
