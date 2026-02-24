import Article from "@/ui/Article/Article";
import StoryGrid from "@/ui/StoryGrid/StoryGrid";
import stories from "@/data/stories.json";
import {Icons} from "@/ui/Icons";
import styles from "./page.module.scss";

export default function Stories() {
  const [featureStory] = stories;

  return (
    <>
      <Article
        hero
        image={[
          {
            size: "lg",
            src: featureStory.img.desktop,
            alt: "",
            position: "Background",
            loading: "eager",
            width: 1440,
            height: 650,
          },
          {
            size: "md",
            src: featureStory.img.tablet,
            alt: "",
            position: "Background",
            loading: "eager",
            width: 768,
            height: 650,
          },
          {
            size: "sm",
            src: featureStory.img.mobile,
            width: 375,
            height: 317,
            alt: "",
            position: "Background",
            loading: "eager",
          },
        ]}
      >
        <div className={styles.feature}>
          <h4 className={styles.feature__header}>last months featured story</h4>
          <h2 className={styles.feature__title}>{featureStory.title}</h2>
          <p className={styles.feature__date}>
            {featureStory.date}{" "}
            <span className={styles.feature__author}>
              by {featureStory.author}
            </span>
          </p>
          <p>{featureStory.intro}</p>
          <a className={styles.feature__link}>
            read the story <Icons.Arrow />
          </a>
        </div>
      </Article>
      <StoryGrid displayNum={0} />
    </>
  );
}
