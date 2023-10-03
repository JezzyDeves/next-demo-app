import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">Welcome to Next JS!</h1>
        <div className="m-2">
          <LinkButton href="/overview/routing">Let's get started</LinkButton>
        </div>
      </div>
    </div>
  );
}
