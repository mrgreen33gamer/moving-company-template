// libs/local-db/reviews.ts
// Static testimonials for SteadyLoad Moving

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Local Moving',
    text:     "SteadyLoad made our Waco move across town completely stress-free. The crew showed up on time, protected every doorway, and had us unpacked at the new place by dinner. Clear pricing and careful handling — highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Packing Services',
    text:     'We hired SteadyLoad for full packing before our Hewitt move. Everything was labeled, boxed, and loaded carefully. Nothing broke — not even the glassware. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Long-Distance Moving',
    text:     'Moved from Woodway to Dallas with SteadyLoad. Honest inventory, solid timeline, and the truck arrived when they said it would. Damage protection options gave us peace of mind the whole way.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Office Moving',
    text:     'They relocated our Temple office over a weekend so we did not lose billable days. Desks, servers, and files were staged perfectly. Professional from quote to final walkthrough.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Storage Moves',
    text:     'Needed a unit-to-home transfer on short notice. SteadyLoad coordinated with the storage facility, loaded cleanly, and delivered right on schedule. Zero surprises on the invoice.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Senior Moves',
    text:     'SteadyLoad helped my parents downsize with patience and respect. The crew handled fragile keepsakes carefully and never rushed them. My new go-to movers for the family.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Loading & Unloading',
    text:     'We rented our own truck and hired SteadyLoad for loading only. Fast, careful, and fair pricing. Exactly what we needed without paying for a full move.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Local Moving',
    text:     'Called about a same-week apartment move. They treated it like it mattered, protected floors, and finished faster than quoted. Thank you, SteadyLoad.',
  },
];

export default reviews;