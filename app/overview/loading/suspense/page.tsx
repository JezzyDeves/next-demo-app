import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        <h1 className="text-4xl font-bold">
          This header loads instantly from the server
        </h1>
        <Suspense fallback={<p>Loading...</p>}>
          <SuspenseText />
        </Suspense>
      </div>
    </>
  );
}

async function SuspenseText() {
  const wait = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  await wait();

  return <>Done</>;
}
