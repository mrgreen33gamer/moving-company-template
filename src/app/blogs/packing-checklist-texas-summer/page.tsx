'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faBoxOpen, faBottleWater, faTemperatureHigh, faShirt, faShieldHalved, faClock } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Texas summer moves are a different sport. Heat, humidity, and long daylight hours change packing materials, food handling, and crew pacing. Use this checklist so your Waco-area move stays safe for people and belongings.",
  },
  {
    type: 'cards',
    heading: 'Texas Summer Packing Priorities',
    cards: [
      { icon: faTemperatureHigh, title: 'Skip the hot truck for food', body: 'Use coolers for refrigerated goods or consume/donate perishables before load day.' },
      { icon: faSun, title: 'Protect finishes from heat', body: 'Candles, electronics, and some plastics fare better in climate-controlled segments or shaded staging.' },
      { icon: faBoxOpen, title: 'Use sturdy double-wall boxes', body: 'Humidity softens cheap boxes. Quality cartons keep stacks stable on long carries.' },
      { icon: faBottleWater, title: 'Hydration is part of the plan', body: 'Stock water for your household and confirm your movers schedule shade breaks in extreme heat.' },
      { icon: faShirt, title: 'Pack a heat-day kit', body: 'Light clothes, sunscreen, and towels for load day — especially with kids and pets.' },
      { icon: faShieldHalved, title: 'Seal liquids carefully', body: 'Tape bottle tops and bag cleaners so leaks do not ruin cartons in the heat.' },
      { icon: faClock, title: 'Start earlier', body: 'Morning load windows beat afternoon triple-digit pavement temperatures.' },
    ],
  },
  {
    type: 'table',
    heading: 'Room Packing Checklist',
    tableHeaders: ['Room', 'Pack First', 'Pack Last'],
    tableRows: [
      ['Kitchen', 'Seldom-used appliances & pantry', 'Daily dishes + coffee setup'],
      ['Closets', 'Off-season clothes', 'Outfit for move day + work week'],
      ['Bath', 'Extra linens & products', 'Toiletries go-bag'],
      ['Garage', 'Tools & yard gear', 'Step stool and trash bags'],
      ['Office', 'Archives & books', 'Laptop + chargers with you'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: SteadyLoad offers full and partial packing with materials. Call (254) 860-6060 to add kitchen and fragile packing before a Texas summer load day.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Schedule an earlier morning load window',
      'Buy quality boxes — not grocery store freebies',
      'Decide which rooms professionals should pack',
      'Photograph electronics cable setups before unplugging',
      'Confirm water and shade plans for people and pets',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Packing Checklist for a Texas Summer Move"
        description="Heat, humidity, and long days change how you pack. Use this Texas-specific packing checklist to protect belongings and keep your crew efficient."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Texas summer packing checklist for movers"
        category="Packing"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want Pros to Pack the Hard Rooms?"
        body="SteadyLoad packing crews handle kitchens, glass, and fragile items so summer moves stay organized."
        buttonText="See Packing Services"
        buttonHref="/services/packing-services"
      />
      <NewsletterSignup variant={1} spot="packing-checklist-texas-summer-blog" />
    </>
  );
}