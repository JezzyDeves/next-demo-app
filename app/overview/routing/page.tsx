import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white text-center">
      <div className="flex flex-col">
        <p>You were routed here by the filesystem!</p>
        <p className="text-green-500 font-bold">
          ./app/overview/routing/page.tsx
        </p>
        <p>Produces this page</p>
        <div className="m-2">
          <LinkButton href="/overview/layouts">Next</LinkButton>
        </div>
      </div>
    </div>
  );
}
