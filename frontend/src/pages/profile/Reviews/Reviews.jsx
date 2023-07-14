import React from 'react'
import styles from "./Reviews.module.css"
import ReviewHeader from '../../../components/reviews/ReviewHeader'
import ReviewListContainer from '../../../components/reviews/ReviewListContainer'
import AddReview from '../../../components/reviews/AddReview'
// import styles from "./Reviews.module.css"

const Reviews = () => {
  return (
    <div className={styles.reviews}>

    <ReviewHeader/>
    <AddReview/>
    <ReviewListContainer/>
    
        
    </div>
  )
}

export default Reviews