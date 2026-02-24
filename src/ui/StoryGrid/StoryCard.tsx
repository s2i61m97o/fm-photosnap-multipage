import Image from "next/image";
import styles from "./Story.module.scss";
import {Icons} from "../Icons";

interface CardProps {
  title: string;
  date: string;
  img: {
    desktop: string;
    mobile: string;
  };
  author: string;
  incDate: boolean;
}

export default function StoryCard({
  title,
  date,
  img,
  author,
  incDate = false,
}: CardProps) {
  return (
    <div className={styles.card}>
      <a href="">
        <Image
          src={img.desktop}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.card__img}
        />
        <div className={styles.card__mask}></div>
        <div className={styles.card__content}>
          {incDate ? <p className={styles.card_info}>{date}</p> : undefined}
          <h4 className={styles.card__title}>{title}</h4>
          <p className={styles.card_info}>by {author}</p>
          <hr />
          <span className={styles.card__cta} aria-hidden>
            read story <Icons.Arrow />
          </span>
        </div>
      </a>
    </div>
  );
}
