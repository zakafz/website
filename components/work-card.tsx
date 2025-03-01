import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorkCard(props: {
  title: string;
  role: string;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full border cursor-pointer rounded-2xl overflow-hidden shadow-sm shadow-black/5 group"
    >
      <div className="flex flex-col gap-7 p-7 bg-black min-h-40"></div>
      <div className="bg-[#151514] relative border-t w-full px-7 py-3 flex flex-col">
        <div className="text-muted-foreground mb-[-1px] text-sm font-sembold">
          {props.role}
        </div>
        <div className="text-base font-semibold">{props.title}</div>
        <ArrowRight className="absolute top-[50%] translate-y-[-50%] right-3 group-hover:right-7 size-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200" />
      </div>
    </Link>
  );
}
