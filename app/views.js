// Japan in Numbers — pages.
// Each view is a hash route. Every figure shown carries its source and year,
// either beside the figure or in the section footnote.

import {
  COUNTRY,
  HEADLINE,
  POPULATION_SERIES,
  POPULATION_SOURCE,
  GDP_SERIES,
  GDP_SOURCE,
  AGE_STRUCTURE,
  AGE_SOURCE,
  DEMOGRAPHICS,
  ECONOMY,
  SECTORS,
  SECTOR_SOURCE,
  SOCIETY,
  PREFECTURES,
  PREFECTURE_SOURCE,
  TRADE_PARTNERS,
  TRADE_SOURCE,
  TIMELINE,
} from './data.js';
import { lineChart, barChart } from './charts.js';

function kpiCards() {
  return `<div class="kpis">` + HEADLINE.map((h) =>
    `<article class="kpi"><div class="kpi-value">${h.value}</div>` +
    `<div class="kpi-label">${h.label}</div>` +
    `<div class="kpi-note">${h.note} · ${h.source}</div></article>`).join('') + `</div>`;
}

function statRows(rows) {
  return `<dl class="stats">` + rows.map((r) =>
    `<div class="stat"><dt>${r.label}</dt><dd><strong>${r.value}</strong>` +
    `<span>${r.note} · ${r.source}</span></dd></div>`).join('') + `</dl>`;
}

export function viewOverview() {
  return `
  <section class="hero">
    <p class="eyebrow">National statistics · Updated for 2024</p>
    <h1>Japan in Numbers</h1>
    <p class="lede">Population, economy, regions and daily life in Japan — the headline
    figures a visitor needs, each with its source and year, on one page.</p>
    <p class="facts">Capital ${COUNTRY.capital} · Area ${COUNTRY.areaKm2.toLocaleString('en-US')} km² ·
    ${COUNTRY.prefectures} prefectures · Currency ${COUNTRY.currency}</p>
  </section>
  ${kpiCards()}
  <section class="panel">
    <h2>Population is shrinking — slowly</h2>
    <p>Japan's population peaked at 128.1 million in 2010 and has fallen every
    year since, to 124.0 million in 2024. The fall is slow — about 0.5% a year —
    but it has run for fourteen years in a row.</p>
    ${lineChart(POPULATION_SERIES, 'Population, millions')}
    <p class="source">Source: ${POPULATION_SOURCE}.</p>
  </section>
  <section class="panel">
    <h2>The world's fourth-largest economy</h2>
    <p>Nominal GDP was $4.03 trillion in 2024, behind the United States, China
    and Germany. In yen terms the economy grew; in dollars it shrank, because
    the yen weakened against the dollar.</p>
    ${lineChart(GDP_SERIES, 'Nominal GDP, US$ trillion')}
    <p class="source">Source: ${GDP_SOURCE}.</p>
    <p><a class="button" href="#/economy">Explore the economy →</a>
    <a class="button ghost" href="#/population">Explore the population →</a></p>
  </section>
  <section class="panel">
    <h2>At a glance: society</h2>
    ${statRows(SOCIETY)}
    <p class="source">Sources: see the Sources page for each figure.</p>
  </section>
  <section class="panel">
    <h2>Modern Japan in brief</h2>
    <dl class="stats">` + TIMELINE.map((t) =>
      `<div class="stat"><dt>${t.year}</dt><dd><span>${t.event}</span></dd></div>`).join('') + `</dl>
    <p class="source">Timeline: Encyclopaedia Britannica and the National Diet Library, for context only.</p>
  </section>`;
}

export function viewPopulation() {
  return `
  <section class="hero slim"><p class="eyebrow">Population</p>
    <h1>An ageing, shrinking population</h1>
    <p class="lede">Almost three in ten people in Japan are aged 65 or over — the highest
    share in the world — and births fell below 730,000 in 2023.</p>
  </section>
  <section class="panel">
    <h2>Age structure, 2024</h2>
    ${barChart(AGE_STRUCTURE.map((a) => ({ label: a.group, share: a.share })))}
    <p>${AGE_STRUCTURE.map((a) => `${a.group}: ${a.share}% (${a.note})`).join(' · ')}</p>
    <p class="source">Source: ${AGE_SOURCE}.</p>
  </section>
  <section class="panel">
    <h2>Population trend</h2>
    ${lineChart(POPULATION_SERIES, 'Population, millions')}
    <p class="source">Source: ${POPULATION_SOURCE}.</p>
  </section>
  <section class="panel">
    <h2>Births, deaths and longevity</h2>
    ${statRows(DEMOGRAPHICS)}
  </section>
  <section class="panel">
    <h2>Where people live</h2>
    <p>Tokyo is home to 14.1 million people — more than one in nine Japanese
    residents. The three largest metropolitan areas (Tokyo, Osaka, Nagoya)
    hold about half the population.</p>
    <p><a class="button" href="#/regions">See all 47 prefectures →</a></p>
  </section>`;
}

