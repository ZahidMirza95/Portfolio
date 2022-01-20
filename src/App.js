import Project from './Project';
import React, { useState } from 'react';
import "./App.css";

/* Logos */
import linkedIn from './images/linked_in_logo.png';
import github from './images/github_logo_new.png';
import devpost from './images/devpost_logo.png';
import itchio from './images/itchio_logo.png';
import resume from './images/resume_bg_new.png';
//import urlImage from './images/url_image.png';

/* Programming Languages Logos */
import csharp from './images/csharp_logo.png';
import java from './images/java_logo.png';
import javascript from './images/javascript_logo.png';
import python from './images/python_logo.png';
import visualbasic from './images/visual_basic.png';

/* Project Images  */
import portfolio from './images/personal_website.png';
import cosmic from './images/Cosmic_Samurai_1.png';
import findMyCity from './images/FindMyCity_HeatMap.png';
import gogogirl from './images/Gogogirl_Game_Real.png';
import hobbyhub from './images/hobbyhubquest.jpg';
import cryptotrader from './images/cryptoTrader.png';
//import savingsapp from './images/cryptoTrader.png';
//import cyberfunk from './images/cyberfunk_gameplay.png';

function App() {
  /* NAVBAR states */
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
  /*var urlLogo = {
    img: urlImage,
    alt: "github"
  }*/
  
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
            <p data-aos = "fade-up" data-aos-duration="1000"> Hello there! My name is Zahid Mirza and I am a Software Engineering student
            at McMaster University. I really enjoy learning 
            new programming languages and solving problems using code. I'm very passionate about web 
            development, video game development, and intelligent automation. In my spare time I work on 
            personal coding projects, play golf, and play video games. </p>
            <div className = "row">
              <div className = "col">
                <a href = "https://www.linkedin.com/in/mirzazahid/"><img src = {linkedIn} alt = "linkedIn" className = "linkedIn"></img></a>
                <h2> LinkedIn </h2>
              </div>
              <div className = "col">
                <a href = "https://github.com/ZahidMirza95"><img src = {github} alt = "github" className = "github"></img></a>
                <h2> GitHub </h2>
              </div>
              <div className = "col">
                <a href = "https://drive.google.com/file/d/1cLorCrXsFpuw3HPluIqcHTXS-9tLDLOD/view?usp=sharing"><img src = {resume} alt = "resume" className = "resume"></img></a>
                <h2> Resume </h2>
              </div>
            </div>
            <h3> PROGRAMMING LANGUAGES </h3>
            <div className = "row">
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
              <div className = "col">
                <img className = "language" src = {visualbasic} alt = "visualbasic"/>
                <h3> Visual Basic </h3>
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
                    <Project name = "CryptoTrader"
                    date = "Sept. 2021"
                    desc = "A web application created within a team of four for ShellHacks 2021. It's a platform that allows its users to actively view and trade cryptocurrencies. Created using Python with Streamlit. Cryptocurrency data was obtained via CoinGecko API and trading was done through the CoinRoutes API."
                    img = {cryptotrader}
                    imgName = "cryptotrader"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/ZahidMirza95/shellhacksnew2021", "https://devpost.com/software/cryptotrader-4t8z5a"]}
                    />
                  </div>
                  <div className = "col-lg">
                    <Project name = "HobbyHub"
                    date = "Jan. 2021"
                    desc = "A web application created within a team of three for Hack the North 2020++. It provides a hobby for the user to try out by analyzing their responses, using the K-Means clustering algorithm, to various personality-based questions. The application also provides them with some other users to connect with so that they can learn the hobby together. Created using the React.js library and Bootstrap."
                    img = {hobbyhub}
                    imgName = "hobbyhub"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/minericpark/hobbyapp", "https://devpost.com/software/hobbyhub"]}
                    />
                  </div>
                </div>
                <div className = "row">
                  <div className = "col-lg">
                    <Project name = "Portfolio"
                    date = "Dec. 2020 - Present"
                    desc = "A portfolio that shows off some more information about me and the various projects that I've worked on. Currently on the first version of the website, plan to update it even further later on. Created using HTML, CSS, Bootstrap, and JavaScript with the React.js library."
                    img = {portfolio}
                    imgName = "portfolio"
                    logos = {[githubLogo]}
                    links = {["https://github.com/ZahidMirza95/Portfolio"]}
                    />
                  </div>
                  <div className = "col-lg">
                    <Project name = "Cosmic Samurai" 
                    date = "Nov. 2020 - Dec. 2020"
                    img = {cosmic}
                    desc = "A video game I created in a team of three for GitHub Game Jam 2020. It's a 2D platformer with a simple combat system and a very unique teleportation mechanic. Created using Unity and C#."
                    imgName = "cosmic"
                    logos = {[githubLogo, itchioLogo]}
                    links = {["https://github.com/ZahidMirza95/Cosmic-Samurai", "https://itch.io/jam/game-off-2020/rate/840159"]}
                    />
                  </div>
                </div>
                <div className = "row">
                <div className = "col-lg">
                    <Project name = "FindMyCity"
                    date = "Oct. 2020"
                    desc = "A web application created in a team of three for TAMU Datathon 2020. Helps the user find the best city to live in based on choices they make within the app. Created using Python with Streamlit Framework, and deployed with AWS (Amazon EC2)."
                    img = {findMyCity}
                    imgName = "findMyCity"
                    logos = {[githubLogo, devpostLogo]}
                    links = {["https://github.com/ZahidMirza95/FindMyCity", "https://devpost.com/software/find-my-city"]}
                    />
                  </div>
                  <div className = "col-lg">
                      <Project name = "Go Go Girl"
                      date = "Sept. 2020"
                      desc = "Video game developed in a team of four for ShellHacks 2020. Purpose of this game is to show the impact social media can have on mental health. Created using Unity and C#."
                      img = {gogogirl}
                      imgName = "gogogirl"
                      logos = {[githubLogo, devpostLogo]}
                      links = {["https://github.com/ZahidMirza95/GoGoGirl", "https://devpost.com/software/go-go-girl"]}
                      />
                  </div>
                </div>
                <h1> Built by Zahid Mirza </h1>
                <h2> Version 1.14 </h2>
              </div>
            </div>
        </section>
        {/* WORK IN PROGRESS */}
        {/*<section>
          <h1> THIS SECTION IS WIP </h1>
          <div className = "work">
            <h1 data-aos="fade-in" data-aos-duration="2000"> WORK EXPERIENCE </h1>
          </div> 
        </section>*/}
        </div>
      </div>
  );
}

export default App;
