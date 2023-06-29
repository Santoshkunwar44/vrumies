import React from 'react'
import styles from "../../pages/home/home.module.css"
import HomeCategory from '../HomeCategory/HomeCategory'

const ContentSlider = ({fullWidth}) => {
  return (
<>
    <div style={{marginBottom:"3rem"}}>
   <HomeCategory fullWidth={fullWidth} title={"Explore Content  Categories"} type={"content"} />
                        <div className={styles.home_bottom}>

                            <p className={styles.see_all}>See All</p>


                        </div>
    </div>
</> 
  )
}

export default ContentSlider