import Image from "next/image"
import Link from "next/link"

export type Props = {
    authorName: string;
    authorDirector: string;
    authorImg: {
        url: string
        height: number
        width: number
    }
};

export const Author =({ authorName, authorDirector, authorImg }: Props) => {
    if(!authorName && !authorImg) return<></>
    return (
        <div className="author flex py-5">
            <Image src={ authorImg.url || "/" }  style={{ height: "60px" }} width={80} height={60} className="rounded-full" alt="author" />        
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"}>
                    <span className="text-md font-bold text-gray-800 hover:text-gray-600">{authorDirector || ""}</span>
                </Link>
                <span className="text-sm text-gray-500">{authorName || "No Name"}</span>
            </div>
        </div>
    )
}