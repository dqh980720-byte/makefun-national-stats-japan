// Japan in Numbers — wiring.
// Hash routing plus the Regions page controls: live search and sorting by
// population or density. Everything runs from the site's own files.

import { VIEWS } from './views.js';
import { PREFECTURES } from './data.js';

const app = document.getElementById('app');
const navLinks = [...document.querySelectorAll('nav a')];

function route() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1) || '/';
  const view = VIEWS[path] || VIEWS['/'];
  app.innerHTML = view();
  navLinks.forEach((a) => {
    const target = a.getAttribute('href').slice(1) || '/';
    a.setAttribute('aria-current', target === path ? 'page' : 'false');
  });
  if (path === '/regions') wireRegions();
  window.scrollTo(0, 0);
}

function wireRegions() {
  const search = document.getElementById('pref-search');
  const table = document.getElementById('pref-table');
  const tbody = table.querySelector('tbody');
  let rows = [...PREFECTURES].sort((a, b) => b.pop - a.pop);
  let sortKey = 'pop';

  function render(list) {
    tbody.innerHTML = list
      .map((p, i) => `<tr><td>${i + 1}</td><td>${p.name}</td><td>${p.pop.toFixed(2)}</td><td>${p.density.toLocaleString('en-US')}</td></tr>`)
      .join('');
  }

  function apply() {
    const q = search.value.trim().toLowerCase();
    const filtered = rows.filter((p) => p.name.toLowerCase().includes(q));
    render(filtered);
  }

  document.getElementById('sort-pop').addEventListener('click', () => {
    sortKey = 'pop';
    rows = [...PREFECTURES].sort((a, b) => b.pop - a.pop);
    apply();
  });
  document.getElementById('sort-density').addEventListener('click', () => {
    sortKey = 'density';
    rows = [...PREFECTURES].sort((a, b) => b.density - a.density);
    apply();
  });
  search.addEventListener('input', apply);
}

window.addEventListener('hashchange', route);
route();
