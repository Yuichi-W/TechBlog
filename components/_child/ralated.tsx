import Link from "next/link"
import Image from "next/image"
import { Author } from "./author"

const alatedImages = [
    '/images/articles/posts/img1.jpg',
    '/images/articles/posts/img2.png',
    '/images/articles/posts/img3.png',
    '/images/articles/posts/img4.png',
    '/images/articles/posts/img5.png',
];

type PostProps = {
    src: string;
}

export const Ralated = () => {
    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>

            <div className="flex flex-col gap-10">
                {alatedImages.map((src, index) => (
                    <Post key={index} src={src} />
                ))}
            </div>
        </section>
    )
}


function Post({ src }: PostProps){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <Image src={src} className="rounded" width={300} height={200} alt="blogImg" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-800 hover:text-gray-600">- July 3, 2022</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</span>
                    </Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}