// Centralized image map. Every photo on the site is referenced from here so
// it can be swapped in one place. Sources are Unsplash (royalty-free).
// The comment on each entry is the INTENDED subject — if a photo doesn't fit,
// replace the id with another Unsplash "photo-..." id and it propagates site-wide.

function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const img = {
  // hero / general
  heroFactory: unsplash("photo-1565043666747-69f6646db940"), // automated manufacturing line
  engineerTablet: unsplash("photo-1581092160562-40aa08e78837"), // engineer with tablet in plant
  controlRoom: unsplash("photo-1581092918056-0c4c3acd3789", 1600), // operator / control
  warehouse: unsplash("photo-1553413077-190dd305871c"), // warehouse logistics
  teamMeeting: unsplash("photo-1556761175-5973dc0f32e7"), // office / team

  // products
  vacuumPumps: unsplash("photo-1565514020179-026b92b84bb6"), // pneumatic machinery
  suctionCups: unsplash("photo-1581093588401-fbb62a02f120"), // close-up handling
  roboticGripping: unsplash("photo-1567789884554-0b844b597180"), // industrial robot arm
  vacuumConveying: unsplash("photo-1504328345606-18bbc8c9d7d1"), // process piping plant
  softGrippers: unsplash("photo-1606857521015-7f9fcf423740"), // robotic hand / gripper
  smartVacuum: unsplash("photo-1518770660439-4636190af475"), // electronics / circuit
  lifting: unsplash("photo-1553413077-190dd305871c"), // warehouse lifting

  // industries
  automotive: unsplash("photo-1565043666747-69f6646db940"), // car body line
  food: unsplash("photo-1556910103-1c02745aae4d"), // food production
  packaging: unsplash("photo-1553413077-190dd305871c"), // boxes / packaging
  pharma: unsplash("photo-1581094794329-c8112a89af12"), // lab / clean handling
  electronics: unsplash("photo-1518770660439-4636190af475"), // semiconductor / pcb
  printPaper: unsplash("photo-1504917595217-d4dc5ebe6122"), // print / paper rolls

  // insights (knowledge articles)
  insightEnergy: unsplash("photo-1466611653911-95081537e5b7"), // energy / compressed air
  insightCups: unsplash("photo-1581093588401-fbb62a02f120"),
  insightDecentral: unsplash("photo-1567789884554-0b844b597180"),
  insightSoft: unsplash("photo-1556910103-1c02745aae4d"),
  insightPredictive: unsplash("photo-1518770660439-4636190af475"),
  insightSustainability: unsplash("photo-1497435334941-8c899ee9e8e9"), // green / sustainability

  // about / sustainability
  aboutPlant: unsplash("photo-1581092160562-40aa08e78837"),
  sustainability: unsplash("photo-1497435334941-8c899ee9e8e9"),
} as const;

export type ImageKey = keyof typeof img;
