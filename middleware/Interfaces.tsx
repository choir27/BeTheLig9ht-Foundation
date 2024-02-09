export interface ButtonLinkInterface {
  text: string;
  href: string;
  className?: string;
  key?: string;
}

export interface ButtonInterface extends ButtonLinkInterface {
  onClick: () => void;
}
