import LinkButton from "@/components/LinkButton";

export default async function Page() {
  const { message } = await (
    await fetch("http://localhost:3000/api/greet", {
      method: "POST",
      body: JSON.stringify({ name: "Jon" }),
    })
  ).json();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-center text-white">
        <p className="font-bold text-green-500">
          This message came from the server API
        </p>
        {message}
        <LinkButton href="/overview/state/first">Next</LinkButton>
      </div>
    </>
  );
}
