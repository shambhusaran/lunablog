import React from "react";
import styled from "styled-components";

const PhotoCollage = () => {
  return (
    <Wrapper>
      <div className="photo-collage">
        <img src="images/img13.jpeg" alt="img13" className="img13" />

        <div className="collage1">
          <img src="images/img3.jpg" alt="img3" className="img3" />
          <img src="images/img4.jpeg" alt="img3" className="img4" />
        </div>

        <img src="images/img18.jpeg" alt="img18" className="img18" />
        <div className="collage3">
          <img src="images/img17.jpeg" alt="img17" />
          <img src="images/img14.jpeg" alt="img14" />
          <img src="images/img15.jpeg" alt="img15" />
          <img src="images/img16.jpeg" alt="img16" />
        </div>

        <img src="images/img6.jpeg" alt="img6" className="img6" />
        <div className="collage2">
          <img src="images/img12.jpeg" alt="img12" />
          <img src="images/img8.jpg" alt="img8" />
          <img src="images/img9.jpeg" alt="img9" />
          <img src="images/img11.jpeg" alt="img11" />
        </div>
        <img src="images/img10.jpeg" alt="img10" className="img10" />

        <div className="collage4">
          <img src="images/img2.jpg" alt="img2" />
          <img src="images/img19.jpeg" alt="img19" />
        </div>

        <div className="layer">
        <div className="layer1">

        </div>
        <div className="layer2">
          
        </div>
          <div className="page-title">Contact</div>
          {/* <div className="input-fields">
            <input
              type="text"
              placeholder="Full Name"
              name="full-name"
              className="textfield"
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="textfield"
            />
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="textarea"
            />
            <button className="button">Submit</button>
          </div>  */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PhotoCollage;

const Wrapper = styled.div`
  margin-top: 5rem;
  padding: 0 8rem;
  height: 100vh;
  .photo-collage {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    img {
      padding: 0.3rem;
      background-color: black;
    }
    .img2 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
    }
    .collage1 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
      display: flex;
      flex-direction: column;
      background-color: gray;
      overflow: hidden;
      .img3 {
        width: 100%;
        height: calc(100% / 2);
        object-fit: cover;
      }
      .img4 {
        width: 100%;
        height: calc(100% / 2);
        object-fit: cover;
      }
    }
    .img18 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
    }
    .img13 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
    }
    .img6 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
    }
    .collage2 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: gray;
      overflow: hidden;
      img {
        width: calc(100% / 2);
        height: calc(100% / 2);
      }
    }
    .img10 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
    }
    .collage3 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: gray;
      overflow: hidden;
      img {
        width: calc(100% / 2);
        height: calc(100% / 2);
      }
    }
    .collage4 {
      width: calc(100% / 4);
      height: calc(100vh / 2);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: gray;
      overflow: hidden;

      img {
        width: calc(100%);
        height: calc(100% / 2);
        object-fit: cover;
      }
    }
    .layer {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      margin-left: 8rem;
      display: flex;
      flex-direction: row;
      margin: auto; 
      align-items: center;
   

      .layer1{
        position: absolute;
        width: calc(50%);
        height: calc(30vw);
        background-color: #f9c87c;
        top: 20%;
        left: 4rem;
        z-index: 9;
        box-shadow: 0.5rem 0.5rem 1rem  black;
        

      }
      .layer2{
        position: absolute;
        width: calc(50%);
        height: calc(30vw);
        background-color: #ffe9c9;
        top: 30%;
        right: 4rem;

      }
      .page-title {
        font-size: 6rem;
        font-family: "Aguafina Script", cursive;
        /* margin-left: 6rem; */
        color: orange;
        letter-spacing: 0.3rem;
        margin-top: 5rem;
        z-index: 99;
        position: absolute;
        top: 1rem;
      
      }

    }
  }
`;
