import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/gadget1" className="flex items-center">
      <span className="text-xl font-bold text-black">e-Gagdgets</span>
    </Link>
  );
}
