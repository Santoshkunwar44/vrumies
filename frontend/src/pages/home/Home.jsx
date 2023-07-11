import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BannerContainer from "../../components/HomeBanner/BannerContainer"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./home.module.css"
import { CalenderLayout } from "../../Layouts/Calender/Calender";
import 'react-calendar/dist/Calendar.css';
import ContentSlider from "../../components/SliderContent/ContentSlider"
import PostSlider from "../../components/SliderContent/PostSlider"

const Home = () => {

    const [categorySideWidth, setCategorySideWidth] = useState()
    const catBoxRef = useRef()

    useEffect(() => {
        if (!catBoxRef?.current) return;
        setCategorySideWidth(catBoxRef.current?.getBoundingClientRect()?.width)
        window.addEventListener("resize", () => {
            setCategorySideWidth(catBoxRef.current?.getBoundingClientRect()?.width)
        })
        return () => {
            window.removeEventListener("resize", null)
        }
    }, [])


    return (
        <>
            <Navbar />
            <div
                className={styles.home}>
                <div className={styles.homeWrapper}>
                    <div ref={catBoxRef} className={styles.homeLeft}>
                        <BannerContainer />
                    <PostSlider fullWidth={categorySideWidth}/>
                    <ContentSlider type="content" fullWidth={categorySideWidth}/>
                    </div>

                    <CalenderLayout />
                </div>
            </div>
        </>
    )
}

export default Home