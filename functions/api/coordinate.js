export async function onRequestPost(context) {
  const body = await context.request.json();

  // TODO: Insert into database
  return Response.json({
    status: 200,
    message: "OK",
  });
};
