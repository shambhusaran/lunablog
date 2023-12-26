import React, { useState } from 'react'
import styled from 'styled-components'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";




const Carousel = ({data}) => {
  console.log("runs in carousel");
  console.log(data);

const [slide, setSlide] = useState(0);
const nextSlide=()=>{
  if(slide === data.length-1){
    setSlide(0);
  }
  else{
     setSlide(slide+1); 
  }


}

const previousSlide = ()=>{
  if(slide === 0){
    setSlide(data.length-1);
  }
  else{
    setSlide(slide-1);
  }


}
  return (
    
    <Wrapper>
    <div className='carousel'>
    <SlArrowLeft  className='arrow arrow-left' onClick={previousSlide}/>
     {
      data.map((item, index)=>{

        return <img src={item.src} alt={item.alt}  key={index} className= {slide === index? "slide": "slide slide-hidden" }/>
      })
     }
     <SlArrowRight  className='arrow arrow-right' onClick={nextSlide}/>

     <span className='indicators'>
      {data.map((_, index)=>{
        return <button key={index} onClick={()=>setSlide(index)} className={slide === index? "indicator": "indicator indicator-inactive"}></button>
      })}
     </span>
    </div>
    

    </Wrapper>
  )
}

export default Carousel

const Wrapper = styled.div`
/* align-items: center;
justify-content: center;
text-align: center; */
/* display: flex;
flex-direction: row; */
.carousel{
  display: flex;
width: calc(100vw - 4rem);
  /* width: 75vw; */
    height: 55vh;
    position: relative;
    align-items: center;
  
    justify-content: center;
    img{
      object-fit: cover;
    }
  .slide{
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 7px #6666;

  
  }
  .slide-hidden{
    display: none;
  }
  .arrow{
    position: absolute;
    width: 40px;
    height: 40px;
    color: white;
    filter: drop-shadow(0 0 5px #555);

  }
  .arrow:hover{
    cursor: pointer;
  }
  .arrow-left{
    left: 1rem;
  }
  .arrow-right{
    right: 1rem;
  }

  .indicators{
    display: flex;
    position: absolute;
    bottom: 1rem;
   
    .indicator{
  background-color: white;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0 0 8px #555;
  margin: 0 0.2rem;
  cursor: pointer;
}
.indicator-inactive{
  background-color: grey;
}
  }

  /* img{
    height: 600px;
  width: 500px;
  } */
}

`;