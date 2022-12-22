import "./card.css"



const ItemsCard = ({title, img}) => {
    return (
        <li className="cardContainer">
            <a href="ya.ru">
                <img  src={img} alt=""/>
              <h3>{title}</h3>
            </a>  
        </li>
    )
}

export default ItemsCard;