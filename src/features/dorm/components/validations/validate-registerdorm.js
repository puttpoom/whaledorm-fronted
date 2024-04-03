import Joi from "joi";

export const registerDormSchema = Joi.object({
  dormName: Joi.string().required().empty("").messages({
    "any.required": "โปรดกรอกชื่อหอพัก",
    "string.empty": "โปรดกรอกชื่อหอพัก",
  }),
  phone: Joi.string().required().messages({
    "any.required": "โปรดกรอกเบอร์โทรศัพท์",
    "string.empty": "โปรดกรอกเบอร์โทรศัพท์",
  }),
  location: Joi.string().required().messages({
    "any.required": "โปรดกรอกที่ตั้ง",
    "string.empty": "โปรดกรอกที่ตั้ง",
  }),
  electricalUnit: Joi.number().required().messages({
    "any.required": "โปรดกรอกจำนวนหน่วยไฟฟ้า",
    "number.base": "โปรดกรอกจำนวนหน่วยไฟฟ้าเป็นตัวเลข",
  }),
  waterUnit: Joi.number().required().messages({
    "any.required": "โปรดกรอกจำนวนหน่วยน้ำ",
    "number.base": "โปรดกรอกจำนวนหน่วยน้ำเป็นตัวเลข",
  }),
});
