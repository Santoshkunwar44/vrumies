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
            type:Number
        }

},{timestamps:true})



module.exports = mongoose.model("Review",ReviewSchema)
