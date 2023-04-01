import "../patternspages.css";
import PatternsUl from "./patternsUl/PatternsUl";
import img1 from "../../patternsCards/helpers/01.jpg";


const PatternPage04 = () => {
    return(
        <div className="patternPageMain">
           <div className="patternImg"><img src={img1} alt="" /></div>
           <div className="patternText">
            <PatternsUl />
           </div>
           
        </div>
    )
}

export default PatternPage04;