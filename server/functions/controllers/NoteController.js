const NoteItemModel = require("../model/NoteItemModel");
const NoteModel = require("../model/NoteModel");

class NoteController {
    async addNewNote(req, res) {
        const { owner } = req.body;



        try {
            if(!owner){
                throw "owner is required"
            }
            const usersNote = await NoteModel.findOne({ owner })
            if (usersNote) {
                throw Error("Note already exists")
            }
            const savedNote = await NoteModel.create(req.body)
            res.status(200).json({ message: savedNote, success: true })
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }
    async getNote(req, res) {
        const { userId: owner } = req.query


        // api/note?userId=34343

        try {
            const UsersNote = await NoteModel.findOne({
                owner
            }).populate("note")
            res.status(200).json({ message: UsersNote, success: true })
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }
    async updateNote(req, res) {

        const { userId: owner } = req.query


        // api/note?userId=34343
        try {
            if (!owner) {
                throw Error("Fill all the required fields")
            }
            const UsersNote = await NoteModel.findOneAndUpdate({
                owner
            }, {
                $set: req.body
            }, {
                new: true,
                returnOriginal: false
            })
            res.status(200).json({ message: UsersNote, success: true })
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }
    async createNoteItem(req,res,next){
        try {
            const savedNoteItem = await NoteItemModel.create(req.body)  
            req.note = savedNoteItem._id?.toString();
            console.log(savedNoteItem._id?.toString())
            next();
        } catch (error) {

            return res.status(500).json({message:error.message,success:false})   

        }
    }
    async deleteNewNoteItem(req, res) {

        const { userId: owner } = req.query
        const { note } = req.body
        console.log(req.body)


        // api/note?userId=34343
        try {
            if (!owner || !note) {
                throw Error("Fill all the required fields")
            }
            console.log("hello ", note)
            const UsersNote = await NoteModel.findOneAndUpdate(
                {
                    owner
                },
                {
                    $pull: { note: note }
                },
                {
                    new: true,
                    returnOriginal: false
                })

            if (UsersNote) {

                res.status(200).json({ message: UsersNote, success: true })
            } else {
                throw Error("Something went wrong!!")
            }
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }
    async pushNewNote(req, res) {
console.log("inside",req.note)
        const { noteId } = req.query
        const note = req.note;
        // api/note?userId=34343
        try {
            if (!noteId || !note) {
                throw Error("Fill all the required fields")
            }
            const UsersNote = await NoteModel.findByIdAndUpdate(noteId, {
                $push: { note :note  }
            },
            {
                new:true,
                returnOriginal:false,
                returnDocument:true
            }).populate("note")


                res.status(200).json({ message: UsersNote, success: true })
       
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }
    async updateNoteItem(req,res){
        const {noteItemId }= req.query;

        try {
                 await  NoteItemModel.findByIdAndUpdate(noteItemId,{
                        $set:req.body
                });

                const updatedNote=  await NoteModel.findOne({note:{$in:[noteItemId]}}).populate("note")
                res.status(200).json({message:updatedNote,success:true})




        } catch (error) {
            res.status(500).json({message:error.message,success:false})            
        }
    }
}
module.exports = new NoteController()