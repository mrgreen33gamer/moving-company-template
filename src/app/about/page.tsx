// SteadyLoad Moving — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2009",
      description: "SteadyLoad Moving was founded in Waco by Tara Benson. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every crew member is part of a TXDOT-registered, bonded & insured company. We treat every home we enter with the same respect we'd want for our own families.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full truck when loading help is enough. We won't hide fees until load day. Our reputation is built on straight talk and careful handling.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 18000, label: "Moves completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rate",            suffix: "%", duration: 2 },
    { icon: faClock,     value: 17,    label: "Years serving Central Texas families",  suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm inventory and a move window that fits.", icon: faClipboardCheck },
    { number: 2, title: "Quote Honestly", description: "A clear flat-rate style quote based on real volume and access — not a bait number.", icon: faShieldHalved },
    { number: 3, title: "Approve & Schedule", description: "You approve the written price before anything is loaded.", icon: faBolt },
    { number: 4, title: "Move Day Done Right", description: "On-time crews, careful handling, placement, and a final walkthrough.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About SteadyLoad Moving"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2009. Local & Long-Distance Moves · Packing — careful work at fair prices for the families and businesses we've called neighbors for 17 years."
      />

      <TrustBar headline="18,000+ Central Texas moves — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="17 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Ready to Move With a Local Crew You Can Trust?"
        subline="Call (254) 860-6060 or request a free quote online. On-Time Arrival Guarantee · Damage Protection Options."
        primaryText="Call (254) 860-6060"
        primaryLink="tel:+12548606060"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />

    </main>
  );
}
