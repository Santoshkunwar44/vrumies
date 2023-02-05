import React from "react";
import "./imageslider.css"
import Slider from "react-slick";

export const PostImgSlider = ({ items, postImgwidth }) => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        className: "_postImg_slider_items",

        responsive: [
            { breakpoint: 350, settings: { slidesToShow: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 2 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 2000, settings: { slidesToShow: 4 } },

        ]

    }



    return (
        <>
            <div className="imageBox" style={{ width: `${postImgwidth - 50}px` }}>
                <Slider {...sliderSettings}>
                    {
                        items?.map((photo) => {
                            return <div key={photo} className="postImgItem">
                                <img src={photo} alt="postImg" />
                            </div>
                        })
                    }




                </Slider>
            </div>
        </>
    )
}
const SamplePrevArrow = ({ onClick }) => {

    return (
        <>

            <div className={"catArrows leftArrow"}>

                <img src="/images/profile/leftArrow.png" alt="leftArrow" onClick={onClick} />

            </div>

        </>
    )

}

const SampleNextArrow = ({ onClick }) => {


    return (
        <>
            <div className={"catArrows rightArrow"} >


                <img src="/images/profile/rightArrow.png" alt="rightArrow" onClick={onClick} />
            </div>


        </>
    )

}