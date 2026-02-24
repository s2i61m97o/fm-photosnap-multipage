import {Icons} from "@/components/ui/Icons";
import styles from "./CallToAction.module.scss";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.cta__text}>
        We’re in beta. Get your invite today!
      </h2>
      <a href="" className={styles.cta__link}>
        get an invite <Icons.Arrow />
      </a>
    </section>
  );
}
