const express= require("express")
const cors= require("cors")
const lipaNaMpesaRoutes= require( "./Routes/routes.lipanampesa.js")

const port=process.env.PORT||3000;
const app=express()
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use("/api",lipaNaMpesaRoutes)

app.get('/',(req,res)=>{
    res.send("<h1>This is Lorna<h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})