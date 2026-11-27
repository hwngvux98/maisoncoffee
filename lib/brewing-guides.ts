export type BrewIcon =
  | "settings"
  | "scan"
  | "scale"
  | "hand"
  | "droplets"
  | "droplet"
  | "timer"
  | "cup"
  | "coffee"
  | "waves"
  | "rotate"
  | "layers"
  | "flame"
  | "filter"
  | "snowflake"
  | "scissors"
  | "moon"
  | "glass";

export interface BrewSpec {
  bean: string;
  grind: string;
  water: string;
  temp: string;
  time: string;
}

export interface BrewStep {
  icon: BrewIcon;
  title: string;
  body: string;
}

export interface BrewMethod {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  icon: BrewIcon;
  image: string;
  imageAlt: string;
  spec: BrewSpec;
  equipment: string[];
  steps: BrewStep[];
}

export const brewMethods: BrewMethod[] = [
  {
    slug: "espresso",
    name: "Espresso",
    tagline: "Fast, concentrated, intense",
    intro:
      "Hot water at roughly 9 bars of pressure forces through a tightly packed bed of fine grounds in under 30 seconds. Small in volume, big in concentration — the base for every milk drink too.",
    icon: "flame",
    image: "/assets/brewing-guides/espresso.jpg",
    imageAlt: "Espresso extracting from a portafilter into a shot glass",
    spec: {
      bean: "18g",
      grind: "Fine",
      water: "36g out",
      temp: "90–95°C",
      time: "25–30 sec",
    },
    equipment: ["Espresso machine", "Portafilter", "Tamper", "Tamping mat", "Shot glass", "Grinder"],
    steps: [
      {
        icon: "settings",
        title: "Grind the beans",
        body: "Use an espresso grinder to grind Maison Specialty beans fine, right before brewing.",
      },
      {
        icon: "scan",
        title: "Check the grind",
        body: "It should feel like table salt. Go finer if the shot runs too fast, coarser if it stalls.",
      },
      {
        icon: "scale",
        title: "Dose",
        body: "Weigh 18g of ground coffee into the portafilter basket.",
      },
      {
        icon: "hand",
        title: "Tamp",
        body: "Press level and firm with a tamper, using even pressure straight down.",
      },
      {
        icon: "droplets",
        title: "Rinse the group head",
        body: "Flush for 3–5 seconds to clear old grounds and settle the brew temperature.",
      },
      {
        icon: "timer",
        title: "Lock in and extract",
        body: "Lock the portafilter in and pull the shot for 25–30 seconds.",
      },
      {
        icon: "cup",
        title: "Check the yield",
        body: "Look for a reddish-brown crema, and aim for 36g out (a double shot runs about 60g).",
      },
      {
        icon: "coffee",
        title: "Serve",
        body: "Drink it straight, over ice, or as the base for a milk drink.",
      },
    ],
  },
  {
    slug: "pour-over",
    name: "Pour-over",
    tagline: "Clean, bright, precise",
    intro:
      "Hot water poured by hand over a bed of medium-fine grounds in a paper filter. Full control over pour speed and pattern means the cup can be tuned exactly to taste.",
    icon: "droplet",
    image: "/assets/brewing-guides/pour-over.jpg",
    imageAlt: "Pouring hot water from a gooseneck kettle over coffee grounds in a dripper",
    spec: {
      bean: "15g",
      grind: "Medium-fine",
      water: "250ml",
      temp: "92–94°C",
      time: "~3 min",
    },
    equipment: ["Dripper", "Paper filter", "Server", "Gooseneck kettle", "Scale & timer", "Grinder"],
    steps: [
      {
        icon: "droplets",
        title: "Rinse the filter",
        body: "Wet the paper filter with hot water to clear the papery taste, then discard the rinse water.",
      },
      {
        icon: "scale",
        title: "Grind and dose",
        body: "Grind 15g of Maison Specialty beans medium-fine and add it to the filter.",
      },
      {
        icon: "waves",
        title: "Bloom",
        body: "Pour about 30ml of water in a circle, soaking all the grounds evenly. Let it bloom for 30 seconds.",
      },
      {
        icon: "rotate",
        title: "Pour in stages",
        body: "Pour the remaining water in 2–3 slow circles from the center outward, keeping clear of the filter's edge.",
      },
      {
        icon: "timer",
        title: "Let it drain",
        body: "Total brew time should land around 3 minutes — longer tends to taste bitter.",
      },
      {
        icon: "coffee",
        title: "Serve",
        body: "Swirl the server gently and pour into your cup.",
      },
    ],
  },
  {
    slug: "french-press",
    name: "French Press",
    tagline: "Full-bodied and rich",
    intro:
      "Coarse grounds steep directly in hot water, then are separated with a mesh plunger. With no paper filter, more of the coffee's oils and body make it into the cup.",
    icon: "layers",
    image: "/assets/brewing-guides/french-press.jpg",
    imageAlt: "A French press on a wooden counter with coffee steeping inside",
    spec: {
      bean: "18g",
      grind: "Coarse",
      water: "300ml",
      temp: "96°C",
      time: "4 min",
    },
    equipment: ["French press", "Grinder", "Kettle", "Scale & timer", "Stirring spoon"],
    steps: [
      {
        icon: "settings",
        title: "Grind",
        body: "Grind 18g of beans coarse, about the texture of breadcrumbs.",
      },
      {
        icon: "droplet",
        title: "Add water",
        body: "Pour 300ml of water just off the boil over the grounds.",
      },
      {
        icon: "timer",
        title: "Steep",
        body: "Let it steep for 4 minutes without disturbing it.",
      },
      {
        icon: "layers",
        title: "Break the crust",
        body: "Gently stir the floating grounds to break the crust, then skim off any foam.",
      },
      {
        icon: "hand",
        title: "Plunge and serve",
        body: "Press the plunger down slowly and evenly, then pour right away to stop the extraction.",
      },
    ],
  },
  {
    slug: "moka-pot",
    name: "Moka Pot",
    tagline: "Strong and stovetop-brewed",
    intro:
      "Steam pressure pushes hot water up through finely ground coffee in this classic stovetop brewer, producing a bold, espresso-like cup without a machine.",
    icon: "flame",
    image: "/assets/brewing-guides/moka-pot.jpg",
    imageAlt: "A stovetop moka pot brewing on a gas burner",
    spec: {
      bean: "Fills the basket",
      grind: "Fine",
      water: "Fills the base, to the valve",
      temp: "Low-medium heat",
      time: "Until it sputters",
    },
    equipment: ["Moka pot", "Grinder", "Stove", "Kettle, for hot water"],
    steps: [
      {
        icon: "droplet",
        title: "Fill the base",
        body: "Fill the bottom chamber with hot water up to the valve.",
      },
      {
        icon: "scale",
        title: "Fill the basket",
        body: "Fill the filter basket level with fine-ground coffee, without tamping.",
      },
      {
        icon: "layers",
        title: "Assemble",
        body: "Screw the top chamber on firmly.",
      },
      {
        icon: "flame",
        title: "Brew",
        body: "Place on low-medium heat and listen for a sputtering sound as the coffee finishes.",
      },
      {
        icon: "coffee",
        title: "Serve immediately",
        body: "Take it off the heat right away to avoid a burnt, over-extracted taste.",
      },
    ],
  },
  {
    slug: "coffee-maker",
    name: "Coffee Maker",
    tagline: "Simple and convenient",
    intro:
      "An automatic drip machine for easy, hands-off brewing at home — just add water and ground coffee, and let the machine do the rest.",
    icon: "coffee",
    image: "/assets/brewing-guides/coffee-maker.jpg",
    imageAlt: "An automatic drip coffee maker with a glass carafe",
    spec: {
      bean: "16g per cup",
      grind: "Medium",
      water: "300ml",
      temp: "Automatic (90–95°C)",
      time: "~3 min",
    },
    equipment: ["Coffee maker", "Paper filter", "Grinder"],
    steps: [
      {
        icon: "filter",
        title: "Fold the filter",
        body: "Fold the seams of the paper filter and fit it into the basket.",
      },
      {
        icon: "scale",
        title: "Grind and dose",
        body: "Grind the beans medium and add 16g per serving to the filter.",
      },
      {
        icon: "droplet",
        title: "Add water",
        body: "Fill the water tank with 300ml and press start.",
      },
      {
        icon: "timer",
        title: "Brew",
        body: "Brewing usually finishes within about 3 minutes.",
      },
      {
        icon: "droplets",
        title: "Adjust the strength",
        body: "Add a little hot water afterward if you'd like it lighter.",
      },
      {
        icon: "coffee",
        title: "Serve",
        body: "Pour and enjoy.",
      },
    ],
  },
  {
    slug: "chemex",
    name: "Chemex",
    tagline: "Clean and aromatic, hot or iced",
    intro:
      "A thick, bonded filter removes oils and fine particles for an especially clean, bright cup — and it works just as well brewed over ice.",
    icon: "snowflake",
    image: "/assets/brewing-guides/chemex.jpg",
    imageAlt: "Coffee brewing in a Chemex with the paper filter and wooden collar visible",
    spec: {
      bean: "18g",
      grind: "Medium",
      water: "350ml",
      temp: "92–94°C",
      time: "~3 min",
    },
    equipment: ["Chemex filter", "Chemex carafe", "Gooseneck kettle", "Scale & timer", "Grinder"],
    steps: [
      {
        icon: "filter",
        title: "Fit the filter",
        body: "Place the filter with its triple-layered side facing the spout.",
      },
      {
        icon: "droplets",
        title: "Rinse",
        body: "Wet the filter with hot water to clear the papery taste, then discard the rinse water.",
      },
      {
        icon: "snowflake",
        title: "Add ice (optional)",
        body: "For iced coffee, add ice to the carafe before brewing.",
      },
      {
        icon: "scale",
        title: "Grind and bloom",
        body: "Grind 18g medium and level it out, then bloom with 50ml of water for 30 seconds.",
      },
      {
        icon: "rotate",
        title: "Pour",
        body: "Slowly pour the remaining water in circles over about 2–3 minutes.",
      },
      {
        icon: "coffee",
        title: "Serve",
        body: "Swirl the carafe and pour once it slows to a drip.",
      },
    ],
  },
  {
    slug: "drip-bag",
    name: "Drip Bag",
    tagline: "Pre-ground and ready anywhere",
    intro:
      "Each sachet is pre-ground and sealed fresh, hooked straight over your cup — no grinder, scale, or extra gear needed.",
    icon: "coffee",
    image: "/assets/brewing-guides/drip-bag.jpg",
    imageAlt: "A single-serve coffee drip bag hooked over the rim of a cup",
    spec: {
      bean: "8g, pre-measured",
      grind: "Pre-ground",
      water: "160ml",
      temp: "92–94°C",
      time: "~2 min",
    },
    equipment: ["Drip bag", "Cup", "Kettle"],
    steps: [
      {
        icon: "scissors",
        title: "Tear and unfold",
        body: "Tear along the notch and unfold the paper wings.",
      },
      {
        icon: "hand",
        title: "Hook it on",
        body: "Hang the wings over the rim of your cup.",
      },
      {
        icon: "waves",
        title: "Bloom",
        body: "Pour a little hot water first and wait 20 seconds for it to bloom.",
      },
      {
        icon: "coffee",
        title: "Pour and serve",
        body: "Pour the rest of the water in two or three passes, then remove the bag and enjoy.",
      },
    ],
  },
  {
    slug: "cold-brew",
    name: "Cold Brew",
    tagline: "Slow-steeped, smooth and sweet",
    intro:
      "Coarse grounds steep in cold or room-temperature water for up to a day, with no heat at all. The slow steep pulls out less acidity and bitterness, leaving a naturally sweet concentrate to dilute and pour over ice.",
    icon: "moon",
    image: "/assets/brewing-guides/cold-brew.jpg",
    imageAlt: "A glass of cold brew coffee with ice on an outdoor café table",
    spec: {
      bean: "100g",
      grind: "Coarse",
      water: "1000ml",
      temp: "Room temp or cold",
      time: "16–24 hrs",
    },
    equipment: ["Large jar or pitcher", "Coarse grinder", "Paper filter or fine mesh strainer", "Scale"],
    steps: [
      {
        icon: "settings",
        title: "Grind",
        body: "Grind 100g of beans coarse, about the texture of breadcrumbs.",
      },
      {
        icon: "droplet",
        title: "Combine",
        body: "Add the grounds to a large jar or pitcher with 1000ml of room-temperature or cold water.",
      },
      {
        icon: "hand",
        title: "Stir",
        body: "Stir gently so every ground is saturated, then cover.",
      },
      {
        icon: "moon",
        title: "Steep",
        body: "Let it steep at room temperature or in the fridge for 16–24 hours.",
      },
      {
        icon: "filter",
        title: "Strain",
        body: "Strain through a paper filter or fine mesh to remove all the grounds.",
      },
      {
        icon: "glass",
        title: "Dilute and serve",
        body: "Cut the concentrate with water or milk to taste, and pour over ice.",
      },
    ],
  },
];

export function getBrewMethodBySlug(slug: string): BrewMethod | undefined {
  return brewMethods.find((m) => m.slug === slug);
}

export function getOtherBrewMethods(slug: string, limit = 4): BrewMethod[] {
  return brewMethods.filter((m) => m.slug !== slug).slice(0, limit);
}
