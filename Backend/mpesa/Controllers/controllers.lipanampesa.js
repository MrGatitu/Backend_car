const axios = require( "axios")
require('dotenv').config()
const getTimestamp1 = require ("../Utils/utils.timestamp.js")
const  ngrok = require( 'ngrok')

// @desc initiate stk push // @method POST // @route /stkPush // @access public 
 const initiateSTKPush = async(req, res) =>
 {  
 try{
const {amount, phone} = req.body 

const auth = `Bearer ${req.safaricom_access_token}`

const timestamp = getTimestamp1.getTimestamp()

//shortcode + passkey + timestamp 
const password = new Buffer.from(process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp).toString('base64')

// create callback url 
let {data}=await axios.post("sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
{ 
  "BusinessShortCode": process.env.BUSINESS_SHORT_CODE, 
  "Password": password, 
  "Timestamp": timestamp,
  "TransactionType": "CustomerPayBillOnline",
  "Amount": amount,
  "PartyA": phone, 
  "PartyB": process.env.BUSINESS_SHORT_CODE, 
  "PhoneNumber": phone,
  "CallBackURL": "https://b4f9-41-72-200-10.ngrok.io", 
  "AccountReference": "Car-rental business", 
  "TransactionDesc": "Pay online",

 },{
     headers:{
        "Authorization":auth
    }
 }
, function (e, res) {
     if (e)
         { console.error(e)
             res.status(503).send({ message:"Error with the stk push", error : e }) }
              else {
                 res.status(200).send({message:data})
                } 
            }
)
        }catch (e)
              { console.error("Error while trying to create LipaNaMpesa details",e)
              res.status(503).send({ message:"Something went wrong while trying to create LipaNaMpesa details. Contact admin", error: e }) 
            }
         }


    const stkPushCallback = async(req, res) => {
            try{
        //callback details
        
                const {
                    MerchantRequestID,
                    CheckoutRequestID,
                    ResultCode,
                    ResultDesc,
                    CallbackMetadata
                         }   = req.body.Body.stkCallback
        
            //     get the meta data from the meta
                const meta = Object.values(await CallbackMetadata.Item)
                const PhoneNumber = meta.find(o => o.Name === 'PhoneNumber').Value.toString()
                const Amount = meta.find(o => o.Name === 'Amount').Value.toString()
                const MpesaReceiptNumber = meta.find(o => o.Name === 'MpesaReceiptNumber').Value.toString()
                const TransactionDate = meta.find(o => o.Name === 'TransactionDate').Value.toString()
        
                // do something with the data
                console.log("-".repeat(20)," OUTPUT IN THE CALLBACK ", "-".repeat(20))
                console.log(`
                
                    MerchantRequestID : ${MerchantRequestID},
                    CheckoutRequestID: ${CheckoutRequestID},
                    ResultCode: ${ResultCode},
                    ResultDesc: ${ResultDesc},
                    PhoneNumber : ${PhoneNumber},
                    Amount: ${Amount}, 
                    MpesaReceiptNumber: ${MpesaReceiptNumber},
                    TransactionDate : ${TransactionDate}
                `)
        
                res.json(true)
        
            }catch (e) {
                console.error("Error while trying to update LipaNaMpesa details from the callback",e)
                res.status(503).send({
                    message:"Something went wrong with the callback",
                    error : e.message
                })
            }
        }

     const confirmPayment = async(req, res) => {
            try{
        
        
                const url = "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query"
                const auth = "Bearer " + req.safaricom_access_token
        
                const timestamp = getTimestamp1.getTimestamp()
                //shortcode + passkey + timestamp
                const password = new Buffer.from(process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp).toString('base64')
        
        
                request(
                    {
                        url: url,
                        method: "POST",
                        headers: {
                            "Authorization": auth
                        },
                        json: {
                            "BusinessShortCode":process.env.BUSINESS_SHORT_CODE,
                            "Password": password,
                            "Timestamp": timestamp,
                            "CheckoutRequestID": req.params.CheckoutRequestID,
        
                        }
                    },
                    function (error, response, body) {
                        if (error) {
                            console.log(error)
                            res.status(503).send({
                                message:"Something went wrong while trying to create LipaNaMpesa details. Contact admin",
                                error : error
                            })
                        } else {
                            res.status(200).json(body)
                        }
                    }
                )
            }catch (e) {
                console.error("Error while trying to create LipaNaMpesa details",e)
                res.status(503).send({
                    message:"Something went wrong while trying to create LipaNaMpesa details. Contact admin",
                    error : e
                })
            }
        }

        exports.initiateSTKPush=initiateSTKPush;
        exports.stkPushCallback=stkPushCallback;
        exports.confirmPayment=confirmPayment;