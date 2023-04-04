import React from "react";
import { navLinks } from "../Data/NavbarData";
import { BsSearch } from 'react-icons/bs'

import { GrFavorite } from 'react-icons/gr'
import { SlBasket } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'
import { HiArrowSmRight } from 'react-icons/hi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Logo from '../assets/2563956 1.png'
import Img from '../assets/1528 1.jpg'
import image from '../assets/Rectangle 48.png'

export const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <nav className="Navbar">
          <div className="Nabar-links">
            <h1 className="Navbar-logo">Funiro.</h1>
            {
              navLinks.map((el) => {
                return (
                  <li className="Navbar-li" key={el.id}>
                    {el.title}
                    <MdKeyboardArrowDown />
                  </li>
                )
              })
            }
          </div>
          <div className="Navbar-Search">
            <i className="Navbar-search-logo">
              <BsSearch />
            </i>
            <input
              className="Navbar-search"
              type="text"
              placeholder="Search for minimalist chair"
            />
          </div>
          <div className="Navbar-logos">
            <span>
              <GrFavorite className="Navbar-logo" />
            </span>
            <span>
              <SlBasket className="Navbar-logo" />
            </span>
            <span>
              <CgProfile className="Navbar-logo" />
            </span>
          </div>
        </nav>
      </div>
      <div className="Main">
        <div className="Main-content">
          <div className="Main-firstImg">
            <img src={Logo} alt="" />
          </div>
          <div className="Main-twoImg">
            <img src={Img} alt="" />
            <div className="upper-block">
              <h2 className="upper-header">
                Bohauss
              </h2>
              <p className="upper-title-lower">
                Luxury big sofa 2-seat
              </p>
              <p className="upper-title">Rp 17.000.000</p>
              <HiArrowSmRight className="upper-logo" />
            </div>
          </div>
          <div className="Main-three-img">
          <img src={image} alt="" />
          </div>
        </div>
        <div className="main-kvadrat">
          <div className="main-kvadrat-content">
            <h1 className="txt-one">High-Quality
              Furniture Just
              For You
            </h1>
            <p className="txt-two">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="circles">
          <div className="circle">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.3" cx="24" cy="24" r="24" transform="matrix(-1 0 0 1 48 0)" fill="#E89F71" />
            </svg>
          </div>
          <div className="circle">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#E89F71" />
            </svg>
          </div>
        </div>
        <div className="znaki">
          <div className="one"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99988 1L0.999878 8L7.99988 15" stroke="#E89F71" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </div>
          <div className="two"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00012 1L8.00012 8L1.00012 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
};


