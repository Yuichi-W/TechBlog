import Link from "next/link"
import Image from "next/image"
import { Author } from "./author"
import type { Blog } from '../../types/blog';

type Props = {
    blogs: Array<Blog>;
};

export const Ralated = ({ blogs }: Props) => {
    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>

            <div className="flex flex-col gap-10">
                {blogs && blogs.map((post: Blog, index: number) => (
                    <Post key={index} postData={post} />
                ))}
            </div>
        </section>
    )
}

function Post({ postData }: { postData: Blog }) {
    const {
        id,
        title,
        category,
        img,
        publishedAt,
        authorDirector,
        authorImg,
        authorName,
    } = postData;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}>
                    <Image src={img.url || "/"} className="rounded" width={300} height={200} alt="blogImg" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category.join(", ") || "Unknown"}</span>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {publishedAt || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                <Author
                    authorName={authorName}
                    authorDirector={authorDirector}
                    authorImg={authorImg}
                />
            </div>
        </div>
    )
}