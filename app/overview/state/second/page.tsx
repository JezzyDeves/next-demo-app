"use client";

import LinkButton from "@/components/LinkButton";
import { useBasicStore } from "@/stores/basicStore";

export default function Page() {
  const store = useBasicStore();
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        {store.value}
        <LinkButton href="/overview/loading/template">Next</LinkButton>
      </div>
    </>
  );
}
