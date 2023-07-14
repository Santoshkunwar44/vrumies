import React from 'react'
import styles from "./reviews.module.css"

const ReviewItem = ({review}) => {

  return (
    <div className={styles.review_item}>
        <div className={styles.review_item_header}>

            <div className={styles.review_item_user_info}>
                <img className={styles.review_user_img} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1  className={styles.review_user_name}>MICHAEL DARJUS</h1>

            </div>
            <div className={styles.review_time}>

                MARCH 29 ,2022

            </div>

            <div className={styles.review_item_rating_box}>
                <p className={styles.primary_key_text}> Rating : </p>
                <p>8/10</p>
            </div>
        </div>
        <div className={styles.review_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ad, doloremque corporis est, mollitia modi maiores sapiente culpa commodi amet nisi quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolorum?
        </div>
    </div>
  )
}

export default ReviewItem