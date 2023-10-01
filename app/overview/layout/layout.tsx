import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white text-center">
      {children}
    </div>
  );
}
