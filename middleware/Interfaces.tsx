import { StaticImageData } from "next/image";

export interface ButtonLinkInterface {
  text: string | JSX.Element;
  href: string;
  className?: string;
  key?: string;
  target?: boolean;
}

export interface ButtonInterface extends ButtonLinkInterface {
  onClick: () => void;
}

export interface AsideInterface {
  heading: string;
  buttonElement: React.JSX.Element;
  paragraph?: string;
}

export interface SponsorInterface {
  source: StaticImageData | string;
  alt: string;
  type: string;
}

export interface Drop_Down_Menu_Interface{
  text: string,
  options: string[],
  className?: string
}