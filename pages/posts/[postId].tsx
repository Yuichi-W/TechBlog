import { Format } from '../../layout/format'
import { Author } from '../../components/_child/author'
import Image from 'next/image'
import { Ralated } from '../../components/_child/ralated'
import { getPost } from '../../lib/helper'
import { BlogPost } from "../../types/blogPost"
import { Fetcher } from '../../lib/fetcher'
import { Spinner } from '../../components/_child/spinner'
import { Error } from '../../components/_child/error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

type Props = {
    title: string;
    subtitle: string;
    img: string;
    description: string;
    author?: BlogPost['author'];
};

type Params = {
    params: {
        postId: number;
    };
};

export default function Page({ fallback }){

    const router = useRouter()
    const { postId } = router.query;
    const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`)

    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

    return (
        <SWRConfig value={ { fallback }}>
            <Article {...data} />
        </SWRConfig>
    )
}

function Article({ title, subtitle, img, description, author }: Props) {
    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                { author ? <Author></Author> : <></>}
                </div>
                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600} alt="pageBlogImg"></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {description || "No Description"}
                    </div>
                </div>  
                <Ralated></Ralated>
            </section>
        </Format>
    )
}

export async function getStaticProps( { params }: Params ){
    const posts = await getPost(params.postId)
    return {
        props : {
            fallback : {
                '/api/posts' : posts
            }
        }
    }
}

export async function getStaticPaths(){
    const posts = await getPost();
    const paths = posts.map((value: BlogPost) => {
        return {
            params : {
                postId : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }
}