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
  faTruck, faRoute, faBoxOpen, faWarehouse, faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementPage() {
  const painPoints = [
    { icon: faCalendarAlt, problem: "Turnover calendars slip when movers no-show", consequence: "Make-ready days compress and new leases start late." },
    { icon: faFileInvoiceDollar, problem: "Resident move-outs create surprise junk and labor costs", consequence: "Without preferred vendor rates, every turnover is a new negotiation." },
    { icon: faUsers, problem: "Residents complain about damaged walls and floors", consequence: "Untrained day labor leaves units needing extra repairs." },
    { icon: faBuilding, problem: "No multi-unit planning", consequence: "Scattered tickets mean inefficient routes and higher costs." },
    { icon: faClipboardList, problem: "Poor documentation for owners", consequence: "Ownership cannot see what was moved or when." },
    { icon: faHandshake, problem: "Vendors ignore access rules", consequence: "Gate codes, elevator pads, and quiet hours get missed." },
  ];
  const whyFeatures = [
    { icon: faCalendarAlt, title: "Turnover-Friendly Scheduling", description: "We align crews to make-ready windows and lease ends." },
    { icon: faFileInvoiceDollar, title: "Preferred Vendor Pricing", description: "Volume-friendly rates property managers can budget." },
    { icon: faUsers, title: "Resident-Aware Crews", description: "Floor protection and careful carries that protect unit condition." },
  ];
  const processSteps = [
    { number: 1, title: "Portfolio Intake", description: "Share properties, unit types, and typical move volumes.", icon: faSearch },
    { number: 2, title: "Preferred Scope", description: "Set rates and rules for turnovers and resident referrals.", icon: faCalendarAlt },
    { number: 3, title: "On-Call Execution", description: "Book units as leases turn with consistent quality.", icon: faRocket },
    { number: 4, title: "Reporting", description: "Simple closeouts your team can file.", icon: faClipboardList },
  ];
  const metrics = [
    { icon: faTrophy, value: 120, label: "Multi-unit properties supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 30, label: "PM companies that refer us", suffix: "+", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Central Texas rentals", suffix: "+", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Make-ready friendly windows", us: "✅ Built into scheduling", others: "❌ First-come chaos" },
    { feature: "Preferred multi-unit pricing", us: "✅ Available", others: "❌ Re-quoted every time" },
    { feature: "Unit protection standards", us: "✅ Floor & doorway care", others: "❌ Variable" },
    { feature: "Single vendor contact", us: "✅ Yes", others: "❌ Different crew each ticket" },
    { feature: "Bonded & insured", us: "✅ Always", others: "❌ Not always" },
  ];
  const faq = [
    { question: "Do you work with apartment and HOA portfolios?", answer: "Yes — multi-family, duplex, and scattered-site residential portfolios are a core channel for SteadyLoad." },
    { question: "Can residents book you directly with a PM discount?", answer: "Many partners offer resident referral rates. Ask about a preferred vendor setup." },
    { question: "Do you provide COIs for properties?", answer: "Yes — certificates of insurance are available for ownership and management companies." },
    { question: "Can you clear a unit after an eviction or abandonment?", answer: "Yes — unit clear-outs and storage transfers can be scoped quickly." },
    { question: "What cities do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and nearby Central Texas." },
  ];
  const services = [
    { icon: faTruck, title: "Local Moving", body: "Resident move-ins and move-outs.", link: "/services/local-moving" },
    { icon: faWarehouse, title: "Storage Moves", body: "Unit transfers during renovations.", link: "/services/storage-moves" },
    { icon: faBoxOpen, title: "Packing Services", body: "Pack-outs for turnovers and staging.", link: "/services/packing-services" },
    { icon: faPeopleCarryBox, title: "Loading & Unloading", body: "Labor help for POD and truck days.", link: "/services/loading-only" },
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Property Management Moving Partners in Waco" subtitle="Preferred movers for multi-family portfolios, turnovers, and resident referrals across Central Texas." />
      <TrustBar headline="Make-ready friendly crews property managers trust" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Property Managers Choose SteadyLoad" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services We Pair With This Work" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/local-moving" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <CTABanner headline="Need a Preferred Moving Vendor?" subline="Turnover-ready scheduling. Bonded crews. Clear rates." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Talk to SteadyLoad About PM Work" cityName="Waco" slug="industries/property-management" spot="property-management-form" formVariant={2} /></div>
    </main>
  );
}