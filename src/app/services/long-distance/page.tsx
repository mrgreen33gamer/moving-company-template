// SteadyLoad Moving — Long-Distance Moving
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

export default function LongDistancePage() {

  const expectations = [
    { icon: faSearch, title: "Detailed Inventory", description: "We document rooms and special items so your long-distance quote is accurate from day one." },
    { icon: faFileContract, title: "Timeline You Can Trust", description: "Pickup and delivery windows confirmed in writing — backed by our On-Time Arrival Guarantee." },
    { icon: faCheckCircle, title: "Secure Long-Haul Loading", description: "Professional packing materials, load plans, and secure straps for highway miles." },
    { icon: faShieldHalved, title: "Damage Protection Options", description: "Choose coverage levels that fit your move so valuables travel with confidence." },
  ];

  const whyFeatures = [
    { icon: faRoute, title: "Texas & Beyond", description: "Long-distance moves originating in Central Texas with clear interstate planning." },
    { icon: faClock, title: "Realistic Windows", description: "No fantasy ETAs — we set delivery windows we can hit." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "TXDOT-registered · Fully Bonded & Insured for peace of mind on the road." },
  ];

  const processSteps = [
    { number: 1, title: "Quote & Inventory", description: "Share origin, destination, and inventory for a flat-rate proposal.", icon: faHeadset },
    { number: 2, title: "Confirm Dates", description: "Lock pickup and delivery windows that fit both ends of the move.", icon: faSearch },
    { number: 3, title: "Pack & Load", description: "Optional packing, careful load, and sealed truck for the haul.", icon: faFileContract },
    { number: 4, title: "Deliver & Place", description: "Unload, place rooms, and complete a walkthrough at destination.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 3500, label: "Long-distance moves completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "On-window delivery rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years of long-haul experience", suffix: "+", duration: 2 },
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
    { question: "What counts as a long-distance move?", answer: "Generally moves beyond the local Central Texas metro — often 100+ miles or interstate. We clarify during quoting." },
    { question: "How is long-distance pricing calculated?", answer: "Primarily by inventory volume, access, packing scope, and distance. You receive a written flat-rate style proposal before booking." },
    { question: "Do you offer packing for long hauls?", answer: "Yes — full or partial packing is strongly recommended for fragile rooms and kitchens." },
    { question: "Can you store items mid-move?", answer: "Yes — storage-in-transit and storage unit transfers are available. See Storage Moves." },
    { question: "Are you licensed for interstate work?", answer: "We are TXDOT-registered, fully bonded and insured. Ask our team about coverage for your specific route." },
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
        { label: "Long-Distance Moving" },
      ]} />

      <SectionIntro
        title="Long-Distance Moving from Waco, TX"
        subtitle="Interstate and multi-city moves with written timelines, careful loading, and damage protection options."
      />

      <TrustBar headline="Trusted long-distance movers for Central Texas families" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect on a Long-Distance Move" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Families Choose SteadyLoad for Long Hauls" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/long-distance" title="Long-Distance Origins Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Long-Distance Moving FAQs" />
      </div>

      <CTABanner
        headline="Planning a Long-Distance Move?"
        subline="Clear timelines. Bonded crews. On-Time Arrival Guarantee · Damage Protection Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12548606060"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Get a Long-Distance Quote" cityName="Waco" slug="services/long-distance" spot="long-distance-page-form" formVariant={2} />
      </div>

    </main>
  );
}