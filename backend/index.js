const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const bookRoute =require("./route/book.route.js")
const userRoute =require("./route/user.route.js")
const  cors = require('cors')
const app=express()
dotenv.config();

app.use(cors());
app.use(express.json())
const port=process.env.PORT
const URI=process.env.mongoDBURI

//connect to mongodb
const connectDB = async () => {
try{
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   console.log("connected to mongo db") 
}
catch(err){
    console.log(err.message)
}

}

connectDB()

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.listen(port,()=>{
    console.log(`server listenening at ${port}`)
})