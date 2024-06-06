import React from 'react';
import { useState,useEffect } from 'react';
import './App.css'
import CarouselList from './Components/CarouselList';
import Data from './Components/Data';
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'

export default function App() {
const [activeSlide,setActiveSlide] = useState(0);
const [slideDirection , setSlideDirection] = useState("Right");

useEffect(()=>{

  let current = activeSlide;
  let direction = slideDirection;
//AUTOPLAY...
  const autoPlay=()=>{
    if(current === Data.length-1){
      current -=1
      setActiveSlide(current)
      setSlideDirection("Left")
    } else if(current === 0){
      current +=1
      setActiveSlide(current)
      setSlideDirection('Right')
    } else if(current > 0 && direction === 'Right'){
      current +=1
      setActiveSlide(current)
      
    } else if(current < Data.length-1 && direction ==='Left'){
      current -=1
      setActiveSlide(current)
      
    }
  }


  const timerId = setInterval(()=>{
   autoPlay()
  },3000)
  return ()=>clearInterval(timerId)
},[activeSlide,slideDirection]);

//moveLeft
const moveLeft =(slideIndex)=>{
  setActiveSlide(slideIndex-1)
  setSlideDirection('Left')
}
//moveRight
const moveRight=(slidedIndex)=>{
 setActiveSlide(slidedIndex+1)
 setSlideDirection('Right')
}


  return (
    <div className='app'>
       <h1 className='main-head'> Quotes Carousel </h1>

       <div className='slideshow-container'>
            <CarouselList activeSlide={activeSlide}/>
            <BsArrowLeft className={activeSlide === 0 ? 'display prev' : 'prev'} onClick={()=>moveLeft(activeSlide)}/>
            <BsArrowRight className={activeSlide === Data.length-1 ? 'display next' : 'next'} onClick={()=>moveRight(activeSlide)}/>

       </div>
    </div>
  )
}
