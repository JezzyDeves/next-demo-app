import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function LinkButton({ href, children }: Props) {
  return (
    <Link
      className="text-center text-sky-500 hover:bg-sky-800 hover:text-white transition-colors rounded p-2"
      href={href}
    >
      {children}
    </Link>
  );
}
