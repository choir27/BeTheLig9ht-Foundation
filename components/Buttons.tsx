import { ButtonLinkInterface, ButtonInterface } from "../middleware/Interfaces";
import Link from "next/link";

export function ButtonLink(button: ButtonLinkInterface) {
  return (
    <Link href={button.href} key={button.key} className={button.className}>
      {button.text}
    </Link>
  );
}

export function Button(button: ButtonInterface) {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        button.onClick();
      }}
      className={button.className}
      key={button.key}
    >
      {button.text}
    </button>
  );
}
