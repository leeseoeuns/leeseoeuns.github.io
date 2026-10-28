/* Others — gallery data. Fill `images` with paths (assets/others/...) and it renders them.
   info: [title, line]  → shows the little shape + hover note. Leave info null to hide the shape.
   kind: package | surface | graphic | motion | textile   (decides the shape + colour)
   video: mp4 path or YouTube/Vimeo URL for motion work.
   r: placeholder ratio (height / width) used until real images are added. */
window.OTHERS = [
  { kind: 'package', info: ['바스리후레 패키지 리디자인', 'Package Design · 2026'], images: ['assets/others/pkg/01.jpg','assets/others/pkg/03.jpg','assets/others/pkg/04.jpg','assets/others/pkg/05.jpg','assets/others/pkg/08.jpg','assets/others/pkg/09.jpg','assets/others/pkg/10.jpg','assets/others/pkg/02.jpg','assets/others/pkg/06.jpg','assets/others/pkg/07.jpg'], r: 1.333 },
  { kind: 'surface', info: ['트윌리 · 스퀘어 스카프', 'Surface Design · 실물 제작 · 착용 촬영'], images: ['assets/others/scarf/b02.jpg','assets/others/scarf/a02.jpg','assets/others/scarf/a01.jpg','assets/others/scarf/a03.jpg','assets/others/scarf/a04.jpg','assets/others/scarf/b06.jpg','assets/others/scarf/b01.jpg','assets/others/scarf/b04.jpg','assets/others/scarf/b03.jpg','assets/others/scarf/b05.jpg'], r: 1.742 },
  { kind: 'surface', info: ['트라이앵글 스카프', 'Surface Design · 착용 이미지는 합성 목업'], images: ['assets/others/scarf/c02.jpg','assets/others/scarf/c01.jpg','assets/others/scarf/c03.jpg','assets/others/scarf/c04.jpg','assets/others/scarf/c05.jpg'], r: .595 },
  { kind: 'surface', info: ['스카프 패턴 응용 제품', 'Surface Design · 패키지 · 노트 목업'], images: ['assets/others/scarf/d05.jpg','assets/others/scarf/d01.jpg','assets/others/scarf/d02.jpg','assets/others/scarf/d03.jpg','assets/others/scarf/d04.jpg'], r: .75 },
  { kind: 'graphic', info: ['균형', 'Graphic Design · Poster'], images: ['assets/others/graphic/01.jpg'], r: 1.411 },
  { kind: 'graphic', info: ['포스터 · 리플렛', 'Graphic Design · 모션 포스터 포함'], images: [], video: 'https://youtube.com/shorts/wv9fSH_8VlI', r: 1.4, n: 3 },
  { kind: 'motion', info: ['모션그래픽 01', 'Motion Graphic'], images: [], video: '', r: .5625, n: 1 },
  { kind: 'surface', info: ['넥타이 디자인', 'Surface Design'], images: [], r: 1.33, n: 2 },
  { kind: 'textile', info: ['Weaving · Handwoven', 'Textile · 6 pieces'], images: [], r: .75, n: 6 },
  { kind: 'motion', info: ['모션그래픽 02', 'Motion Graphic'], images: [], video: '', r: .5625, n: 1 },
  { kind: 'motion', info: ['모션그래픽 03', 'Motion Graphic'], images: [], video: '', r: .75, n: 1 }
];

