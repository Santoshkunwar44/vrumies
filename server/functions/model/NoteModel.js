const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        min: [3, "Title be more than 3 characters long"],
    },
    note: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"NoteItem",
        }
    ],
}, {
    timestamps: true
})

module.exports = mongoose.model("Note", NoteSchema)


