import React from 'react'
import styles from "./setting.module.css"

const SearchedUserItem = ({user,handleSelect}) => {
  return (
    <div onClick={()=>handleSelect(user)} className={styles.searched_user_item}>

        <img src={user.profileImg} alt={`${user.username}'s profile img`} />
        <p>{user.username}</p>

    </div>
  )
}

export default SearchedUserItem