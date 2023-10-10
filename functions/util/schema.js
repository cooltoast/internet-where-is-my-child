import Joi from "joi";

const schema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

function validate(obj) {
  Joi.assert(obj, schema);
}

export { schema, validate };
