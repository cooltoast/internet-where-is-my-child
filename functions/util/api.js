function formatApiResponseGet(data) {
  return Response.json({
    status: 200,
    length: data.length,
    data,
  });
}

function formatApiResponsePost() {
  return Response.json({
    status: 200,
    message: "OK",
  });
}

function formatApiResponse400(error) {
  return new Response(error, {
    status: 400,
  });
}

export { formatApiResponseGet, formatApiResponsePost, formatApiResponse400 };
