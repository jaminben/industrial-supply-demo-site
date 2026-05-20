import type { ImageKey } from "./images";

export const company = {
  name: "Vactera",
  legalName: "Vactera Industrial AB",
  tagline: "Evolving the power of vacuum",
  shortPitch: "Smarter gripping, moving and lifting — powered by vacuum, optimized for energy.",
  description:
    "Vactera designs and manufactures vacuum-driven automation — from energy-efficient pumps and suction cups to complete robotic gripping, bulk conveying and ergonomic lifting systems for the world's most demanding production lines.",
  founded: 1972,
  email: "sales@vactera.com",
  phone: "+1 (800) 555-0142",
  address: "1400 Industrial Parkway, Cleveland, OH 44114",
  countries: 70,
  employees: "1,100+",
  patents: 480,
};

export type IconName =
  | "pump"
  | "cup"
  | "robot"
  | "conveying"
  | "soft"
  | "sensor"
  | "lift"
  | "energy"
  | "automotive"
  | "food"
  | "package"
  | "pharma"
  | "chip"
  | "print"
  | "check"
  | "arrow"
  | "shield"
  | "leaf"
  | "globe"
  | "wrench"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "doc"
  | "play"
  | "spark"
  | "gauge"
  | "recycle"
  | "menu"
  | "close";

