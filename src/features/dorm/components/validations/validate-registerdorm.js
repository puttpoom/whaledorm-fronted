import Joi from "joi";

/*
{
    "dorm": {
                "dormName": "s9",
                "phone": "0123456789",
                "dormImages": "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "latLong": null,
                "location": "s9 แขวงวงศ์สว่าง เขตบางซื่อ 10800",
                "distance": "2.1",
                "electricalUnit": 4,
                "waterUnit": 10,
                "isVerify": "PEDNING"
    },
    "dormFacilities":{
                "isParking": false,
                "isKeyCard": true,
                "isLift": true,
                "isInternet": true,
                "isCCTV": true,
                "isLundary": true,
                "isWaterDispenser": true,
                "isMart": false
    }
}
*/

export const registerDormSchema = Joi.object({
  dorm: Joi.object({
    dormName: Joi.string().required().messages({
      "string.empty": "กรุณากรอกข้อมูล",
    }),
    phone: Joi.string().required().messages({
      "string.empty": "กรุณากรอกข้อมูล",
    }),
    location: Joi.string().required().messages({
      "string.empty": "กรุณากรอกข้อมูล",
    }),
    electricalUnit: Joi.number().required().messages({
      "number.base": "กรุณากรอกข้อมูล",
    }),
    waterUnit: Joi.number().required().messages({
      "number.base": "กรุณากรอกข้อมูล",
    }),
    // isVerify: Joi.string().valid("PEDNING").required(),
  }),
  // dormFacilities: Joi.object({
  //   isParking: Joi.boolean().required(),
  //   isKeyCard: Joi.boolean().required(),
  //   isLift: Joi.boolean().required(),
  //   isInternet: Joi.boolean().required(),
  //   isCCTV: Joi.boolean().required(),
  //   isLundary: Joi.boolean().required(),
  //   isWaterDispenser: Joi.boolean().required(),
  //   isMart: Joi.boolean().required(),
  // }),
});
