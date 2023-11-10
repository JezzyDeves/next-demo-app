import LinkButton from "@/components/LinkButton";

export default function Page() {
  return (
    <>
      <p className="font-bold">Layout applies to this nested route</p>
      <LinkButton href="/overview/async">Next</LinkButton>
    </>
  );
}
