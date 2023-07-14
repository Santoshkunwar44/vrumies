import ReviewRating from "./ReviewRating"
import styles from "./reviews.module.css"

const AddReview = () => {
  return (
    <div className={styles.add_review}>

        <div className={styles.add_review_header}>
            <div className={styles.add_review_user_info_box}>
                <img  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h5 className={styles.add_user_name_text}>Santosh kunwar</h5>




            </div>
            <div className={styles.review_time}>
                May 27 ,  2022 

            </div>
            <div className={styles.add_review_box}>

                  <ReviewRating/>

            </div>

        </div>
        <div className={styles.add_review_bottom}>
        <textarea   className={styles.review_input} id="" cols="30" rows="10" ></textarea>
        <button  className={styles.submit_review_button}>Submit</button>
        </div>
    </div>
  )
}

export default AddReview