export type Product = {
  slug: string;
  name: string;
  family: string;
  category: string;
  icon: IconName;
  image: ImageKey;
  tagline: string;
  summary: string;
  overview: string[];
  benefits: { icon: IconName; title: string; detail: string }[];
  features: { title: string; detail: string }[];
  howItWorks: { title: string; detail: string }[];
  series: { name: string; description: string; spec: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
  segments: string[];
  faqs: { q: string; a: string }[];
  documents: { name: string; type: string }[];
};

export const products: Product[] = [
  {
    slug: "vacuum-pumps-ejectors",
    name: "Vacuum Pumps & Ejectors",
    family: "COAX®",
    category: "Vacuum Generation",
    icon: "pump",
    image: "vacuumPumps",
    tagline: "Multi-stage COAX® ejector technology",
    summary:
      "Compact, multi-stage vacuum ejectors that deliver up to 3x more flow per unit of compressed air than conventional pumps.",
    overview: [
      "At the heart of every Vactera vacuum system is COAX — our patented multi-stage cartridge technology. By nesting three venturi stages inside a single integrated body, COAX generates deep vacuum and high flow from the same feed line, so your line moves faster while drawing far less compressed air.",
      "Because the technology is modular, the same cartridges scale from a single suction point to a full multi-zone manifold. Built-in vacuum sensing and air-save logic shut off supply the instant your set level is reached — the single biggest lever you have on compressed-air cost.",
    ],
    benefits: [
      { icon: "energy", title: "Up to 90% less air", detail: "Integrated energy-save closes the supply once vacuum is reached and only sips again when it drops." },
      { icon: "gauge", title: "Faster cycles", detail: "Up to 3x the evacuation rate of single-stage ejectors shortens every pick-and-place cycle." },
      { icon: "wrench", title: "Field-serviceable", detail: "Cartridges swap in seconds with no tools and no need to re-pipe the system." },
      { icon: "shield", title: "Proven reliability", detail: "No moving parts in the vacuum path means a long, maintenance-light service life." },
    ],
    features: [
      { title: "Multi-stage cartridge", detail: "Three internal venturi stages generate deep vacuum and high flow from a single feed line." },
      { title: "Integrated energy save", detail: "Vacuum sensing closes the air supply once the set level is reached, cutting consumption up to 90%." },
      { title: "Decentralized design", detail: "Mount generation directly at the gripper to eliminate hose losses and slash response time." },
    ],
    howItWorks: [
      { title: "Compressed air in", detail: "Feed air at 3–6 bar enters the cartridge through a single port." },
      { title: "Three-stage venturi", detail: "Air accelerates through nested nozzles, each stage adding flow at progressively deeper vacuum." },
      { title: "Sense & hold", detail: "An onboard sensor reads vacuum level and signals the integrated valve." },
      { title: "Air-save cut-off", detail: "Once the set point is reached, supply closes; it reopens only when vacuum decays — saving air on every cycle." },
    ],
    series: [
      { name: "COAX MICRO", description: "Smallest footprint for in-gripper integration", spec: "≤ 60 Nl/min" },
      { name: "COAX DX", description: "Workhorse cartridge for general handling", spec: "≤ 180 Nl/min" },
      { name: "COAX MAX", description: "High-flow for porous and leaky loads", spec: "≤ 360 Nl/min" },
    ],
    specs: [
      { label: "Max vacuum", value: "90 kPa (-26.6 inHg)" },
      { label: "Air consumption", value: "From 0.18 Nl/s" },
      { label: "Feed pressure", value: "3 – 6 bar" },
      { label: "Evacuation rate", value: "Up to 360 Nl/min" },
      { label: "Body material", value: "Anodized aluminum / PA composite" },
      { label: "Control", value: "Integrated sensor + air-save valve" },
    ],
    applications: ["Robotic pick & place", "Packaging machinery", "Sheet-metal handling", "CNC fixturing", "Multi-zone conveyor pick"],
    segments: ["automotive", "packaging-logistics", "electronics", "print-paper"],
    faqs: [
      { q: "How much compressed air can COAX actually save?", a: "On a typical handling application with energy-save enabled, customers see 70–90% lower air consumption versus a single-stage ejector running continuously, because supply is cut the moment the set vacuum level is reached." },
      { q: "Can I retrofit COAX onto an existing line?", a: "Yes. COAX cartridges drop into standard mounting interfaces, and our engineers can specify a manifold that matches your existing suction points and feed pressure." },
      { q: "Does decentralized generation really matter?", a: "Mounting generation at the gripper removes meters of hose, which removes the volume that has to be evacuated every cycle — typically halving response time and further reducing air use." },
      { q: "What maintenance is required?", a: "There are no moving parts in the vacuum path. Routine maintenance is limited to occasional filter checks and a tool-free cartridge swap if a unit is ever damaged." },
    ],
    documents: [
      { name: "COAX product catalog", type: "PDF" },
      { name: "Energy-save technical guide", type: "PDF" },
      { name: "CAD models (STEP)", type: "CAD" },
    ],
  },
  {
    slug: "suction-cups",
    name: "Suction Cups & Lip Seals",
    family: "piGRIP®",
    category: "Gripping",
    icon: "cup",
    image: "suctionCups",
    tagline: "piGRIP® modular suction cup platform",
    summary:
      "A modular suction cup system pairing optimized cup lips with fittings and bellows for any surface, from oily steel to vacuum-packed produce.",
    overview: [
      "The piGRIP platform separates the cup lip, bellows and fitting into interchangeable parts, so engineers can configure the exact grip each part demands instead of compromising on an off-the-shelf cup.",
      "Specialized compounds handle high-temperature, food-contact and marking-sensitive surfaces, while patented lip geometries hold securely on uneven, porous and oily materials that defeat conventional cups.",
    ],
    benefits: [
      { icon: "spark", title: "One platform, any part", detail: "Mix and match lips, bellows and fittings to build the right cup without custom tooling." },
      { icon: "shield", title: "Secure on hard surfaces", detail: "Thin sealing edges conform to curved, textured and oily parts for a dependable seal." },
      { icon: "check", title: "Food & mark-safe", detail: "FDA and EU compounds plus non-marking materials for painted and visible surfaces." },
      { icon: "gauge", title: "Longer cup life", detail: "Optimized geometry spreads wear, extending replacement intervals on high-cycle lines." },
    ],
    features: [
      { title: "Optimized lip geometry", detail: "Thin sealing edge conforms to curved and textured surfaces for a reliable seal." },
      { title: "Bellows options", detail: "1.5 and 3.5 convolutions provide stroke and self-leveling on angled parts." },
      { title: "Material library", detail: "Polyurethane, silicone, nitrile and HNBR compounds rated from -20 to 200 °C." },
    ],
    howItWorks: [
      { title: "Select the lip", detail: "Choose a lip geometry and compound matched to your surface and temperature." },
      { title: "Add a bellows", detail: "Pick flat, 1.5 or 3.5 convolutions for stroke and self-leveling on angled parts." },
      { title: "Choose the fitting", detail: "Thread, push-in or vacuum-level fittings connect the cup to your manifold." },
      { title: "Validate on your part", detail: "Our engineers verify hold force and cycle life on your real components before you commit." },
    ],
    series: [
      { name: "piGRIP Flat", description: "Flat & low-profile for rigid, flat parts", spec: "4–110 mm" },
      { name: "piGRIP Bellows", description: "Self-leveling for angled and curved parts", spec: "10–88 mm" },
      { name: "piGRIP Oval", description: "Oval cups for profiles and extrusions", spec: "Up to 200 mm" },
    ],
    specs: [
      { label: "Diameter range", value: "4 mm – 200 mm" },
      { label: "Temperature", value: "-20 °C to 200 °C" },
      { label: "Compounds", value: "PU, silicone, NBR, HNBR" },
      { label: "Mounting", value: "Male/female G & NPT fittings" },
      { label: "Bellows", value: "Flat, 1.5 and 3.5 convolutions" },
      { label: "Food contact", value: "FDA / EU 1935/2004 options" },
    ],
    applications: ["Food & produce handling", "Automotive body panels", "Glass & solar", "Carton & label pick", "Plastic film & bags"],
    segments: ["food-beverage", "automotive", "packaging-logistics", "print-paper"],
    faqs: [
      { q: "How do I choose the right compound?", a: "It depends on surface, temperature and contact rules. Polyurethane is a hard-wearing all-rounder; silicone suits food and high temperature; nitrile resists oils. Our selector and engineers narrow it down for your part." },
      { q: "What does 'modular' actually mean here?", a: "The lip, bellows and fitting are separate parts you combine. You can change just the lip when a part changes, instead of replacing and re-piping a whole cup assembly." },
      { q: "Can these cups handle oily sheet metal?", a: "Yes — specific lip geometries and compounds are designed to seal on oily, stamped and textured metal, a common failure point for generic cups." },
      { q: "Are food-grade options certified?", a: "Food-contact compounds are available compliant with FDA and EU 1935/2004; detectable (metal/X-ray) materials are available for food-safety programs." },
    ],
    documents: [
      { name: "piGRIP selection guide", type: "PDF" },
      { name: "Compound & temperature chart", type: "PDF" },
      { name: "Suction cup CAD library", type: "CAD" },
    ],
  },
  {
    slug: "robotic-gripping",
    name: "Robotic End-of-Arm Tooling",
    family: "piEOAT®",
    category: "Automation",
    icon: "robot",
    image: "roboticGripping",
    tagline: "Plug-and-play vacuum EOAT for cobots & robots",
    summary:
      "Lightweight, pre-engineered gripper kits that mount to any major cobot flange and integrate vacuum generation, sensing and cups in one tool.",
    overview: [
      "Our end-of-arm tooling brings decentralized vacuum to the robot flange. Onboard generation and sensing mean faster cycles, lower air loss and a verified grip signal sent straight to the robot controller.",
      "Certified ISO and vendor-specific adapters make installation a ten-minute job, while configurable cup arrays adapt one tool to bags, boxes, trays and sheets — so you standardize on a single, smart gripping platform across the cell.",
    ],
    benefits: [
      { icon: "spark", title: "Deploy in minutes", detail: "Certified adapters and pre-built kits get a cobot picking the same day." },
      { icon: "energy", title: "Air at the tool", detail: "Generation at the flange removes hose volume, cutting both air use and response time." },
      { icon: "check", title: "Verified grip", detail: "Onboard sensing confirms part presence and triggers controlled, reliable release." },
      { icon: "gauge", title: "One tool, many parts", detail: "Reconfigurable cup arrays handle mixed SKUs without a tool change." },
    ],
    features: [
      { title: "Integrated generation", detail: "Vacuum is created at the tool, removing meters of hose and reducing response to milliseconds." },
      { title: "Digital grip signal", detail: "An onboard sensor confirms part presence and triggers controlled release." },
      { title: "Configurable arrays", detail: "Single-point to multi-cup arrays adapt to bags, boxes, trays and sheets." },
    ],
    howItWorks: [
      { title: "Mount the adapter", detail: "A certified flange adapter bolts the tool to your UR, FANUC, ABB or KUKA robot." },
      { title: "Power the tool", detail: "Connect compressed air and digital I/O or IO-Link — no separate pump cabinet required." },
      { title: "Pick & confirm", detail: "Onboard generation grips the part and the sensor confirms presence before the move." },
      { title: "Place & release", detail: "A controlled blow-off releases cleanly, and the cycle data streams to your controller." },
    ],
    series: [
      { name: "piEOAT One", description: "Single-point tool for light, fast picks", spec: "≤ 3 kg" },
      { name: "piEOAT Flex", description: "Reconfigurable array for mixed SKUs", spec: "≤ 12 kg" },
      { name: "piEOAT Max", description: "Multi-zone tool for cases & sheets", spec: "≤ 25 kg" },
    ],
    specs: [
      { label: "Payload", value: "Up to 25 kg" },
      { label: "Flange", value: "ISO 9409-1, vendor adapters" },
      { label: "Weight", value: "From 0.4 kg" },
      { label: "Interface", value: "Digital I/O / IO-Link" },
      { label: "Generation", value: "Onboard COAX cartridge" },
      { label: "Feedback", value: "Part-present + vacuum level" },
    ],
    applications: ["Cobot palletizing", "Machine tending", "Bin picking", "Case packing", "Tray loading"],
    segments: ["packaging-logistics", "automotive", "electronics", "food-beverage"],
    faqs: [
      { q: "Which robots are supported?", a: "We ship certified flange adapters for Universal Robots, FANUC, ABB, KUKA and Yaskawa, plus an ISO 9409-1 plate for everything else." },
      { q: "Do I need a separate vacuum pump cabinet?", a: "No. Generation is onboard the tool, so you only run compressed air and a signal line to the flange." },
      { q: "How does the robot know it has the part?", a: "An integrated sensor reports part-present and live vacuum level over digital I/O or IO-Link, so the program only moves on a confirmed grip." },
      { q: "Can one tool pick different products?", a: "Yes — the piEOAT Flex array zones cups on and off so a single tool handles boxes, bags and trays without a manual change." },
    ],
    documents: [
      { name: "piEOAT integration guide", type: "PDF" },
      { name: "Robot flange compatibility list", type: "PDF" },
      { name: "EOAT CAD & URCap", type: "CAD" },
    ],
  },
  {
    slug: "vacuum-conveying",
    name: "Vacuum Conveying Systems",
    family: "piFLOW®",
    category: "Material Transfer",
    icon: "conveying",
    image: "vacuumConveying",
    tagline: "Hygienic transfer of powders & bulk solids",
    summary:
      "Closed-loop pneumatic conveyors that move powders, granules and tablets gently, dust-free and with full CIP-ready hygiene.",
    overview: [
      "piFLOW conveyors use multi-stage vacuum to transfer bulk materials through fully enclosed lines — protecting product, operators and the environment from dust and contamination.",
      "Modular filter and discharge options handle everything from fine pharmaceutical powders to abrasive minerals, with tool-free disassembly for cleaning and 316L stainless construction for hygienic processes.",
    ],
    benefits: [
      { icon: "shield", title: "Dust-free & contained", detail: "A fully enclosed loop protects product purity and keeps operators away from airborne dust." },
      { icon: "check", title: "Tool-free cleaning", detail: "Conveyors disassemble without tools for fast CIP and validated changeovers." },
      { icon: "spark", title: "Gentle on product", detail: "Controlled vacuum transfer preserves fragile granules, flakes and tablets." },
      { icon: "wrench", title: "No moving parts", detail: "Air-driven generation means oil-free operation and minimal maintenance." },
    ],
    features: [
      { title: "Multi-stage drive", detail: "Compressed-air ejectors provide oil-free, maintenance-light conveying with no rotating parts." },
      { title: "Hygienic construction", detail: "316L stainless contact parts and FDA seals meet pharma and food standards." },
      { title: "Smart discharge", detail: "Programmable fill cycles and pinch valves dose material accurately into the process." },
    ],
    howItWorks: [
      { title: "Pick-up", detail: "A wand or hopper inlet draws material into the enclosed conveying line under vacuum." },
      { title: "Convey", detail: "Multi-stage vacuum carries the material gently through tubing to the destination." },
      { title: "Separate", detail: "Material drops into the receiver while a reverse-jet filter keeps fines contained." },
      { title: "Discharge", detail: "A pinch or butterfly valve releases a dosed batch into the process below." },
    ],
    series: [
      { name: "piFLOW p", description: "General-purpose powder & granule transfer", spec: "≤ 4,000 kg/h" },
      { name: "piFLOW f", description: "Hygienic food & pharma, FDA seals", spec: "≤ 6,000 kg/h" },
      { name: "piFLOW ATEX", description: "Explosion-rated for combustible dust", spec: "≤ 12,000 kg/h" },
    ],
    specs: [
      { label: "Throughput", value: "Up to 12,000 kg/h" },
      { label: "Conveying distance", value: "Up to 60 m" },
      { label: "Contact parts", value: "316L stainless / FDA seals" },
      { label: "Filter", value: "PTFE / PE, reverse-jet clean" },
      { label: "Discharge", value: "Pinch / butterfly valve" },
      { label: "Certification", value: "ATEX options available" },
    ],
    applications: ["Pharmaceutical powders", "Food ingredients", "Plastics & masterbatch", "Chemicals", "Battery materials"],
    segments: ["pharmaceutical", "food-beverage", "electronics"],
    faqs: [
      { q: "Is the system safe for explosive dusts?", a: "Yes. The piFLOW ATEX series is certified for combustible dust environments and is specified together with your dust-hazard assessment." },
      { q: "How is the conveyor cleaned?", a: "Conveyors disassemble without tools so contact parts can be wiped, washed or CIP-cleaned between batches for validated changeovers." },
      { q: "Will it damage fragile product?", a: "Controlled vacuum and dense-phase conveying handle friable materials gently, minimizing breakage of tablets, flakes and granules." },
      { q: "What distances can it cover?", a: "Standard systems convey up to roughly 60 m horizontally and vertically; longer or more complex routes are engineered case by case." },
    ],
    documents: [
      { name: "piFLOW conveying handbook", type: "PDF" },
      { name: "Hygienic design data sheet", type: "PDF" },
      { name: "Conveyor sizing worksheet", type: "PDF" },
    ],
  },
  {
    slug: "soft-grippers",
    name: "Soft Robotic Grippers",
    family: "piSOFT®",
    category: "Gripping",
    icon: "soft",
    image: "softGrippers",
    tagline: "Adaptive grippers for delicate, irregular parts",
    summary:
      "Food-safe elastomer fingers that gently conform around fragile and variable items — no programming or part-specific tooling required.",
    overview: [
      "When parts are soft, irregular or easily bruised, rigid jaws and even suction can fall short. piSOFT grippers use compliant, air-actuated fingers that wrap around an object's natural shape.",
      "The result is gentle, repeatable handling of produce, baked goods and assembled electronics — with food-grade, detachable fingers that swap in seconds and need no part-specific programming.",
    ],
    benefits: [
      { icon: "spark", title: "Handles the unhandleable", detail: "Compliant fingers grip soft, irregular and mixed items that defeat rigid tooling." },
      { icon: "check", title: "Food-safe by design", detail: "FDA-compliant, detachable fingers are dishwasher-safe and quick to replace." },
      { icon: "gauge", title: "Zero part programming", detail: "One tool adapts to a wide SKU range — ideal for variable e-grocery orders." },
      { icon: "shield", title: "Gentle & repeatable", detail: "Even pressure distribution avoids bruising and marking on delicate goods." },
    ],
    features: [
      { title: "Compliant fingers", detail: "Air-pressure actuation lets each finger adapt to the object without crushing it." },
      { title: "Hygienic & washdown", detail: "Detachable food-grade fingers are dishwasher-safe and quick to swap." },
      { title: "Mixed-SKU ready", detail: "One tool handles a wide range of shapes, ideal for variable e-grocery orders." },
    ],
    howItWorks: [
      { title: "Approach", detail: "The open gripper positions over an item of almost any shape." },
      { title: "Inflate", detail: "Low-pressure air curls the soft fingers inward to wrap the object." },
      { title: "Lift", detail: "Distributed contact holds the item securely without point pressure." },
      { title: "Release", detail: "Venting the fingers opens the gripper for a gentle, clean release." },
    ],
    series: [
      { name: "piSOFT 2F", description: "Two-finger for elongated items", spec: "≤ 1 kg" },
      { name: "piSOFT 3F", description: "Three-finger for round & irregular items", spec: "≤ 2 kg" },
      { name: "piSOFT 4F", description: "Four-finger for heavier, bulky items", spec: "≤ 3 kg" },
    ],
    specs: [
      { label: "Finger counts", value: "2, 3 and 4-finger arrays" },
      { label: "Payload", value: "Up to 3 kg" },
      { label: "Material", value: "FDA food-grade elastomer" },
      { label: "Actuation", value: "Low-pressure compressed air" },
      { label: "Cleaning", value: "Detachable, dishwasher-safe fingers" },
      { label: "Interface", value: "ISO flange + digital I/O" },
    ],
    applications: ["Fresh produce", "Bakery & confectionery", "E-grocery fulfillment", "Assembled electronics", "Meat & protein"],
    segments: ["food-beverage", "packaging-logistics", "electronics"],
    faqs: [
      { q: "Why use soft grippers instead of suction?", a: "Suction needs a sealing surface. Soft fingers grip porous, uneven and bagged items — bread, fruit, mesh-wrapped products — where a cup can't form a seal." },
      { q: "Are they safe for direct food contact?", a: "Yes. Fingers are made from FDA-compliant food-grade elastomer and detach without tools for dishwasher cleaning." },
      { q: "Do I need to program each product?", a: "No. The compliant fingers self-adapt to shape, so one configuration handles a wide range of SKUs — a major advantage for mixed e-grocery orders." },
      { q: "How fragile can the items be?", a: "Pressure is distributed across the finger surface rather than concentrated, so ripe fruit, pastries and delicate assemblies can be handled without bruising or marking." },
    ],
    documents: [
      { name: "piSOFT application guide", type: "PDF" },
      { name: "Food-contact compliance sheet", type: "PDF" },
      { name: "Finger configurator data", type: "PDF" },
    ],
  },
  {
    slug: "smart-vacuum-iot",
    name: "Smart Vacuum & IoT",
    family: "piCONNECT®",
    category: "Digital",
    icon: "sensor",
    image: "smartVacuum",
    tagline: "Connected vacuum with predictive insight",
    summary:
      "IO-Link sensors and edge gateways that turn every gripper into a data source for uptime, energy and predictive maintenance.",
    overview: [
      "piCONNECT turns vacuum from a silent utility into a live data stream. Connected pumps report vacuum level, cycle count, air consumption and leakage trends to your control system or cloud dashboard.",
      "Built-in diagnostics flag a worn cup or rising leak before it stops the line, while energy analytics quantify exactly where compressed air is being spent — so you can target the costliest grip points first.",
    ],
    benefits: [
      { icon: "gauge", title: "Predict failures", detail: "Trend analysis flags seal wear and leaks before they cause unplanned downtime." },
      { icon: "energy", title: "See your air spend", detail: "Per-grip energy analytics pinpoint where compressed air — and money — is going." },
      { icon: "globe", title: "Open connectivity", detail: "IO-Link, OPC UA and MQTT integrate cleanly with PLCs and cloud platforms." },
      { icon: "spark", title: "Faster commissioning", detail: "Live vacuum and cycle data make tuning and troubleshooting dramatically quicker." },
    ],
    features: [
      { title: "Condition monitoring", detail: "Trend analysis predicts seal wear and triggers maintenance before failures occur." },
      { title: "Energy analytics", detail: "Per-cycle air consumption is logged so you can target the costliest grip points." },
      { title: "Open connectivity", detail: "IO-Link, OPC UA and MQTT integrate cleanly with PLCs and cloud platforms." },
    ],
    howItWorks: [
      { title: "Sense", detail: "Smart pumps measure vacuum, flow, cycles and leakage at up to 1 kHz." },
      { title: "Connect", detail: "Data publishes over IO-Link to the PLC and via OPC UA / MQTT to the edge." },
      { title: "Analyze", detail: "On-device and dashboard analytics turn raw signals into wear and energy insight." },
      { title: "Act", detail: "Alerts schedule maintenance and flag energy waste before they become stoppages." },
    ],
    series: [
      { name: "piCONNECT Sensor", description: "Add-on IO-Link vacuum sensor", spec: "1 kHz sampling" },
      { name: "piCONNECT Pump", description: "Smart COAX pump with built-in telemetry", spec: "Vac/flow/cycles" },
      { name: "piCONNECT Edge", description: "Gateway for OPC UA / MQTT & dashboards", spec: "Cloud-ready" },
    ],
    specs: [
      { label: "Protocols", value: "IO-Link, OPC UA, MQTT" },
      { label: "Data points", value: "Vacuum, flow, cycles, leakage" },
      { label: "Sample rate", value: "Up to 1 kHz" },
      { label: "Edge", value: "On-device diagnostics" },
      { label: "Dashboards", value: "Web + REST API" },
      { label: "Alerts", value: "Threshold + trend-based" },
    ],
    applications: ["Predictive maintenance", "Energy optimization", "OEE dashboards", "Digital twin lines", "Remote diagnostics"],
    segments: ["automotive", "electronics", "packaging-logistics", "pharmaceutical"],
    faqs: [
      { q: "What can the data actually tell me?", a: "Live vacuum, flow, cycle counts and leakage trends reveal worn cups, growing leaks, slow cycles and the exact air consumption of each grip point." },
      { q: "How does it integrate with my PLC?", a: "Devices speak IO-Link to the PLC out of the box, and the edge gateway exposes OPC UA and MQTT for SCADA, historians and cloud platforms." },
      { q: "Do I need the cloud to use it?", a: "No. Diagnostics run on-device and over IO-Link locally. The edge gateway and dashboards are optional for fleet-wide analytics." },
      { q: "Can it work with existing pumps?", a: "Yes — the piCONNECT add-on sensor brings telemetry to existing vacuum points without replacing the whole system." },
    ],
    documents: [
      { name: "piCONNECT data sheet", type: "PDF" },
      { name: "IO-Link & OPC UA integration", type: "PDF" },
      { name: "Predictive maintenance white paper", type: "PDF" },
    ],
  },
  {
    slug: "ergonomic-lifting",
    name: "Ergonomic Lifting Solutions",
    family: "piLIFT®",
    category: "Material Handling",
    icon: "lift",
    image: "lifting",
    tagline: "Vacuum lifters that protect people and product",
    summary:
      "Vacuum tube lifters, jib cranes and hoists that let one operator move boxes, sacks, sheets and drums quickly, safely and without strain.",
    overview: [
      "piLIFT ergonomic lifters use vacuum to let a single operator move heavy or awkward loads with the touch of a handle — eliminating the strains and injuries that come with manual lifting.",
      "From vacuum tube lifters for boxes and sacks to jib cranes and overhead rail systems, piLIFT is configured around your load, reach and cycle so that lifting becomes effortless, repeatable and safe.",
    ],
    benefits: [
      { icon: "shield", title: "Fewer injuries", detail: "Operators lift heavy, awkward loads with no back or shoulder strain, cutting lost-time injuries." },
      { icon: "gauge", title: "Faster handling", detail: "Intuitive single-operator control speeds up loading, palletizing and order picking." },
      { icon: "spark", title: "Handles any load", detail: "Tools for boxes, sacks, sheets, drums and more — gripped securely by vacuum." },
      { icon: "check", title: "Easy to operate", detail: "Lift, swivel and release with one hand; minimal training to be productive." },
    ],
    features: [
      { title: "Vacuum tube lifters", detail: "Lift and lower loads smoothly with a single ergonomic control handle." },
      { title: "Jib & rail systems", detail: "Pillar and wall jib cranes plus overhead rail extend reach across the workstation." },
      { title: "Quick-change tools", detail: "Swap suction feet and grip heads to match boxes, sacks, sheets or drums." },
    ],
    howItWorks: [
      { title: "Grip", detail: "The operator lowers the lifting tool and vacuum grips the load securely." },
      { title: "Lift", detail: "A control handle raises the load smoothly with vacuum doing the work." },
      { title: "Move", detail: "Jib or rail glides the load to its destination within easy reach." },
      { title: "Place", detail: "A controlled release sets the load down precisely and the cycle repeats." },
    ],
    series: [
      { name: "piLIFT Tube", description: "Vacuum tube lifter for boxes & sacks", spec: "≤ 70 kg" },
      { name: "piLIFT Jib", description: "Pillar / wall jib crane with lifter", spec: "≤ 150 kg" },
      { name: "piLIFT Rail", description: "Overhead rail for full-cell coverage", spec: "≤ 300 kg" },
    ],
    specs: [
      { label: "Lifting capacity", value: "Up to 300 kg" },
      { label: "Lifter type", value: "Vacuum tube / hoist" },
      { label: "Reach", value: "Jib & overhead rail options" },
      { label: "Control", value: "Single-hand ergonomic handle" },
      { label: "Tools", value: "Box, sack, sheet, drum heads" },
      { label: "Power", value: "Electric vacuum pump unit" },
    ],
    applications: ["Carton & case lifting", "Sack & bag handling", "Sheet & board lifting", "Drum & roll handling", "Order picking"],
    segments: ["packaging-logistics", "food-beverage", "print-paper", "pharmaceutical"],
    faqs: [
      { q: "How heavy a load can one person handle?", a: "With a vacuum tube lifter a single operator routinely handles loads up to 70 kg, and jib or rail systems extend that to 300 kg — all without manual strain." },
      { q: "Can it lift porous sacks and bags?", a: "Yes. Dedicated sack tools and high-flow vacuum grip porous and breathable packaging that simple cups would struggle to hold." },
      { q: "Is it safe if power is lost?", a: "Lifters include a vacuum reservoir and check valves so a load is held safely and lowered in a controlled way in the event of a power interruption." },
      { q: "How is it installed?", a: "Pillar and wall-mounted jibs need only a suitable floor or wall fixing; overhead rail is engineered to your building's structure during the project phase." },
    ],
    documents: [
      { name: "piLIFT product overview", type: "PDF" },
      { name: "Ergonomics & safety guide", type: "PDF" },
      { name: "Lifting tool selection chart", type: "PDF" },
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  image: ImageKey;
  tagline: string;
  blurb: string;
  overview: string[];
  challenges: { title: string; detail: string }[];
  solutions: { title: string; detail: string }[];
  recommendedProducts: string[];
  applications: string[];
  caseStudy: { title: string; metric: string; quote: string; author: string };
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    icon: "automotive",
    image: "automotive",
    tagline: "Line-speed handling for body, battery and trim",
    blurb: "Handle body panels, batteries and trim at line speed with mark-free grip and robust EOAT.",
    overview: [
      "Automotive lines run fast, around the clock, on parts that are heavy, oily and often safety-critical. Vactera's vacuum technology grips stamped panels, glass, batteries and trim reliably while keeping compressed-air cost under control.",
      "As electrification reshapes the plant, we help handle battery modules and lightweight composites with the same speed and repeatability you expect from body-in-white.",
    ],
    challenges: [
      { title: "Oily, stamped metal", detail: "Press-shop panels are oily and uneven — a classic failure point for generic suction cups." },
      { title: "Cycle-time pressure", detail: "Every tenth of a second per pick multiplies across a high-volume line." },
      { title: "EV battery handling", detail: "Heavy, sensitive modules demand secure, validated, mark-free grip." },
    ],
    solutions: [
      { title: "Specialized cup compounds", detail: "piGRIP lips and compounds seal reliably on oily, textured press-shop steel." },
      { title: "Decentralized COAX", detail: "Generation at the gripper shortens response time and cuts air use on fast cycles." },
      { title: "Verified robotic EOAT", detail: "piEOAT tooling confirms every grip before the move, protecting costly battery modules." },
    ],
    recommendedProducts: ["suction-cups", "robotic-gripping", "vacuum-pumps-ejectors", "smart-vacuum-iot"],
    applications: ["Body-in-white panel handling", "EV battery module assembly", "Robotic press-line tending", "Glass & sunroof handling"],
    caseStudy: {
      title: "Press-line retrofit at a Tier-1 stamping plant",
      metric: "31% lower air cost",
      quote: "Switching to decentralized COAX with energy-save cut our compressed-air bill on the press line by nearly a third — and the panels stopped dropping.",
      author: "Manufacturing Engineering Lead, Tier-1 supplier",
    },
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "food",
    image: "food",
    tagline: "Hygienic gripping and conveying you can validate",
    blurb: "Hygienic, FDA-compliant gripping and conveying for primary and secondary packaging.",
    overview: [
      "Food production demands hygiene, gentle handling and the flexibility to deal with natural variation in the product itself. Vactera offers food-grade suction cups, soft grippers and hygienic conveyors built for washdown and compliance.",
      "From picking ripe produce to conveying powders dust-free, we help food and beverage makers automate without compromising safety or product quality.",
    ],
    challenges: [
      { title: "Hygiene & compliance", detail: "Contact materials must meet FDA / EU rules and survive frequent washdown." },
      { title: "Fragile, variable product", detail: "Produce and baked goods vary in shape and bruise easily under point pressure." },
      { title: "Dust & contamination", detail: "Open powder transfer risks product loss, mess and operator exposure." },
    ],
    solutions: [
      { title: "Food-grade gripping", detail: "FDA-compliant piGRIP cups and detectable compounds for food-safety programs." },
      { title: "Soft adaptive fingers", detail: "piSOFT grippers wrap delicate, irregular items without bruising or marking." },
      { title: "Closed-loop conveying", detail: "piFLOW transfers powders and granules dust-free, with tool-free CIP cleaning." },
    ],
    recommendedProducts: ["soft-grippers", "suction-cups", "vacuum-conveying", "ergonomic-lifting"],
    applications: ["Produce & bakery picking", "Hygienic powder conveying", "Tray & carton loading", "Sack & bag lifting"],
    caseStudy: {
      title: "Mixed-SKU picking at an e-grocery fulfillment center",
      metric: "2.4x throughput",
      quote: "Soft grippers let one cell pick everything from bagged salad to boxed eggs — we more than doubled throughput without a tool change.",
      author: "Automation Manager, online grocer",
    },
  },
  {
    slug: "packaging-logistics",
    name: "Packaging & Logistics",
    icon: "package",
    image: "packaging",
    tagline: "High-throughput palletizing and order fulfillment",
    blurb: "High-throughput palletizing, case packing and mixed-SKU order fulfillment.",
    overview: [
      "Throughput is everything in packaging and logistics, and it has to hold up across a huge mix of box sizes, bag types and product weights. Vactera builds fast, reliable vacuum handling for palletizing, case packing and e-commerce picking.",
      "Smart, energy-efficient generation keeps high-cycle cells running at the lowest possible air cost, while ergonomic lifters protect the people working alongside the robots.",
    ],
    challenges: [
      { title: "Huge SKU variety", detail: "Cells must grip boxes, bags, trays and shrink-wrap without constant retooling." },
      { title: "Round-the-clock cycles", detail: "Continuous operation makes air cost and reliability decisive." },
      { title: "Manual lifting strain", detail: "Heavy cases and sacks cause injuries in pick and pack zones." },
    ],
    solutions: [
      { title: "Reconfigurable EOAT", detail: "piEOAT arrays zone cups on and off to handle mixed loads with one tool." },
      { title: "Energy-saving generation", detail: "COAX with air-save slashes the air bill on high-cycle palletizing." },
      { title: "Ergonomic lifters", detail: "piLIFT tube lifters and jibs move heavy cases and sacks safely by hand." },
    ],
    recommendedProducts: ["robotic-gripping", "vacuum-pumps-ejectors", "ergonomic-lifting", "smart-vacuum-iot"],
    applications: ["Robotic palletizing", "Case & bag handling", "E-commerce order picking", "Depalletizing"],
    caseStudy: {
      title: "Energy audit across a distribution center",
      metric: "84% air reduction",
      quote: "Connected pumps showed us which grip points were leaking air all shift. Fixing them with energy-save cut palletizer air use by 84%.",
      author: "Continuous Improvement Lead, 3PL operator",
    },
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    icon: "pharma",
    image: "pharma",
    tagline: "Contained, validatable handling and transfer",
    blurb: "Contained, validatable transfer and handling that protects product and operator alike.",
    overview: [
      "Pharmaceutical manufacturing is defined by containment, documentation and validation. Vactera supplies hygienic conveying and handling built from 316L stainless with materials and designs that support GMP processes.",
      "Whether transferring potent powders or handling vials and tablets, our systems contain the product, protect the operator and disassemble for validated cleaning.",
    ],
    challenges: [
      { title: "Containment of potent powders", detail: "Operator exposure and cross-contamination must be designed out, not managed." },
      { title: "Validation & documentation", detail: "Every contact material and cleaning step has to be traceable and repeatable." },
      { title: "Gentle, precise handling", detail: "Tablets, vials and devices are fragile and high-value." },
    ],
    solutions: [
      { title: "Contained conveying", detail: "piFLOW transfers powders in a closed loop with hygienic, tool-free cleaning." },
      { title: "316L hygienic build", detail: "Stainless contact parts and FDA seals support GMP and validation." },
      { title: "Smart traceability", detail: "piCONNECT logs cycles and conditions for documentation and audit." },
    ],
    recommendedProducts: ["vacuum-conveying", "suction-cups", "smart-vacuum-iot", "ergonomic-lifting"],
    applications: ["Contained powder transfer", "Tablet & vial handling", "CIP-ready hygienic design", "Drum & IBC lifting"],
    caseStudy: {
      title: "Contained powder transfer for an OSD line",
      metric: "Zero open transfer",
      quote: "Moving to closed-loop vacuum conveying eliminated open powder handling entirely and made our cleaning validation far simpler.",
      author: "Process Engineer, oral solid dose facility",
    },
  },
  {
    slug: "electronics",
    name: "Electronics & Semiconductor",
    icon: "chip",
    image: "electronics",
    tagline: "Ultra-clean, precise handling of delicate parts",
    blurb: "Ultra-clean, precise handling of wafers, panels and delicate assemblies.",
    overview: [
      "Electronics and semiconductor production needs cleanliness, precision and an extremely gentle touch on parts measured in microns. Vactera provides low-particulate vacuum handling for wafers, panels, PCBs and delicate assemblies.",
      "Fine-pitch suction, sensitive vacuum control and connected diagnostics keep yields high and handling damage low in cleanroom-class environments.",
    ],
    challenges: [
      { title: "Particulate control", detail: "Cleanroom processes can't tolerate particles or oil from handling." },
      { title: "Fragile, thin parts", detail: "Wafers, panels and flex circuits crack or mark under the wrong grip." },
      { title: "Micron-level precision", detail: "Pick-and-place demands consistent, repeatable, verified handling." },
    ],
    solutions: [
      { title: "Low-particulate cups", detail: "Clean compounds and fine-pitch suction handle wafers and panels safely." },
      { title: "Sensitive control", detail: "Precise vacuum levels protect thin, fragile substrates from damage." },
      { title: "Verified placement", detail: "piCONNECT confirms grip and logs every cycle for traceable quality." },
    ],
    recommendedProducts: ["suction-cups", "robotic-gripping", "smart-vacuum-iot", "soft-grippers"],
    applications: ["Wafer & panel handling", "PCB pick & place", "Cleanroom-rated tooling", "Battery cell handling"],
    caseStudy: {
      title: "Panel handling on a display line",
      metric: "0.3% breakage",
      quote: "Switching to low-particulate cups with precise vacuum control brought our glass panel breakage rate below a third of a percent.",
      author: "Yield Engineer, display manufacturer",
    },
  },
  {
    slug: "print-paper",
    name: "Print & Paper",
    icon: "print",
    image: "printPaper",
    tagline: "Fast, reliable feeding for high-speed lines",
    blurb: "Fast, reliable sheet feeding and stacking for high-speed print and converting lines.",
    overview: [
      "Print, paper and converting lines live or die on reliable sheet feeding at speed. Vactera supplies fast, precise vacuum feeding, stacking and handling for paper, board and film.",
      "High-flow generation and durable cups keep feeders fed and stackers stacking through millions of cycles, while energy-save technology keeps the air bill down on continuous runs.",
    ],
    challenges: [
      { title: "Double-feeds & misfeeds", detail: "Inconsistent sheet pickup stops high-speed presses and wastes stock." },
      { title: "Porous, dusty media", detail: "Paper and board are porous and shed dust that clogs handling systems." },
      { title: "Relentless cycle counts", detail: "Feeders run millions of cycles, punishing cups and generation alike." },
    ],
    solutions: [
      { title: "High-flow generation", detail: "COAX handles porous, leaky paper stock and recovers vacuum fast between sheets." },
      { title: "Durable feeder cups", detail: "piGRIP cups and compounds withstand high-cycle feeding and stacking." },
      { title: "Energy-save on long runs", detail: "Air-save technology trims compressed-air cost on continuous production." },
    ],
    recommendedProducts: ["vacuum-pumps-ejectors", "suction-cups", "ergonomic-lifting", "smart-vacuum-iot"],
    applications: ["Sheet feeding", "Folding-carton handling", "High-cycle stacking", "Reel & roll lifting"],
    caseStudy: {
      title: "Feeder upgrade on a folding-carton press",
      metric: "62% fewer stops",
      quote: "Better high-flow generation and the right cups cut our feeder-related stoppages by nearly two thirds on the carton line.",
      author: "Production Manager, packaging printer",
    },
  },
];

export const stats = [
  { value: "50+", label: "Years of vacuum expertise" },
  { value: "70", label: "Countries served" },
  { value: "480+", label: "Active patents" },
  { value: "90%", label: "Max air-energy savings" },
];

export const differentiators = [
  {
    icon: "energy" as IconName,
    title: "Energy at the core",
    detail:
      "Every system is engineered to cut compressed-air consumption — the single largest energy cost on most automated lines.",
  },
  {
    icon: "wrench" as IconName,
    title: "Application engineering",
    detail:
      "Our specialists co-design the grip with you, validating cycle time and reliability on your real parts before you commit.",
  },
  {
    icon: "globe" as IconName,
    title: "Global support",
    detail:
      "Local stock, service and engineering in 70 countries keep your lines running wherever they are.",
  },
  {
    icon: "shield" as IconName,
    title: "Built to last",
    detail:
      "Field-serviceable, modular designs and a 480-patent portfolio mean proven durability and a lower total cost of ownership.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
