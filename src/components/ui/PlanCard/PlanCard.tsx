import styles from "./PlanCard.module.scss";
import clsx from "clsx";

interface PlanCardProps {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  featureCard?: boolean;
  billingPeriod: string;
}

export default function PlanCard({
  title,
  description,
  price,
  featureCard = false,
  billingPeriod,
}: PlanCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        featureCard ? styles.cardFeature : styles.cardStandard,
      )}
    >
      <div className={styles.card__info}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.card__price}>
        <h3 className={styles.price__value}>
          ${billingPeriod === "monthly" ? price.monthly : price.yearly}
        </h3>
        <p className={styles.price__period}>
          {billingPeriod === "monthly" ? "per month" : "per year"}
        </p>
      </div>
      <button className={styles.card__btn}>pick plan</button>
    </div>
  );
}
