import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const ImageComponent = () => {
  return (
    <Wrapper id="imagecomponent">
      <Navbar />
      <div className="image">
        <div className="image-overlay">
          <div className="texts">
            <div className="hello-text">Hello, </div>
            <div className="intro-texts">
              Welcome to <span>Luna's</span> blog
            </div>
            <div className="desc">
              Greetings, fellow enthusiasts of growth and success! I am Luna
              Sapkota, a dynamic and driven BBA student on a relentless pursuit
              of excellence. As a young, energetic person, I navigate the
              intricate world of business with a spirit that knows no bounds.
              Join me on this exciting journey as I share my experiences,
              insights, and lessons learned on the path to success.
              <br />
              <br />
              Welcome to a space where dreams are not just imagined; they are
              lived. This is Luna's journey, and I'm thrilled to have you along
              for the ride!
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageComponent;
const Wrapper = styled.div`
  //to make the navbar aligned and not cut the responsive menu

  top: -9rem;
  left: 0;
  z-index: -1;
  .image {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url("images/img1.jpg");
  }

  .image-overlay {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .texts {
      width: 60%;
      .hello-text {
        color: white;
        font-family: "Aguafina Script", cursive;
        font-size: 5rem;
        letter-spacing: 0.4rem;
        line-height: 4rem;
        color: #ffac4a;
      }
      .intro-texts {
        color: white;
        font-family: "Aguafina Script", cursive;
        font-size: 9rem;
        letter-spacing: 0.5rem;
        span {
          color: #ffac4a;
        }
      }
      .desc {
        font-family: "PT Serif", serif;
        font-size: 2rem;
        color: #ffac4a;
        text-align: justify;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    top: -9rem;
    left: 0;
    z-index: -1;
    .image-overlay {
      .texts {
        width: 80%;
        .hello-text {
          font-size: 3rem;
          margin-top: 2rem;
          color: white;

          margin-bottom: 2rem;
        }
        .intro-texts {
          margin-top: 1rem;
          font-size: 4rem;
          letter-spacing: 0.1rem;
          line-height: 5rem;
          span {
            line-height: 5rem;
            font-family: "Aguafina Script", cursive;
          }
        }
        .desc {
          font-size: 1.6rem;

          text-align: justify;
          margin-top: 3rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
  }
`;
