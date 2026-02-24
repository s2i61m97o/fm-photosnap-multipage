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
        colorStrip={false}
        image={[
          {
            sizes: "100vw",
            src: featureStory.img.desktop,
            alt: "",
            orientation: "background",
            loading: "eager",
            fill: true,
          },
          // {
          //   sizes: "100vw",
          //   src: featureStory.img.mobile,
          //   width: 768,
          //   height: 650,
          //   alt: "",
          //   orientation: "landscape",
          //   loading: "eager",
          // },
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
