import React from 'react'
import styles from "./Reviews.module.css"
import ReviewHeader from '../../../components/reviews/ReviewHeader'
import ReviewListContainer from '../../../components/reviews/ReviewListContainer'
import AddReview from '../../../components/reviews/AddReview'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import styles from "./Reviews.module.css"

const Reviews = () => {
  const {userId} = useParams()
  const {userData} = useSelector(state=>state.userReducer)
  return (
    <div className={styles.reviews}>

    <ReviewHeader/>

{ 
userData?._id !== userId &&
    <AddReview/>
}
    <ReviewListContainer/>
    
        
    </div>
  )
}

export default Reviews