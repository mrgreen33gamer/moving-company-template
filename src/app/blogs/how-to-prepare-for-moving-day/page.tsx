'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCalendarCheck, faBoxOpen, faClipboardList, faTruck, faHouseChimney, faClock, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Moving day goes smoothly when the weeks before it are intentional. Whether you are relocating across Waco or starting a long-distance move from Central Texas, a simple timeline keeps decisions — and stress — under control. Here is a practical preparation plan SteadyLoad customers use successfully.",
  },
  {
    type: 'cards',
    heading: 'Moving Day Prep Essentials',
    cards: [
      { icon: faCalendarCheck, title: 'Book early in peak season', body: 'Summer weekends fill first. Mid-week moves often cost less and schedule easier.' },
      { icon: faClipboardList, title: 'Build a room inventory', body: 'List large furniture, specialty items, and anything that needs extra protection.' },
      { icon: faBoxOpen, title: 'Decide packing scope', body: 'Full pack, partial pack, or DIY — decide early so materials and labor match the plan.' },
      { icon: faHouseChimney, title: 'Confirm access', body: 'Elevators, HOA rules, parking permits, and gate codes should be locked in before load day.' },
      { icon: faTruck, title: 'Stage a go-bag', body: 'Documents, chargers, meds, and a first-night kit should travel with you — not the truck.' },
      { icon: faClock, title: 'Protect the timeline', body: 'Defrost the fridge, disconnect appliances, and finish laundry the day before.' },
      { icon: faShieldHalved, title: 'Review protection options', body: 'Understand coverage before load day so valuables are handled intentionally.' },
    ],
  },
  {
    type: 'table',
    heading: 'Eight-Week Preparation Timeline',
    tableHeaders: ['When', 'Focus', 'Outcome'],
    tableRows: [
      ['8 weeks out', 'Choose mover + get written quote', 'Budget and date locked'],
      ['4 weeks out', 'Declutter and donate', 'Less volume, lower cost'],
      ['2 weeks out', 'Pack non-essentials / order materials', 'Rooms simplified'],
      ['1 week out', 'Confirm elevator, parking, utilities', 'Access problems solved early'],
      ['Day before', 'Finish essentials + label rooms', 'Load-ready home'],
      ['Move day', 'Walkthrough with crew lead', 'Nothing left behind'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Call SteadyLoad at (254) 860-6060 two to three weeks before peak weekends. On-Time Arrival Guarantee · Damage Protection Options available on every job.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Request a flat-rate written quote with inventory notes',
      'Photograph high-value items before packing',
      'Label boxes by room and priority',
      'Reserve elevators and loading zones early',
      'Pack an essentials bag that stays with you',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Prepare for Moving Day in Waco: A Practical Timeline"
        description="From eight weeks out to load-day morning — a clear checklist so your local or long-distance move stays on schedule and stress stays low."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="How to prepare for moving day in Waco TX"
        category="Planning"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Lock In Your Move Date?"
        body="Get a flat-rate quote from SteadyLoad Moving — TXDOT-registered crews with an On-Time Arrival Guarantee."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-to-prepare-for-moving-day-blog" />
    </>
  );
}