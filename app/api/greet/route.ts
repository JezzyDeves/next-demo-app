export async function POST(request: Request) {
  const person: { name: string } = await request.json();

  return Response.json({ message: `Hello ${person.name}` });
}
