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
  distance: Joi.string().required().messages({
    "any.required": "โปรดกรอกระยะทาง",
    "string.empty": "โปรดกรอกระยะทาง",
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
  isParking: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีที่จอดรถ",
  }),
  isKeyCard: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีระบบ",
  }),
  isLift: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีลิฟท์",
  }),
  isInternet: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีอินเทอร์เน็ต",
  }),
  isLundary: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีอินเทอร์เน็ต",
  }),
  isWaterDispenser: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีเครื่องผสมน้ำ",
  }),
  isMart: Joi.boolean().required().messages({
    "any.required": "โปรดเลือกการมีร้านสะดวกซื้อ",
  }),
});

// {
//                 "isParking": false,
//                 "isKeyCard": true,
//                 "isLift": true,
//                 "isInternet": true,
//                 "isCCTV": true,
//                 "isLundary": true,
//                 "isWaterDispenser": true,
//                 "isMart": false
//     }
