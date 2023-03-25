import "./card.css"
import { Link } from 'react-router-dom';

const ItemsCard = ({title, img, to}) => {
    return (
        <div className="cardContainerItems">
            <Link to={to}>
                <img className="imgCard" src={img} alt=""/>
                <div className="h3">{title}</div>
            </Link>  
        </div>
    )
}

export default ItemsCard;

