import { isDisabled } from "@testing-library/user-event/dist/utils/misc/isDisabled";
import React from "react";
import "./patternsul.css";




const PatternsUl = () => {
    
  
    const [data, setData] = React.useState({
        value1: '160height',
        value2: '165height',
        value3: '170height',
        selectedRadioInput: '' 
      });
      const [data1, setData1] = React.useState({
        value1: '40',
        value2: '42',
        value3: '44',
        value4: '46',
        value5: '48',
        selectedRadioInput1: '' 
      });

    function handleClick(e) {
        e.preventDefault(isDisabled)
        let height = data.selectedRadioInput;
        let size = data1.selectedRadioInput1;
       if(height === '160height' && size === '40'){
        console.log(height, size)
        //window.location.assign('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }if(height === '160height' && size === '42'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '160height' && size === '44'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '160height' && size === '46'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '160height' && size === '48'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '165height' && size === '40'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '165height' && size === '42'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '165height' && size === '44'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '165height' && size === '46'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '165height' && size === '48'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '170height' && size === '40'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '170height' && size === '42'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '170height' && size === '44'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '170height' && size === '46'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }if(height === '170height' && size === '48'){
        console.log(height, size)
        
        //window.location.assign('https://drive.google.com/file/d/1Yv1oZeuxQ4yMylasQtn6Q2LeEd9JIN5c/view?usp=sharing');
       }
        

        
       
      }

    function showInputHeight(e){
        
        //console.log(e.target.value)
        setData({ ...data, selectedRadioInput: e.target.value });
    }

    function showInputSize(e){
        //console.log(e.target.value)
        setData1({ ...data1, selectedRadioInput1: e.target.value });
    }
  
    return(
        <div class="selectlink"> 
            <fieldset className="patternsUlHeight">
                <legend>Рост:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioHeight1" 
                    name="height" 
                    value={data.value1} 
                    onChange={showInputHeight}
                    />
                    <label >160</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioHeight2" 
                    name="height" 
                    value={data.value2} 
                    onChange={showInputHeight}
                    />
                    <label >165</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioHeight3" 
                    name="height" 
                    value={data.value3} 
                    onChange={showInputHeight}
                    />
                    <label >170</label>
                </div>
            </fieldset>
            <fieldset className="patternsUlSize">
                <legend>Размер:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioSize" 
                    name="size" 
                    value={data1.value1}  
                    onChange={showInputSize} />
                    <label >40</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioSize" 
                    name="size" 
                    value={data1.value2}  
                    onChange={showInputSize} />
                    <label >42</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioSize" 
                    name="size" 
                    value={data1.value3}  
                    onChange={showInputSize} />
                    <label >44</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="inRadioSize" 
                    name="size" 
                    value={data1.value4} 
                    onChange={showInputSize} />
                    <label for="louie">46</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="louie" 
                    name="size" 
                    value={data1.value5} 
                    onChange={showInputSize}
                    />
                    <label for="louie">48</label>
                </div>
            </fieldset>
            <button 
            id="buttonPattern" 
            type="button" 
            onClick={handleClick}
            >button</button>
        </div>
    )
}

export default PatternsUl;