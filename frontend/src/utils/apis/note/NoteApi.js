import instance from "../../axios/axios";

export const getNote = (userId) => instance.get(`/note?userId=${userId}`)
export const addNoteApi = (data) => instance.post(`/note`,data)
export const updateNoteItemApi = (noteItemId, text) => {
    return instance.put(`/note/noteItem?noteItemId=${noteItemId}`, { text })
}
export const addNoteItemApi = (noteId, data) => instance.post(`/note/newNoteItem?noteId=${noteId}`,data)
export const deleteNoteItemApi = (userId, noteText) => instance.post(`/note/delete_note_text?userId=${userId}`, {
    note: noteText
})

