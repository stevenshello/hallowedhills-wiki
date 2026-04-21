const input = document.getElementById("wikiSearch");

if (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;

    const value = input.value.trim().toLowerCase();

    const routes = [
      { keywords: ["rule", "rules"], url: "../rules/" },
      { keywords: ["start", "getting started", "begin"], url: "../getting-started/" },
      { keywords: ["job", "jobs", "work"], url: "../jobs/" },
      { keywords: ["business", "economy", "money"], url: "../businesses-economy/" },
      { keywords: ["crime", "robbery", "illegal"], url: "../crime/" },
      { keywords: ["drug", "drugs", "lab", "meth", "weed"], url: "../drugs-labs/" },
      { keywords: ["gang", "gangs", "cartel"], url: "../gangs-cartels/" },
      { keywords: ["police", "ems", "doj", "law"], url: "../law-ems-doj/" },
      { keywords: ["house", "housing", "realtor"], url: "../housing/" },
      { keywords: ["car", "cars", "vehicle", "racing"], url: "../vehicles-racing/" },
      { keywords: ["craft", "crafting", "items"], url: "../crafting-items/" },
      { keywords: ["fishing", "hunting", "gathering", "mining"], url: "../gathering-fishing-hunting/" },
      { keywords: ["custom", "systems", "talent", "credit"], url: "../custom-systems/" },
      { keywords: ["faq", "help", "support"], url: "../faq/" }
    ];

    const match = routes.find(route =>
      route.keywords.some(keyword => value.includes(keyword))
    );

    if (match) {
      window.location.href = match.url;
    }
  });
}
