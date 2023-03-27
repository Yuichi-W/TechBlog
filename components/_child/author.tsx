import Image from "next/image"
import Link from "next/link"

export type author = {
    name: string;
    img: string;
    designation: string;
};

export const Author =(props:author) => {
    const { name, img, designation } = props;
    if(!name && !img) return<></>
    return (
        <div className="author flex py-5">
            <Image src={ img || "/" } width={60} height={60} className="rounded-full" alt="author" />        
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"}>
                    <span className="text-md font-bold text-gray-800 hover:text-gray-600">{designation || ""}</span>
                </Link>
                <span className="text-sm text-gray-500">{name || "No Name"}</span>
            </div>
        </div>
    )
}