import styles from "./Toggle.module.scss";

export default function Toggle({onToggle}: {onToggle: () => void}) {
  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        className={styles.toggle__checkbox}
        onClick={onToggle}
      />
      <span className={styles.toggle__thumb}></span>
    </label>
  );
}
