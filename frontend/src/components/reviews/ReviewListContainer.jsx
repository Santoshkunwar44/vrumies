import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import ReviewItem from './ReviewItem'
import styles from "./reviews.module.css"

const ReviewListContainer = () => {

    const {userId} =useParams()
        const [userReviews,setUserReview] = useState([])


  return (
    <div className={styles.review_item_list}>

        {/* {
                userReviews.map(review=><ReviewItem key={review?._id} review={review}/>)

        } */}
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>


    </div>
  )
}

export default ReviewListContainer