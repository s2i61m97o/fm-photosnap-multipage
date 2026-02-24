import FeatureCard from "./FeatureCard";
import features from "@/data/features.json";
import {IconKey} from "../Icons";
import styles from "./FeatureGrid.module.scss";
import clsx from "clsx";

export default function FeatureGrid({
  displayNum,
  gridMd,
}: {
  displayNum: number;
  gridMd?: number;
}) {
  let numToDisplay;
  if (displayNum === 0) {
    numToDisplay = features.length;
  } else {
    numToDisplay = displayNum;
  }

  return (
    <div className={clsx(styles.features, gridMd && styles[`col${gridMd}`])}>
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
