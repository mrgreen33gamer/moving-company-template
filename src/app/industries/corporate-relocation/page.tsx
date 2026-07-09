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

export default function CorporateRelocationPage() {
  const painPoints = [
    { icon: faCalendarAlt, problem: "Employee start dates slip when moves fall behind", consequence: "Late trucks and vague ETAs create bad first weeks for transferred staff." },
    { icon: faFileInvoiceDollar, problem: "Relocation costs spiral without clear scopes", consequence: "Open-ended hourly billing and change orders blow HR and facilities budgets." },
    { icon: faUsers, problem: "Employees juggle vendors alone", consequence: "Without a single coordinator, staff waste days packing and chasing truck windows." },
    { icon: faBuilding, problem: "Office + home moves are disconnected", consequence: "Workplace and household moves run on separate timelines and different quality standards." },
    { icon: faClipboardList, problem: "No status visibility for HR", consequence: "People ops cannot report on move progress or exceptions." },
    { icon: faHandshake, problem: "Vendors do not understand corporate policies", consequence: "COIs, NDAs, and approved access windows get ignored." },
  ];
  const whyFeatures = [
    { icon: faCalendarAlt, title: "Coordinated Move Windows", description: "Pickup and delivery aligned to start dates and lease ends." },
    { icon: faFileInvoiceDollar, title: "Transparent Corporate Pricing", description: "Written scopes HR and facilities can approve." },
    { icon: faUsers, title: "Employee-Friendly Experience", description: "Clear communication so transfers feel supported, not stranded." },
  ];
  const processSteps = [
    { number: 1, title: "Intake", description: "HR shares employee details, dates, and inventory range.", icon: faSearch },
    { number: 2, title: "Quote & Approve", description: "Written scope with protection options and timeline.", icon: faCalendarAlt },
    { number: 3, title: "Execute", description: "Pack, load, transport, and deliver with status updates.", icon: faRocket },
    { number: 4, title: "Closeout", description: "Walkthrough and documentation for your records.", icon: faClipboardList },
  ];
  const metrics = [
    { icon: faTrophy, value: 400, label: "Corporate relocations supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25, label: "Employers and agencies served", suffix: "+", duration: 2 },
    { icon: faClock, value: 17, label: "Years in Central Texas", suffix: "+", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Single point of contact", us: "✅ Dedicated coordinator", others: "❌ Rotating dispatchers" },
    { feature: "Written corporate scopes", us: "✅ Always", others: "❌ Verbal estimates" },
    { feature: "COIs for buildings", us: "✅ On request", others: "❌ Delayed or missing" },
    { feature: "On-Time Arrival Guarantee", us: "✅ Standard", others: "❌ Vague windows" },
    { feature: "TXDOT-registered & insured", us: "✅ Always", others: "❌ Not always" },
  ];
  const faq = [
    { question: "Do you work with HR and relocation benefits teams?", answer: "Yes — we support employer-sponsored moves with clear scopes, invoices, and communication for transferred employees." },
    { question: "Can you move both household goods and small offices?", answer: "Yes. We coordinate residential and light commercial pieces so start dates stay intact." },
    { question: "Do you provide certificates of insurance?", answer: "Yes — COIs for property managers and building owners are available on request." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, and surrounding Central Texas — plus long-distance destinations by quote." },
    { question: "How quickly can you mobilize?", answer: "Many corporate moves book 1–3 weeks out; rush options depend on crew availability." },
  ];
  const services = [
    { icon: faTruck, title: "Local Moving", body: "In-market employee household moves.", link: "/services/local-moving" },
    { icon: faRoute, title: "Long-Distance Moving", body: "Transfers into or out of Central Texas.", link: "/services/long-distance" },
    { icon: faBoxOpen, title: "Packing Services", body: "Full packing so employees stay productive.", link: "/services/packing-services" },
    { icon: faBuilding, title: "Office Moving", body: "Suite and department relocations.", link: "/services/office-moving" },
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Corporate Relocation" }]} />
      <SectionIntro title="Corporate Relocation in Waco & Central Texas" subtitle="Employer-sponsored household and light commercial moves with clear scopes, COIs, and on-time crews." />
      <TrustBar headline="Trusted relocation partner for Central Texas employers" />
      <div className={styles.section}><IndustryPainPoints industry="corporate relocation" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why HR Teams Choose SteadyLoad" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services We Pair With This Work" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/local-moving" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Corporate Relocation FAQs" /></div>
      <CTABanner headline="Need a Corporate Move Partner?" subline="Written scopes. Bonded crews. On-Time Arrival Guarantee." primaryText="Call Us Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Request Corporate Relocation Support" cityName="Waco" slug="industries/corporate-relocation" spot="corporate-relocation-form" formVariant={2} /></div>
    </main>
  );
}