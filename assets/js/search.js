const input = document.getElementById('wikiSearch');

const routes = [
  { keywords: ['rule', 'rules', 'expectations', 'nlr'], url: '../rules/' },
  { keywords: ['start', 'begin', 'new player', 'getting started'], url: '../getting-started/' },
  { keywords: ['job', 'jobs', 'work', 'career', 'builder', 'trucking', 'airline'], url: '../jobs/' },
  { keywords: ['business', 'economy', 'credit', 'market', 'bank'], url: '../businesses-economy/' },
  { keywords: ['crime', 'robbery', 'boosting', 'fraud', 'wash'], url: '../crime/' },
  { keywords: ['drug', 'meth', 'weed', 'lsd', 'mushroom', 'lab'], url: '../drugs-labs/' },
  { keywords: ['gang', 'cartel', 'territory', 'conflict'], url: '../gangs-cartels/' },
  { keywords: ['police', 'ems', 'doj', 'evidence', 'mdt'], url: '../law-ems-doj/' },
  { keywords: ['house', 'housing', 'realtor', 'property'], url: '../housing/' },
  { keywords: ['vehicle', 'car', 'garage', 'racing', 'trailer'], url: '../vehicles-racing/' },
  { keywords: ['craft', 'crafting', 'item', 'bench', 'materials'], url: '../crafting-items/' },
  { keywords: ['fishing', 'hunting', 'gathering', 'mining', 'diving'], url: '../gathering-fishing-hunting/' },
  { keywords: ['custom', 'talent', 'airdrop', 'cayo', 'yacht', 'hh'], url: '../custom-systems/' },
  { keywords: ['faq', 'help', 'support', 'controls'], url: '../faq/' }
];

if (input) {
  input.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter') return;

    const value = input.value.trim().toLowerCase();
    const match = routes.find((route) => route.keywords.some((keyword) => value.includes(keyword)));

    if (match) {
      window.location.href = match.url;
    }
  });
}
