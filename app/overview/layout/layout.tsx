"use client";

import { PropsWithChildren, useState } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center bg-slate-900 text-white text-center">
        {children}
        <div>
          <button
            className="rounded p-2 mt-2 bg-green-500 hover:bg-green-700 transition-colors text-white"
            onClick={() => setCount(count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
