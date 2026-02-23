import {Icons, IconKey} from "../Icons";
import styles from "./FeatureGrid.module.scss";

interface CardProps {
  icon: IconKey;
  title: string;
  description: string;
}

export default function FeatureCard({icon, title, description}: CardProps) {
  const Icon = Icons[icon];

  return (
    <div className={styles.card}>
      <Icon classname={styles.card__icon} />
      <h5 className={styles.card__title}>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
