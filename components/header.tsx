import { ImTwitter, ImGithub } from "react-icons/im";
import { SiQiita } from "react-icons/si";
import { AiFillUpSquare } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..." />
                </div>
                <div className="shrink w-80 sm:order-2">
                    <a href="/" className="font-bold uppercase text-3xl" >Design</a>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href={"https://twitter.com/piki_maru_ten"}>
                            <ImTwitter color="#888888" />
                        </Link>
                        <Link href={"https://github.com/Yuichi-W"}>
                            <ImGithub color="#888888" />
                        </Link>
                        <Link href={"https://qiita.com/pikimaru"}>
                            <SiQiita color="#888888" />
                        </Link>
                        <Link href={"https://teratail.com/users/pikimaru"}>
                            <AiFillUpSquare color="#888888" />
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
};