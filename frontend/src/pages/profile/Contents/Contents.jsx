import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProfileItemList } from '../../../Layouts/profileItemList/ProfileItemList'
import { getAllContentOfUserApi } from '../../../utils/apis/content/contentApi'

const styles={
    contentContainer:{
        display:"flex",
        flexDirection:"column",
        gap:"4rem",
        padding:"2rem"
    }
}

const Contents = () => {

    const { userData } = useSelector((state) => state.userReducer)
    const [contentData, setContentData] = useState(null)
    useEffect(() => {
        if (!userData?._id) return
        fetchAllContentOfUser()
    }, [])
    console.log(contentData)
    const fetchAllContentOfUser = async () => {

        try {
            const res = await getAllContentOfUserApi(userData?._id)
            if (res.status == 200) {
                setContentData(res.data.message)
            } else {
                throw Error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={styles.contentContainer}  >
            <ProfileItemList name={"My Blogs"} type={"blogs"} data={contentData ? contentData.blog : null} img={"/images/blogImg.png"} />
            <ProfileItemList name={"My Vlogs"} type={"vlogs"} data={contentData ? contentData.vlog : null}  img={"/images/vlogCam.png"}/>
            <ProfileItemList name={"My Forums"} type={"forums"} data={contentData ? contentData.forum : null}  img={"/images/forumImg.png"}/>

        </div>
    )
}

export default Contents