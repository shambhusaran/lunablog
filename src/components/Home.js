import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ImageComponent from "./ImageComponent";
import AboutMe from "./AboutMe";
import Carousel from "./Carousel";
import data from "../data/carouselData.json";
import PhotoCollage from "./PhotoCollage";
import Contact from "./Contact";
import Footer from "./Footer";
import MyBlogs from "./MyBlogs";

const Home = () => {
  return (
    <Wrapper>
      <ImageComponent /> 
       <AboutMe />
      <Contact />
<MyBlogs />
      <Footer/>
    </Wrapper>
  );
};

export default Home;
const Wrapper = styled.div`
@media (max-width: ${({theme})=>theme.media.mobile}){
height: auto;

} 

`;