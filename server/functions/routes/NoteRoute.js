const { addNewNote, getNote, updateNote, deleteNewNoteItem, pushNewNote, createNoteItem, updateNoteItem } = require("../controllers/NoteController");

const Router = require("express").Router()

Router.post("/delete_note_text", deleteNewNoteItem)
Router.post("/newNoteItem",createNoteItem, pushNewNote)
Router.post("/", addNewNote)
Router.put("/", updateNote)
Router.put("/noteItem",updateNoteItem)
Router.get("/", getNote)


module.exports = Router;