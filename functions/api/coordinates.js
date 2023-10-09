export async function onRequestGet(context) {
  // retrieve in east-to-west order
  const resp = await context.env.DB.prepare("SELECT * FROM coordinate ORDER BY lng DESC").all();
  const data = resp.results;

  return Response.json({
    status: 200,
    length: data.length,
    data,
  });
};
