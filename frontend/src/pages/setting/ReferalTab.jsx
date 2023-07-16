import React from 'react'
import styles from "./setting.module.css"

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

      <div className={styles.referal_box}>

        <p>Your referral Code</p>
        <input type="text" value={"#134Adl23"}/>


      </div>
      <div>
        <p>Referral Code of  your referrer</p>
        <input type="text" value={"#134Adl23"}/>
      </div>

    </div>
  )
}

export default ReferalTab