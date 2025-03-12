import Image from "next/image";
import styles from "./card.module.css";

interface Props {
    venueName: string;
    imgSrc: string;
}

export default function Card({ venueName, imgSrc }: Props) {
    return (
        <div className='bg-white rounded-xl shadow-md m-3 w-64 h-72'>
            <div className='w-full rounded-t-xl overflow-hidden relative aspect-[3/2]'>
                <Image
                    src={imgSrc}
                    alt={`${venueName} image`}
                    fill
                    className="object-cover"
                />
            </div>
            <h2 className='m-2 font-anuphan font-semibold'>{venueName}</h2>
        </div>
    );
}
