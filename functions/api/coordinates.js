import coordinates from './coordinate_data';


export function onRequestGet(context) {
  // TODO: Select from database
  return Response.json({
    status: 200,
    length: coordinates.length,
    data: coordinates,
  });
};
