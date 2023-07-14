import React from 'react'
import styles from './reviews.module.css'



const ReviewHeader = () => {
  return (
    <div className={styles.review_header}>
        <div className={styles.review_top_header}>


        <h2 className={styles.heading_text}>My Reviews</h2>
        <div className={styles.horizontal_line}>

        </div>
        </div>
        <div className={styles.bottom_header}>

            <div className={styles.header_overall_rating_box}>
                <p className={styles.primary_key_text}>Average Rating :</p>
                <p>8.36/10</p>
            </div>
            <div className={styles.header_dispute_box}>
                <p className={styles.primary_key_text}>Disputes :</p>
                <p>1</p>

            </div>

        </div>


    </div>
  )
}

export default ReviewHeader