import { ILink } from "@/type/link-interface";
import Image from "next/image";

export default function Link(link: ILink) {

    return(
        <a href={link.url} className="flex items-center justify-between">
            {
                (link.icon) && <Image src={link.icon} alt=""/>
            }
            <p>{link.text}</p>
        </a>
    )
}