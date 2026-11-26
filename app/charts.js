// Japan in Numbers — charts.
// Small hand-rolled SVG charts: a line chart for a time series and a bar
// chart for shares. No library, no network, nothing fetched at run time.

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function niceMax(max) {
  const pow = Math.pow(10, Math.floor(Math.log10(max)));
  const n = max / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}

// Line chart. series: [{year, value}], unit shown on the axis.
export function lineChart(series, unit) {
  const width = 640;
  const height = 260;
  const padL = 52;
  const padR = 16;
  const padT = 30;
  const padB = 34;
  const values = series.map((p) => p.value);
  const max = niceMax(Math.max(...values) * 1.08);
  const min = 0;
  const x = (i) => padL + ((width - padL - padR) * i) / (series.length - 1);
  const y = (v) => padT + (height - padT - padB) * (1 - (v - min) / (max - min));
  const points = series.map((p, i) => `${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ');
  const dots = series
    .map(
      (p, i) =>
        `<circle cx="${x(i).toFixed(1)}" cy="${y(p.value).toFixed(1)}" r="4.5" fill="#c2402a" stroke="#fff" stroke-width="2"/>` +
        `<text x="${x(i)}" y="${y(p.value) - 10}" text-anchor="middle" font-size="12" fill="#1f2a44">${p.value}</text>` +
        `<text x="${x(i)}" y="${height - 10}" text-anchor="middle" font-size="12" fill="#5a6478">${p.year}</text>`,
    )
    .join('');
  const grid = [0, 0.5, 1]
    .map((f) => {
      const gy = padT + (height - padT - padB) * (1 - f);
      const gv = (max * f).toFixed(max >= 100 ? 0 : 1);
      return `<line x1="${padL}" y1="${gy}" x2="${width - padR}" y2="${gy}" stroke="#e3e7ee" stroke-width="1"/>` +
        `<text x="${padL - 8}" y="${gy + 4}" text-anchor="end" font-size="11" fill="#5a6478">${gv}</text>`;
    })
    .join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Line chart, ${esc(unit)} over time" class="chart">` +
    `<text x="${width - padR}" y="14" text-anchor="end" font-size="12" fill="#5a6478">${esc(unit)}</text>` +
    grid +
    `<polyline points="${points}" fill="none" stroke="#1f3a6e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>` +
    dots +
    `</svg>`;
}

// Horizontal bar chart. rows: [{label, share}], share in percent.
export function barChart(rows) {
  const width = 640;
  const rowH = 44;
  const height = rows.length * rowH + 16;
  const padL = 210;
  const padR = 64;
  const max = 100;
  const bars = rows
    .map((r, i) => {
      const y = 10 + i * rowH;
      const w = ((width - padL - padR) * r.share) / max;
      return `<text x="${padL - 10}" y="${y + 20}" text-anchor="end" font-size="13" fill="#1f2a44">${esc(r.label)}</text>` +
        `<rect x="${padL}" y="${y}" width="${Math.max(w, 2).toFixed(1)}" height="26" rx="4" fill="#1f3a6e"/>` +
        `<text x="${padL + w + 8}" y="${y + 19}" font-size="13" font-weight="700" fill="#1f2a44">${r.share}%</text>`;
    })
    .join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Bar chart of shares" class="chart">${bars}</svg>`;
}
