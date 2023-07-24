import React from 'react'
import styles from "./setting.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { unblockUserApi } from '../../utils/apis/user/userApi'
import { startRefresh } from '../../redux/actions/otherAction'



const BlockedUserItem = ({data}) => {
          const { userData } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()


    const handleUnblock=async()=>{
        try {
            const payloadData ={
                user:userData?._id,
                nextUser:data?.user?._id,
            }
          const {status} = await  unblockUserApi(payloadData)
          if(status ===200){
            dispatch(startRefresh())
          }
        } catch (error) {
                console.log(error)   
        }
    }

  return (
    <div className={styles.blockedUserItem}>


        <img referrerPolicy="no-referrer" className={styles.blocked_user_img} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

        <div className={styles.block_right_content}>


            <div className={styles.right_content_top}>

                <h5 className={styles.blocked_user_name}>{data?.user?.username }</h5>
                <p className={styles.why_block_text}>Why did  you block this user ?</p>


            </div>
            <div className={styles.right_content_bottom}>

                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className={styles.unblock_box}>
                    <p>Unblock user ?</p>
                    <button onClick={handleUnblock}>Yes , unblock </button>
                </div>

            </div>

        </div>



    </div>
  )
}

export default BlockedUserItem