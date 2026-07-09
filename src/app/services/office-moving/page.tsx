// SteadyLoad Moving — Office Moving
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

export default function OfficeMovingPage() {
  const expectations = [
    { icon: faSearch, title: "After-Hours Planning", description: "We plan weekend and evening moves so your team keeps working during the week." },
    { icon: faFileContract, title: "Department Phasing", description: "Desks, IT, files, and common areas sequenced to minimize downtime." },
    { icon: faCheckCircle, title: "Labeling Systems", description: "Floor plans and desk tags so everything lands in the right suite." },
    { icon: faShieldHalved, title: "Commercial Care", description: "Floor protection, elevator reservations support, and bonded crews." },
  ];
  const whyFeatures = [
    { icon: faBuilding, title: "Business Continuity Focus", description: "Moves scheduled around your operations — not the other way around." },
    { icon: faClock, title: "Tight Timelines", description: "Weekend cutovers and multi-day projects managed with clear milestones." },
    { icon: faShieldHalved, title: "COIs Available", description: "Certificates of insurance for building management on request." },
  ];
  const processSteps = [
    { number: 1, title: "Site Survey", description: "Walk origin and destination with access constraints.", icon: faHeadset },
    { number: 2, title: "Move Plan", description: "Phased schedule, packing scope, and IT coordination notes.", icon: faSearch },
    { number: 3, title: "Execute", description: "Pack, load, transport, and place by department.", icon: faFileContract },
    { number: 4, title: "Go-Live Support", description: "Final walkthrough so Monday morning is ready.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 900, label: "Office moves completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 96, label: "Weekend cutover success", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years of commercial moving", suffix: "+", duration: 2 },
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
    { question: "Can you move us over a weekend?", answer: "Yes — weekend and evening office moves are our standard approach for businesses that cannot lose weekday productivity." },
    { question: "Do you move IT equipment?", answer: "We handle desks, monitors, and packed IT assets. Critical servers should be coordinated with your IT vendor; we support the physical move." },
    { question: "Can you provide a COI?", answer: "Yes — certificates of insurance for property managers and building owners are available." },
    { question: "Do you pack file rooms?", answer: "Yes — file and supply room packing can be included in the project scope." },
    { question: "What size offices do you handle?", answer: "From small suites to multi-floor offices across Central Texas. Larger projects get a dedicated project lead." },
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
        { label: "Office Moving" },
      ]} />
      <SectionIntro title="Office Moving in Waco, TX" subtitle="Weekend and after-hours commercial moves with phased plans, labeling, and bonded SteadyLoad crews." />
      <TrustBar headline="Office relocations that protect uptime and your brand" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect on an Office Move" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Businesses Choose SteadyLoad" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/office-moving" title="Office Moving Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Office Moving FAQs" /></div>
      <CTABanner headline="Planning an Office Relocation?" subline="Phased plans. COIs available. On-Time Arrival Guarantee · Damage Protection Options." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request an Office Move Quote" cityName="Waco" slug="services/office-moving" spot="office-moving-page-form" formVariant={2} /></div>
    </main>
  );
}