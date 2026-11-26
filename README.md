# Japan in Numbers

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/dqh980720-byte/makefun-national-stats-japan/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/dqh980720-byte/makefun-national-stats-japan/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

A national statistics site for Japan, built from static files with no network
request. Open `app/index.html` in a desktop browser or on a phone and it works.

## What it covers

- **Overview** — headline indicators (population, GDP, GDP per capita, life
  expectancy, unemployment, median age), a population trend chart and a GDP
  chart, all with source and year.
- **Population** — age structure, fertility and life expectancy, and a
  sortable table of all 47 prefectures.
- **Economy** — GDP over time, trade, unemployment and inflation, public
  debt, and the split of the economy by sector.
- **Regions** — search and sort the prefecture table by population or density.
- **Sources** — every figure is listed with its source and year.

## How it is built

- `app/index.html` — the single page shell and navigation.
- `app/style.css` — all of the site's styling.
- `app/data.js` — every figure, with its source and year.
- `app/charts.js` — the SVG line and bar charts, drawn from the data.
- `app/views.js` — the hash-route pages (overview, population, economy,
  regions, sources).
- `app/main.js` — routing, search, sorting and the page wiring.
- `main.ts` — the hand-in program: copies `app/` and `screenshots/` to
  `/output` and writes `/output/dossier.json`.
- `screenshots/` — real renders of the site running in a browser.

Figures are rounded public statistics (Statistics Bureau of Japan, IMF World
Economic Outlook, World Bank, OECD, WHO, UN World Population Prospects).
See the Sources page in the site for the source and year of each figure.
