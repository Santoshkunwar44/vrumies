import { useState } from "react"
import styles from "./setting.module.css"
import SettingSidebar from "./SettingSidebar"
import ReferalTab from "./ReferalTab"
import BlockUsers from "./BlockUsers"
import Navbar from "../../components/Navbar/Navbar"

const Setting = () => {

    const [setting_tab,setSettingTab]=useState("referal")

    const settingTabMapping={
        referal:<ReferalTab setSettingTab={setSettingTab} />,
        blockUser:<BlockUsers setSettingTab={setSettingTab} />
    }
  return (
    <>
      <Navbar/>
    <div className={styles.setting}>
        <SettingSidebar setSettingTab={setSettingTab} activeTab={setting_tab}/>
        <div className={styles.setting_content}>

        </div>
        {settingTabMapping[setting_tab]}
    </div>
    </>
  )
}

export default Setting