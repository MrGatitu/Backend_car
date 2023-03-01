const express =require( 'express')
const router = express.Router()
const initiateSTKPush1 =require("../mpesa/Controllers/controllers.lipanampesa.js")
const stkPushCallback1=require("../mpesa/Controllers/controllers.lipanampesa.js")
const confirmPayment1=require("../mpesa/Controllers/controllers.lipanampesa.js")
const accessToken1= require("../mpesa/Middlewares/middlewares.generateAccessToken.js");

router.route('/stkPush').post(accessToken1.accessToken,initiateSTKPush1.initiateSTKPush)
router.route('/stkPushCallback/:Order_ID').post(stkPushCallback1.stkPushCallback)
router.route('/confirmPayment/:CheckoutRequestID').post(accessToken1.accessToken,confirmPayment1.confirmPayment)

module.exports= router
