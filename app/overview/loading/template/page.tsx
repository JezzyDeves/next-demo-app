import LinkButton from "@/components/LinkButton";

export default async function Page() {
  const wait = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  await wait();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        Done loading
        <LinkButton href="/overview/loading/suspense">Next</LinkButton>
      </div>
    </>
  );
}
