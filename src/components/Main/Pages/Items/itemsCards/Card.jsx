import "./card.css"
import { Link } from 'react-router-dom';

const ItemsCard = ({title, img, to}) => {
    return (
        <div className="cardContainer">
            <Link to={to}>
                <img className="imgCard" src={img} alt=""/>
                <div className="h3"><h3>{title}</h3></div>
            </Link>  
        </div>
    )
}

export default ItemsCard;

