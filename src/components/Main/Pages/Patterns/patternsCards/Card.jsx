import style from "./card.module.css"
import { Link } from 'react-router-dom';

const PatternsCard = ({title, img, to}) => {
    return (
        <div className={style.cardContainerPattern}>
            <Link to={to}>
                <img className={style.imgCard} src={img} alt=""/>
                <div className={style.textCard}>{title}</div>
            </Link>  
        </div>
    )
}

export default PatternsCard;

