import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function LinkButton({ href, children }: Props) {
  return (
    <Link
      className="rounded p-2 text-center text-sky-500 transition-colors hover:bg-sky-800 hover:text-white"
      href={href}
    >
      {children}
    </Link>
  );
}
