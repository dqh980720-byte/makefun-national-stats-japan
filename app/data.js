// Japan in Numbers — figures.
// Every figure is a rounded public statistic. Each record carries its source
// and year; the Sources page lists them all. Values marked "~" are
// approximate. Population and GDP series use the year-end estimates published
// by the sources named.

export const COUNTRY = {
  name: 'Japan',
  nameJa: '日本',
  capital: 'Tokyo',
  areaKm2: 377975,
  areaSource: 'Statistics Bureau of Japan, 2024',
  prefectures: 47,
  currency: 'Japanese yen (JPY)',
  language: 'Japanese',
  timeZone: 'JST (UTC+9)',
};

export const HEADLINE = [
  { label: 'Population', value: '124.0m', note: '2024 estimate', source: 'Statistics Bureau of Japan, 2024' },
  { label: 'GDP (nominal)', value: '$4.03tn', note: '2024', source: 'IMF World Economic Outlook, 2024' },
  { label: 'GDP per capita', value: '$32,455', note: '2024', source: 'IMF World Economic Outlook, 2024' },
  { label: 'Life expectancy', value: '84.0 yrs', note: '2023', source: 'World Bank / WHO, 2023' },
  { label: 'Unemployment', value: '2.5%', note: '2024 average', source: 'Statistics Bureau of Japan, 2024' },
  { label: 'Median age', value: '49.5 yrs', note: '2024', source: 'UN World Population Prospects 2024' },
];

// Population, millions, year-end estimates.
export const POPULATION_SERIES = [
  { year: 2000, value: 126.9 },
  { year: 2005, value: 127.8 },
  { year: 2010, value: 128.1 },
  { year: 2015, value: 127.1 },
  { year: 2020, value: 126.1 },
  { year: 2024, value: 124.0 },
];
export const POPULATION_SOURCE = 'Statistics Bureau of Japan, Population Estimates (2000–2024)';

// Nominal GDP, US$ trillion.
export const GDP_SERIES = [
  { year: 2000, value: 4.97 },
  { year: 2005, value: 4.83 },
  { year: 2010, value: 5.70 },
  { year: 2015, value: 4.44 },
  { year: 2020, value: 5.06 },
  { year: 2024, value: 4.03 },
];
export const GDP_SOURCE = 'IMF World Economic Outlook (2000–2024)';

export const AGE_STRUCTURE = [
  { group: 'Aged 0–14', share: 11.6, note: '14.4m children' },
  { group: 'Aged 15–64', share: 59.1, note: '73.3m working age' },
  { group: 'Aged 65+', share: 29.3, note: '36.3m older people' },
];
export const AGE_SOURCE = 'Statistics Bureau of Japan, 2024';

export const DEMOGRAPHICS = [
  { label: 'Total fertility rate', value: '1.20', note: 'children per woman, 2023', source: 'Ministry of Health, Labour and Welfare, 2023' },
  { label: 'Births', value: '720,988', note: '2023', source: 'Ministry of Health, Labour and Welfare, 2023' },
  { label: 'Life expectancy, women', value: '87.1 yrs', note: '2023', source: 'Ministry of Health, Labour and Welfare, 2023' },
  { label: 'Life expectancy, men', value: '81.1 yrs', note: '2023', source: 'Ministry of Health, Labour and Welfare, 2023' },
  { label: 'Median age', value: '49.5 yrs', note: '2024', source: 'UN World Population Prospects 2024' },
  { label: 'Urban population', value: '91.8%', note: '2024', source: 'World Bank, 2024' },
];

export const ECONOMY = [
  { label: 'Real GDP growth', value: '-0.1%', note: '2024', source: 'IMF World Economic Outlook, 2024' },
  { label: 'Consumer price inflation', value: '2.7%', note: '2024 average', source: 'Statistics Bureau of Japan, 2024' },
  { label: 'Unemployment rate', value: '2.5%', note: '2024 average', source: 'Statistics Bureau of Japan, 2024' },
  { label: 'General government gross debt', value: '236.7% of GDP', note: '2024', source: 'IMF World Economic Outlook, 2024' },
  { label: 'Exports of goods', value: '$0.70tn', note: '2024', source: 'Ministry of Finance, Trade Statistics of Japan, 2024' },
  { label: 'Imports of goods', value: '$0.73tn', note: '2024', source: 'Ministry of Finance, Trade Statistics of Japan, 2024' },
  { label: 'Largest export partner', value: 'United States', note: '~20% of exports, 2024', source: 'Ministry of Finance, Trade Statistics of Japan, 2024' },
  { label: 'Largest import partner', value: 'China', note: '~22% of imports, 2024', source: 'Ministry of Finance, Trade Statistics of Japan, 2024' },
];

export const SECTORS = [
  { sector: 'Services', share: 69.5, note: 'finance, retail, transport, health' },
  { sector: 'Industry', share: 29.3, note: 'manufacturing, construction, utilities' },
  { sector: 'Agriculture, forestry & fishing', share: 1.2, note: 'rice, vegetables, fisheries' },
];
export const SECTOR_SOURCE = 'Statistics Bureau of Japan / World Bank, 2023 (share of GDP, rounded)';

export const SOCIETY = [
  { label: 'Tertiary education, age 25–34', value: '~64%', note: '2023', source: 'OECD Education at a Glance, 2024' },
  { label: 'Physicians', value: '2.6 per 1,000 people', note: '2022', source: 'OECD Health Statistics, 2024' },
  { label: 'Hospital beds', value: '12.6 per 1,000 people', note: '2022', source: 'OECD Health Statistics, 2024' },
  { label: 'Forest cover', value: '68.5%', note: '2020', source: 'Forestry Agency / FAO, 2020' },
  { label: 'CO2 emissions', value: '~1.0bn tonnes', note: '2023', source: 'Global Carbon Budget, 2024' },
  { label: 'Renewable electricity share', value: '~23%', note: '2023', source: 'Agency for Natural Resources and Energy, 2024' },
];

