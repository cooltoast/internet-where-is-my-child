import validate from '../util/schema';


export async function onRequestPost(context) {
  const body = await context.request.json();

  try {
    validate(body);

    const info = await context.env.DB.prepare('INSERT INTO coordinate (lat, lng) VALUES (?1, ?2)')
          .bind(body.lat, body.lng)
          .run();
  } catch (e) {
    return new Response(e, {
      status: 400,
    });
  }

  return Response.json({
    status: 200,
    message: "OK",
  });
};
