import React, { useEffect, useState } from 'react'
import styles from "./setting.module.css"
import RefferedUsersItem from './RefferedUsersItem'
import { useSelector } from 'react-redux'
import {HiClipboardDocumentCheck} from "react-icons/hi2"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {IoSendSharp} from "react-icons/io5"
import { AddReferrerCodeApi, getMyReferUsersApi } from '../../utils/apis/user/userApi'
const ReferalTab = () => {


      const [nextReferrer,setNextReferrer] = useState("")
      const { userData } = useSelector(state => state.userReducer);
      const [referUsers,setReferUsers] = useState([])

    useEffect(()=>{
      if(!userData)return;
    if(userData.referredBy){
      setNextReferrer(userData.referredBy);
    }
    fetchMyReferalUsers()
    },[userData])

    const fetchMyReferalUsers=async()=>{
      if(userData && userData?.referralCode ){

        try {
        const {data,status} = await  getMyReferUsersApi(userData?.referralCode);
        if(status ===200){
          setReferUsers(data.message)
        }

        } catch (error) {
            console.log(error)
        }
      }
    }
    const handleSetReferrerCode=async()=>{

      if(!nextReferrer)return;
      try {
        const payload = {
          userId:userData?._id,
          code:nextReferrer,
        }
        const {data,status} = await AddReferrerCodeApi(payload)
        console.log(data);

      } catch (error) {
        console.log(error)
      }
    }

      const handleCopyToClipbaord=()=>{

      }
      // 125543b698900fa63a33
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
          <div className={styles.referal_code_clipboard_box}>
            <input disabled type="text" value={userData?.referralCode}/>
                 <CopyToClipboard text={userData?.referralCode}
          onCopy={handleCopyToClipbaord}>
      <HiClipboardDocumentCheck/>
          </CopyToClipboard>
            </div>
      </div>
      <div className={styles.referal_box}>
        <p className={styles.referal_topic_text}>Referral Code of  your referrer</p>
      <div className={styles.referal_code_clipboard_box}> 
         <input type="text"  onChange={(e)=>setNextReferrer(e.target.value)}  disabled={userData?.referredBy} value={nextReferrer} placeholder='paste referrer code here'/>
        {
          !userData?.referredBy  &&  <IoSendSharp onClick={handleSetReferrerCode}/>
        }
         {/* <HiClipboardDocumentCheck/> */}
        </div> 
      </div>
    </div>
<div className={styles.referred_users_box}>
    
    <div className={styles.reffered_users_header}>


      <h5>List of users referred</h5>
      <h5>creation Date</h5>

    </div>
    <div className={styles.referred_users_list}>
        {
          referUsers?.map(user=><RefferedUsersItem user={user} key={user?._id}/>)
        }
      {/* <RefferedUsersItem/> */}


    </div>

</div>
    </div>
  )
}

export default ReferalTab