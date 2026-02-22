import Arrow from "./Arrow";
import BoostExposure from "./BoostExposure";
import CloseIcon from "./CloseIcon";
import CustomDomain from "./CustomDomain";
import DragDrop from "./DragDrop";
import Embed from "./Embed";
import MenuIcon from "./MenuIcon";
import NoLimit from "./NoLimit";
import Responsive from "./Responsive";

export const Icons = {
  Arrow: Arrow,
  Exposure: BoostExposure,
  Close: CloseIcon,
  Domain: CustomDomain,
  DrgDrop: DragDrop,
  Embed: Embed,
  Menu: MenuIcon,
  NoLimit: NoLimit,
  Responsive: Responsive,
};

export type IconKey = keyof typeof Icons;
