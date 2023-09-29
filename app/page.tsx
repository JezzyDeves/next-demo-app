import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white bg-slate-900">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Welcome to Next JS!</h1>
        <div className="m-2">
          <LinkButton href="/overview/routing">Let's get started</LinkButton>
        </div>
      </div>
    </div>
  );
}
