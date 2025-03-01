import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WebLink(props: { href: string; title: string }) {
  return (
    <Link
      href={props.href}
      className="flex items-center gap-2 text-primary font-semibold"
    >
      <ArrowRight className="size-4" />
      <div className="underline">{props.title}</div>
    </Link>
  );
}
