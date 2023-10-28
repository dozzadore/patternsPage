import style from "../patternspages.module.css";
import img1 from "../../patternsCards/helpers/01.jpg";
import PatternsUl from "./patternsUl/PatternsUl";


const PatternPage01 = () => {
    
    return(
        <div className={style.patternPageMain}>
           <div className={style.patternImg}><img src={img1} alt="" /></div>
           <div className={style.patternText}>
            <PatternsUl />
           </div>
           
        </div>
    )
}

export default PatternPage01;