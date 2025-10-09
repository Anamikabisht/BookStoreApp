const mongoose=require('mongoose')

const bookScheme=mongoose.Schema({
   name:String,
   price:Number,
   category:String,
   image:String,
   title:String,
})

const Book= mongoose.model("Book",bookScheme);

module.exports =Book;
