import styles from "./Toggle.module.scss";

export default function Toggle() {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" className={styles.toggle__checkbox} />
      <span className={styles.toggle__thumb}></span>
    </label>
  );
}
