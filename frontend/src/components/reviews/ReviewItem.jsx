import React from 'react'
import styles from "./reviews.module.css"
import moment from "moment"



const ReviewItem = ({review}) => {

  return (
    <div className={styles.review_item}>
        <div className={styles.review_item_header}>

            <div className={styles.review_item_user_info}>
                <img referrerPolicy="no-referrer" className={styles.review_user_img} src={review.user?.profileImg} alt="" />
                <h1  className={styles.review_user_name}>{review?.user?.username}</h1>

            </div>
            <div className={styles.review_time}>

               { 
               moment(review.createdAt).format("MMMM Do YY")  }

            </div>

            <div className={styles.review_item_rating_box}>
                <p className={styles.primary_key_text}> Rating : </p>
                <p>{review.rating}/10</p>
            </div>
        </div>
        <div className={styles.review_text}>
        {review.text}
        </div>
    </div>
  )
}

export default ReviewItem