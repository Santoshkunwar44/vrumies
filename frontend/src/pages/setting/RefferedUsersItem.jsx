// import React from 'react'
import styles from './setting.module.css'


const RefferedUsersItem = ({user}) => {
  return (
    <div className={styles.reffered_user_item}>
            <div className={styles.referred_user_info}>
                <img className={styles.referred_user_img} src={user?.profileImg}
                 referrerPolicy='no-referrer' alt="referredUser" />
                <p>{user?.username}</p>
            </div>
            <p className={styles.referred_time}>27 March,2022</p>
    </div>
  )
}

export default RefferedUsersItem