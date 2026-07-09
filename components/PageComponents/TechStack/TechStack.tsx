'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'How We Move',
    items: [
      { name: 'Local Crews',        type: 'brand', icon: '🚚' },
      { name: 'Long-Distance',      type: 'brand', icon: '🛣️' },
      { name: 'Full Packing',       type: 'brand', icon: '📦' },
      { name: 'Partial Packing',    type: 'brand', icon: '📦' },
      { name: 'Labor-Only Loading', type: 'brand', icon: '💪' },
      { name: 'Office Relocations', type: 'brand', icon: '🏢' },
      { name: 'Storage Transfers',  type: 'brand', icon: '🏬' },
      { name: 'Senior Moves',       type: 'brand', icon: '❤️' },
    ],
  },
  {
    label: 'Credentials & Promises',
    items: [
      { name: 'TXDOT-Registered',              type: 'cert', icon: '✓' },
      { name: 'Fully Bonded & Insured',        type: 'cert', icon: '✓' },
      { name: 'On-Time Arrival Guarantee',     type: 'cert', icon: '✓' },
      { name: 'Damage Protection Options',     type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Local Moving',          type: 'tool', icon: '🏠' },
      { name: 'Long-Distance Moving',  type: 'tool', icon: '🗺️' },
      { name: 'Packing Services',      type: 'tool', icon: '📦' },
      { name: 'Loading & Unloading',   type: 'tool', icon: '🏋️' },
      { name: 'Office Moving',         type: 'tool', icon: '🏢' },
      { name: 'Storage Moves',         type: 'tool', icon: '📦' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Professional Crews, Clear Promises',
  subtitle = 'TXDOT-registered, fully bonded & insured — local and long-distance moves with packing, office, and storage support.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Services and credentials">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Bring to Every Move</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;