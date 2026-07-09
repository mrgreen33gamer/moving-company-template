// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              &quot;We started SteadyLoad Moving because we were tired of watching families get burned by no-shows and surprise invoices on move day.&quot;
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Tara Benson</span>
              <span className={styles.pullTitle}>Founder, SteadyLoad Moving</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2009 in Waco, TX, SteadyLoad Moving started with one truck and one principle:
              give families a clear plan, charge a fair price, and show up on time. No hidden fees,
              no bait-and-switch quotes, no unvetted day labor.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with TXDOT-registered, fully bonded &amp; insured crews
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2009', label: 'Founded in Waco' },
                { year: '2014', label: 'Expanded multi-crew ops' },
                { year: '2018', label: '10,000 moves completed' },
                { year: '2024', label: '18,000+ moves completed' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;