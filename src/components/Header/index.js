<<<<<<< HEAD
import Image from "./images/logoscc.png"
import "./nav.css"
let Index = () => {
=======
import React, { useState } from 'react';
import Image from "./images/logoscc.png"
import "./nav.css"
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.navbar')
menu.onClick = () =>{
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('open')
}
let Index = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  }
>>>>>>> 4d10d28bdb7eec80e17d8b8d407f144a18defe98
    return(
        <div>
          <div class="all">
            <img src={Image} alt='scc-logo'/>
          <ul class="navbar">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About <i class='bx bx-chevron-down'></i></a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Login</a></li>
          </ul>
          <div class="menu">
            <button class="btn">Apply</button>
             <div class= "bx bx-menu" id="menu-icon"></div>
          </div>
          </div>
<<<<<<< HEAD
=======
      <div className={`menu ${isMenuOpen ? 'bx-x' : ''}`} onClick={handleClick}></div>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}></div>
>>>>>>> 4d10d28bdb7eec80e17d8b8d407f144a18defe98
          </div>
    );
}
export default Index;
