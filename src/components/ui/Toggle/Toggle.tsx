import styles from "./Toggle.module.scss";

interface ToggleProps {
  onToggle: () => void;
  label: string;
  checked: boolean;
}

export default function Toggle({onToggle, label, checked}: ToggleProps) {
  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        className={styles.toggle__checkbox}
        onClick={onToggle}
        aria-label={label}
        aria-checked={checked}
      />
      <span className={styles.toggle__thumb}></span>
    </label>
  );
}
