import Link from "next/link";
import { ReactNode } from "react";

export default function StackCard(props: { icon: ReactNode; href: string }) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="w-full p-2 aspect-square border rounded-3xl bg-[#151514]"
    >
      <div className="rounded-2xl h-full flex justify-center items-center w-full bg-black p-3">
        {props.icon}
      </div>
    </Link>
  );
}
