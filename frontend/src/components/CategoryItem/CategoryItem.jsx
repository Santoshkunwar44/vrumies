import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./category.module.css"


const CatItem = ({ catItem, currentFocus }) => {

  const navigate = useNavigate()



  const handleNavigate=()=>{
    if(catItem.type==="content"){
      navigate("/content",{
        state:{
          tab:catItem.name
        }
      })
    }else{
      navigate(`/category/${catItem?._id}`)
    }
  }

  return (

    <> <div className={`${currentFocus ? styles.currentLink : ""} ${styles.catItemLink}`} onClick={handleNavigate}>
      <div className={`${styles.categoryItem} ${currentFocus ? styles.activeItem : ""}`}>
        <div className={`${styles.catItemContent}`}>
          <img className={styles.catMainImg} src={catItem?.image} alt="events" />
          <p style={{ fontSize: "10px" }}>  {catItem?.name} </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CatItem