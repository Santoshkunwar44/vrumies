import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import ReviewItem from './ReviewItem'
import styles from "./reviews.module.css"
import { getReviewApi } from '../../utils/apis/review/ReviewApi'
import { useSelector } from 'react-redux'
// import 

const ReviewListContainer = () => {

    const {userId} =useParams()
    const [userReviews,setUserReview] = useState([])
    const {refresh} = useSelector(state=>state.otherReducer)

  

      


  useEffect(()=>{
    if(!userId)return;
    fetchReviewsOfUser()
  },[userId,refresh])
  console.log(userId)


  const fetchReviewsOfUser=async()=>{


    try {
     const {data} = await getReviewApi(userId)
      setUserReview(data.message)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className={styles.review_item_list}>

        {
                userReviews.map(review=><ReviewItem key={review?._id} review={review}/>)

        }
     


    </div>
  )
}

export default ReviewListContainer