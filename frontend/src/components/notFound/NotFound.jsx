import { Link } from "react-router-dom"
import styles from "./notfound.module.css"
const NotFound = ({ text,  type, img = "/items/post.png" }) => {
    return (
        <div className={styles.notFound}>
            <div className={styles.notFoundWrapper}>
                <img className={styles.vrumies_image} width={"260px"} alt="No 
                Data Found" src={img} />
                <span className={styles.not_found_text}>  { text ? text: `No ${type} yet !`}</span>
               <Link to={"/content"}state={{tab:type}}> 
             {

             ( type === "vlogs" ||  type ==="forums" || type === "blogs") &&  <button className={styles.upload_button}>
                    upload {type}
                </button>
            }   
               </Link>
                {/* <p>{text}</p> */}
            </div>
        </div>
    )
}

export default NotFound