import React from 'react'
import styles from "./setting.module.css"


const SettingSidebar = ({activeTab,setSettingTab}) => {

        console.log(activeTab)

  return (
    <div className={styles.setting_sidebar}>

        <div className={styles.setting_sidebar_header}>

            <h1>Settings</h1>

        </div>
            <div className={styles.setting_sidebar_tab_list}>

                <div  onClick={()=>setSettingTab("referal")} className={`${styles.sidebar_tab_item} ${activeTab==="referal" && styles.active_tab_item} `}    >

                    <img src="/icons/tag.png" alt="codeIcon" />
                    <p>Vrumies Referal Code</p>

                </div>

    <div onClick={()=>setSettingTab("blockUser")}  className={`${styles.sidebar_tab_item} ${activeTab==="blockUser" && styles.active_tab_item} `}    >

                    <img src="/icons/person.png" alt="userIcon" />
                    <p>Blocked Users</p>

                </div>

            </div>

    </div>
  )
}

export default SettingSidebar