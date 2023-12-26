import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import data from "../data/carouselData.json";

const MyBlogs = () => {
    const desc = " As a leading financial institution, we prioritize our clients' needs above all else. Our team of experienced professionals is dedicated to providing top-notch services and solutions tailored to your specific financial goals. With a wide range of products and services, we are confident that we can help you achieve the level of success you deserve. Our commitment to excellence and attention to detail has earned us the trust and satisfaction of countless satisfied customers. When you choose us as your financial partner, you can rest assured that you are in capable hands. Let us help guide you towards a brighter financial future today. ";
    return (
        <Wrapper id="myblogs">
            <div className="my-blogs">
                <div className="page-title">My Blogs</div>

                <div className="blog-section">
                    <div className="carousel-section">
                        <Carousel data={data.slides} />
                    </div>

                    <div className="description">
                      <div className="blog-title">
                    And Now The Adventure Begins
                    </div>
                    <p className="blog-desc">
                    {desc}

 </p>  
 <button>Read More</button>
                    </div>
                    
                </div>

            </div>
        </Wrapper>
    );
};

export default MyBlogs;

const Wrapper = styled.div`
    display: none;
.my-blogs{

    .page-title{
        
    }
    .blog-section{
          .carousel-section{
  display: none;
}  
    }

}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    display: inline-block;

    box-sizing: border-box;
    .my-blogs{
        height: 100vh;
        width: 100vw;
        display: block;


    .page-title{
        font-size: 6rem;
      font-family: "Aguafina Script", cursive;
      /* margin-left: 6rem; */
      color: orange;
      letter-spacing: 0.6rem;
      margin-top: 3rem;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
        
    }
    .blog-section{
        background-color: #ffe9c9;
        padding: 2rem;
        height: calc(100vh - 9rem);
 
     
         .carousel-section{
  display: flex;
  justify-content: center;
  align-items: center;



 }

 .description{

    margin-top: 2rem;
    height: calc(45vh - 15rem);
    border-radius: 0.8rem;
    padding: 1rem;
box-shadow: 5px 4px 5px gray;
    background-color:  white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    .blog-title{
    font-size: 1.8rem;
    padding: 0 1rem;
    font-weight: bold; 
    


 }  

 
 .blog-desc{

    padding: 0 1rem;
    margin-top: 0.6rem;
    font-size: 1.4rem;
    text-align: justify;

  
    display: -webkit-box;
    
  -webkit-box-orient: vertical;  
  -webkit-line-clamp: 3;

    overflow: hidden;
    text-overflow: ellipsis;
   


    




    


 }

 button{

    height: 30%;
    width: 9rem;
    
    font-size: 1.5rem;
    font-weight: bold;
  box-shadow: 5px 3px 5px gray;

    background-color: #ffac4a;
    color: white;
    border: none;
    margin-top: 1rem;
 }
 }
 
    }

}


 
} 
`;