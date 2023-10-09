export async function onRequestGet(context) {
  const resp = await context.env.DB.prepare("SELECT * FROM coordinate").all();
  const data = resp.results;

  return Response.json({
    status: 200,
    length: data.length,
    data,
  });
};
