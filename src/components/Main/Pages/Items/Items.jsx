import style from "./items.module.css";
import ItemsCard from "./itemsCards/Card";
import { project } from "./itemsCards/helpers/cardsProject";


const Items = () => {
    return(
        <div className={style.Items}>
            <div className={style.itemsContainer}>
                <ul className={style.itemCard}> 
                    {project.map((project, index) => {
                        return (
                            <ItemsCard key={index} title={project.title} img={project.img} to={project.to}/>
                        )
                    })}
                </ul>
                
            </div>
        </div>
    );
};

export default Items;