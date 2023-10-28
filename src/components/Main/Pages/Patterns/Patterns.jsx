import style from "./patterns.module.css";
import PatternsCard from "./patternsCards/Card";
import { project } from "./patternsCards/helpers/cardsProject";


const Patterns = () => {
    return(
        <div className={style.Patterns}>
            <div className={style.patternsContainer}>
                <ul className={style.patternsCard}> 
                    {project.map((project, index) => {
                        return (
                            <PatternsCard key={index} title={project.title} img={project.img} to={project.to}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Patterns;