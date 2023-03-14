import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';

const images = [
    '/images/articles/posts/img1.jpg',
    '/images/articles/posts/img2.png',
    '/images/articles/posts/img3.png',
    '/images/articles/posts/img4.png',
    '/images/articles/posts/img5.png',
    '/images/articles/posts/img6.png',
    '/images/articles/posts/img7.png',
];

export const Section2 = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {images.map((src, index) => (
                    <Post key={index} src={src} />
                ))}
            </div>
        </section>
    )
}

type PostProps = {
    src: string;
}

function Post({ src }: PostProps){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}>
                    <Image className="rounded" src={ src } width={500} height={350} alt="blog_img" />
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