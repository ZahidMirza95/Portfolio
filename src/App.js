import Project from './Project';
import React, { useState } from 'react';
import "./App.css";

/* Logos */
import linkedIn from './images/linked_in_logo.png';
import github from './images/github_logo_new.png';
import devpost from './images/devpost_logo.png';
import itchio from './images/itchio_logo.png';
import resume from './images/resume_bg_new.png';

/* Programming Languages Logos */
import nasm from './images/nasm_logo.png';
import bash from './images/bash_logo.png';
import csharp from './images/csharp_logo.png';
import java from './images/java_logo.png';
import javascript from './images/javascript_logo.png';
import python from './images/python_logo.png';



/* Project Images  */
import portfolio from './images/personal_website.png';
import cosmic from './images/Cosmic_Samurai_1.png';
import findMyCity from './images/FindMyCity_HeatMap.png';
import gogogirl from './images/Gogogirl_Game_Real.png';
import stockify from './images/Stockify_Main.png';
import covidai from './images/COVIDAI_App.png';
import hobbyhub from './images/hobbyhubquest.jpg';
import hobbyhublogo from './images/hobbyhub.png';

function App() {

  {/* NAVBAR states */}
  const [navbarShow, setNavbarShow] = useState(false);
  const [currentColor, setCurrentColor] = useState("blue");
  const navbarClick = () => {
        setNavbarShow(!navbarShow);
  }

  const setColorBlue = () => {
    setCurrentColor("blue");
  }

  const setColorYellow = () => {
    setCurrentColor("yellow");
  }

  const setColorRed = () => {
    setCurrentColor("red");
  }

  /* Passed the logos (used only in the projects section) as objects */
  var githubLogo = {
    img: github,
    alt: "github"
  }

  var devpostLogo = {
    img: devpost,
    alt: "devpost"
  }

  var itchioLogo = {
    img: itchio,
    alt: "itchio"
  }

  return (
    /* This will be the main div tag for everything  */
    <div className = "main">
      <div className = {currentColor}>
        {/* NavBar */}
        <nav className = "navbar">
            {/* Hamburger icon */}
            <div className = "menu-icon">
                <div className = {navbarShow ? "exit" : "burger"} onClick = {navbarClick}>
                    <div className = "line1"></div>
                    <div className = "line2"></div>
                    <div className = "line3"></div>
                </div>
            </div>
            {/* Main navbar */}
            <ul className = {navbarShow ? "nav-links active" : "nav-links"}>
                <li><a href = "#name"> Home </a></li>
                <li><a href = "#about"> About </a></li>
                <li><a href = "#projects"> Projects </a></li>
                <li><a href = "mailto:zam19@rogers.com"> Contact </a></li>
                <li className = "change-theme">
                    <span>
                        Change Theme
                        <div className = "colors-dropdown">
                            <button className = "blue-button" onClick = {setColorBlue}> Blue </button>
                            <button className = "yellow-button" onClick = {setColorYellow}> Yellow </button>
                            <button className = "red-button" onClick = {setColorRed}> Red </button>
                        </div>
                    </span>
                </li>
            </ul>
        </nav>
        {/* Name Section */}
        <section className = "name" id = "name"> 
          <div className = "name">
            <h1 data-aos= "fade-in" data-aos-duration="2000" data-aos-once="true"> ZAHID MIRZA </h1>
            <h2 data-aos= "fade-in" data-aos-duration="2000" data-aos-delay= "1500" data-aos-once="true"> Aspiring Software Engineer </h2>
          </div>
        </section>
        {/* About section */}
        {/*<a href="#aboutMe"> <div class = "fade-in arrow down"> </div>*/}
        <section id = "about"> 
          <div className = "about"> 
            <h1 data-aos= "fade-in" data-aos-duration="2000"> ABOUT ME </h1>
            <p data-aos = "fade-up" data-aos-duration="1000"> Hello there! My name is Zahid Mirza and I am a Software Engineering & Management student
            at McMaster University. I really enjoy learning 
            new programming languages and solving problems using code. I'm very passionate about both web 
            development and video game development. I also have a strong interest in AI and RPA. In my spare time I work on 
            personal coding projects, play golf, and play video games. </p>
            <div className = "row">
              <div className = "col">
                <a href = "https://www.linkedin.com/in/mirzazahid/"><img src = {linkedIn} alt = "linkedIn" className = "linkedIn"></img></a>
                <h2> LinkedIn </h2>
              </div>
              <div className = "col">
                <a href = "https://github.com/Zamzam95-coder"><img src = {github} alt = "github" className = "github"></img></a>
                <h2> GitHub </h2>
              </div>
              <div className = "col">
                <a href = "https://drive.google.com/file/d/1jXaHOpxwb9qJU-K3i38t3teJLsnWUld9/view?usp=sharing"><img src = {resume} alt = "resume" className = "resume"></img></a>
                <h2> Resume </h2>
              </div>
            </div>
            <h3> PROGRAMMING LANGUAGES </h3>
            <div className = "row">
              <div className = "col">
                <img className = "language" src = {nasm} alt = "nasm"/>
                <h3> Assembly </h3>
              </div>
              <div className = "col">
                <img className = "language" src = {bash} alt = "bash"/>
                <h3> Bash </h3>
              </div>
              <div className = "col">
                <img className = "language" src = {csharp} alt = "csharp"/>
                <h3> C# </h3>
              </div>
              <div className = "col">
                <img className = "language" src = {java} alt = "java"/>
                <h3> Java </h3>
              </div>
              <div className = "col">
                <img className = "language" src = {javascript} alt = "javascript"/>
                <h3> JavaScript </h3>
              </div>
              <div className = "col">
                <img className = "language" src = {python} alt = "python"/>
                <h3> Python </h3>
              </div>
            </div>
          </div>
        </section>
        <section className = "projects" id = "projects">
          <div className = "projects">
            <h1 data-aos= "fade-in" data-aos-duration="2000"> PROJECTS </h1>
              <div className = "container">
                <div className = "row">
                <div className = "col-lg">
                    <Project name = "HobbyHub"
                    date = "Jan. 2021"
                    desc = "A web application that provides a hobby for the user to try out by analyzing their responses, using the K-Means clustering algorithm, to various questions based on their personality. The application also provides them with some other users to connect with so that they can learn the hobby together. Created using the React.js library and Bootstrap."
                    img = {hobbyhub}
                    imgName = "hobbyhub"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/minericpark/hobbyapp", "https://devpost.com/software/hobbyhub"]}
                    />
                  </div>
                  <div className = "col-lg">
                    <Project name = "Portfolio"
                    date = "Dec. 2020 - Present"
                    desc = "A portfolio that shows off some more information about me and the various projects that I've worked on. Currently on the second version (minor update from the first) of the website, plan to update it even further later on. Created using HTML, CSS, Bootstrap, and JavaScript with the React.js library."
                    img = {portfolio}
                    imgName = "portfolio"
                    logos = {[githubLogo]}
                    links = {["https://github.com/Zamzam95-coder/Portfolio"]}
                    />
                  </div>
                </div>
                <div className = "row">
                <div className = "col-lg">
                    <Project name = "Cosmic Samurai" 
                    date = "Nov. 2020 - Dec. 2020"
                    img = {cosmic}
                    desc = "A video game I created in a team of three for GitHub Game Jam 2020. It's a 2D platformer with a simple combat system and a very unique teleportation mechanic. Created using Unity and C#."
                    imgName = "cosmic"
                    logos = {[githubLogo, itchioLogo]}
                    links = {["https://github.com/Zamzam95-coder/Cosmic-Samurai", "https://itch.io/jam/game-off-2020/rate/840159"]}
                    />
                  </div>
                  <div className = "col-lg">
                    <Project name = "FindMyCity"
                    date = "Oct. 2020"
                    desc = "A web application I created in a team of three, within 24 hours, for TAMU Datathon 2020. Helps the user find the best city to live in based on choices they make within the app. Created using Python with Streamlit Framework, and deployed with AWS (Amazon EC2)."
                    img = {findMyCity}
                    imgName = "findMyCity"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/Zamzam95-coder/FindMyCity", "https://devpost.com/software/find-my-city"]}
                    />
                  </div>
                </div>
                <div className = "row">
                  <div className = "col-lg">
                      <Project name = "Go Go Girl"
                      date = "Sept. 2020"
                      desc = "Video game developed in a team of four, within 36 hours, for ShellHacks 2020. Purpose of this game is to show the impact social media can have on mental health. Created using Unity and C#."
                      img = {gogogirl}
                      imgName = "gogogirl"
                      logos = {[githubLogo, devpostLogo]}
                      links = {["https://github.com/Zamzam95-coder/GoGoGirl", "https://devpost.com/software/go-go-girl"]}
                      />
                  </div>
                  <div className = "col-lg">
                    <Project name = "Stockify"
                    date = "May 2020"
                    desc = "Web application developed in a team of four, within 24 hours, for TOHacks 2020. Stockify is a web application that is designed to help its users make the right decisions when investing in the stock market, using only data from the pandemic. Back-end was created using Python with Django framework, and front-end was made using HTML, CSS, and Bootstrap."
                    img = {stockify}
                    imgName = "stockify"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/Zamzam95-coder/Stockify", "https://devpost.com/software/stocker-kw70ue"]}
                    />
                  </div>
                </div>
                <h1> Built by Zahid Mirza </h1>
                <h2> Version 1.1 </h2>
              </div>
            </div>
        </section>
        </div>
      </div>
  );
}

export default App;
