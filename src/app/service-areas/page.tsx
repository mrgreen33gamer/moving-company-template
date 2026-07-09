// SteadyLoad Moving — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest scheduling and crew availability. Full local moving, packing, office moves, storage transfers, and long-distance origins across all of Waco.',
    highlights:  ['Fastest scheduling', 'Full service lineup', 'Home base crews'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full residential and apartment moving coverage for Hewitt. Quick dispatch from our Waco base.',
    highlights:  ['Apartment experts', 'Residential & storage', 'Packing available'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway neighborhoods with the same flat-rate quoting and On-Time Arrival Guarantee as every other area we cover.",
    highlights:  ['Flat-rate quotes', 'On-Time Arrival Guarantee', 'TXDOT-registered'],
  },
  {
    city:        'Bellmead',
    slug:        'bellmead-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable local moving and loading help for Bellmead residents and small businesses.',
    highlights:  ['Residential & light commercial', 'Loading help', 'No hidden fees'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential moves for the China Spring area. We make the drive — honest trip pricing applies.',
    highlights:  ['Rural coverage', 'Honest trip pricing', 'Full-service available'],
  },
  {
    city:        'McGregor',
    slug:        'mcgregor-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Local moving, packing, and storage transfers for McGregor homes and light commercial properties.',
    highlights:  ['Home & shop moves', 'Packing services', 'Storage transfers'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Local and long-distance moving for Killeen and Fort Cavazos area families. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Local & long-distance', 'Packing available'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service moving coverage for Temple homes, offices, and medical district neighborhoods.',
    highlights:  ['Full service coverage', 'Office moves', 'Residential & storage'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'Waco, Hewitt, Woodway, Bellmead, China Spring, McGregor, Temple, Killeen, and most of Central Texas within about 60 miles of Waco. Call (254) 860-6060 to confirm your address.',
  },
  {
    question: 'Do you charge extra for rural locations?',
    answer: 'Trip considerations are included transparently in your written quote. No surprise fuel surcharges on load day.',
  },
  {
    question: 'Do you offer long-distance from these cities?',
    answer: 'Yes — long-distance moves can originate from any of our service cities. Timelines and pricing are quoted per route.',
  },
  {
    question: 'Can you move offices in Temple and Killeen?',
    answer: 'Yes — weekend and after-hours office moves across Bell and McLennan counties.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Coverage Map</p>
          <h1 className={styles.title}>Service Areas Across Central Texas</h1>
          <p className={styles.sub}>
            Based in Waco and serving McLennan and Bell County communities with local moving,
            long-distance moves, packing, office relocations, and storage transfers.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {SERVICE_AREAS.map((area, i) => (
            <motion.article
              key={area.city}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className={styles.cardTop}>
                <h2 className={styles.city}>{area.city}</h2>
                {area.badge && <span className={styles.badge}>{area.badge}</span>}
              </div>
              <p className={styles.county}>{area.county}</p>
              <p className={styles.desc}>{area.description}</p>
              <ul className={styles.highlights}>
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.cardLink}>
                Get a quote for {area.city} →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="See If We Cover Your Address"
        subline="Call (254) 860-6060 — most Central Texas locations are in range."
        primaryText="Call (254) 860-6060"
        primaryLink="tel:+12548606060"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />
    </main>
  );
}
