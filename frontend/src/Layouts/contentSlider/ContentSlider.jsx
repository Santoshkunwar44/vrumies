
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentCard from "../Content/ContentCard/ContentCard";
import "./ContentSlider.css"
import NotFound from "../../components/notFound/NotFound";
const ContentSlider = ({ data ,img,type}) => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        className: "slider_items",



    };
    return (
        <>
            <Slider {...settings}>
                {
                data?.length ?   
                 data?.map((item) => <ContentCard key={item?._id} content={item} />) :
                 <NotFound img={img} text={"Not found"} type={type}/>
                }
            </Slider>
        </>
    )
}

export default ContentSlider