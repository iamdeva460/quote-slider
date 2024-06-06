
import React from 'react';
import Data from './Data';
import './CarouselList.css';
import Dots from './Dots';
import { ImQuotesLeft,ImQuotesRight } from 'react-icons/im';

export default function CarouselList({activeSlide}) {
  const Quotes = Data.map((data,index)=>{
    return <li key={index} className={
index === activeSlide ? "active carousel-item" :index < activeSlide ?"left carousel-item" :
index > activeSlide ? "right carousel-item" :""
     
    }>
              <div className='quotes'>
                 <img src={data.src} alt={data.name}/>
                 <p>
                   <ImQuotesLeft/>{data.quotes} <ImQuotesRight/>
                  </p>
              </div>
               <br/>
              <span className='carousel-name'>--{data.name}</span>

          </li>
  })


  return (
    <div>
        <h1>Deva Will Shine</h1>
        <ul className='carousel-list'> 
            {Quotes}
            <Dots activeSlide={activeSlide}/>
        </ul>
    </div>
  )
}
