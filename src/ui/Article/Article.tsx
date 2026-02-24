import type {JSX} from "react";
import styles from "./Article.module.scss";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";

interface ImageProp {
  sizes: string;
  src: StaticImageData | string;
  height?: number;
  width?: number;
  fill?: boolean;
  alt: string;
  orientation: "landscape" | "portrait" | "background";
  loading?: "eager" | "lazy";
}

interface ArticleProps {
  children: JSX.Element;
  image: ImageProp[];
  hero?: true;
  colorStrip?: boolean;
}

export default function Article({
  children,
  image,
  hero,
  colorStrip = true,
}: ArticleProps) {
  return (
    <div className={clsx(styles.article, hero && styles.hero)}>
      {image.map((img, index) => (
        <Image
          key={index}
          {...img}
          className={clsx(
            img.orientation === "landscape" && styles.article__imgLandscape,
            img.orientation === "portrait" && styles.article__imgPortrait,
            img.orientation === "background" && styles.article__imgBackground,
          )}
        />
      ))}
      <div
        className={clsx(
          styles.article__content,
          hero && styles.hero__content,
          !colorStrip && styles.hero__removeColor,
        )}
      >
        {children}
      </div>
    </div>
  );
}
