import { formatApiResponse } from "../../util";

export async function onRequestGet(context) {
  // retrieve in east-to-west order
  const resp = await context.env.DB.prepare("SELECT * FROM coordinate ORDER BY lng DESC").all();

  return formatApiResponse(resp.results);
}
