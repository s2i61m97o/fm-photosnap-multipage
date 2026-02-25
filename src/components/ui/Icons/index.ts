import Arrow from "./Arrow";
import BoostExposure from "./BoostExposure";
import CloseIcon from "./CloseIcon";
import CustomDomain from "./CustomDomain";
import DragDrop from "./DragDrop";
import Embed from "./Embed";
import MenuIcon from "./MenuIcon";
import NoLimit from "./NoLimit";
import Responsive from "./Responsive";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Pinterest from "./Pinterest";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import Logo from "./Logo";
import Check from "./Check";

export const Icons = {
  Arrow,
  Exposure: BoostExposure,
  Close: CloseIcon,
  Domain: CustomDomain,
  DragDrop,
  Embed,
  Menu: MenuIcon,
  NoLimit,
  Responsive,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube,
  Logo,
  Check,
};

export type IconKey = keyof typeof Icons;
