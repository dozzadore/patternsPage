import CenterMode from "./ItemCarousel";
import style from "../../itempage.module.css";


const ItemPage06 = () => {
    return(
        <div className={style.itemPageMain}>
            <CenterMode />
            <div className={style.itemPageRight}></div>
        </div>
    )
}

export default ItemPage06;