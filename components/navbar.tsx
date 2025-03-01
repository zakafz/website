import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col font-semibold w-fit">
      <Link href="/" className="text-primary mb-[-3px] w-fit">
        Zakary Fofana
      </Link>
      <div className="text-muted-foreground">Design Technologist</div>
    </div>
  );
}
