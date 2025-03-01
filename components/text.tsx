"use client"
import { useEffect, useRef } from "react";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Text({ title, description }: { title?: string; description?: string }) {
    const mainDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (title && window.location.hash === `#${title}`) {
            mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [title]);

    useEffect(() => {
        if (title && window.location.hash === `#${title}`) {
            mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, title: string) => {
        event.preventDefault();
        history.pushState(null, '', `#${title}`);
        mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div ref={mainDivRef} className="flex flex-col gap-7">
            {title && (
                <Link
                    href={`#${title}`}
                    onClick={(event) => handleClick(event, title)}
                    className="text-primary group w-fit items-center flex relative font-semibold"
                >
                    <LinkIcon className="size-[14px] transition-all duration-200 -ml-6 opacity-0 group-hover:opacity-100 absolute" />
                    {title}
                </Link>
            )}
            {description && (
                <div className="text-primary/85 leading-7 font-medium">
                    {description}
                </div>
            )}
        </div>
    );
}
