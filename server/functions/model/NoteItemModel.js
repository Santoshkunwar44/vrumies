const mongoose = require("mongoose")



const NoteItemSchema= mongoose.Schema({
    text:{
        type:String,
        min:[3,"Note should be more thatn 3 character"]
    }

},{
    timestamps:true
})

module.exports = mongoose.model("NoteItem",NoteItemSchema)
