import React from 'react'
import { Helmet } from "react-helmet"
const MetaDecorator = ({ image, title, description }) => {
    return (
        <>
            <Helmet>
                <meta property="og:title" content={`${title} hi`} />
                <meta property="og:description"
                    content={`${description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vitae fugiat aperiam ut obcaecati voluptates autem magni, delectus explicabo, libero voluptatum illo perspiciatis nesciunt sit eaque assumenda! Accusantium assumenda ea quisquam incidunt provident voluptas ipsa error id distinctio, itaque aut magni nostrum! Aliquam vero dolor at similique sed! `} />
                <meta property="og:image"
                    content="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="The vrumies " />
                <meta property="twitter:description"
                    content="Find something you need right now . Buy and sell your items at Vrumies     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vitae fugiat aperiam ut obcaecati voluptates autem magni, delectus explicabo, libero voluptatum illo perspiciatis nesciunt sit eaque assumenda! Accusantium assumenda ea quisquam incidunt provident voluptas ipsa error id distinctio, itaque aut magni nostrum! Aliquam vero dolor at similique sed! Libero voluptatum ullam iusto voluptates iure vero tempora illo in nulla minus, earum amet debitis deleniti eligendi veritatis voluptas quae quos assumenda, saepe excepturi quaerat optio dolores. Aut, vero accusantium labore quidem eum voluptatem quae. Maxime ea sapiente asperiores ratione, culpa dolore nulla est velit odio ipsam, natus optio ullam veniam!" />
                <meta property="twitter:image"
                    content="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />

            </Helmet>
        </>
    )
}

export default MetaDecorator