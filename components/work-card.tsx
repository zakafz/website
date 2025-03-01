import {  ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

export default function WorkCard(props: {
  title: string;
  role: string;
  href: string;
  description: string;
}) {
  return (
    <MorphingDialog>
      <MorphingDialogTrigger>
        <div className="w-full border cursor-pointer rounded-2xl overflow-hidden shadow-sm shadow-black/5 group">
          <div className="flex flex-col gap-7 p-7 bg-black min-h-40"></div>
          <div className="bg-[#151514] relative border-t w-full px-7 py-3 flex flex-col">
            <MorphingDialogSubtitle className="text-muted-foreground mb-[-1px] text-sm font-sembold">
              {props.role}
            </MorphingDialogSubtitle>
            <MorphingDialogTitle className="text-base font-semibold">
              {props.title}
            </MorphingDialogTitle>
            <MorphingDialogDescription className="sr-only">
              {props.description}
            </MorphingDialogDescription>
            <Plus className="absolute top-[50%] translate-y-[-50%] right-3 group-hover:right-7 size-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="w-[80%] max-w-[700px] bg-[#151514] border p-5 rounded-2xl">
          <MorphingDialogSubtitle className="text-muted-foreground text-sm font-sembold">
            {props.role}
          </MorphingDialogSubtitle>
          <MorphingDialogTitle className="text-base font-semibold">
            {props.title}
          </MorphingDialogTitle>
          <MorphingDialogDescription className="text-muted-foreground leading-7 font-medium my-3">
            {props.description}
          </MorphingDialogDescription>
          <Link
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold flex underline w-fit items-center gap-1 focus:outline-none focus:ring-0"
          >
            Check out more <ArrowUpRight className="size-4" />
          </Link>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
