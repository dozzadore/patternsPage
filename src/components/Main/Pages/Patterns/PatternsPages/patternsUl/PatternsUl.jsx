import "./patternsul.css";
import PatternUlFunc from "./patternulfunc";

const PatternsUl = () => {
    return(
        <div class="selectlink"> 
            <fieldset className="patternsUlHeigh">
                <legend>Рост:</legend>
                <div>
                    <input type="radio" id="inRadioHeigh" name="heigh" />
                    <label >160</label>
                </div>
                <div>
                    <input type="radio" id="inRadioHeigh" name="heigh" />
                    <label >165</label>
                </div>
                <div>
                    <input type="radio" id="inRadioHeigh" name="heigh" />
                    <label >170</label>
                </div>
            </fieldset>
            <fieldset className="patternsUlSize">
                <legend>Размер:</legend>
                <div>
                    <input type="radio" id="inRadioSize" name="size" />
                    <label >40</label>
                </div>
                <div>
                    <input type="radio" id="inRadioSize" name="size" />
                    <label >42</label>
                </div>
                <div>
                    <input type="radio" id="inRadioSize" name="size" />
                    <label >44</label>
                </div>
                <div>
                    <input type="radio" id="inRadioSize" name="size" />
                    <label for="louie">46</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="size" value="louie"/>
                    <label for="louie">48</label>
                </div>
            </fieldset>
            <button id="buttonPattern" type="button" onClick={PatternUlFunc}>button</button>
        </div>
    )
}

export default PatternsUl;