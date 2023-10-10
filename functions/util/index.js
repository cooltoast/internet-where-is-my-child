function formatApiResponse(data) {
  return Response.json({
    status: 200,
    length: data.length,
    data,
  });
}

export { formatApiResponse };
