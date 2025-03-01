"use client"
import { useEffect, useRef } from "react";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Text(props: { title?: string; description?: string }) {
    const mainDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.title && window.location.hash === `#${props.title}`) {
            mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [props.title]);

    return (
        <div ref={mainDivRef} className="flex flex-col gap-7">
            {props.title && (
                <Link
                    href={`#${props.title}`}
                    className="text-primary group w-fit items-center flex relative font-semibold"
                >
                    <LinkIcon className="size-[14px] transition-all duration-200 -ml-6 opacity-0 group-hover:opacity-100 absolute" />
                    {props.title}
                </Link>
            )}
            {props.description && (
                <div className="text-primary/85 leading-7 font-medium">
                    {props.description}
                </div>
            )}
        </div>
    );
}
