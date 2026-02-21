import styles from "./page.module.scss";
import Image from "next/image";
import Arrow from "@/ui/Icons/Arrow";
import createImgLand from "../../public/images/home/desktop/create-and-share.jpg";
import beautifulImgLand from "../../public/images/home/desktop/beautiful-stories.jpg";
import designedImgLand from "../../public/images/home/desktop/designed-for-everyone.jpg";
import createImgPortrait from "../../public/images/home/tablet/create-and-share.jpg";
import beautifulImgPortrait from "../../public/images/home/tablet/beautiful-stories.jpg";
import designedImgPortrait from "../../public/images/home/tablet/designed-for-everyone.jpg";
import clsx from "clsx";
import StoryCard from "../ui/StoryCard/StoryCard";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={clsx(styles.article, styles.articleDark)}>
          <Image
            sizes="100vw"
            src={createImgLand}
            height={650}
            width={830}
            alt=""
            className={styles.article__imgLandscape}
          />
          <Image
            sizes="100vw"
            src={createImgPortrait}
            height={600}
            width={273}
            alt=""
            className={styles.article__imgPortrait}
          />
          <div
            className={clsx(
              styles.article__content,
              styles.article__contentDark,
            )}
          >
            <h2>create and share your photo stories</h2>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button>
              get an invite <Arrow />
            </button>
          </div>
        </div>
        <div className={styles.article}>
          <Image
            sizes="100vw"
            src={beautifulImgLand}
            height={650}
            width={830}
            alt=""
            className={styles.article__imgLandscape}
          />
          <Image
            sizes="100vw"
            src={beautifulImgPortrait}
            height={600}
            width={273}
            alt=""
            className={styles.article__imgPortrait}
          />
          <div className={styles.article__content}>
            <h2>beautiful stories every time</h2>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button>
              view the stories <Arrow />
            </button>
          </div>
        </div>
        <div className={styles.article}>
          <Image
            sizes="100vw"
            src={designedImgLand}
            height={650}
            width={830}
            alt=""
            className={styles.article__imgLandscape}
          />
          <Image
            sizes="100vw"
            src={designedImgPortrait}
            height={600}
            width={273}
            alt=""
            className={styles.article__imgPortrait}
          />
          <div className={styles.article__content}>
            <h2>designed for everyone</h2>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button>
              view the stories <Arrow />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.stories}>
        <StoryCard amount={4} />
      </section>
    </>
  );
}
