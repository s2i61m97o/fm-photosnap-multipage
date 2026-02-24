import Article from "@/ui/Article/Article";
import FeatureGrid from "@/ui/FeatureGrid/FeatureGrid";
import {Images} from "@/assets/images/features";
import styles from "./page.module.scss";

export default function Features() {
  return (
    <>
      <Article
        hero
        image={Images.hero.map((img) => {
          return {
            size: img.size,
            src: img.src,
            fill: false,
            alt: "",
            position: "Right",
            loading: "eager",
            width: img.width,
            height: img.height,
          };
        })}
      >
        <>
          <h2>features</h2>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </>
      </Article>
      <section className={styles.features__container}>
        <FeatureGrid gridMd={2} displayNum={0} />
      </section>
    </>
  );
}
