// SteadyLoad Moving — Local Moving
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTruck, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faBoxOpen, faBuilding, faWarehouse,
  faTrophy, faChartLine, faPeopleCarryBox, faRoute,
} from "@fortawesome/free-solid-svg-icons";

export default function LocalMovingPage() {

  const expectations = [
    { icon: faSearch,       title: "In-Home or Video Walkthrough", description: "We review rooms, stairs, and special items so your quote matches the real job — no bait-and-switch on move day." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Load", description: "You get a written price before any furniture leaves the house. It does not change when the day runs long." },
    { icon: faCheckCircle,  title: "Careful Load & Placement", description: "Blankets, straps, floor protection, and room-by-room placement so you are not rearranging all night." },
    { icon: faShieldHalved, title: "On-Time Arrival Guarantee · Damage Protection Options", description: "We show when we say we will, and offer protection options so your belongings stay covered." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "On-Time Local Crews", description: "Waco-based teams that know Central Texas traffic, HOAs, and apartment load zones." },
    { icon: faTruck,        title: "Right-Sized Trucks", description: "From studio apartments to full houses — we match truck size to inventory." },
    { icon: faShieldHalved, title: "TXDOT-Registered · Bonded & Insured", description: "Licensed, bonded crews — never an unvetted day-labor crew on your home." },
  ];

  const processSteps = [
    { number: 1, title: "Request a Quote", description: "Call, text, or form — we confirm inventory and preferred dates.", icon: faHeadset },
    { number: 2, title: "Walkthrough & Plan", description: "We confirm access, parking, and special items before load day.", icon: faSearch },
    { number: 3, title: "Approve Flat Rate", description: "Written price, crew size, and truck plan — you approve first.", icon: faFileContract },
    { number: 4, title: "Move Day Delivery", description: "Load, transport, unload, and place. Final walkthrough together.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Moves completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "On-time arrival rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 17,    label: "Years serving Waco-area families", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and crew availability.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full residential and apartment moving coverage.", badge: "" },
    { town: "Woodway",      benefit: "Careful home moves throughout Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular routes — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural moves with honest trip pricing.", badge: "" },
    { town: "Temple",       benefit: "Bell County coverage for homes and offices.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + vague estimates" },
    { feature: "On-Time Arrival Guarantee · Damage Protection Options", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "TXDOT-registered crews", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Floor & doorway protection", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Transparent inventory walkthrough", us: "✅ Before load day", others: "❌ Surprise charges later" },
  ];

  const faq = [
    { question: "How much does a local move cost in Waco?", answer: "Most local moves are quoted flat-rate based on inventory, stairs, and access. Studio and 1-bedroom moves often start lower; full homes scale with volume. We always provide a written quote before load day." },
    { question: "How far in advance should I book?", answer: "Two to three weeks is ideal for peak summer weekends. We often have mid-week openings sooner — call (254) 860-6060 to check." },
    { question: "Do you move apartments and multi-story homes?", answer: "Yes. We plan for elevators, long carries, and stair counts during the walkthrough so pricing stays accurate." },
    { question: "Are you licensed and insured?", answer: "Yes. SteadyLoad Moving is TXDOT-registered, fully bonded and insured, with damage protection options available." },
    { question: "Can you pack for us too?", answer: "Absolutely — full or partial packing is available. Many local customers add packing for kitchens and fragile rooms." },
    { question: "What if something is damaged?", answer: "We offer damage protection options and document condition carefully. Report issues promptly and we resolve them fairly." },
  ];

  const crossServices = [
    { icon: faRoute, title: "Long-Distance Moving", body: "Interstate and multi-city moves with clear timelines and protection options.", link: "/services/long-distance" },
    { icon: faBoxOpen, title: "Packing Services", body: "Full or partial packing by trained crews with quality materials.", link: "/services/packing-services" },
    { icon: faPeopleCarryBox, title: "Loading & Unloading", body: "Labor-only help when you already have the truck.", link: "/services/loading-only" },
    { icon: faBuilding, title: "Office Moving", body: "Weekend and after-hours commercial relocations.", link: "/services/office-moving" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Local Moving" },
      ]} />

      <SectionIntro
        title="Local Moving in Waco, TX"
        subtitle="Apartment and home moves across Central Texas with flat-rate pricing, careful crews, and an On-Time Arrival Guarantee."
      />

      <TrustBar headline="18,000+ Central Texas families trust SteadyLoad Moving" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on a Local Move" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Chooses SteadyLoad for Local Moves" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/local-moving" title="Local Moving Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Local Moving FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Move Across Town?"
        subline="Flat-rate quotes. TXDOT-registered crews. On-Time Arrival Guarantee · Damage Protection Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12548606060"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Schedule Your Local Move" cityName="Waco" slug="services/local-moving" spot="local-moving-page-form" formVariant={2} />
      </div>

    </main>
  );
}