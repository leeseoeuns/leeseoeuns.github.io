/* Zero-gravity shape field — organic drift, soft collisions, mouse repel, drag & throw. */
(function () {
  const C = {
    ink: '#111111', blue: '#504AFA', lime: '#8CFB4F', navy: '#0B1C48', orange: '#FF8A00',
    pink: '#E0457B', green: '#00A86B', lav: '#9B7BFF', sky: '#7FB4FF', yellow: '#FFC93C'
  };
  const poly = (n, r, rot = -Math.PI / 2) => Array.from({ length: n }, (_, i) => {
    const a = rot + (i * 2 * Math.PI) / n; return [50 + r * Math.cos(a), 50 + r * Math.sin(a)].map(v => v.toFixed(2)).join(',');
  }).join(' ');
  const star = (n, r1, r2) => Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 ? r2 : r1, a = -Math.PI / 2 + (i * Math.PI) / n; return [50 + r * Math.cos(a), 50 + r * Math.sin(a)].map(v => v.toFixed(2)).join(',');
  }).join(' ');
  const fill = c => `fill="${c}"`, line = c => `fill="none" stroke="${c}" stroke-width="3.2" vector-effect="non-scaling-stroke"`;

  // [svg inner, size(px), collision radius factor]
  const LIB = {
    square:   (c, o) => `<rect x="8" y="8" width="84" height="84" ${o ? line(c) : fill(c)}/>`,
    circle:   (c, o) => `<circle cx="50" cy="50" r="44" ${o ? line(c) : fill(c)}/>`,
    triangle: (c, o) => `<polygon points="${poly(3, 48, -Math.PI / 2)}" transform="translate(0 8)" ${o ? line(c) : fill(c)}/>`,
    pentagon: (c, o) => `<polygon points="${poly(5, 46)}" ${o ? line(c) : fill(c)}/>`,
    hexagon:  (c, o) => `<polygon points="${poly(6, 46, 0)}" ${o ? line(c) : fill(c)}/>`,
    octagon:  (c, o) => `<polygon points="${poly(8, 46, Math.PI / 8)}" ${o ? line(c) : fill(c)}/>`,
    diamond:  (c, o) => `<polygon points="50,4 92,50 50,96 8,50" ${o ? line(c) : fill(c)}/>`,
    half:     (c, o) => `<path d="M6 40 A44 44 0 0 0 94 40 Z" transform="translate(0 6)" ${o ? line(c) : fill(c)}/>`,
    quarter:  (c, o) => `<path d="M10 10 H90 A80 80 0 0 1 10 90 Z" ${o ? line(c) : fill(c)}/>`,
    arch:     (c) => `<path d="M14 86 V50 A36 36 0 0 1 86 50 V86" fill="none" stroke="${c}" stroke-width="12"/>`,
    plus:     (c) => `<path d="M38 8 H62 V38 H92 V62 H62 V92 H38 V62 H8 V38 H38 Z" ${fill(c)}/>`,
    capsule:  (c) => `<rect x="2" y="32" width="96" height="36" rx="18" ${fill(c)}/>`,
    star:     (c) => `<polygon points="${star(5, 48, 22)}" ${fill(c)}/>`,
    ring:     (c) => `<circle cx="50" cy="50" r="38" fill="none" stroke="${c}" stroke-width="10"/>`,
    dot:      (c) => `<circle cx="50" cy="50" r="40" ${fill(c)}/>`,
    line:     (c) => `<line x1="4" y1="50" x2="96" y2="50" stroke="${c}" stroke-width="3"/>`,
    flower:   (c) => `<path d="M50 6 C62 6 64 28 50 38 C64 28 88 34 88 48 C88 60 66 62 56 50 C66 62 62 90 50 92 C38 90 34 62 44 50 C34 62 12 60 12 48 C12 34 36 28 50 38 C36 28 38 6 50 6Z" ${fill(c)}/>`,
    wave:     (c) => `<path d="M4 56 C20 30 34 30 50 50 C66 70 80 70 96 44" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>`
  };

  const SET = [
    ['square', C.ink, 0, 104], ['circle', C.blue, 0, 112], ['triangle', C.pink, 0, 92], ['pentagon', C.lime, 0, 88],
    ['hexagon', C.ink, 1, 84], ['octagon', C.orange, 0, 72], ['diamond', C.navy, 0, 66], ['half', C.green, 0, 104],
    ['quarter', C.blue, 0, 70], ['arch', C.ink, 0, 76], ['plus', C.pink, 0, 72], ['capsule', C.lav, 0, 132],
    ['star', C.orange, 0, 68], ['ring', C.ink, 0, 96], ['dot', C.pink, 0, 30], ['line', C.ink, 0, 170],
    ['square', C.ink, 1, 70], ['triangle', C.ink, 1, 82], ['flower', C.yellow, 0, 80], ['wave', C.sky, 0, 120],
    ['circle', C.lime, 0, 40], ['diamond', C.lav, 1, 50]
  ];

  function svg(kind, color, outline) {
    return `<svg viewBox="0 0 100 100" aria-hidden="true">${LIB[kind](color, outline)}</svg>`;
  }

  class Field {
    constructor(el, opts = {}) {
      this.el = el; this.opts = Object.assign({ count: SET.length, scale: 1, repel: 150, drift: 1 }, opts);
      this.bodies = []; this.mouse = { x: -9999, y: -9999, active: false }; this.grab = null;
      this.reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.resize(); this.spawn(); this.bind();
      this.t0 = performance.now(); this.last = this.t0; this.loop = this.loop.bind(this); requestAnimationFrame(this.loop);
    }
    resize() {
      const r = this.el.getBoundingClientRect(); this.w = r.width; this.h = r.height; this.rect = r;
      this.obs = (this.opts.avoid || []).map(el => { const q = el.getBoundingClientRect(); return { l: q.left - r.left, r: q.right - r.left, t: q.top - r.top, b: q.bottom - r.top }; });
    }
    spawn() {
      const s = this.opts.scale * Math.max(.55, Math.min(1, this.w / 1280));
      SET.slice(0, this.opts.count).forEach(([kind, color, outline, size], i) => {
        const d = document.createElement('div'); d.className = 'shape'; d.innerHTML = svg(kind, color, outline);
        const sz = size * s; d.style.width = d.style.height = sz + 'px'; this.el.appendChild(d);
        const b = {
          el: d, kind, sz, r: sz * (kind === 'line' ? .18 : kind === 'capsule' ? .3 : .44),
          x: Math.random() * (this.w - sz) + sz / 2, y: Math.random() * (this.h - sz) + sz / 2,
          vx: (Math.random() - .5) * 40, vy: (Math.random() - .5) * 40,
          a: Math.random() * 360, av: (Math.random() - .5) * 22,
          ph: Math.random() * 1000, f: .25 + Math.random() * .5, m: (sz * sz) / 6000,
          s: 0, st: 1, // spawn scale anim
          v0: 34 + Math.random() * 34, w0: (Math.random() < .5 ? -1 : 1) * (5 + Math.random() * 16), ht: 9 // cruising speed, spin, time since last bounce
        };
        b.delay = i * 55; this.bodies.push(b);
        d.addEventListener('pointerdown', e => this.down(e, b));
      });
    }
    bind() {
      const move = e => { const p = this.pt(e); this.mouse.x = p.x; this.mouse.y = p.y; this.mouse.active = true; if (this.grab) this.drag(p); };
      window.addEventListener('pointermove', move, { passive: true });
      window.addEventListener('pointerup', () => this.up());
      this.el.addEventListener('pointerleave', () => { this.mouse.active = false; });
      window.addEventListener('resize', () => { this.resize(); });
      document.addEventListener('visibilitychange', () => { this.last = performance.now(); });
    }
    pt(e) { const r = this.el.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    down(e, b) { e.preventDefault(); const p = this.pt(e); this.grab = { b, dx: b.x - p.x, dy: b.y - p.y, hist: [] }; b.el.classList.add('held'); }
    drag(p) { const g = this.grab; const nx = p.x + g.dx, ny = p.y + g.dy; g.hist.push([nx, ny, performance.now()]); if (g.hist.length > 6) g.hist.shift(); g.b.x = nx; g.b.y = ny; }
    up() {
      if (!this.grab) return; const g = this.grab, h = g.hist;
      if (h.length > 1) { const a = h[0], z = h[h.length - 1], dt = Math.max(16, z[2] - a[2]) / 1000; g.b.vx = (z[0] - a[0]) / dt * .6; g.b.vy = (z[1] - a[1]) / dt * .6; g.b.av += (g.b.vx) * .05; }
      g.b.el.classList.remove('held'); this.grab = null;
    }
    boing(b) { if (b.ht > .25) b.ht = 0; }
    // gather all shapes into a neat grid (loading → lobby moment)
    gather(cols = 6, gap = 18) {
      this.gathered = true; const n = this.bodies.length, rows = Math.ceil(n / cols), cell = Math.min(90, (this.w * .6) / cols);
      const x0 = this.w / 2 - (cols - 1) * (cell + gap) / 2, y0 = this.h / 2 - (rows - 1) * (cell + gap) / 2;
      this.bodies.forEach((b, i) => { b.tx = x0 + (i % cols) * (cell + gap); b.ty = y0 + Math.floor(i / cols) * (cell + gap); b.ta = 0; });
    }
    release() { this.gathered = false; this.bodies.forEach(b => { b.vx += (Math.random() - .5) * 260; b.vy += (Math.random() - .5) * 260; b.av += (Math.random() - .5) * 120; }); }
    loop(now) {
      let dt = Math.min(.033, (now - this.last) / 1000); this.last = now; const t = (now - this.t0) / 1000;
      if (this.reduced) dt *= .25;
      const B = this.bodies, W = this.w, H = this.h, M = this.mouse, R = this.opts.repel;
      for (const b of B) {
        if (now - this.t0 > b.delay) b.s += (1 - b.s) * .08;
        if (this.grab && this.grab.b === b) { b.vx = b.vy = 0; continue; }
        if (this.gathered) { b.vx += (b.tx - b.x) * 9 * dt; b.vy += (b.ty - b.y) * 9 * dt; b.vx *= .86; b.vy *= .86; b.av = 0; const n = ((b.a % 360) + 360) % 360, diff = n > 180 ? 360 - n : -n; b.a += diff * .08; }
        else {
          // organic wander: layered sines feel like currents
          const k = this.opts.drift * 14;
          b.vx += (Math.sin(t * b.f + b.ph) + Math.sin(t * b.f * 2.3 + b.ph * 1.7) * .5) * k * dt;
          b.vy += (Math.cos(t * b.f * .9 + b.ph * 1.3) + Math.cos(t * b.f * 1.7 + b.ph) * .5) * k * dt;
          b.av += Math.sin(t * .4 + b.ph) * 6 * dt;
          if (M.active) {
            const dx = b.x - M.x, dy = b.y - M.y, d = Math.hypot(dx, dy);
            if (d < R + b.r && d > .1) { const f = (1 - d / (R + b.r)) * 900 / Math.sqrt(b.m + .4); b.vx += dx / d * f * dt; b.vy += dy / d * f * dt; b.av += (dx > 0 ? 1 : -1) * f * .02 * dt; }
          }
          // zero gravity: never stops — speed always eases back to its own cruising speed
          let sp = Math.hypot(b.vx, b.vy);
          if (sp < 1) { const ang = Math.random() * Math.PI * 2; b.vx = Math.cos(ang); b.vy = Math.sin(ang); sp = 1; }
          const g = 1 + (b.v0 / sp - 1) * Math.min(1, (sp > b.v0 ? .9 : 1.6) * dt);
          b.vx *= g; b.vy *= g;
          b.av += (b.w0 - b.av) * Math.min(1, .6 * dt); b.av = Math.max(-140, Math.min(140, b.av));
        }
        // keep clear of text blocks: a soft force field around each obstacle rect
        if (!this.gathered && this.obs) for (const o of this.obs) {
          const pad = 18 + b.r, cx = Math.max(o.l - pad, Math.min(b.x, o.r + pad)), cy = Math.max(o.t - pad, Math.min(b.y, o.b + pad));
          if (b.x > o.l - pad && b.x < o.r + pad && b.y > o.t - pad && b.y < o.b + pad) {
            const dl = b.x - (o.l - pad), dr = (o.r + pad) - b.x, dtp = b.y - (o.t - pad), db = (o.b + pad) - b.y, m = Math.min(dl, dr, dtp, db);
            const f = 520 * dt; if (m === dl) b.vx -= f; else if (m === dr) b.vx += f; else if (m === dtp) b.vy -= f; else b.vy += f;
          }
        }
        b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.av * dt;
        // soft walls
        const m = b.r;
        b.ht += dt;
        if (b.x < m) { b.x = m; if (b.vx < 0) { b.vx = -b.vx; this.boing(b); } } if (b.x > W - m) { b.x = W - m; if (b.vx > 0) { b.vx = -b.vx; this.boing(b); } }
        if (b.y < m) { b.y = m; if (b.vy < 0) { b.vy = -b.vy; this.boing(b); } } if (b.y > H - m) { b.y = H - m; if (b.vy > 0) { b.vy = -b.vy; this.boing(b); } }
      }
      if (!this.gathered) for (let i = 0; i < B.length; i++) for (let j = i + 1; j < B.length; j++) {
        const a = B[i], c = B[j], dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy), min = a.r + c.r;
        if (d < min && d > .01) {
          const nx = dx / d, ny = dy / d, o = (min - d) / 2; a.x -= nx * o; a.y -= ny * o; c.x += nx * o; c.y += ny * o;
          const rv = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
          if (rv < 0) { const imp = -2 * rv / (1 / a.m + 1 / c.m); a.vx -= imp * nx / a.m; a.vy -= imp * ny / a.m; c.vx += imp * nx / c.m; c.vy += imp * ny / c.m; const tang = (c.vx - a.vx) * -ny + (c.vy - a.vy) * nx; a.av -= tang * .15; c.av += tang * .15; this.boing(a); this.boing(c); }
        }
      }
      for (const b of B) {
        // 토옹: a soft jelly wobble right after each bounce
        const k = Math.exp(-b.ht * 6) * Math.cos(b.ht * 20), sc = b.s * (1 - .13 * k);
        b.el.style.transform = `translate3d(${(b.x - b.sz / 2).toFixed(1)}px,${(b.y - b.sz / 2).toFixed(1)}px,0) rotate(${b.a.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
      }
      requestAnimationFrame(this.loop);
    }
  }
  window.ShapeField = Field; window.SHAPE_SVG = svg; window.SHAPE_COLORS = C;
})();
