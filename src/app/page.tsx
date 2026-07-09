// SteadyLoad Moving — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTruck, faRoute, faBoxOpen, faPeopleCarryBox, faBuilding, faWarehouse,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const services = [
    { icon: faTruck, title: "Local Moving", body: "Same-city and short-haul moves with careful crews, floor protection, and flat-rate quotes before load day.", link: "/services/local-moving" },
    { icon: faRoute, title: "Long-Distance Moving", body: "Multi-city and interstate moves with written timelines and damage protection options.", link: "/services/long-distance" },
    { icon: faBoxOpen, title: "Packing Services", body: "Full or partial packing with quality materials — kitchens and fragile rooms done right.", link: "/services/packing-services" },
    { icon: faPeopleCarryBox, title: "Loading & Unloading", body: "Labor-only help when you already have the truck, POD, or trailer.", link: "/services/loading-only" },
    { icon: faBuilding, title: "Office Moving", body: "Weekend and after-hours commercial moves that protect uptime.", link: "/services/office-moving" },
    { icon: faWarehouse, title: "Storage Moves", body: "Unit transfers and storage-in-transit support across Central Texas.", link: "/services/storage-moves" },
  ];

  const metrics = [
    { icon: faTrophy, value: 18000, label: "Moves completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock, value: 17, label: "Years of local moving experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "You get a firm price before we load a single box. No hourly surprise invoices." },
    { icon: faShieldHalved, title: "TXDOT-Registered Crews", description: "Bonded & insured company crews — never unvetted day labor on your home." },
    { icon: faUsers, title: "Locally Owned Since 2009", description: "Founded in Waco by Tara Benson. Decisions are made here — not at a franchise call center." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or the form below. We confirm inventory and preferred dates.", icon: faHeadset },
    { number: 2, title: "Walkthrough & Quote", description: "We review access and volume, then send a clear written quote.", icon: faSearch },
    { number: 3, title: "Approve Your Rate", description: "You approve the flat rate and lock the move window.", icon: faFileContract },
    { number: 4, title: "We Move You", description: "On-time crew, careful handling, placement, and a final walkthrough.", icon: faCheckCircle },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Inventory Review", description: "We confirm what is moving so the quote matches move day — no bait-and-switch." },
    { icon: faFileContract, title: "Written Flat Rate", description: "Price before load day. It does not change when the day runs long." },
    { icon: faCheckCircle, title: "Careful Handling", description: "Blankets, straps, floor protection, and room-by-room placement." },
    { icon: faShieldHalved, title: "Real Guarantees", description: "On-Time Arrival Guarantee · Damage Protection Options on every job." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and crew availability.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and apartment coverage.", badge: "" },
    { town: "Woodway", benefit: "Careful home moves throughout Woodway.", badge: "" },
    { town: "Temple", benefit: "Bell County homes and offices.", badge: "" },
    { town: "Killeen", benefit: "Military and family relocations.", badge: "" },
    { town: "China Spring", benefit: "Rural moves with honest trip pricing.", badge: "" },
  ];

  const faq = [
    { question: "How much does a local move cost in Waco?", answer: "Most local moves are flat-rate based on inventory, stairs, and access. We quote in writing before load day so you can budget with confidence." },
    { question: "How far ahead should I book?", answer: "Two to three weeks is ideal in peak summer. Mid-week openings often appear sooner — call (254) 860-6060." },
    { question: "Are you licensed and insured?", answer: "Yes. SteadyLoad Moving is TXDOT-registered · Fully Bonded & Insured." },
    { question: "Do you pack as well as move?", answer: "Yes — full or partial packing is available for homes and offices." },
    { question: "Do you handle long-distance moves?", answer: "Yes — multi-city and interstate moves with written timelines and protection options." },
    { question: "What is your guarantee?", answer: "On-Time Arrival Guarantee · Damage Protection Options." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ Google Rating · 2,200+ reviews · 18,000+ moves" />
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Moving Services Built for Central Texas" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses SteadyLoad" /></div>
      <CTABanner
        headline="Get a Flat-Rate Moving Quote"
        subline="Local & long-distance · Packing · Office · Storage. Call (254) 860-6060."
        primaryText="Call (254) 860-6060"
        primaryLink="tel:+12548606060"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect Working With SteadyLoad" expectations={expectations} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/local-moving" title="Proudly Serving Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Moving FAQs" /></div>
      <div className={styles.section}><BlogPreviewGrid /></div>
      <div className={styles.section}><Variant4 title="Request Your Free Moving Quote" cityName="Waco" slug="home" spot="homepage-form" formVariant={1} /></div>
    </main>
  );
}