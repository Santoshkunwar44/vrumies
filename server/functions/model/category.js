const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
     name: String,
    subCategory: [],
    type:String,
    image: String
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Category", categorySchema)
