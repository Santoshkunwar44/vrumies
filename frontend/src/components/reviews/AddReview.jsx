import {  useState } from "react"
import moment from "moment"
import ReviewRating from "./ReviewRating"
import styles from "./reviews.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addReviewApi } from "../../utils/apis/review/ReviewApi"
import { setToastifyInfo, startRefresh } from "../../redux/actions/otherAction"

const AddReview = () => {
  const {userData} = useSelector(state=>state.userReducer)
  const {userId} = useParams()
  const dispatch =useDispatch()
  const [reviewData,setReviewData] =useState({
    rating:0,
    text:'',
  })

// console.log(reviewData)

  const handleChange=(name,value)=>{

    
    setReviewData(prev=>({
      ...prev,[name]:value
    }))
  }
  const handleSubmit=async()=>{

    let fieldMissed =  false;
    const postBody = {
      ...reviewData,
      user:userData?._id,
      owner:userId
    }
    for(let key in postBody){
          if(!postBody[key]){
            fieldMissed = true;
            return;
          }
    }
    if(fieldMissed)return;


    try {
        const {data,status} = await addReviewApi(postBody);
        if(status===200){
          setReviewData({
            text:"",
            rating:0,
          })
          dispatch(startRefresh())
               dispatch(setToastifyInfo({
                text: "Review added successfully",
                type: "success"
            }))
        }else throw "something went wrong"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.add_review}>

        <div className={styles.add_review_header}>
            <div className={styles.add_review_user_info_box}>
                <img  src={userData?.profileImg}  referrerPolicy="no-referrer" alt="" />
                <h5 className={styles.add_user_name_text}>{userData?.username}</h5>




            </div>
            <div className={styles.review_time}>
                {moment(new Date()).format("MMMM do YY")}

            </div>
            <div className={styles.add_review_box}>

                  <ReviewRating rating={reviewData.rating} handleChange={handleChange}/>

            </div>

        </div>
        <div className={styles.add_review_bottom}>
        <textarea value={reviewData.text} onChange={(e)=>handleChange("text",e.target.value)}  className={styles.review_input} id="" cols="30" rows="10" ></textarea>
        <button  className={styles.submit_review_button} onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default AddReview