import CenterMode from "./ItemCarousel";
import style from "../../itempage.module.css";


const ItemPage03 = () => {
    return(
        <div className={style.itemPageMain}>
            <CenterMode />
            <div className={style.itemPageRight}></div>
        </div>
    )
}

export default ItemPage03;