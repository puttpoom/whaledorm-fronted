import Joi from "joi";
import validate from "../../../utills/validate";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "first name is required" }), //*for customize message string.empty is error.detail.type
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "last name is required" }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "alternatives.match": "invalid format Email or Mobile number",
  }), //top level domain

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain alphabet only",
    }),
  //minimun 6
  //   confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
  //     "any.only": "password and confirm-password did not match",
  //     "string.empty": "confirm password is required",
  //   }), //valid only possible value
});

const validateRegister = (input) => validate(registerSchema)(input); //! **** stars
export default validateRegister;
