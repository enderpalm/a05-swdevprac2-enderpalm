import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface Props {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: Props) {
  return (
    <InteractiveCard>
      <div className="w-full rounded-t-lg overflow-hidden relative aspect-[3/2]">
        <Image
          src={imgSrc}
          alt={`${venueName} image`}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="m-2 font-anuphan font-semibold">{venueName}</h2>
    </InteractiveCard>
  );
}
