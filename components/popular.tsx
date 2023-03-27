import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import { Fetcher } from '../lib/fetcher';
import { BlogPost } from '../types/blogPost';
import { Spinner } from "./_child/spinner";
import { Error } from "./_child/error";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Popular = () => {
    const { data, isLoading, isError } = Fetcher('api/popular')
    if(isLoading) return <Spinner />
    if(isError) return <Error />

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
            <Swiper
                breakpoints={{
                    640:{
                        slidesPerView:2,
                        spaceBetween:30
                    }
                }}
            >
                {data ? data.map((post: BlogPost, index: number) => (
                    <SwiperSlide key={index}>
                        <PopularSlide postData={post} />
                    </SwiperSlide>
                )): null}
            </Swiper>
        </section>
    )
}

function PopularSlide({ postData }: { postData: BlogPost}){
    const { id, title, category, img, description, published, author } = postData;
    return (
        <div className="item">
            <div className="images">
                <Link href={`/posts/${id}`}>
                    <Image className="rounded" src={ img || "/" } width={500} height={350} alt="Popular_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
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
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                {description || "Description"}
                </p>
                { author ? <Author {...author} /> : <></> }
            </div>
        </div>
    )
}
