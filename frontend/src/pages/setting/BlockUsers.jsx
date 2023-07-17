import React from 'react'
import styles from "./setting.module.css"
import BlockedUserItem from './BlockedUserItem'


const BlockUsers = () => {
  return (
    <div>

      <h1>Block users</h1>
      <div className={styles.block_input}>

        <input type="text" name="" id="" />
        <button>Block user</button>

      </div>

      <div className={styles.blocked_users_list}>



          <BlockedUserItem/>
               <BlockedUserItem/>
                    <BlockedUserItem/>
                         <BlockedUserItem/>
                              <BlockedUserItem/>



      </div>


    </div>
  )
}

export default BlockUsers