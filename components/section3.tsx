import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
    '/images/articles/posts/img1.jpg',
    '/images/articles/posts/img2.png',
    '/images/articles/posts/img3.png',
    '/images/articles/posts/img4.png',
    '/images/articles/posts/img5.png',
    '/images/articles/posts/img6.png',
    '/images/articles/posts/img7.png',
];

export const Section3 = () => {
    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={70}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Post3 src={src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

type PostProps = {
    src: string;
}

function Post3({ src }: PostProps){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}>
                    <Image className="rounded" src={ src } width={500} height={350} alt="Popular_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
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
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}
function Post({ src }: PostProps){
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}>
                    <Image src={ src }  width={600} height={400} alt="blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
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
                        <span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</span>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}