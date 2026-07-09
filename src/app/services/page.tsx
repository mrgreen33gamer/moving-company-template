// SteadyLoad Moving — Services Index
"use client";

import styles from "./page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTruck, faRoute, faBoxOpen, faPeopleCarryBox, faBuilding, faWarehouse,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    { icon: faTruck, title: "Local Moving", body: "Apartment and home moves across Central Texas with flat-rate quotes, careful loading, and on-time crews.", link: "/services/local-moving" },
    { icon: faRoute, title: "Long-Distance Moving", body: "Multi-city and interstate moves with written timelines and damage protection options.", link: "/services/long-distance" },
    { icon: faBoxOpen, title: "Packing Services", body: "Full or partial packing with quality materials and fragile-first methods.", link: "/services/packing-services" },
    { icon: faPeopleCarryBox, title: "Loading & Unloading", body: "Labor-only help when you already have a truck, POD, or trailer.", link: "/services/loading-only" },
    { icon: faBuilding, title: "Office Moving", body: "Weekend and after-hours commercial relocations with phased plans.", link: "/services/office-moving" },
    { icon: faWarehouse, title: "Storage Moves", body: "Unit-to-home, home-to-unit, and storage-in-transit transfers.", link: "/services/storage-moves" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before load day. No vague hourly surprises mid-move." },
    { icon: faShieldHalved, title: "TXDOT-Registered Crews", description: "Every crew is part of a bonded & insured company — not unvetted day labor." },
    { icon: faUsers, title: "Locally Owned Since 2009", description: "Founded in Waco by Tara Benson. Every decision is made locally." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or the form — we confirm inventory and preferred dates.", icon: faHeadset },
    { number: 2, title: "Walkthrough & Quote", description: "We review access and volume, then deliver a clear written quote.", icon: faSearch },
    { number: 3, title: "Approve & Schedule", description: "You approve the flat rate and lock your move window.", icon: faFileContract },
    { number: 4, title: "Move Day", description: "On-time crew, careful load/unload, final walkthrough together.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 18000, label: "Moves completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock, value: 17, label: "Years of local moving experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
  ];

  const faq = [
    { question: "How much does a move cost in Waco?", answer: "Local moves are quoted flat-rate based on inventory, stairs, and access. Long-distance pricing also considers distance and packing scope. We always provide a written quote before booking." },
    { question: "Are you licensed and insured?", answer: "Yes — TXDOT-registered · Fully Bonded & Insured, with damage protection options available." },
    { question: "Do you offer packing?", answer: "Yes — full or partial packing services with materials available." },
    { question: "Can you move offices on weekends?", answer: "Yes — weekend and after-hours office moves are standard for us." },
    { question: "What areas do you serve?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and surrounding Central Texas." },
    { question: "What is your guarantee?", answer: "On-Time Arrival Guarantee · Damage Protection Options on every job we take." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Moving Services for Waco & Central Texas"
        subtitle="Local and long-distance moves, packing, loading help, office relocations, and storage transfers — priced upfront and backed by our On-Time Arrival Guarantee."
      />
      <TrustBar headline="4.9★ · 2,200+ reviews · 18,000+ moves" />
      <div className={styles.section}><ServiceCardComponent heading="Our Services" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose SteadyLoad" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Moving Service FAQs" /></div>
      <CTABanner
        headline="Need Movers This Week?"
        subline="Flat-rate quotes. TXDOT-registered crews. On-Time Arrival Guarantee · Damage Protection Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12548606060"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}><Variant4 title="Request Your Moving Quote" cityName="Waco" slug="services" spot="services-index-form" formVariant={2} /></div>
    </main>
  );
}