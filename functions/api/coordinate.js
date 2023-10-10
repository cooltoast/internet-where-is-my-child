import { validate } from "../util/schema";
import { formatApiResponsePost, formatApiResponse400 } from "../util/api";

export async function onRequestPost(context) {
  const body = await context.request.json();

  try {
    validate(body);

    await context.env.DB.prepare("INSERT INTO coordinate (lat, lng) VALUES (?1, ?2)").bind(body.lat, body.lng).run();
  } catch (e) {
    return formatApiResponse400(e);
  }

  return formatApiResponsePost();
}
