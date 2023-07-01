import { useEffect, useRef, useState } from "react"
import styles from "./TodoList.module.css"
import { updateNoteItemApi } from "../../utils/apis/note/NoteApi";
import {IoIosTimer} from "react-icons/io";


const TodoItem = ({item,noteId ,setTodoListData}) => {

    const [isEditing,setIsEditing] = useState(false)
    const [value ,setValue] =useState(item.text)
    const inputRef = useRef()

    useEffect(()=>{
      if(isEditing){
      inputRef.current.focus()
      }
    },[isEditing])
    const handleDoubleClick=()=>{
      setIsEditing(true)
      console.log(inputRef.current)
      // inputRef.current.focus()
        console.log("double clicked")
        }
      const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // handleSubmit()
  };
  const  handleKeyDown=(e)=>{
    console.log(e.key)
    if(e.key==="Enter"){
      handleSubmit();
    }
  }
  const handleSubmit=async()=>{
    if(value.length <4){
      alert("note character should be more than 3")
      return 

    }
    try {
        const {status,data} = await updateNoteItemApi(item._id,value)
        if(status===200){
          setTodoListData(data.message)
        }
    } catch (error) {
        console.log(error)
    }
  }
  return (

       <div className={styles.todoItem} onDoubleClick={handleDoubleClick}>
        <div className={styles.todoTimeBox}>
          <IoIosTimer/>
          <p>
             12th may 2022 - 25th may 2023
            </p>
        </div>
        <input
          className={` ${styles.itemTextInput} ${ isEditing ? styles.showInput:""}`}
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
        {
          !isEditing  && <div className={styles.todoItemText} ><p>{item?.text}</p></div>

        }
    </div>


  )
}

export default TodoItem