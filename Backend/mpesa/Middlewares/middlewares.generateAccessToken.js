
const axios= require("axios");
require ( 'dotenv').config();

 const accessToken =async (req, res, next)=> {
    try{

        const auth = new Buffer.from(`${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`).toString('base64');

        let {data}=await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            {
    
                headers: {
                    "Authorization": `Basic ${auth}`
                },
            },
            (error, res) => {
                if (error) {
                    res.status(401).send({
                        "message": 'Something went wrong when trying to process your payment',
                        "error":error.message
                        
                    })
                }
                else {
                    req.safaricom_access_token = data["access_token"]
                    next()
                }
            }
        )
    }catch (error) {

        console.error("Access token error ", error)
        res.status(401).send({
            "message": 'Something went wrong when trying to process your payment',
            "error":error.message
        })
    }

}
 exports.accessToken=accessToken