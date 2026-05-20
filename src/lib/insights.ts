import type { IconName } from "./data";
import type { ImageKey } from "./images";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: ImageKey;
  icon: IconName;
  body: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    slug: "compressed-air-hidden-cost",
    title: "The hidden cost of compressed air — and how to cut it",
    category: "Energy",
    excerpt:
      "Compressed air is often the most expensive utility in a plant, and vacuum is one of its biggest consumers. Here's where the money goes and how to get it back.",
    date: "2026-04-22",
    readTime: "6 min read",
    author: "Vactera Engineering",
    image: "insightEnergy",
    icon: "energy",
    body: [
      {
        heading: "Why air is so expensive",
        paragraphs: [
          "Generating compressed air is energy-intensive: only a fraction of the electricity that drives a compressor ends up as useful work at the tool. The rest is lost as heat, leaks and idle running. That makes every liter of air you don't use one of the easiest savings on the plant floor.",
          "Vacuum handling is a major air consumer because traditional ejectors run continuously, drawing air whether or not a part is being held.",
        ],
      },
      {
        heading: "The three biggest leaks of value",
        paragraphs: [
          "First, continuous running: ejectors that never switch off waste air during every idle moment of the cycle. Second, oversized hose volume: long runs of tube between a central pump and the gripper must be evacuated every cycle. Third, undetected leaks: a worn cup or loose fitting bleeds air all shift without anyone noticing.",
        ],
      },
      {
        heading: "Closing the gap",
        paragraphs: [
          "Energy-save valves cut supply the instant the set vacuum level is reached and reopen only when it decays — eliminating continuous running. Decentralized generation at the gripper removes hose volume. And connected sensing surfaces leaks the moment they appear, so they get fixed in hours instead of months.",
          "Stacked together, these measures routinely cut vacuum-related air consumption by 70–90%, with payback often under a year.",
        ],
      },
    ],
    takeaways: [
      "Vacuum can be one of the largest compressed-air consumers in a plant",
      "Energy-save, decentralization and leak detection are the three biggest levers",
      "Combined savings of 70–90% are realistic, often with sub-year payback",
    ],
  },
  {
    slug: "choosing-the-right-suction-cup",
    title: "How to choose the right suction cup",
    category: "Gripping",
    excerpt:
      "Surface, temperature, geometry and cycle life all shape the right cup. A practical framework for getting the choice right the first time.",
    date: "2026-03-30",
    readTime: "7 min read",
    author: "Vactera Application Team",
    image: "insightCups",
    icon: "cup",
    body: [
      {
        heading: "Start with the surface",
        paragraphs: [
          "The surface decides almost everything. Smooth and flat? A flat cup seals easily. Curved or angled? You need a bellows cup that can self-level. Oily, stamped metal? You need a lip geometry and compound designed to seal through the oil film rather than skate on it.",
        ],
      },
      {
        heading: "Match the compound to the conditions",
        paragraphs: [
          "Polyurethane is a hard-wearing all-rounder for general handling. Silicone tolerates high temperature and food contact. Nitrile resists oils. For food safety, detectable compounds let metal detectors and X-ray catch any fragment. Temperature range, marking rules and chemical exposure all narrow the field.",
        ],
      },
      {
        heading: "Don't forget cycle life",
        paragraphs: [
          "A cup that grips perfectly but wears out weekly is a false economy. Lip geometry that distributes wear, correct sizing for the load, and the right vacuum level all extend service intervals. Validating on your real parts — not a clean sample — is the only way to know for sure.",
        ],
      },
    ],
    takeaways: [
      "Surface type is the first and most important decision",
      "Compound choice follows temperature, contact rules and chemicals",
      "Always validate cup life on real production parts",
    ],
  },
  {
    slug: "decentralized-vacuum-explained",
    title: "Decentralized vacuum, explained",
    category: "Technology",
    excerpt:
      "Moving vacuum generation to the gripper sounds like a detail. It quietly transforms cycle time, energy use and reliability.",
    date: "2026-03-11",
    readTime: "5 min read",
    author: "Vactera Engineering",
    image: "insightDecentral",
    icon: "robot",
    body: [
      {
        heading: "Centralized vs decentralized",
        paragraphs: [
          "In a centralized system, one large pump sits in a cabinet and feeds vacuum through long hoses to each gripper. In a decentralized system, a compact generator sits at — or in — the gripper itself, creating vacuum exactly where it's needed.",
        ],
      },
      {
        heading: "Why location matters",
        paragraphs: [
          "Every cycle, the system has to evacuate not just the cup but all the hose volume between pump and tool. Long hoses mean more air, slower response and more places to leak. Generating at the gripper shrinks that volume to almost nothing.",
          "The result is faster pick-and-place, lower air consumption and a more responsive, more reliable grip.",
        ],
      },
      {
        heading: "When it's the right call",
        paragraphs: [
          "Decentralization shines on fast, high-cycle robotic applications and anywhere air cost matters. Centralized systems still make sense for very large, steady-state loads — but for most modern automation, generation at the tool wins.",
        ],
      },
    ],
    takeaways: [
      "Hose volume must be evacuated every cycle — and it's pure waste",
      "Generation at the gripper cuts response time and air use",
      "Best for fast, high-cycle robotic handling",
    ],
  },
  {
    slug: "soft-robotics-in-food",
    title: "Soft robotics is quietly transforming food handling",
    category: "Automation",
    excerpt:
      "Suction needs a seal. Many foods don't offer one. Compliant soft grippers are opening up automation for products that used to need human hands.",
    date: "2026-02-19",
    readTime: "6 min read",
    author: "Vactera Application Team",
    image: "insightSoft",
    icon: "soft",
    body: [
      {
        heading: "The sealing problem",
        paragraphs: [
          "Vacuum cups need a smooth, non-porous surface to seal against. A loaf of bread, a mesh bag of citrus, a cluster of pastries — none of these offer one. For years that meant such products stayed manual.",
        ],
      },
      {
        heading: "How soft grippers change the math",
        paragraphs: [
          "Compliant fingers don't need a seal. They inflate to wrap around an object's natural shape, distributing pressure so even fragile items aren't bruised. One configuration adapts to a wide range of shapes, which is exactly what variable e-grocery orders demand.",
        ],
      },
      {
        heading: "Hygiene built in",
        paragraphs: [
          "Food-grade, detachable fingers swap out for dishwasher cleaning, so soft grippers meet the same hygiene bar as the rest of a food line while opening up SKUs that were previously impossible to automate.",
        ],
      },
    ],
    takeaways: [
      "Many foods can't form the seal that suction cups require",
      "Compliant fingers grip by wrapping, not sealing",
      "One tool handles mixed SKUs — ideal for e-grocery",
    ],
  },
  {
    slug: "predictive-maintenance-vacuum",
    title: "Turning vacuum into a predictive-maintenance signal",
    category: "Digital",
    excerpt:
      "A worn cup or creeping leak shows up in the data long before it stops the line. Connected vacuum makes that warning visible.",
    date: "2026-01-28",
    readTime: "5 min read",
    author: "Vactera Engineering",
    image: "insightPredictive",
    icon: "sensor",
    body: [
      {
        heading: "Failures announce themselves",
        paragraphs: [
          "Vacuum systems rarely fail without warning. A cup wears and takes a little longer to reach set level. A fitting loosens and the leak rate ticks up. Cycle by cycle, the data drifts — if anyone is watching.",
        ],
      },
      {
        heading: "From signal to schedule",
        paragraphs: [
          "Connected pumps stream vacuum level, evacuation time, cycle count and leakage. Trend analysis turns those signals into a maintenance schedule: replace this cup at the next changeover, investigate that rising leak now. Unplanned stoppages become planned, cheap interventions.",
        ],
      },
      {
        heading: "The energy dividend",
        paragraphs: [
          "The same data exposes energy waste. A grip point that's quietly leaking all shift is both a reliability risk and an air-cost drain. Fixing it pays twice.",
        ],
      },
    ],
    takeaways: [
      "Vacuum trends reveal wear and leaks before failure",
      "Trend analysis converts data into maintenance scheduling",
      "Leak detection improves both uptime and energy cost",
    ],
  },
  {
    slug: "designing-for-sustainability",
    title: "Designing automation for sustainability",
    category: "Sustainability",
    excerpt:
      "Efficiency isn't a feature you add at the end. The biggest environmental gains come from decisions made at the design stage.",
    date: "2026-01-09",
    readTime: "6 min read",
    author: "Vactera Sustainability",
    image: "insightSustainability",
    icon: "leaf",
    body: [
      {
        heading: "Energy is designed in",
        paragraphs: [
          "By the time a line is built, most of its lifetime energy use is already locked in by the components chosen. That's why we treat energy efficiency as a design requirement, not a retrofit — every vacuum system is specified to do its job with the least possible air.",
        ],
      },
      {
        heading: "Longevity and circularity",
        paragraphs: [
          "Durable, field-serviceable, modular products keep equipment out of the waste stream. When a cup wears, you replace a cup — not a whole assembly. Repairability and standard interfaces extend service life and reduce material use.",
        ],
      },
      {
        heading: "Measuring what matters",
        paragraphs: [
          "Connected systems make sustainability measurable: actual air consumption per cycle, per line, per site. You can't improve what you can't see, and visibility is the first step to a lower-carbon operation.",
        ],
      },
    ],
    takeaways: [
      "Most lifetime energy use is locked in at design time",
      "Modular, repairable products reduce waste",
      "Connected data makes energy and carbon measurable",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
