import { Format } from '../../layout/format'
import Image from 'next/image'
import { Ralated } from '../../components/_child/ralated'
import type { Blog } from '../../types/blog';
import type { Highlightbody } from '../../types/highlightbody';
import { client } from "../../lib/client";
import { load } from "cheerio";
import hljs from 'highlight.js'
import { Author } from '../../components/_child/author';

type Props = {
    ralateBlogs: Array<Blog>;
    blog: Blog;
    highlightbody: Highlightbody;
};

export default function Article({ ralateBlogs, blog, highlightbody }: Props) {
    const {
        title,
        img,
        authorDirector,
        authorImg,
        authorName,
    } = blog;
    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-2/3'>
                <div className='flex justify-center'>
                <Author
                    authorName={authorName}
                    authorDirector={authorDirector}
                    authorImg={authorImg}
                />
                </div>
                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>
                    <div className="py-10">
                        <Image src={img.url || "/"} width={900} height={600} alt="pageBlogImg"></Image>
                    </div>
                    <div 
                        dangerouslySetInnerHTML={{ __html: `${highlightbody}` }}
                        className="content text-gray-600 text-lg flex flex-col gap-4"
                    >
                    </div>
                </div>  
                <Ralated blogs={ralateBlogs} />
            </section>
        </Format>
    )
}

// ssgでパスを取得
export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: 'blogs',
        queries: {
        limit: 10000
        }
    });
    const paths = data.contents.map((content: { id: string; }) => `/posts/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

// 指定のブログ情報取得
export const getStaticProps = async (context: any) => {
    const id = context.params.postId;
    const data = await client.get({
        endpoint: 'blogs',
        contentId: id,
    });

    // 最新のブログ記事を10件取得
    const ralatedData = await client.get({
        endpoint: 'blogs',
        queries: {
        orders: '-createdAt', limit: 10
        }
    });

    const ralateBlogs = ralatedData.contents;

    // シンタックスハイライト処理
    const $ = load(data.content);  // data.contentはmicroCMSから返されるリッチエディタ部分
    $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text());
        $(elm).html(result.value);
        $(elm).addClass('hljs');
    });
    data.content = $.html();

    return {
        props: {
            ralateBlogs,
            blog: data,
            highlightbody: data.content
        },
    };
};