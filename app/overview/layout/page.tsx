import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-bold">
          Layouts allow you to have base wrapper components for routes and their
          nested routes
        </p>
        <div className="m-2">
          <LinkButton href="/overview/layout/nested">
            Go to nested route
          </LinkButton>
        </div>
      </div>
    </>
  );
}
