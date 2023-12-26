import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const changeMenuStatus = () => {
    if (menu === true) {
      setmenu(false);
      console.log("menu set to false");
    } else {
      setmenu(true);
      console.log("menu set to true");
    }
  };

  return (
    <Wrapper>
      <nav className={menu ?"navbar active": "navbar"}>
        <div className="name">Luna's Blog</div>
        <div className="navbar-links">
          <ul>
            <li >
              <Link onClick={()=>changeMenuStatus()} to="imageComponent" spy= {true} smooth={true} duration={500} >Home</Link>
            </li>
            <li >
              <Link  onClick={()=>changeMenuStatus()} to="aboutme"  spy= {true} smooth={true} duration={500} >About Me</Link>
            </li>
            <li  >
              <Link onClick={()=>changeMenuStatus()} to="contact" spy= {true} smooth={true} duration={500}  >Contact</Link>
            </li>
            <li >
              <Link onClick={()=>changeMenuStatus()} to="myblogs" spy= {true} smooth={true} duration={500}  >My Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="mobile-navbar-menu-btn">
          <GiHamburgerMenu name="menu-outline" className="mobile-nav-icon" onClick={()=>changeMenuStatus()}/>
          <GrClose name="close-outline" className="close-outline mobile-nav-icon"  onClick={()=>changeMenuStatus()}/>
        </div>
      </nav>

    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.div`



  .navbar {


    height: 9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3rem 6rem;
    position: absolute;
    z-index: 99;
   



    .navbar-links {
      
      ul {

   
        align-items: center;
        li {
          
          margin-left: 5rem;
          font-family: "Open Sans", sans-serif;
          font-size: 2.2rem;
          padding: 1rem;
          display: inline-block;
          cursor: pointer;
      
    
          a {
            color: white;
            text-transform: capitalize;
          
          }
        }
        li:hover {
          background-color: rgba(128, 128, 128, 0.7);
       
          a {
            color: #ffac4a;
          }
        }
      }
    }
    .name {
    font-size: 5rem;
    font-family: "Aguafina Script", cursive;
    /* margin-left: 6rem; */
    color: #ffac4a;
    letter-spacing: 0.3rem;
  }
  .mobile-navbar-menu-btn{
    display: none;

    .close-outline{
      display: none;
    }
   
    
  }
 
  }
 

  @media (max-width: ${({ theme }) => theme.media.mobile}){



    .navbar{
      width: 100vw;
   
      padding:calc(7vh/2)  3.5rem;
      height: auto;
   
      
      
      .name{
        font-size: 4rem;
        line-height: 3.5rem;

      }

      .navbar-links{
        
       
 
       
        position: absolute;
        top: 0;
        left: 0;
        background-color:#ffac4a;
        visibility: hidden;
        /* transform: translateX(100%); */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        display: none;
        ul{
          display: flex;
          flex-direction: column;     
          li{  
            margin-left: 0;
            margin-top: 1rem;
            a{
              text-shadow: 2px 2px 2px gray;
            font-size: 5.5rem;
            font-weight: 600;
            }
          }
        }
      }
      .mobile-navbar-menu-btn{
        display: inline-block;
  .mobile-nav-icon {
    height: 3.5rem;
    width: 3.5rem;
    color: white;
      }
    }
  }
   .active .mobile-nav-icon{
    display: none;
    font-size: 4rem;
    position: fixed;
    top: 2rem;
    right: 3.5rem;
    color: white;
    z-index: 999999;
  } 
   .active .mobile-navbar-menu-btn .close-outline{
    display: inline-block;
    height: 4.5rem;
    width: 4.5rem;
  }
  .active .navbar-links{
    width: 100vw;
        height: 100vh; 
        display: flex;
       // overflow: visible;
     // overflow-x: hidden;
     overflow: hidden;
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999999;
    position: fixed;
  } 
  .active .navbar-links-mbl{

  }

}



`;
