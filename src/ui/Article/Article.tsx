import type {JSX} from "react";
import styles from "./Article.module.scss";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";

interface ImageProp {
  sizes: string;
  src: StaticImageData;
  height: number;
  width: number;
  alt: string;
  orientation: "landscape" | "portrait";
}

interface ArticleProps {
  children: JSX.Element;
  image: ImageProp[];
  hero?: true;
}

export default function Article({children, image, hero}: ArticleProps) {
  return (
    <div className={clsx(styles.article, hero && styles.hero)}>
      {image.map((img, index) => (
        <Image
          key={index}
          {...img}
          className={clsx(
            img.orientation === "landscape" && styles.article__imgLandscape,
            img.orientation === "portrait" && styles.article__imgPortrait,
          )}
        />
      ))}
      <div
        className={clsx(styles.article__content, hero && styles.hero__content)}
      >
        {children}
      </div>
    </div>
  );
}
