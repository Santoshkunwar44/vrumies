import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import NotFound from '../../../notFound/NotFound'


const ShopServices = ({ items ,type }) => {
    return (
        <>

            {
                !items ? <>loading</> : items.length > 0 ?
                 items.map((item) => (
                    <ShopItem key={item?._id} item={item} />

                )) 
                : <NotFound img='/images/shopImg.png' text={"No services at shop"} type={type} />
            }
        </>


    )
}

export default ShopServices