import Image from "next/image"
import Link from "next/link"
import { Author } from './_child/author'

export const Section1 = () => {

    const bg = {
        backgroundImage: "url('/images/banner.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                { Slide() }
            </div>
        </section>
    );
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src="/images/pc_img.jpg" width={640} height={853} alt="PC Image" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-800 hover:text-gray-600">- March 15, 2023</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">ブログのタイトル</span>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                    ブログ本文のテキストブログ本文のテキストブログ本文のテキストブログ本文のテキストブログ本文のテキストブログ本文のテキスト
                </p>
                <Author />
            </div>
        </div>
    )
}
