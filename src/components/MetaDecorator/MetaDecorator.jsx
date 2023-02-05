import React from 'react'
import { Helmet } from "react-helmet"
const MetaDecorator = ({ image, title, description }) => {
    return (
        <>
            <Helmet>
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                {/* <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={"this is the title hahah"} />
                <meta property="og:description" content={"how are  you i am fine "} />
                <meta property="og:image" content={image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location + window.location.search} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description
                } />
                <meta property="twitter:image" content={image}></meta> */}
            </Helmet>
        </>
    )
}

export default MetaDecorator