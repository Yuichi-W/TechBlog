import Image from "next/image";
import Link from "next/link";
import { Author } from './_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import type { Blog } from '../types/blog';

type Props = {
    blogs: Array<Blog>;
};

export const Trending = ({ blogs }: Props) => {
    // 配列が空の場合は何も表示しない
    if (blogs.length === 0) return null;
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
                {blogs ? blogs.map((post: Blog, index: number) => (
                    <SwiperSlide key={index}>
                        <Slide postData={post} />
                    </SwiperSlide>
                )) : null}
                </Swiper>
            </div>
        </section>
    );
}

function Slide({ postData }: { postData: Blog }) {
    const {
        id,
        title,
        category,
        img,
        description,
        publishedAt,
        authorDirector,
        authorImg,
        authorName,
    } = postData;
    // タイムスタンプをDateオブジェクトに変換する
    const date = new Date(publishedAt);
    // 年月日を取得する
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため、1を足す必要がある
    const day = date.getDate();

    // 日付文字列にフォーマットする
    const formattedDate = `${year}年${month}月${day}日`;
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={`/posts/${id}`}>
                    <Image src={ img.url || "/" } width={500} height={500} alt="blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col ml-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category.join(", ") || "Unknown"}</span>
                    </Link>
                </div>
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {formattedDate || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title line-clamp-2">
                    <Link href={`/posts/${id}`}>
                        <span className="line-clamp-2 text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                <p className="text-gray-500  line-clamp-3">
                    <span>{ description || "Description" }</span>
                </p>
                <Author
                    authorName={authorName}
                    authorDirector={authorDirector}
                    authorImg={authorImg}
                />
            </div>
        </div>
    )
}
