import FeatureCard from "./FeatureCard";
import features from "@/data/features.json";
import {IconKey} from "../Icons";
import styles from "./FeatureGrid.module.scss";

export default function FeatureGrid({displayNum}: {displayNum: number}) {
  let numToDisplay;
  if (displayNum === 0) {
    numToDisplay = features.length;
  } else {
    numToDisplay = displayNum;
  }

  return (
    <div className={styles.features}>
      {features.map((feature, index) => {
        return index < numToDisplay ? (
          <FeatureCard
            key={feature.title}
            {...feature}
            icon={feature.icon as IconKey}
          />
        ) : undefined;
      })}
    </div>
  );
}
