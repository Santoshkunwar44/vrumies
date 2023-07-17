import React, { useState } from 'react'
import styles from "./setting.module.css"
import BlockedUserItem from './BlockedUserItem'
import { blockUserApi, searchUserByKeyword } from '../../utils/apis/user/userApi'
import SearchUser from '../../Layouts/popover/SearchUser'
import SearchedUserItem from './SearchedUserItem'
import { useDispatch, useSelector } from 'react-redux'
import { startRefresh } from '../../redux/actions/otherAction'


const BlockUsers = () => {
      const { userData } = useSelector(state => state.userReducer)
  const [searchUser,setSearchUser] = useState([])
  const [searchInput,setSearchInpupt] = useState("");
  const [selectedUser,setSelectedUser] =useState()
  const dispatch  = useDispatch()

  console.log(searchInput)
 const  handleSearch =async(e)=>{
    setSearchInpupt(e.target.value)
    try {
      const {data,status} = await  searchUserByKeyword(e.target.value)
      if(status!==200)return;
      setSearchUser(data.message)



    } catch (error) {
  console.log(error)      
    }
  }
  const handleBlock =async()=>{
    if(!selectedUser)return;

    const blockPayload = {
      user:userData?._id,
      nextUser:selectedUser?._id,

    }
    try {

        const {data,status}= await blockUserApi(blockPayload)
        if(status ===200){ 
          dispatch(startRefresh())
        }

    } catch (error) {
        console.log(error)
    }

  }

  // const fetch

  // console.log("watch",searchUser)
  return (
    <div className={styles.block_tab}>

      <h1>Block users</h1>
          {
  selectedUser &&             <div className={styles.selectedUser}>
              <img src={selectedUser?.profileImg} alt={'profileImg'}  />
              <p>{selectedUser?.username}</p>
          </div>
}
      <div className={styles.block_input} style={{position:"relative"}}>
        <div className={styles.block_user_input_section}>
        <input onChange={handleSearch} placeholder='Insert username to block...' type="text" name="" id="" />
        {

       searchInput.length> 0 &&   <div className={styles.search_user_list}>

          {
            searchUser.length >0 ?  searchUser.map(user=> 
              <SearchedUserItem handleSelect={setSelectedUser} user={user} key={user._id}/>
              ):<p>No user</p>
          }

        </div>
            }
        </div>
        <button onClick={handleBlock}>Block user</button>
        {/* <SearchUser usersArr={searchUser} isOpen={searchInput.length > 0 }/> */}
        

      </div>

      <div className={styles.blocked_users_list}>


{
  userData?.blockedUsers?.map(data=><BlockedUserItem key={data.user?._id} data={data}/>)
}
          
          {/* <BlockedUserItem/> */}
           



      </div>


    </div>
  )
}

export default BlockUsers