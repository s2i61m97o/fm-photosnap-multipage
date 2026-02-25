import Article from "@/components/ui/Article/Article";
import {Images} from "@/assets/images/pricing";
import Toggle from "@/components/ui/Toggle/Toggle";

export default function Pricing() {
  return (
    <>
      <Article
        hero
        image={Images.hero.map((img) => {
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
          <h2>pricing</h2>
          <p>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </>
      </Article>
    </>
  );
}
