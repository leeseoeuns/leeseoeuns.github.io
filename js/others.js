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

  // hover preview: several images in a grid whose cells match the images' shape (little cropping)
  const SPAN = { big: [2, 2], tall: [1, 2], wide: [2, 1] }, ROW = 1.1;   // row height = 1.1 × column width
  const LAY = [ // name, cell shapes as multiples of the tile ratio
    ['q4', [1, 1, 1, 1]], ['l3', [2, 1, 1]],   // at most 4 images per preview
    ['c4', [4, 4, 4, 4]], ['c3', [3, 3, 3]], ['c2', [2, 2]], ['r3', [1 / 3, 1 / 3, 1 / 3]], ['r2', [.5, .5]]];
  function layout(w) {
    if (!hasImg(w) || w.images.length < 2) return null;
    const [c, r] = SPAN[w.s] || [1, 1], cr = ROW * r / c;
    let best = null;
    for (const [name, cells] of LAY) {
      if (w.images.length < cells.length) continue;
      const used = new Set(), pick = [];
      let err = 0, worst = 0;
      for (const m of cells) {
        let bi = -1, be = 9;
        w.images.forEach((src, j) => { if (used.has(j)) return; const e = Math.abs(Math.log((IMG_R[src] || 1) / (m * cr))); if (e < be - .02) { be = e; bi = j; } });
        used.add(bi); pick.push(w.images[bi]); err += be; worst = Math.max(worst, be);
      }
      const score = err / cells.length - .035 * Math.min(cells.length, 6);
      if (worst < .42 && (!best || score < best.score)) best = { name, imgs: pick, score };
    }
    return best;
  }

  OTHERS.forEach((w, i) => {
    const el = document.createElement('figure'); el.className = 'g-item' + (w.s ? ' s-' + w.s : ''); el.tabIndex = 0; el.style.setProperty('--i', i);
    const L = layout(w);
    const yt = w.video && ytId(w.video);
    const main = !hasImg(w) && w.poster ? `<img src="${w.poster}" alt="" loading="lazy" style="aspect-ratio:1/${w.r};object-fit:cover">` : !hasImg(w) && yt ? `<img src="https://i.ytimg.com/vi/${yt}/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.background='${tint(w, 16)}';this.removeAttribute('src')" style="aspect-ratio:1/${w.r};object-fit:cover">` : hasImg(w) ? `<img src="${w.images[0]}" alt="${w.info ? w.info[0] : ''}" loading="lazy">` : `<div class="ph" style="aspect-ratio:1/${w.r};background:${tint(w, 16)}"></div>`;
    const prev = L ? `<div class="g-prev ${L.name}">` + L.imgs.map(src => `<span><img src="${src}" alt="" loading="lazy"></span>`).join('') + '</div>' : '';
    if (L) el.classList.add('has-prev');
    // motion: a muted loop plays once the cover lifts
    const vid = w.video && !yt && /\.mp4$/.test(w.video) ? `<video class="g-vid" src="${w.video}" muted loop playsinline preload="none"></video>` : '';
    const play = (w.kind === 'motion' || (w.video && !hasImg(w))) ? '<i class="g-play"></i>' : '';
    const info = w.info ? `<span class="g-info" tabindex="0" aria-label="${w.info[0]}">${SHAPE_SVG(KIND[w.kind][0], KIND[w.kind][1])}<span class="g-tip"><b>${w.info[0]}</b>${w.info[1] || ''}</span></span>` : '';
    // closed state: a colour block with the category shape covers the work, like a drawer front
    const cover = `<div class="g-cover" style="background:${tint(w, 18)}"><span class="g-shape">${SHAPE_SVG(KIND[w.kind][0], KIND[w.kind][1])}</span></div>`;
    el.innerHTML = main + prev + vid + play + cover + info;
    const v = el.querySelector('.g-vid'); let vt;
    if (v) { el.addEventListener('mouseenter', () => { vt = setTimeout(() => { v.currentTime = 0; v.play().catch(() => {}); el.classList.add('playing'); }, 3000); });   // plays only after a 3s hover
      el.addEventListener('mouseleave', () => { clearTimeout(vt); v.pause(); el.classList.remove('playing'); }); }
    el.addEventListener('click', e => { if (e.target.closest('.g-info')) return; setTimeout(() => open(i), 90); });
    el.addEventListener('pointerenter', () => preload(w), { once: true });   // fetch the full set while hovering, so the viewer opens instantly
    el.addEventListener('keydown', e => { if (e.key === 'Enter') open(i); });
    g.appendChild(el);
  });
  g.querySelectorAll('.g-item').forEach((el, k) => setTimeout(() => el.classList.add('in'), 120 + k * 70));

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
