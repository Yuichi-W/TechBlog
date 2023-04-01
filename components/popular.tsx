import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { Blog } from '../types/blog';

type Props = {
    blogs: Array<Blog>;
};

export const Popular = ({ blogs }: Props) => {
    // 配列が空の場合は何も表示しない
    if (blogs.length === 0) return null;
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
                {blogs ? blogs.map((post: Blog, index: number) => (
                    <SwiperSlide key={index}>
                        <PopularSlide postData={post} />
                    </SwiperSlide>
                )) : null}
            </Swiper>
        </section>
    )
}

function PopularSlide({ postData }: { postData: Blog }) {
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
        <div className="item">
            <div className="images">
                <Link href={`/posts/${id}`}>
                    <Image className="rounded" src={ img.url || "/" } width={500} height={350} alt="Popular_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category.join(", ") || "Unknown"}</span>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {formattedDate || "Unknown"}</span>
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
                <Author
                    authorName={authorName}
                    authorDirector={authorDirector}
                    authorImg={authorImg}
                />
            </div>
        </div>
    )
}
