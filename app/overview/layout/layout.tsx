"use client";

import { PropsWithChildren, useState } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        {children}
        <div>
          <button
            className="mt-2 rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-700"
            onClick={() => setCount(count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
