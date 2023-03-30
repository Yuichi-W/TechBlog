import { Format } from '../../layout/format'
import Image from 'next/image'
// import { Ralated } from '../../components/_child/ralated'
import { BlogPost } from "../../types/blogPost"
import type { Highlightbody } from '../../types/highlightbody';
import { client } from "../../lib/client";
import { load } from "cheerio";
import hljs from 'highlight.js'

type Props = {
    blog: BlogPost;
    highlightbody: Highlightbody;
  };

export default function Article({ blog, highlightbody }: Props) {
    console.log(blog)
    // console.log(highlightbody)
    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                {/* { author ? <Author></Author> : <></>} */}
                </div>
                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{blog.title || "No Title"}</h1>
                    <div className="py-10">
                        <Image src={blog.img.url || "/"} width={900} height={600} alt="pageBlogImg"></Image>
                    </div>
                    <div 
                        dangerouslySetInnerHTML={{ __html: `${highlightbody}` }}
                        className="content text-gray-600 text-lg flex flex-col gap-4"
                    >
                    </div>
                </div>  
                {/* <Ralated></Ralated> */}
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

export const getStaticProps = async (context: any) => {
    const id = context.params.postId;
    const data = await client.get({
        endpoint: 'blogs',
        contentId: id,
    });

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
            blog: data,
            highlightbody: data.content
        },
    };
};