import { formatApiResponseGet } from "../../util/api";

export async function onRequestGet(context) {
  // retrieve west-est coordinate
  const resp = await context.env.DB.prepare("SELECT * FROM coordinate ORDER BY lng ASC LIMIT 1").all();

  return formatApiResponseGet(resp.results);
}
