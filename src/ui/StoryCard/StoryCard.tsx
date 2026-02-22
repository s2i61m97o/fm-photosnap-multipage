import Image from "next/image";
import styles from "./StoryCard.module.scss";
import {Icons} from "../Icons";
import stories from "../../data/stories.json";

export default function StoryCard({
  amount,
  date,
}: {
  amount: number;
  date?: boolean;
}) {
  let numOfCards: number;
  //   display all cards by passing 0 as the amount
  if (amount === 0) {
    numOfCards = stories.length;
  } else {
    numOfCards = amount;
  }

  return stories.map((story, index) => {
    if (index < numOfCards) {
      return (
        <div key={story.title} className={styles.card}>
          <a href="">
            <Image
              src={story.img.desktop}
              alt=""
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              className={styles.card__img}
            />
            <div className={styles.card__mask}></div>
            <div className={styles.card__content}>
              {date ? (
                <p className={styles.card_info}>{story.date}</p>
              ) : undefined}
              <h4 className={styles.card__title}>{story.title}</h4>
              <p className={styles.card_info}>by {story.author}</p>
              <hr />
              <span className={styles.card__cta} aria-hidden>
                read story <Icons.Arrow />
              </span>
            </div>
          </a>
        </div>
      );
    }
  });
}