(function () {
  const C = SHAPE_COLORS;
  const KIND = { package: ['square', C.ink], surface: ['circle', C.blue], graphic: ['pentagon', C.green], motion: ['triangle', C.pink], textile: ['star', C.orange] };
  const g = document.getElementById('gallery'), $ = id => document.getElementById(id);
  const ytId = u => { const m = (u || '').match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/); return m && m[1]; };
  const hasImg = w => w.images && w.images.length;
  const tint = (w, op) => `color-mix(in srgb, ${KIND[w.kind][1]} ${op}%, var(--paper))`;

  // preview layout on hover: 2–4 cells, picked by how many images and their orientation
  function cells(w) { if (!hasImg(w) && w.video) return 0; const n = hasImg(w) ? w.images.length - 1 : (w.n || 1); if (n < 2) return 0; if (n === 2) return 2; return w.r >= 1 ? 3 : 4; }

  OTHERS.forEach((w, i) => {
    const el = document.createElement('figure'); el.className = 'g-item'; el.tabIndex = 0; el.style.setProperty('--i', i);
    const k = cells(w);
    const yt = w.video && ytId(w.video);
    const main = !hasImg(w) && yt ? `<img src="https://i.ytimg.com/vi/${yt}/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.background='${tint(w, 16)}';this.removeAttribute('src')" style="aspect-ratio:1/${w.r};object-fit:cover">` : hasImg(w) ? `<img src="${w.images[0]}" alt="${w.info ? w.info[0] : ''}" loading="lazy">` : `<div class="ph" style="aspect-ratio:1/${w.r};background:${tint(w, 16)}"></div>`;
    let prev = '';
    if (k) { prev = `<div class="g-prev c${k}">` + Array.from({ length: k }, (_, j) => hasImg(w) && w.images[j + 1] ? `<img src="${w.images[j + 1]}" alt="" loading="lazy">` : `<span style="background:${tint(w, 22 + j * 8)}"></span>`).join('') + '</div>'; }
    const play = (w.kind === 'motion' || w.video) ? '<i class="g-play"></i>' : '';
    const info = w.info ? `<span class="g-info" tabindex="0" aria-label="${w.info[0]}">${SHAPE_SVG(KIND[w.kind][0], KIND[w.kind][1])}<span class="g-tip"><b>${w.info[0]}</b>${w.info[1] || ''}</span></span>` : '';
    el.innerHTML = main + prev + play + info;
    el.addEventListener('click', e => { if (e.target.closest('.g-info')) return; setTimeout(() => open(i), 90); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') open(i); });
    g.appendChild(el);
  });
  g.querySelectorAll('.g-item').forEach((el, k) => setTimeout(() => el.classList.add('in'), 120 + k * 70));

  // viewer
  const V = $('viewer'), stage = $('vStage'), dots = $('vDots'), vinfo = $('vInfo'); let wi = 0, si = 0;
  function slides(w) { const S = []; if (w.video) S.push({ video: w.video }); if (hasImg(w)) w.images.forEach(s => S.push({ img: s })); else if (!w.video) for (let k = 0; k < (w.n || 1); k++) S.push({ ph: true }); return S; }
  function open(i) { wi = i; si = 0; V.hidden = false; requestAnimationFrame(() => V.classList.add('show')); document.body.style.overflow = 'hidden'; render(); }
  function close() { V.classList.remove('show'); document.body.style.overflow = ''; setTimeout(() => { V.hidden = true; stage.innerHTML = ''; }, 450); }
  function embed(u) { const y = ytId(u); if (y) return `<iframe class="${/shorts/.test(u) ? 'tall' : ''}" src="https://www.youtube.com/embed/${y}?autoplay=1&rel=0&playsinline=1" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>`;
    const v = u.match(/vimeo\.com\/(\d+)/); if (v) return `<iframe src="https://player.vimeo.com/video/${v[1]}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`; return `<video src="${u}" controls autoplay playsinline></video>`; }
  function render() {
    const w = OTHERS[wi], S = slides(w), s = S[si];
    stage.classList.add('swap');
    setTimeout(() => {
      stage.innerHTML = s.video ? embed(s.video) : s.img ? `<img src="${s.img}" alt="">` : `<div class="ph" style="aspect-ratio:${w.kind === 'motion' ? '16/9' : '1/' + w.r};background:${tint(w, 30)}">${w.kind === 'motion' ? '<i class="g-play big"></i>' : ''}</div>`;
      stage.classList.remove('swap');
    }, 180);
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
