import {   addNoteItemApi, deleteNoteItemApi, getNote } from "../../utils/apis/note/NoteApi";
import moment from "moment";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";
import { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";






export const TodoList = ({date}) => {



    const { userData } = useSelector(state => state.userReducer)
    const [todoListData, setTodoListData] = useState(null);
    const [updateTodoData, setUpdateTodoData] = useState({
        title: "",
    })
    const [editMode, setEditMode] = useState(false)
    const [inputTodo, setInputTodo] = useState("")
    const titleRef = useRef()


    useEffect(() => {

 
        if (!userData?._id) return;
        fetchTodos()
    }, [userData?._id]);

    useEffect(() => {
        if (editMode) {
            titleRef.current.focus()
        }
    }, [editMode]);


    const fetchTodos = async () => {
        try {
            const res = await getNote(userData?._id)
            if (res.status === 200) {
                
                setTodoListData(res.data.message ??  [])
                setInputTodo("")

            } else {
                throw Error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleDeleteNoteItem = async (noteText) => {
        if (!noteText) return;
        try {
            const res = await deleteNoteItemApi(userData?._id, noteText)
            if (res.status === 200) {
                fetchTodos()
            } else {
                throw Error(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }



    }


    const handleKeyDown = (e) => {

        if (e.key === "Enter" && inputTodo.length > 3) {
            handleAddNewNote();
        } else {
            console.log("title must be of atleast 3 characters")
        }





    }

    const handleAddNewNote=async()=>{

        const noteId = todoListData?._id;
        if(!date){
            return alert("select date please");
        }


        try {
            const {status,data} =    await addNoteItemApi(noteId,inputTodo)
            if(status===200){

                setTodoListData(data.message)
                setInputTodo("")

            }
        } catch (error) {
            console.log(error)
        }


    };



   
    return (
        <div className={styles.todo_list_container}>
            {/* <button className={`${styles.edit_btn} `} onClick={editMode ? handleCloseEditMode : handleOpenEditMode}>
                <img src="/icons/add_white.png" alt="addIcon" />
                {
                    editMode ? <p>SAVE</p> : <p>EDIT</p>
                }
            </button> */}
            <div className={styles.todo_content}>

                <div className={styles.todo_header}>
                    <h4 
                    className={`${styles.today_text} ${editMode ? styles.focus_title : ""}`} contentEditable={editMode} ref={titleRef}
                    >      {todoListData?.title ? todoListData.title : moment(Date.now()).format("LL")}</h4>
                    <h2 className={styles.things_todo_text}>THINGS TO DO </h2>
                </div>
                <div className={styles.todo_body}>
                    <p className={styles.note_info_text}>double click to edit </p>
                    <input
                    className={styles.addNoteInput}
                    type="text"
                    onKeyDown={handleKeyDown} 
                    onChange={(e) => setInputTodo(e.target.value)} 
                    value={inputTodo}
                     placeholder="Add note "
                    />
                    <ul className={styles.todo_list}>
                        {
                            !todoListData ? <><p className={styles.todos_initial_text}>loading</p></> : todoListData?.note?.length > 0 ? todoListData?.note?.map((item,index) => <TodoItem key={index} item={item} noteId={todoListData?._id} setTodoListData={setTodoListData}/>) : <p className={styles.todos_initial_text}>Add your todos here</p>
                        }

                    </ul>
                </div>
            </div>

        </div>
    )
}

{/* {
    editMode ? <AiOutlineClose onClick={() => handleDeleteNoteItem(item)} className={styles.remove_note_icon} /> : ""
} */}