// SteadyLoad Moving — Packing Services
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

export default function PackingServicesPage() {

  const expectations = [
    { icon: faSearch, title: "Room-by-Room Plan", description: "We prioritize kitchens, glass, art, and specialty items so nothing is rushed on move day." },
    { icon: faFileContract, title: "Materials Included Options", description: "Boxes, paper, tape, and wardrobe cartons available — quoted clearly up front." },
    { icon: faCheckCircle, title: "Labeled & Inventory Ready", description: "Rooms labeled for fast unload and placement at the new home or office." },
    { icon: faShieldHalved, title: "Fragile-First Methods", description: "Dish packs, double-wrap glass, and custom crating recommendations when needed." },
  ];

  const whyFeatures = [
    { icon: faBoxOpen, title: "Full or Partial Packing", description: "We can pack everything or only the hard rooms while you handle the rest." },
    { icon: faClock, title: "Move-Day Ready", description: "Packing scheduled so crews load without waiting or re-boxing." },
    { icon: faShieldHalved, title: "Protection Minded", description: "Better packing means fewer claims — and calmer unload days." },
  ];

  const processSteps = [
    { number: 1, title: "Scope the Home", description: "Walk rooms and decide full vs partial packing.", icon: faHeadset },
    { number: 2, title: "Stage Materials", description: "We bring supplies or use yours if preferred.", icon: faSearch },
    { number: 3, title: "Pack & Label", description: "Professional pack with room labels and fragile flags.", icon: faFileContract },
    { number: 4, title: "Ready for Load", description: "Boxes staged for efficient load-day flow.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 8000, label: "Homes packed by SteadyLoad crews", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "Fragile-room satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years of packing experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base for planning and load-day dispatch.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway",      benefit: "Careful home and condo moves.", badge: "" },
    { town: "Temple",       benefit: "Bell County start and end points.", badge: "" },
    { town: "Killeen",      benefit: "Military and family relocations.", badge: "" },
    { town: "China Spring", benefit: "Rural pickups with clear trip pricing.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written flat-rate quote", us: "✅ Before load day", others: "❌ Vague hourly estimates" },
    { feature: "On-Time Arrival Guarantee", us: "✅ Every job", others: "❌ Rare" },
    { feature: "Damage protection options", us: "✅ Available", others: "❌ Limited" },
    { feature: "TXDOT-registered crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Clear delivery window", us: "✅ Confirmed in writing", others: "❌ Open-ended" },
  ];

  const faq = [
    { question: "Do you supply boxes?", answer: "Yes — packing materials can be included in your quote or billed as used. We will recommend quantities after the walkthrough." },
    { question: "Can you pack only the kitchen?", answer: "Yes. Partial packing is popular — kitchens, glass, and art are the most requested rooms." },
    { question: "How long does packing take?", answer: "A typical 3-bedroom home may take one crew day; larger homes need more. We schedule so packing finishes before load day." },
    { question: "Do you unpack at the destination?", answer: "Unpacking is available on request — full home or priority rooms only." },
    { question: "Is packing worth it in Texas heat?", answer: "Yes. Proper materials and sealed boxes protect against heat, humidity, and long carries between truck and door." },
  ];

  const crossServices = [
    { icon: faTruck, title: "Local Moving", body: "Same-city and short-haul Central Texas moves.", link: "/services/local-moving" },
    { icon: faBoxOpen, title: "Packing Services", body: "Full packing so long hauls stay organized.", link: "/services/packing-services" },
    { icon: faWarehouse, title: "Storage Moves", body: "Unit-to-home and storage-in-transit options.", link: "/services/storage-moves" },
    { icon: faBuilding, title: "Office Moving", body: "Commercial and corporate relocations.", link: "/services/office-moving" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Packing Services" },
      ]} />

      <SectionIntro
        title="Packing Services in Waco, TX"
        subtitle="Full and partial packing by trained SteadyLoad crews — materials, labels, and fragile-first methods."
      />

      <TrustBar headline="Professional packing that protects every mile of your move" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect from Our Packing Crews" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Customers Add Packing to Their Move" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/packing-services" title="Packing Services Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Packing Services FAQs" />
      </div>

      <CTABanner
        headline="Want Us to Pack for You?"
        subline="Full or partial packing. Clear quotes. Damage protection options available."
        primaryText="Call Us Now"
        primaryLink="tel:+12548606060"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Packing Services" cityName="Waco" slug="services/packing-services" spot="packing-services-page-form" formVariant={2} />
      </div>

    </main>
  );
}