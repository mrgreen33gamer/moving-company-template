// SteadyLoad Moving — Storage Moves
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

export default function StorageMovesPage() {
  const expectations = [
    { icon: faSearch, title: "Unit Access Coordination", description: "We work with your storage facility hours, gate codes, and unit size constraints." },
    { icon: faFileContract, title: "Clear Scope", description: "Full unit, partial pull, or storage-in-transit — quoted before we roll." },
    { icon: faCheckCircle, title: "Efficient Staging", description: "Smart stacking and inventory notes so retrieval later is not a treasure hunt." },
    { icon: faShieldHalved, title: "Protected Handling", description: "Furniture pads and careful carries for climate and standard units alike." },
  ];
  const whyFeatures = [
    { icon: faWarehouse, title: "Storage Specialists", description: "Unit-to-home, home-to-unit, and facility-to-facility transfers done weekly." },
    { icon: faClock, title: "Flexible Scheduling", description: "Align moves with lease ends, renovations, or long-distance delivery windows." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Company crews with damage protection options available." },
  ];
  const processSteps = [
    { number: 1, title: "Share Unit Details", description: "Facility, unit size, and what is moving.", icon: faHeadset },
    { number: 2, title: "Schedule Access", description: "We confirm gate hours and truck access.", icon: faSearch },
    { number: 3, title: "Load or Unload", description: "Efficient transfer with protection as needed.", icon: faFileContract },
    { number: 4, title: "Deliver & Confirm", description: "Home delivery or unit lock-up walkthrough.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 2200, label: "Storage transfers completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-time facility arrivals", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years helping with storage moves", suffix: "+", duration: 2 },
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
    { question: "Can you move items into storage for me?", answer: "Yes — home-to-unit and unit-to-home transfers are a core service." },
    { question: "Do you work with all storage facilities?", answer: "We regularly work with facilities across Waco, Temple, and Killeen. Share the address and we confirm access." },
    { question: "Can you do a partial unit pull?", answer: "Yes — pull only the items you need for a renovation or seasonal transfer." },
    { question: "Is storage-in-transit available?", answer: "Yes for longer moves when delivery timing does not match pickup. Ask during quoting." },
    { question: "Do I need to be present?", answer: "Someone with access authority should be available, or provide approved access instructions in writing." },
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
        { label: "Storage Moves" },
      ]} />
      <SectionIntro title="Storage Moves in Waco, TX" subtitle="Unit-to-home, home-to-unit, and storage-in-transit transfers with careful SteadyLoad crews." />
      <TrustBar headline="Storage transfers without the DIY truck stress" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect on a Storage Move" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Customers Use SteadyLoad for Storage" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/storage-moves" title="Storage Move Coverage Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Storage Moves FAQs" /></div>
      <CTABanner headline="Need a Storage Transfer?" subline="Unit loads, partial pulls, and storage-in-transit. Bonded crews. Clear quotes." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule a Storage Move" cityName="Waco" slug="services/storage-moves" spot="storage-moves-page-form" formVariant={2} /></div>
    </main>
  );
}