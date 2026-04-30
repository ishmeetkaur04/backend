export async function POST(req: Request) {
  const body = await req.json()

  return Response.json({
    message: "Money sent successfully",
    data: body
  })
}