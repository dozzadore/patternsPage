import ImageSlider from "./ItemCarousel";
import style from "../../itempage.module.css";




const ItemPage01 = () => {
    return(
        <div className={style.itemPageMain}>
            <ImageSlider />
            <div className={style.itemPageRight}>
            </div>
        </div>
    )
}

export default ItemPage01;