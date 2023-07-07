import NotFound from "../../../notFound/NotFound"
import ShopItem from "../ShopItem/ShopItem"
import styles from "./ShopProducts.module.css"



const ShopProducts = ({ items,type }) => {





    return (
        <div className={styles.shop_products}>
            {
                !items ? <>loading</> : items.length >0 ? items.map(item => (

                    <ShopItem item={item} key={item?._id} />
                )) :
                <NotFound img='/images/shopImg.png' text={"No products at shop ."} type={type} />
            }


        </div>
    )
}

export default ShopProducts