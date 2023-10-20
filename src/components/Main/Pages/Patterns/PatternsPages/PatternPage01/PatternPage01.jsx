import "../patternspages.css";
import img1 from "../../patternsCards/helpers/01.jpg";
import PatternsUl from "./patternsUl/PatternsUl";


const PatternPage01 = () => {
    
    return(
        <div className="patternPageMain">
           <div className="patternImg"><img src={img1} alt="" /></div>
           <div className="patternText">
            <PatternsUl />
           </div>
           
        </div>
    )
}

export default PatternPage01;