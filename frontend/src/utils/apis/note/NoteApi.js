import instance from "../../axios/axios";

export const getNote = (userId) => instance.get(`/note?userId=${userId}`)
export const addNoteApi = (data) => instance.post(`/note`,data)
export const updateNoteItemApi = (noteItemId, text) => {
    return instance.put(`/note/noteItem?noteItemId=${noteItemId}`, { text })
}
export const addNoteItemApi = (noteId, text) => instance.post(`/note/newNoteItem?noteId=${noteId}`, {
    text
})
export const deleteNoteItemApi = (userId, noteText) => instance.post(`/note/delete_note_text?userId=${userId}`, {
    note: noteText
})

