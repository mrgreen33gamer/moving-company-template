// SteadyLoad Moving — Loading & Unloading
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

export default function LoadingOnlyPage() {
  const expectations = [
    { icon: faSearch, title: "Confirm Truck & Access", description: "You provide the truck or POD — we plan labor around stairs, distance, and parking." },
    { icon: faFileContract, title: "Clear Labor Pricing", description: "Hourly or flat labor quotes so you know the cost before anyone lifts a box." },
    { icon: faCheckCircle, title: "Safe Loading Techniques", description: "Proper lifting, blankets, and straps so DIY trucks still get pro-level care." },
    { icon: faShieldHalved, title: "Bonded Crews", description: "Company crews — not random helpers from a parking lot." },
  ];
  const whyFeatures = [
    { icon: faPeopleCarryBox, title: "Labor-Only Flexibility", description: "Perfect when you rented a truck, POD, or trailer and only need strong, careful hands." },
    { icon: faClock, title: "Fast Turnarounds", description: "Load or unload windows that fit rental truck return deadlines." },
    { icon: faShieldHalved, title: "Professional Standards", description: "Same training and insurance standards as our full-service moves." },
  ];
  const processSteps = [
    { number: 1, title: "Book Labor", description: "Tell us address, stairs, and approximate volume.", icon: faHeadset },
    { number: 2, title: "Crew Arrives", description: "On-time team ready to load or unload your vehicle.", icon: faSearch },
    { number: 3, title: "Work the Plan", description: "Efficient stacking, protection, and heavy-item technique.", icon: faFileContract },
    { number: 4, title: "Wrap Up", description: "Final walkthrough so nothing is left behind.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 4500, label: "Labor-only jobs completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-time crew arrival", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years of loading experience", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest labor dispatch.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Apartment and home load help.", badge: "" },
    { town: "Woodway", benefit: "Careful furniture crews.", badge: "" },
    { town: "Temple", benefit: "Bell County loading support.", badge: "" },
    { town: "Killeen", benefit: "Military move labor help.", badge: "" },
    { town: "Bellmead", benefit: "Quick turnaround loads.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Hourly or flat labor quotes", us: "✅ Clear before start", others: "❌ Vague day-of pricing" },
    { feature: "Trained moving crews", us: "✅ TXDOT-registered company", others: "❌ Day labor only" },
    { feature: "Floor protection available", us: "✅ On request", others: "❌ Rarely" },
    { feature: "On-Time Arrival Guarantee", us: "✅ Standard", others: "❌ No-shows common" },
    { feature: "Damage protection options", us: "✅ Available", others: "❌ Cash-only risk" },
  ];
  const faq = [
    { question: "Do I need to provide the truck?", answer: "Yes for loading-only service — you supply the rental truck, POD, or trailer. We provide the labor and moving skill." },
    { question: "How many movers will you send?", answer: "Usually two to four depending on volume and stairs. We recommend crew size during booking." },
    { question: "Is loading-only cheaper than a full move?", answer: "Often yes, because you pay for labor rather than truck + full service. We will help you compare options honestly." },
    { question: "Can you unload at a storage unit?", answer: "Yes — storage unit loading and unloading is a common request." },
    { question: "Do you bring blankets and straps?", answer: "Basic protection equipment is available; confirm during booking for large furniture jobs." },
  ];
  const crossServices = [
    { icon: faTruck, title: "Local Moving", body: "Full truck + crew when you need the complete service.", link: "/services/local-moving" },
    { icon: faBoxOpen, title: "Packing Services", body: "Pack first, then load faster.", link: "/services/packing-services" },
    { icon: faRoute, title: "Long-Distance Moving", body: "Full long-haul service when DIY truck is not enough.", link: "/services/long-distance" },
    { icon: faWarehouse, title: "Storage Moves", body: "Unit load/unload specialists.", link: "/services/storage-moves" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Loading & Unloading" },
      ]} />
      <SectionIntro title="Loading & Unloading Help in Waco, TX" subtitle="Labor-only movers when you already have the truck — fast, careful, TXDOT-registered crews." />
      <TrustBar headline="Pro loading help without paying for a full truck service" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect from Labor-Only Crews" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why DIYers Call SteadyLoad for Load Help" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/loading-only" title="Loading Help Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Loading & Unloading FAQs" /></div>
      <CTABanner headline="Need Strong Hands on Load Day?" subline="Labor-only quotes. On-Time Arrival Guarantee. Bonded & insured crews." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Book Loading Help" cityName="Waco" slug="services/loading-only" spot="loading-only-page-form" formVariant={2} /></div>
    </main>
  );
}