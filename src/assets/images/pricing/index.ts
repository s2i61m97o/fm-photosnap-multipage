import checkDesktop from "./desktop/check.svg";

import heroDesktop from "./desktop/hero.jpg";
import heroTablet from "./tablet/hero.jpg";
import heroMobile from "./mobile/hero.jpg";

export const Images = {
  check: [
    {
      size: "lg",
      src: checkDesktop,
      width: 830,
      height: 650,
    },
  ],
  hero: [
    {
      size: "sm",
      src: heroMobile,
      width: 375,
      height: 294,
    },
    {
      size: "md",
      src: heroTablet,
      width: 273,
      height: 650,
    },
    {
      size: "lg",
      src: heroDesktop,
      width: 830,
      height: 650,
    },
  ],
};
