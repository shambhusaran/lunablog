import React from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const AboutMe = () => {
  return (
   


    <Wrapper  id="aboutme">
      <div className="about-me">
        <h1 className="page-title">About Me</h1>
        <div className="section">
          <div className="col1">
            <div className="image">
              <img src="images/img7.jpg" alt="profile img" />
            </div>
            <div className="education">
              <div className="education-title">Education</div>
              <div className="education-desc">
                <div className="school">
                  <LiaSchoolSolid className="school-icon" />
                  <span> +2 Science</span>
                </div>
                <div className="bachelors">
                  <FaGraduationCap className="cap-icon" />
                  <span>Bachelors of Business and Accounting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="experience">
              <div className="experience-title">Experience</div>
              <div className="experience-point">
                <VscDebugBreakpointLog className="experience-icon" />
                <span>
                  Internship at Nepal Bank Limited
                  <span>(Duration : Three months)</span>
                </span>
              </div>
              <div className="experience-desc">
                I was given the opportunity to work as an intern at Nepal Bank
                Limited, Pokhara-Mahendrapool Branch. I worked here for three
                months, where I get to learn many things about the functioning
                of a bank on a daily basis. Also got the knowledge about
                procedures of loan, and banking in overall.
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">Skills</div>
              <div className="skill-points">
                <div className="skill-point-col1">
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Communication</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Leadership</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Analytical Skills</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Time Management</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Attention to Detail</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Business Acumen</span>
                  </div>
                </div>
                <div className="skill-points-col2">
                <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Ethics and Integrity</span>
                  </div>
                  <div className="skill-point">
                    <VscDebugBreakpointLog className="skill-icon" />
                    <span>Adaptability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>

  );
};

export default AboutMe;

const Wrapper = styled.div`
  padding: 0 8rem;

  .about-me {
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
      letter-spacing: 0.3rem;
      margin-top: 5rem;
    }
    .section {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      .col1 {
        background-color: #f9c87c;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          height: 20rem;
          width: 20rem;
          margin-top: 1rem;
          border-radius: 50%;
          box-shadow: 2px 3px 6px 1px gray;
        }
        .education {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          width: 100%;
          .education-title {
            color: black;
            font-size: 4rem;
          }
          .education-desc {
            margin-top: 1rem;
            .school {
              display: flex;
              align-items: center;
              .school-icon {
                height: 2.5rem;
                width: 2.5rem;
              }
              span {
                font-size: 1.5rem;
                font-family: "Open Sans", sans-serif;
                margin-left: 1rem;
              }
            }
            .bachelors {
              margin-top: 0.5rem;
              display: flex;
              align-items: center;
              .cap-icon {
                height: 2.5rem;
                width: 2.5rem;
              }
              span {
                font-size: 1.5rem;
                font-family: "Open Sans", sans-serif;
                margin-left: 1rem;
              }
            }
          }
        }
      }

      .col2 {
        background-color: #ffe9c9;
        width: 50%;
        height: 100%;
        .experience {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          width: 100%;
          .experience-title {
            color: black;
            font-size: 4rem;
          }
          .experience-point {
            margin-top: 0.8rem;
            display: flex;
            align-items: center;
            .experience-icon {
              height: 1.5rem;
              width: 1.5rem;
            }
            span {
              font-size: 1.5rem;
              /* font-family: "Open Sans", sans-serif; */
              margin-left: 1rem;
              span {
                /* color: rgba(128, 128, 128); */
              }
            }
          }
          .experience-desc {
            margin-top: 0.8rem;
            margin-left: 2.5rem;
            color: black;
            font-size: 1.6rem;
            text-align: justify;
            color: rgba(128, 128, 128);
            width: 90%;
            line-height: 2.3rem;
          }
        }
        .skill-points{
          display: flex;
          .skill-points-col2{
            margin-left: 10rem;
          }
        }
        .skills {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          width: 100%;
          .skills-title {
            color: black;
            font-size: 4rem;
          }
          .skill-point {
            margin-top: 0.8rem;
            display: flex;
            align-items: center;
            .skill-icon {
              height: 1.5rem;
              width: 1.5rem;
            }
            span {
              font-size: 1.5rem;
              /* font-family: "Open Sans", sans-serif; */
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }

  @media  (max-width: ${({theme})=>theme.media.mobile}){
padding: 0;
//hiding the overflow on the right 

overflow-x: hidden;


    .about-me{
 
      height: auto;
    
   
  
      

      .page-title{
        margin-top: 3rem;
      }
      .section{
        display: flex;
        flex-direction: column;
        width: 95%;
        
      
   
   
        .col1{
         width: 100%;
       height: auto;
          .education{
            padding: 2.5rem;
          }

        }
        .col2{
          width: 100%;
          height: auto;
        
          .experience {
            padding: 1.5rem;
      
          .experience-title {
       
          }
          .experience-point {
          
            .experience-icon {
        
            }
            span {
              font-weight: 600;
      
              span {
                /* color: rgba(128, 128, 128); */
              }
            }
          }
          .experience-desc {
            font-size: 1.5rem;
            margin-left: 0;
            width: 100%;
         
          }
        }
        .skills{
          padding: 1.5rem ;
          .skills-title{

          }
          .skill-points{
            display: flex;
            justify-content: space-between;
          
            .skill-point-col1{
              width: 45%;
              
              .skill-point{

                span{
                
                  
                }
              }

            }
            .skill-points-col2{
              margin-left: 0;
              width: 45%;
             
              .skill-point{

                span{
                  
                 
                }
              }
            }

          }
        }
    
        }

      }
    }
  }
`;
