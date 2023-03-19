import Image from "next/image";
import Link from "next/link";
import { Author } from './_child/author';
import { Fetcher } from '../lib/fetcher';
import { BlogPost } from '../types/blogPost';
import { Spinner } from "./_child/spinner";
import { Error } from "./_child/error";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export const Trending = () => {

    const { data, isLoading, isError } = Fetcher({ endpoint: 'api/trending' })
    if(isLoading) return <Spinner />
    if(isError) return <Error />

    SwiperCore.use([Autoplay]);
    const bg = {
        backgroundImage: "url('/images/banner.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay:4000
                    }}
                >
                {data ? data.map((post: BlogPost, index: number) => (
                    <SwiperSlide key={index}>
                        <Slide postData={post} />
                    </SwiperSlide>
                )) : null}
                </Swiper>
                
            </div>
        </section>
    );
}

function Slide({ postData }: { postData: BlogPost}){
    const { title, category, img, description, published, author } = postData;
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/posts/page"}>
                    <Image src={ img || "/" } width={480} height={640} alt="blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col ml-4">
                <div className="cat">
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title line-clamp-2">
                    <Link href={"/"}>
                        <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                <p className="text-gray-500  line-clamp-3">
                    <span>{ description || "Description" }</span>
                </p>
                { author ? <Author /> : <></> }
            </div>
        </div>
    )
}
