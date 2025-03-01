import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col font-semibold">
      <Link href="/" className="text-primary mb-[-3px]">
        Zakary Fofana
      </Link>
      <div className="text-muted-foreground">Design Technologist</div>
    </div>
  );
}
