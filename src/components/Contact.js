import React from "react";
import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="contact">
        <div className="page-title">Contact</div>
        <div className="main-body">
          <div className="body">
            <div className="contact-details">
              <div className="text1">GET IN TOUCH !</div>
              <div className="text2">Feel Free To Reach & Contact !</div>
              <div className="text3">
                Time is valuable. So lets utilize this precious time to create
                something big. Something Special !!!
              </div>
              <div className="email-phone">
                <div className="item">
                  <CiMail className="icon" />
                  <span>lunamuna@gmail.com</span>
                </div>
                <div className="item">
                  <FaPhoneSquareAlt className="icon" />
                  <span>+977 9840448191</span>
                </div>
              </div>
              <div className="follow-me-text">Follow me on:</div>
              <div className="follow-me">
                <div className="instagram">
                  <a href="https://www.instagram.com" target="_">
                    <FaInstagram className="social-icons" />
                  </a>
                </div>
                <div className="facebook">
                  <a href="https://www.facebook.com" target="_">
                    <FaFacebookSquare className="social-icons" />
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com" target="_">
                    <FaLinkedin className="social-icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="input-fields">
              <div className="message-me-title">Message Me</div>
              <div className="mobile-texts">
                <div className="text1">GET IN TOUCH !</div>
                <div className="text2">Feel Free To Reach & Contact !</div>
                <div className="text3">
                  Time is valuable. So lets utilize this precious time to create
                  something big. Something Special !!!
                </div>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                name="full-name"
                className="textfield"
              />
              <div className="row">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="textfield email"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="textfield phone"
                />
              </div>
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                className="textarea"
              />
              <button className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  .contact {
    height: 100vh;
    margin-left: 8rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    .page-title {
      font-size: 6rem;
      font-family: "Aguafina Script", cursive;
      /* margin-left: 6rem; */
      color: orange;
      letter-spacing: 0.6rem;
      margin-top: 4rem;
      font-weight: 600;
    }
    .main-body {
      width: 100%;
      /* background-color: #ffe9c9; */
      padding: 0 8rem;
      height: calc(100%);

      .body {
        width: 100%;
        height: calc(100% - 8rem);

        padding: 6rem 6rem;
        display: flex;
        flex-direction: row;
        /* background-color: #f9c87c; */
        background-color: #ffe9c9;
        .contact-details {
          display: flex;
          flex-direction: column;
          align-items: start;
          width: 50vw;
          .icon {
            height: 2.5rem;
            width: 2.5rem;
            margin-right: 1rem;
          }
          .text1 {
            font-size: 2rem;
            font-weight: 600;
          }
          .text2 {
            font-size: 4.5rem;
            margin-top: 1.5rem;
            line-height: 4.5rem;
            font-weight: 600;
          }
          .text3 {
            margin-top: 2rem;
            font-size: 2rem;
            border-left: 0.7rem solid black;
            padding-left: 1rem;
          }
          .email-phone {
            margin-top: 2rem;
            .item {
              margin-bottom: 1rem;
              display: flex;
              align-items: center;

              span {
                font-size: 2rem;
                font-weight: 600;
              }
            }
          }
          .follow-me-text {
            margin-top: 1.5rem;
            font-size: 2rem;
            /* font-weight: 600; */
          }
          .follow-me {
            display: flex;

            a {
              text-decoration: none;
              color: black;
              .social-icons {
                margin-top: 1rem;
                margin-right: 2rem;
                height: 4.5rem;
                width: 4.5rem;
                cursor: pointer;
              }
            }
            .social-icons:hover {
              height: 4.8rem;
              width: 4.8rem;
            }
          }
        }
        .input-fields {
          display: flex;
          flex-direction: column;
          /* height: calc(100vh / 2); */
          width: 50vw;
          padding-left: 6rem;
          padding-right: 4rem;
          align-items: center;
          .mobile-texts {
            display: none;
          }
          .message-me-title {
            font-size: 4.5rem;
            line-height: 4.5rem;
            font-weight: 600;
            margin-bottom: 2rem;
          }
          .textfield {
            /* height: 4rem;
          width: 35rem; */
            height: 5.3rem;
            width: 100%;
            padding: 1rem;
            margin-bottom: 2rem;
            border: none;
            outline: none;
            font-size: 1.8rem;
            font-family: "Open Sans", sans-serif;
            box-shadow: 3px 3px 5px gray;
            color: gray;
          }
          .row {
            width: 100%;
            display: flex;
            flex-direction: row;
            .email {
              margin-right: calc(1vw);
            }
          }
          .textarea {
            /* height: 12rem;
          width: 35rem; */
            height: 12rem;
            width: 100%;
            color: gray;
            padding: 1rem;
            border: none;
            outline: none;
            font-size: 1.8rem;
            font-family: "Open Sans", sans-serif;
            box-shadow: 3px 3px 5px gray;
          }
          .button {
            align-self: center;
            height: 5rem;
            width: 100%;
            padding: 1rem;
            background-color: #ffac4a;
            color: black;
            border: none;
            margin-top: 2rem;
            font-size: 1.8rem;
            font-family: "Open Sans", sans-serif;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 3px 3px 5px gray;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact {
      height: auto;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      margin: auto;
      align-items: center;
      .page-title {
        margin-top: 3rem;
      }
      .main-body {
        width: 95%;
        padding: 0;
        .body {
          flex-direction: column;
          padding: 1.5rem;
          flex-flow: column-reverse;
          .contact-details {
            width: 100%;
            margin-top: 2rem;
            .text1 {
              display: none;
            }
            .text2 {
              letter-spacing: 0.2rem;
              display: none;
            }
            .text3 {
              text-align: justify;
              display: none;
            }
            .email-phone {
              
              .item{
                span{
                  font-size: 1.8rem;

                }
              }
            }
            .follow-me-text {
            }
          }
          .input-fields {
            .mobile-texts {
              display: flex;
              flex-direction: column;
              text-align: start;
              .text1 {
                font-size: 2rem;
                font-weight: 600;
              }
              .text2 {
                font-size: 4.5rem;
                margin-top: 1.5rem;
                line-height: 4.5rem;
                font-weight: 600;
              }
              .text3 {
                margin-top: 2rem;
                font-size: 1.6rem;
                border-left: 0.7rem solid black;
                padding-left: 1rem;
                letter-spacing: 0.12rem;
                text-align: justify;
              }
              margin-bottom: 4rem;
            }

            width: 100%;
            padding: 0;
            .message-me-title {
              display: none;
            }
          }
        }
      }
    }
  }
`;
