import Joi from 'joi';


const schema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});


export {schema};

export default function validate(obj) {
  Joi.assert(obj, schema);
}
