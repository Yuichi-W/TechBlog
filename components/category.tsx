import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import { Fetcher } from '../lib/fetcher';
import { BlogPost } from '../types/blogPost';
import { Spinner } from "./_child/spinner";
import { Error } from "./_child/error";

export const Category = () => {
    const { data, isLoading, isError } = Fetcher({ endpoint: 'api/popular' })
    if(isLoading) return <Spinner />
    if(isError) return <Error />
    if(!data) return <Spinner />

    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        { data[1] ? <CategoryPost postData={data[1]} /> : <></>}
                        { data[2] ? <CategoryPost postData={data[2]} /> : <></>}
                        { data[3] ? <CategoryPost postData={data[3]} /> : <></>}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        { data[4] ? <CategoryPost postData={data[4]} /> : <></>}
                        { data[5] ? <CategoryPost postData={data[5]} /> : <></>}
                        { data[2] ? <CategoryPost postData={data[2]} /> : <></>}
                    </div>
                </div>
            </div>
        </section>
    )
}

function CategoryPost({ postData }: { postData: BlogPost}){
    const { title, category, img, published, author } = postData;
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <Image className="rounded" src={ img || "/" } width={300} height={250} alt="Category_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
                    </Link>
                </div>
                {author ? <Author /> : <></> }
            </div>
        </div>
    )
}