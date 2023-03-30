import "./card.css"
import { Link } from 'react-router-dom';

const PatternsCard = ({title, img, to}) => {
    return (
        <div className="cardContainerPattern">
            <Link to={to}>
                <img className="imgCard" src={img} alt=""/>
                <div className="textCard">{title}</div>
            </Link>  
        </div>
    )
}

export default PatternsCard;