// Prefectures: population in millions, 2024 estimates; density per km2.
export const PREFECTURES = [
  { name: 'Tokyo', pop: 14.10, density: 6429 },
  { name: 'Kanagawa', pop: 9.22, density: 3819 },
  { name: 'Osaka', pop: 8.78, density: 4612 },
  { name: 'Aichi', pop: 7.49, density: 1450 },
  { name: 'Saitama', pop: 7.33, density: 1931 },
  { name: 'Chiba', pop: 6.28, density: 1220 },
  { name: 'Hyogo', pop: 5.38, density: 641 },
  { name: 'Hokkaido', pop: 5.09, density: 61 },
  { name: 'Fukuoka', pop: 5.09, density: 1022 },
  { name: 'Shizuoka', pop: 3.55, density: 456 },
  { name: 'Ibaraki', pop: 2.84, density: 466 },
  { name: 'Hiroshima', pop: 2.74, density: 324 },
  { name: 'Kyoto', pop: 2.52, density: 545 },
  { name: 'Miyagi', pop: 2.26, density: 311 },
  { name: 'Niigata', pop: 2.13, density: 169 },
  { name: 'Nagano', pop: 2.00, density: 147 },
  { name: 'Gifu', pop: 1.93, density: 182 },
  { name: 'Fukushima', pop: 1.77, density: 128 },
  { name: 'Gunma', pop: 1.90, density: 299 },
  { name: 'Tochigi', pop: 1.89, density: 295 },
  { name: 'Okayama', pop: 1.84, density: 259 },
  { name: 'Mie', pop: 1.72, density: 298 },
  { name: 'Kumamoto', pop: 1.70, density: 230 },
  { name: 'Kagoshima', pop: 1.54, density: 168 },
  { name: 'Yamaguchi', pop: 1.29, density: 211 },
  { name: 'Ehime', pop: 1.29, density: 228 },
  { name: 'Nagasaki', pop: 1.26, density: 306 },
  { name: 'Shiga', pop: 1.41, density: 351 },
  { name: 'Nara', pop: 1.29, density: 350 },
  { name: 'Aomori', pop: 1.18, density: 123 },
  { name: 'Iwate', pop: 1.16, density: 76 },
  { name: 'Okinawa', pop: 1.47, density: 645 },
  { name: 'Yamanashi', pop: 0.80, density: 179 },
  { name: 'Toyama', pop: 1.00, density: 236 },
  { name: 'Ishikawa', pop: 1.10, density: 263 },
  { name: 'Fukui', pop: 0.74, density: 177 },
  { name: 'Tokushima', pop: 0.68, density: 164 },
  { name: 'Kagawa', pop: 0.92, density: 493 },
  { name: 'Kochi', pop: 0.65, density: 92 },
  { name: 'Saga', pop: 0.79, density: 324 },
  { name: 'Oita', pop: 1.09, density: 172 },
  { name: 'Miyazaki', pop: 1.04, density: 135 },
  { name: 'Akita', pop: 0.89, density: 77 },
  { name: 'Yamagata', pop: 1.02, density: 109 },
  { name: 'Wakayama', pop: 0.88, density: 186 },
  { name: 'Shimane', pop: 0.63, density: 94 },
  { name: 'Tottori', pop: 0.53, density: 151 },
];
export const PREFECTURE_SOURCE = 'Statistics Bureau of Japan, Population Estimates by prefecture, 2024 (rounded)';

// Top trading partners, share of total goods trade, 2024.
export const TRADE_PARTNERS = [
  { partner: 'United States', exportsShare: 19.8, importsShare: 10.6, note: 'largest export market' },
  { partner: 'China', exportsShare: 17.9, importsShare: 22.1, note: 'largest import source' },
  { partner: 'South Korea', exportsShare: 7.1, importsShare: 4.1, note: 'semiconductors, steel' },
  { partner: 'Taiwan', exportsShare: 6.0, importsShare: 3.5, note: 'electronics' },
  { partner: 'Australia', exportsShare: 2.4, importsShare: 6.4, note: 'coal, LNG, iron ore' },
  { partner: 'Germany', exportsShare: 3.2, importsShare: 3.0, note: 'machinery, cars' },
];
export const TRADE_SOURCE = 'Ministry of Finance, Trade Statistics of Japan, 2024 (shares rounded)';

// A short timeline of modern Japan, for context.
export const TIMELINE = [
  { year: 1868, event: 'Meiji Restoration: Japan opens to the world and begins rapid industrialisation.' },
  { year: 1947, event: 'Post-war Constitution takes effect; Japan becomes a parliamentary democracy.' },
  { year: 1964, event: 'Tokyo hosts the Olympic Games; the first Shinkansen bullet train opens.' },
  { year: 1968, event: "Japan becomes the world's second-largest economy." },
  { year: 1973, event: 'First oil shock ends the high-growth era; growth slows sharply.' },
  { year: 1990, event: 'Asset-price bubble bursts; the "lost decades" of low growth begin.' },
  { year: 2011, event: 'Great East Japan Earthquake and tsunami; Fukushima nuclear accident.' },
  { year: 2019, event: 'Reiwa era begins with the accession of Emperor Naruhito.' },
  { year: 2021, event: 'Tokyo hosts the Olympic and Paralympic Games, held a year late.' },
];
