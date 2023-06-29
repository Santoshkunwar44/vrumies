import styles from "../../pages/home/home.module.css"
import HomeCategory from "../HomeCategory/HomeCategory"

const PostSlider = ({fullWidth}) => {
  return (
     <div style={{marginBottom:"3rem"}}>
   <HomeCategory fullWidth={fullWidth} title={"Explore Post Categories"} type={"post"} />
                        <div className={styles.home_bottom}>

                            <p className={styles.see_all}>See All</p>


                        </div>
    </div> 
  )
}

export default PostSlider