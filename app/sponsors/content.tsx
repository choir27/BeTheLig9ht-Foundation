import Reilly_Financial_Group_LLC from "../../assets/Reilly_Financial_Group_LLC.png";
import Savory from "../../assets/Savory.png";
import Primepoint from "../../assets/Primepoint.png";
import AmeriHealth_New_Jersey from "../../assets/AmeriHealth_New_Jersey.png";
import Aetna from "../../assets/Aetna.png";
import Kappa_Delta from "../../assets/Kappa_Delta.png";
import Thomas_Matthew_Associates from "../../assets/Thomas-Matthew_Associates.png";
import Haefele_Flanagan from "../../assets/Haefele_Flanagan.png";
import Schneider_Associate_Claim_Services from "../../assets/Schneider_&_Associate_Claim_Services.png";
import { SponsorInterface } from "../../middleware/Interfaces";
import Image, { StaticImageData } from "next/image";

const sponsors = [
  {
    source: Reilly_Financial_Group_LLC,
    alt: "Logo for Reilly Financial Group LLC",
    type: "Platinum",
  },
  {
    source: "The Dan and Susan Katzin Fund",
    alt: "",
    type: "Platinum",
  },
  {
    source: Savory,
    alt: "Logo for Savory",
    type: "Gold",
  },
  {
    source: Primepoint,
    alt: "Logo for Primepoint",
    type: "Silver",
  },
  {
    source: AmeriHealth_New_Jersey,
    alt: "Logo for AmeriHealth New Jersey",
    type: "Bronze",
  },
  {
    source: Aetna,
    alt: "Logo for Aetna",
    type: "Li9ht",
  },
  {
    source: Kappa_Delta,
    alt: "Logo for Kappa Delta",
    type: "Li9ht",
  },
  {
    source: Thomas_Matthew_Associates,
    alt: "Logo for Thomas Matthew Associates",
    type: "Li9ht",
  },
  {
    source: Haefele_Flanagan,
    alt: "Logo for Haefele Flanagan",
    type: "Friendship",
  },
  {
    source: Schneider_Associate_Claim_Services,
    alt: "Logo for Scheider Associate Claim Services",
    type: "Friendship",
  },
];

export const sponsorContent: Record<string, React.JSX.Element[]> = {
  Platinum: [],
  Gold: [],
  Silver: [],
  Bronze: [],
  Li9ht: [],
  Friendship: [],
};

sponsors.forEach((sponsors: SponsorInterface) => {
  const arr = sponsorContent[sponsors.type];
  if (typeof sponsors.source === "string") {
    arr.push(<h3 key={`${sponsors.source}`}>{sponsors.source}</h3>);
  } else {
    arr.push(
      <Image
        key={`${sponsors.source.src}`}
        src={sponsors.source}
        alt={sponsors.alt}
      />,
    );
  }
});
