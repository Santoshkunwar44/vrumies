import React from 'react'
import { Helmet } from "react-helmet"
const MetaDecorator = ({ image, title, description }) => {
    return (
        <>
            <Helmet>
                <meta name="title" content="buy this flowers" />
                <meta name="description" content="buy this flowrs " />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vrumies2.netlify.app" />
                <meta name='title' property="og:title" content="buy this flowers" />
                <meta name='description' property="og:description" content="buy this flowrs " />
                <meta property="og:image" content="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.15752-9/324926288_3440684446168532_8492699774424784759_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I3ofvt1uLLQAX9x2kfd&_nc_ht=scontent.fbwa1-1.fna&oh=03_AdROj7KAHW2PIt6X0gPsHGvUoPaZJP34siUmAqSQE6NutA&oe=64084FAD" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://vrumies2.netlify.app" />
                <meta property="twitter:title" content="buy this flowers" />
                <meta property="twitter:description" content="buy this flowrs " />
                <meta property="twitter:image" content="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.15752-9/324926288_3440684446168532_8492699774424784759_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I3ofvt1uLLQAX9x2kfd&_nc_ht=scontent.fbwa1-1.fna&oh=03_AdROj7KAHW2PIt6X0gPsHGvUoPaZJP34siUmAqSQE6NutA&oe=64084FAD" />

            </Helmet>
        </>
    )
}


export default MetaDecorator