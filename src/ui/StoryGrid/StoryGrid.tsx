import styles from "./Story.module.scss";
import storyData from "../../data/stories.json";
import StoryCard from "./StoryCard";

export default function StoryGrid({displayNum}: {displayNum: number}) {
  let numToDisplay;
  if (displayNum === 0) {
    numToDisplay = storyData.length;
  } else {
    numToDisplay = displayNum;
  }

  return (
    <div className={styles.stories}>
      {storyData.map((story, index) => {
        if (index < numToDisplay && index > 0)
          return (
            <StoryCard
              key={story.title}
              title={story.title}
              date={story.date}
              img={story.img}
              author={story.author}
              incDate
            />
          );
      })}
    </div>
  );
}
