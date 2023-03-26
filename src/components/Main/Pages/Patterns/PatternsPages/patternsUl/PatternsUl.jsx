import "./patternsul.css";


const PatternsUl = () => {
    return(
        <div class="selectlink"> 
            <fieldset className="patternsUl">
                <legend>Рост:</legend>
                <div>
                    <input type="radio" id="huey" name="heigh" value="huey" />
                    <label >160</label>
                </div>
                <div>
                    <input type="radio" id="dewey" name="heigh" value="dewey"/>
                    <label >165</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="heigh" value="louie"/>
                    <label >170</label>
                </div>
            </fieldset>
            <fieldset className="patternsUl">
                <legend>Размер:</legend>
                <div>
                    <input type="radio" id="huey" name="size" value="huey" />
                    <label >40</label>
                </div>
                <div>
                    <input type="radio" id="dewey" name="size" value="dewey"/>
                    <label >42</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="size" value="louie"/>
                    <label >44</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="size" value="louie"/>
                    <label for="louie">46</label>
                </div>
                <div>
                    <input type="radio" id="louie" name="size" value="louie"/>
                    <label for="louie">48</label>
                </div>
            </fieldset>
        </div>
    )
}

export default PatternsUl;