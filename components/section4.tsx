import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';

const businessImages = [
    '/images/articles/img1.jpg',
    '/images/articles/img2.jpg',
    '/images/articles/img3.jpg',
    '/images/articles/img4.png',
    '/images/articles/img5.png',
];
const travelImages = [
    '/images/articles/posts/img1.jpg',
    '/images/articles/posts/img2.png',
    '/images/articles/posts/img3.png',
    '/images/articles/posts/img4.png',
    '/images/articles/posts/img5.png',
];

type PostProps = {
    src: string;
}
export const Section4 = () => {
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {businessImages.map((business, index) => (
                            <Post key={index} src={business} />
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {travelImages.map((trave, index) => (
                            <Post key={index} src={trave} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Post({ src }: PostProps){
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <Image className="rounded" src={ src } width={300} height={250} alt="Category_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
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
                <Author></Author>
            </div>
        </div>
    )
}