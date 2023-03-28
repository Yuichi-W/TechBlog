import Link from "next/link";
import Image from "next/image";
import { Author } from './_child/author';
import type { Blog } from '../types/blog';

type Props = {
    latestBlogs: Array<Blog>;
};

export const Latest = ({ latestBlogs }: Props) => {

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {latestBlogs && latestBlogs.map((post: Blog, index: number) => (
                <Post key={index} postData={post} />
            ))}
            </div>
        </section>
    )
}

function Post({ postData }: { postData: Blog }) {
    console.log(postData);
    const { id, title, category, img, description, publishedAt} = postData;
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
                    <Image className="rounded" src={img.url || "/"} width={500} height={500} alt="blog_img" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {formattedDate || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title mb-3 line-clamp-2">
                    <Link href={`/posts/${id}`}>
                        <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{ title || "Title" }</span>
                    </Link>
                </div>
                <p className="text-gray-500 line-clamp-3">
                    <span>{ description || "description" }</span>
                </p>
            </div>
        </div>
    )
}