import React from 'react'
import styles from "./setting.module.css"
import RefferedUsersItem from './RefferedUsersItem'

const ReferalTab = () => {
  return (
    <div className={styles.referal_tab}>

      <div className={styles.referal_header}>

          <h1>Vrumies Referal Code</h1>
          <div className={styles.header_bottom}>
            <p>Vrumies  Referral Code</p>
            <div className={styles.header_horizontal_line}>
            </div>

          </div>

      </div>
    <div className={styles.referal_action_box}>

      <div className={styles.referal_box}>

        <p className={styles.referal_topic_text}>Your referral Code</p>
        <input type="text" value={"#134Adl23"}/>


      </div>
      <div className={styles.referal_box}>
        <p className={styles.referal_topic_text}>Referral Code of  your referrer</p>
        <input type="text" value={"#134Adl23"}/>
      </div>
    </div>
<div className={styles.referred_users_box}>
    
    <div className={styles.reffered_users_header}>


      <h5>List of users referred</h5>
      <h5>creation Date</h5>

    </div>
    <div className={styles.referred_users_list}>

      <RefferedUsersItem/>
      <RefferedUsersItem/>
          <RefferedUsersItem/>
      <RefferedUsersItem/>
            <RefferedUsersItem/>
      <RefferedUsersItem/>

    </div>

</div>
    </div>
  )
}

export default ReferalTab