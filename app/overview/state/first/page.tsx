"use client";

import LinkButton from "@/components/LinkButton";
import { useBasicStore } from "@/stores/basicStore";

export default function Page() {
  const store = useBasicStore();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        <p>The value in store is:</p>
        <p className="font-bold text-green-500">"{store.value}"</p>
        <input
          className="text-black"
          type="text"
          onChange={(e) => store.setValue(e.target.value)}
          value={store.value}
        />
        <LinkButton href="/overview/state/second">Next</LinkButton>
      </div>
    </>
  );
}
