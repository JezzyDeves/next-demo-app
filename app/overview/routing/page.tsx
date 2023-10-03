import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-center text-white">
      <div className="flex flex-col">
        <p>You were routed here by the filesystem!</p>
        <p className="font-bold text-green-500">
          ./app/overview/routing/page.tsx
        </p>
        <p>Produces this page</p>
        <div className="m-2">
          <LinkButton href="/overview/layout">Next</LinkButton>
        </div>
      </div>
    </div>
  );
}
