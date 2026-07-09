"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faTruck, faRoute, faBoxOpen, faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

export default function SeniorMovesPage() {
  const painPoints = [
    { icon: faCalendarAlt, problem: "Downsizing feels overwhelming", consequence: "Families delay decisions until leases or health needs force a rushed move." },
    { icon: faFileInvoiceDollar, problem: "Surprise fees add stress", consequence: "Vague estimates make adult children second-guess every choice." },
    { icon: faUsers, problem: "Crews rush seniors", consequence: "Impatient labor creates anxiety and increases breakage risk." },
    { icon: faBuilding, problem: "New community rules are ignored", consequence: "Elevator pads, quiet hours, and loading docks get missed at senior living." },
    { icon: faClipboardList, problem: "Keepsakes get lost in the shuffle", consequence: "Without careful labeling, sentimental items vanish into unlabeled boxes." },
    { icon: faHandshake, problem: "No single coordinator for the family", consequence: "Siblings and facilities get conflicting updates." },
  ];
  const whyFeatures = [
    { icon: faUsers, title: "Patient, Respectful Crews", description: "We move at a pace that honors the people — not just the truck schedule." },
    { icon: faCalendarAlt, title: "Downsizing Support", description: "Partial moves, donation loads, and storage transfers planned together." },
    { icon: faFileInvoiceDollar, title: "Clear Family Pricing", description: "Written quotes adult children can share and approve with confidence." },
  ];
  const processSteps = [
    { number: 1, title: "Family Consultation", description: "Understand the home, the destination, and what must be protected.", icon: faSearch },
    { number: 2, title: "Gentle Plan", description: "Packing scope, timing, and who will be on site.", icon: faCalendarAlt },
    { number: 3, title: "Careful Move Day", description: "Patient crews, clear labeling, and protected keepsakes.", icon: faRocket },
    { number: 4, title: "Settle-In Help", description: "Placement and a calm walkthrough at the new home.", icon: faClipboardList },
  ];
  const metrics = [
    { icon: faTrophy, value: 1500, label: "Senior and downsizing moves", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 99, label: "Family satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Patient crew culture", us: "✅ Core training", others: "❌ Rushed day labor" },
    { feature: "Downsizing flexibility", us: "✅ Partial & multi-stop", others: "❌ All-or-nothing only" },
    { feature: "Written family quotes", us: "✅ Always", others: "❌ Verbal only" },
    { feature: "Senior living experience", us: "✅ Regular work", others: "❌ Unfamiliar" },
    { feature: "Bonded & insured", us: "✅ Always", others: "❌ Not always" },
  ];
  const faq = [
    { question: "Do you help with downsizing and donations?", answer: "Yes — we can plan partial moves, donation drop-offs, and storage transfers as part of the project." },
    { question: "Can adult children coordinate remotely?", answer: "Yes. We provide clear updates and written quotes so families out of town can still lead the process." },
    { question: "Do you move into senior living communities?", answer: "Yes — we regularly work with independent and assisted living loading rules and elevator reservations." },
    { question: "Are your crews background-aware and insured?", answer: "SteadyLoad is TXDOT-registered, fully bonded and insured. We treat every home with respect." },
    { question: "How early should we book a senior move?", answer: "Two to four weeks is ideal, but we can sometimes help sooner depending on scope." },
  ];
  const services = [
    { icon: faTruck, title: "Local Moving", body: "Home-to-home and community moves nearby.", link: "/services/local-moving" },
    { icon: faBoxOpen, title: "Packing Services", body: "Gentle packing for kitchens and keepsakes.", link: "/services/packing-services" },
    { icon: faWarehouse, title: "Storage Moves", body: "Hold items during transitions.", link: "/services/storage-moves" },
    { icon: faRoute, title: "Long-Distance Moving", body: "Moves to family in other cities.", link: "/services/long-distance" },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for planning and crew dispatch.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular commercial and residential coverage.", badge: "" },
    { town: "Killeen", benefit: "Military and multi-family support near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Apartment and home moves on regular routes.", badge: "" },
    { town: "Woodway", benefit: "Careful residential and executive moves.", badge: "" },
    { town: "Bellmead", benefit: "Quick turnaround local coverage.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Senior Moves" }]} />
      <SectionIntro title="Senior Moves in Waco & Central Texas" subtitle="Patient downsizing and senior living moves with clear family pricing and careful SteadyLoad crews." />
      <TrustBar headline="Respectful movers families recommend to each other" />
      <div className={styles.section}><IndustryPainPoints industry="senior living and downsizing" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Families Choose SteadyLoad for Senior Moves" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services We Pair With This Work" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/local-moving" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Senior Moves FAQs" /></div>
      <CTABanner headline="Planning a Senior Move?" subline="Patient crews. Clear quotes. On-Time Arrival Guarantee." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Request a Senior Move Consultation" cityName="Waco" slug="industries/senior-moves" spot="senior-moves-form" formVariant={2} /></div>
    </main>
  );
}