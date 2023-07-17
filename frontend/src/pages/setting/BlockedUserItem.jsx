import React from 'react'
import styles from "./setting.module.css"



const BlockedUserItem = () => {
  return (
    <div className={styles.blockedUserItem}>


        <img className={styles.blocked_user_img} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

        <div className={styles.block_right_content}>


            <div className={styles.right_content_top}>

                <h5 className={styles.blocked_user_name}>Jessica Collayard</h5>
                <p className={styles.why_block_text}>Why did  you block this user ?</p>


            </div>
            <div className={styles.right_content_bottom}>

                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className={styles.unblock_box}>
                    <p>Unblock user ?</p>
                    <button>Yes , unblock </button>
                </div>

            </div>

        </div>



    </div>
  )
}

export default BlockedUserItem