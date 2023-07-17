// import React from 'react'
import styles from './setting.module.css'


const RefferedUsersItem = () => {
  return (
    <div className={styles.reffered_user_item}>
            <div className={styles.referred_user_info}>
                <img className={styles.referred_user_img} src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="referredUser" />
                <p>Spartan Leonidas</p>
            </div>
            <p className={styles.referred_time}>27 March,2022</p>
    </div>
  )
}

export default RefferedUsersItem