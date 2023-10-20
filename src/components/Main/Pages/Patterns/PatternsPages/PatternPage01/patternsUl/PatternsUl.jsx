import React from "react";
import "../../patternspages.css";






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

    function isDisabledButton(){
        return data.selectedRadioInput === '' 
          || data1.selectedRadioInput1 === ''
      }

    function handleClick(e) {
        e.preventDefault()
       
       if(data.value1 && data1.value1){
        console.log(data.value1, data1)
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value1 && data1.value2){
        console.log(data.value1, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value1 && data1.value3){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value1 && data1.value4){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value1 && data1.value5){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value2 && data1.value1){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value2 && data1.value2){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value2 && data1.value3){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value2 && data1.value4){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value2 && data1.value5){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value3 && data1.value1){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value3 && data1.value2){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value3 && data1.value3){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value3 && data1.value4){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
       }else if(data.value1 && data1.value5){
        console.log(data, data1)
        
        window.open('https://drive.google.com/file/d/1yBKwwwENnz6PZpYM73-99EwYdJSueokK/view?usp=sharing');
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
        <div className="selectlink"> 
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
                    <label>46</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="louie" 
                    name="size" 
                    value={data1.value5} 
                    onChange={showInputSize}
                    />
                    <label>48</label>
                </div>
            </fieldset>
            <button 
            id="buttonPattern" 
            type="button" 
            onClick={handleClick}
            disabled={isDisabledButton()}
            >button</button>
        </div>
    )
}

export default PatternsUl;