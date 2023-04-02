import { ImTwitter, ImGithub } from "react-icons/im";
import { SiQiita } from "react-icons/si";
import { AiFillUpSquare } from "react-icons/ai";
import Link from 'next/link'
import { Newslatter } from "./_child/newslatter";

export const Footer = () => {

    return (
        <footer className="bg-gray-50">
        {/* <Newslatter></Newslatter> */}
        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                    <Link href="https://twitter.com/piki_maru_ten" target="_blank" rel="noopener noreferrer">
                        <ImTwitter color="#888888" />
                    </Link>
                    <Link href="https://github.com/Yuichi-W" target="_blank" rel="noopener noreferrer">
                        <ImGithub color="#888888" />
                    </Link>
                    <Link href="https://qiita.com/pikimaru" target="_blank" rel="noopener noreferrer">
                        <SiQiita color="#888888" />
                    </Link>
                    <Link href="https://teratail.com/users/pikimaru" target="_blank" rel="noopener noreferrer">
                        <AiFillUpSquare color="#888888" />
                    </Link>
                </div>

                <p className="py-5 text-gray-400">Copyright ©2023 All rights reserved </p>
                <p className="text-gray-400 text-center">Terms & Condition</p>
            </div>
        </div>

        </footer>
    )
}