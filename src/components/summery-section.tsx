import { useEffect, useState } from "react";
import { getGreetingMessage } from "@/hooks/use-timezone";

export default function SummerySection() {
    const [greeting, setGreeting] = useState("Good morning");

    useEffect(() => {
        setGreeting(getGreetingMessage());
    }, []);

    return (
        <section className="flex flex-col">
            <h2 className="sr-only">About</h2>
            <div className="stripe-divider screen-line-bottom"></div>
            <header className="px-4 screen-line-bottom">
                <div className="title text-3xl font-medium tracking-tight text-balance font-handwritten leading-none">{greeting}</div>
            </header>
            <div className="p-4">
                <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
                    <ul className="">
                        <li className="">I’m Subhamoy Biswas (call me Subhamoy) — a Full-stack Developer & Design Engineer delivering modern, scaleable web apps with pixel-perfect user interfaces for over 8+ years.</li>
                        <li className="">Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.</li>
                        <li className="">Creator of <a href="https://github.com/neosubhamoy/neodlp" target="_blank" className="">NeoDLP</a> (450k+ downloads, 500+ stars), <a href="https://github.com/neosubhamoy/pytubepp" target="_blank" className="">PytubePP</a> (40k+ downloads, 10k+ users), and <a href="https://prourl.eu.org" target="_blank" className="">ProURL</a> (25k+ users) — peak metrics.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}