import Link from "next/link"
import Image from "next/image"
import { Author } from "./author"
import { Fetcher } from "../../lib/fetcher";
import { BlogPost } from "../../types/blogPost";
import { Spinner } from "../_child/spinner";
import { Error } from "../_child/error";

export const Ralated = () => {
    const { data, isLoading, isError } = Fetcher('api/posts')
    if(isLoading) return <Spinner />
    if(isError) return <Error />
    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>

            <div className="flex flex-col gap-10">
                {data && data.map((post: BlogPost, index: number) => (
                    <Post key={index} postData={post} />
                ))}
            </div>
        </section>
    )
}


function Post({ postData }: { postData: BlogPost }) {
    const { id, title, category, img, published, author } = postData;
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}>
                    <Image src={img || "/"} className="rounded" width={300} height={200} alt="blogImg" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                { author ? <Author {...author} /> : <></> }
            </div>
        </div>
    )
}