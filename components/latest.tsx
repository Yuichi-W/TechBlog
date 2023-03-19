import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import { Fetcher } from "../lib/fetcher";
import { BlogPost } from "../types/blogPost";
import { Spinner } from "./_child/spinner";
import { Error } from "./_child/error";

export const Latest = () => {
    const { data, isLoading, isError } = Fetcher({ endpoint: 'api/posts' })
    if(isLoading) return <Spinner />
    if(isError) return <Error />

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {data && data.map((post: BlogPost, index: number) => (
                <Post key={index} postData={post} />
            ))}
            </div>
        </section>
    )
}

function Post({ postData }: { postData: BlogPost }) {
    const { title, category, img, description, published, author } = postData;
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}>
                    <Image className="rounded" src={img || "/"} width={500} height={350} alt="blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title mb-3 line-clamp-2">
                    <Link href={"/"}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                <p className="text-gray-500 line-clamp-3">
                    <span>{ description || "Description" }</span>
                </p>
                { author ? <Author /> :<></> }
            </div>
        </div>
    )
}