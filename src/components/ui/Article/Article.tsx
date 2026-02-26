import type {JSX} from "react";
import styles from "./Article.module.scss";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";

interface ImageProp {
  size: string;
  src: StaticImageData | string;
  height?: number;
  width?: number;
  fill?: boolean;
  alt: string;
  position: "Left" | "Right" | "Background";
  loading?: "eager" | "lazy";
}

interface ArticleProps {
  children: JSX.Element;
  image: ImageProp[];
  hero?: true;
}

export default function Article({children, image, hero}: ArticleProps) {
  return (
    <div
      className={clsx(
        styles.article,
        hero && styles.hero,
        styles[`article__image${image[0].position}`],
      )}
    >
      {image.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={img.loading}
          className={clsx(
            styles[`img__${img.size}`],
            styles.article__img,
            img.position === "Background" && styles.img__background,
          )}
        />
      ))}
      <div
        className={clsx(
          styles.article__content,
          hero && styles.hero__content,
          image[0].position === "Background" && styles.hero__removeColor,
        )}
      >
        {children}
      </div>
    </div>
  );
}
