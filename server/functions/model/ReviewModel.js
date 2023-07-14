const mongoose  = require("mongoose")

const ReviewSchema=mongoose.Schema({
        text:{
            type:String,
            max:[130,"130 maximum character limit exceeded"]
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        rating:{
            type:Number,
            min:[0,'rating cannot be less thatn 0 '],
            max:[10,'Rating cannot be more thatn 10 s ']
        }

},{timestamps:true})



module.exports = mongoose.model("Review",ReviewSchema)
