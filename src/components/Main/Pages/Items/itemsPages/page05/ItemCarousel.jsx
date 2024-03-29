import React, { useState } from 'react';
import style from '../../itempage.module.css';
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
    <div className={style.itemCarousel}>
      <img className={style.topImg} src={wordData.value} alt="" /> 
      <div className={style.flex_row}>
        {imgs.map((data,i)=>
        <div className={style.thumbnail} key={i} >
          <img className={wordData.id === i ? "Active":""} src={data.value} onClick={()=>handleClick(i)} alt="" />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;