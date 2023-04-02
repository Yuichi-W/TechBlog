import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import type { Blog } from '../types/blog';

type Props = {
    blogs: Record<string, Blog[]>;
};

export const Category = ({ blogs }: Props) => {

    const categorizedBlogs: { [key: string]: any[] } = {};
    Object.keys(blogs).forEach((category) => {
        categorizedBlogs[category] = blogs[category];
    });

    
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2 gap-14">
                {Object.entries(categorizedBlogs).map(([category, blogs]) => (
                    <div className="item" key={category}>
                        <h1 className="font-bold text-4xl py-12 line-clamp-2">{category}</h1>
                        <div className="flex flex-col gap-6">
                            {blogs.map(blog => (
                                <CategoryPost key={blog.id} postData={blog} />
                            ))}
                        </div>
                    </div>
                ))} 
            </div>
        </section>
    )
}

function CategoryPost({ postData }: { postData: Blog }) {
    const {
        id,
        title,
        category,
        img,
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
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}>
                    <Image className="rounded" style={{ maxWidth: "none", height: "150px" }} src={ img.url || "/" } width={200} height={200} alt="Category_blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                </div>
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {formattedDate || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title line-clamp-2">
                    <Link href={`/posts/${id}`}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
                    </Link>
                </div>
                <Author
                    authorName={authorName}
                    authorDirector={authorDirector}
                    authorImg={authorImg}
                />
            </div>
        </div>
    )
}