import React, { useState } from 'react';
import '../../itempage.css';
import img1 from "./imageCarousel/image01.jpg";
import img2 from "./imageCarousel/image02.jpg";
import img3 from "./imageCarousel/image03.jpg";



function ImageSlider() {
  
  const imgs=[
    {id:0,value:img1},
    {id:1,value:img2},
    {id:2,value:img3},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="itemCarousel">
      <img className='topImg' src={wordData.value} /> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id === i?"Active":""} src={data.value} onClick={()=>handleClick(i)} />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
