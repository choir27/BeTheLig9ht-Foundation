import { ButtonLinkInterface } from "../middleware/Interfaces";
import Link from "next/link";

export function ButtonLink(button: ButtonLinkInterface) {
  return (
    <Link href={button.href} key={button.key} className={button.className}>
      {button.text}
    </Link>
  );
}
