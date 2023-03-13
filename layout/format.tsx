import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Head from 'next/head'

export const Format = ({ children }: { children: React.ReactNode }) => {
    return(
        <>
            <Head>
                <title>PikimaruBlog</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}