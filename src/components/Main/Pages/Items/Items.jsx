import "./items.css";
import ItemsCard from "./itemsCards/Card";
import { project } from "./itemsCards/helpers/cardsProject";


const Items = () => {
    return(
        <div className="Items">
            <div className="shadowLine"></div>
            <div className="itemsContainer">
                <ul className="itemCard"> 
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