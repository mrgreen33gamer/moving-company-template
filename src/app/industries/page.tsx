"use client";
import styles from "./page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import FAQ from "#/PageComponents/FAQ/FAQ";
import { faBriefcase, faBuilding, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const industries = [
    { icon: faBriefcase, title: "Corporate Relocation", body: "Employer-sponsored household and light commercial moves with clear scopes for HR and facilities teams.", link: "/industries/corporate-relocation" },
    { icon: faBuilding, title: "Property Management", body: "Preferred vendor support for multi-family turnovers, resident referrals, and unit transfers.", link: "/industries/property-management" },
    { icon: faHeart, title: "Senior Moves", body: "Patient downsizing and senior living moves with family-friendly pricing and careful handling.", link: "/industries/senior-moves" },
  ];

  const faq = [
    { question: "Do you work with businesses as well as homeowners?", answer: "Yes — corporate relocation, property management partners, and senior living moves are core channels alongside residential work." },
    { question: "Can we set up preferred vendor pricing?", answer: "Yes. Contact us to discuss multi-move or multi-unit rates for your organization." },
    { question: "Are you insured for commercial buildings?", answer: "Yes. SteadyLoad is TXDOT-registered, fully bonded and insured. COIs are available on request." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro title="Industries We Serve" subtitle="Corporate relocation, property management, and senior moves — specialized moving support for Central Texas organizations and families." />
      <TrustBar headline="Specialized moving partners across Central Texas" />
      <div className={styles.section}><ServiceCardComponent heading="Who We Help" cards={industries} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry FAQs" /></div>
      <CTABanner headline="Need a Specialized Moving Partner?" subline="Call (254) 860-6060 or request a quote online." primaryText="Call Now" primaryLink="tel:+12548606060" secondaryText="Get a Quote" secondaryLink="/contact" />
    </main>
  );
}