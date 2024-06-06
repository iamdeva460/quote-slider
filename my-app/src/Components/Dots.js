import './Dots.css';
import React from 'react';
import Data from './Data';

export default function Dots({activeSlide}) {
const Dots = Data.map((data,index)=>{
    return <span className={activeSlide === index ? "dot activedot" :
        "dot"} key={index}>  

          </span>
})

  return (
    <div className='dots-container'> 
    {Dots}
    </div>
  )
}
