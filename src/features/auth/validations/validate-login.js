import Joi from "joi";
import validate from "../../../utills/validate";

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "email is required",
    "any.required": "email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
