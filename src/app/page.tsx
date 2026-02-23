import styles from "./page.module.scss";
import {Icons} from "@/ui/Icons";
import createImgLand from "../../public/images/home/desktop/create-and-share.jpg";
import beautifulImgLand from "../../public/images/home/desktop/beautiful-stories.jpg";
import designedImgLand from "../../public/images/home/desktop/designed-for-everyone.jpg";
import createImgPortrait from "../../public/images/home/tablet/create-and-share.jpg";
import beautifulImgPortrait from "../../public/images/home/tablet/beautiful-stories.jpg";
import designedImgPortrait from "../../public/images/home/tablet/designed-for-everyone.jpg";
import StoryCard from "../ui/StoryCard/StoryCard";
import FeatureGrid from "@/ui/FeatureGrid/FeatureGrid";
import Article from "@/ui/Article/Article";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Article
          hero
          image={[
            {
              sizes: "100vw",
              src: createImgLand,
              height: 650,
              width: 830,
              alt: "",
              orientation: "landscape",
              loading: "eager",
            },
            {
              sizes: "100vw",
              src: createImgPortrait,
              height: 600,
              width: 273,
              alt: "",
              orientation: "portrait",
              loading: "eager",
            },
          ]}
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
          image={[
            {
              sizes: "100vw",
              src: beautifulImgLand,
              height: 650,
              width: 830,
              alt: "",
              orientation: "landscape",
            },
            {
              sizes: "100vw",
              src: beautifulImgPortrait,
              height: 600,
              width: 273,
              alt: "",
              orientation: "portrait",
            },
          ]}
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
          image={[
            {
              sizes: "100vw",
              src: designedImgLand,
              height: 650,
              width: 830,
              alt: "",
              orientation: "landscape",
            },
            {
              sizes: "100vw",
              src: designedImgPortrait,
              height: 600,
              width: 273,
              alt: "",
              orientation: "portrait",
            },
          ]}
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
        <StoryCard amount={4} />
      </section>
      <section className={styles.features}>
        <FeatureGrid displayNum={3} />
      </section>
    </>
  );
}
