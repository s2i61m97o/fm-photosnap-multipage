import styles from "./page.module.scss";
import {Icons} from "@/components/ui/Icons";
import {Images} from "@/assets/images/home";
import FeatureGrid from "@/components/ui/FeatureGrid/FeatureGrid";
import Article from "@/components/ui/Article/Article";
import StoryGrid from "@/components/ui/StoryGrid/StoryGrid";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Article
          hero
          image={Images.createAndShare.map((img) => {
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
            <h2>create and share your photo stories</h2>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button>
              get an invite <Icons.Arrow />
            </button>
          </>
        </Article>
        <Article
          image={Images.beautifulStories.map((img) => {
            return {
              size: img.size,
              src: img.src,
              fill: true,
              alt: "",
              position: "Left",
              loading: "eager",
            };
          })}
        >
          <>
            <h2>beautiful stories every time</h2>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button>
              view the stories <Icons.Arrow />
            </button>
          </>
        </Article>

        <Article
          image={Images.designedForEveryone.map((img) => {
            return {
              size: img.size,
              src: img.src,
              fill: true,
              alt: "",
              position: "Right",
              loading: "eager",
            };
          })}
        >
          <>
            <h2>designed for everyone</h2>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button>
              view the stories <Icons.Arrow />
            </button>
          </>
        </Article>
      </section>

      <section className={styles.stories}>
        <StoryGrid displayNum={4} />
      </section>
      <section className={styles.features}>
        <FeatureGrid displayNum={3} />
      </section>
    </>
  );
}
