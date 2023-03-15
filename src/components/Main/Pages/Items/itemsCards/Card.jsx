import "./card.css"



const ItemsCard = ({title, img}) => {
    return (
        <div className="cardContainer">
            <a href="ya.ru">
                <img className="imgCard" src={img} alt=""/>
                <div className="h3"><h3>{title}</h3></div>
            </a>  
        </div>
    )
}

export default ItemsCard;