export function viewEconomy() {
  return `
  <section class="hero slim"><p class="eyebrow">Economy</p>
    <h1>A large, high-income economy</h1>
    <p class="lede">GDP per capita was $32,455 in 2024. Unemployment is low, prices rose
    2.7% in 2024, and public debt — at 237% of GDP — is the highest among
    advanced economies.</p>
  </section>
  <section class="panel">
    <h2>GDP over time</h2>
    ${lineChart(GDP_SERIES, 'Nominal GDP, US$ trillion')}
    <p class="source">Source: ${GDP_SOURCE}.</p>
  </section>
  <section class="panel">
    <h2>Key indicators</h2>
    ${statRows(ECONOMY)}
  </section>
  <section class="panel">
    <h2>What the economy is made of</h2>
    ${barChart(SECTORS.map((s) => ({ label: s.sector, share: s.share })))}
    <p>${SECTORS.map((s) => `${s.sector} ${s.share}% — ${s.note}`).join(' · ')}</p>
    <p class="source">Source: ${SECTOR_SOURCE}.</p>
  </section>
  <section class="panel">
    <h2>Top trading partners, 2024</h2>
    <table>
      <thead><tr><th>Partner</th><th>Share of exports</th><th>Share of imports</th><th>Main trade</th></tr></thead>
      <tbody>${TRADE_PARTNERS.map((t) => `<tr><td>${t.partner}</td><td>${t.exportsShare}%</td><td>${t.importsShare}%</td><td>${t.note}</td></tr>`).join('')}</tbody>
    </table>
    <p class="source">Source: ${TRADE_SOURCE}.</p>
  </section>`;
}

export function viewRegions() {
  const rows = [...PREFECTURES].sort((a, b) => b.pop - a.pop);
  return `
  <section class="hero slim"><p class="eyebrow">Regions</p>
    <h1>All 47 prefectures</h1>
    <p class="lede">Search for a prefecture, or sort the table by population or by
    population density. Figures are 2024 estimates.</p>
  </section>
  <section class="panel">
    <div class="controls">
      <label>Search <input id="pref-search" type="search" placeholder="e.g. Kyoto" aria-label="Search prefectures"></label>
      <button id="sort-pop" type="button">Sort by population ↓</button>
      <button id="sort-density" type="button">Sort by density ↓</button>
    </div>
    <table id="pref-table">
      <thead><tr><th>#</th><th>Prefecture</th><th>Population (m)</th><th>Density (per km²)</th></tr></thead>
      <tbody>${rows.map((p, i) => `<tr><td>${i + 1}</td><td>${p.name}</td><td>${p.pop.toFixed(2)}</td><td>${p.density.toLocaleString('en-US')}</td></tr>`).join('')}</tbody>
    </table>
    <p class="source">Source: ${PREFECTURE_SOURCE}.</p>
  </section>`;
}

export function viewSources() {
  const items = [
    ['Population, headline and series', POPULATION_SOURCE],
    ['GDP, headline and series', GDP_SOURCE],
    ['Age structure', AGE_SOURCE],
    ['Births, fertility and life expectancy', 'Ministry of Health, Labour and Welfare, Vital Statistics, 2023'],
    ['Median age and urban share', 'UN World Population Prospects 2024; World Bank, 2024'],
    ['Unemployment and inflation', 'Statistics Bureau of Japan, 2024'],
    ['Public debt and growth', 'IMF World Economic Outlook, 2024'],
    ['Trade', 'Ministry of Finance, Trade Statistics of Japan, 2024'],
    ['Sector shares', SECTOR_SOURCE],
    ['Education, health, energy and environment', 'OECD Education at a Glance 2024; OECD Health Statistics 2024; Agency for Natural Resources and Energy, 2024; Global Carbon Budget, 2024'],
    ['Prefectures', PREFECTURE_SOURCE],
    ['Area', COUNTRY.areaSource],
  ];
  return `
  <section class="hero slim"><p class="eyebrow">Sources</p>
    <h1>Where every figure comes from</h1>
    <p class="lede">All figures are rounded public statistics. Where a figure is an
    estimate it is marked with “~”. Nothing on this site is fetched from
    another website: the figures are stored in the site's own files.</p>
  </section>
  <section class="panel">
    <dl class="stats">` + items.map(([label, src]) =>
      `<div class="stat"><dt>${label}</dt><dd><span>${src}</span></dd></div>`).join('') + `</dl>
    <p>This site is an independent guide to Japan's statistics. It is not
    affiliated with the Statistics Bureau of Japan or any government body.</p>
  </section>`;
}

export const VIEWS = {
  '/': viewOverview,
  '/population': viewPopulation,
  '/economy': viewEconomy,
  '/regions': viewRegions,
  '/sources': viewSources,
};
