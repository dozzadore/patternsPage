import "./patterns.css";
import PatternsCard from "./patternsCards/Card";
import { project } from "./patternsCards/helpers/cardsProject";


const Patterns = () => {
    return(
        <div className="Patterns">
            <div className="shadowLine"></div>
            <div className="patternsContainer">
                <ul className="patternsCard"> 
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