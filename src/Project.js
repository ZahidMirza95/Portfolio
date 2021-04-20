import React from 'react';
import './App.css';

function Project(props) {
    /* This loop is meant to add a "link" property to all the logos*/
    for(var i = 0; i < props.links.length; i++) {
        props.logos[i].link = props.links[i];
    }

    const logos = props.logos;
    /* listOfImages refers to the github, devpost, and/or itchio logos that are on every project */
    const listOfImages = logos.map((image) => {
            return (
                <li key = {image.alt}><a href = {image.link}><img className = "logo-img" src = {image.img} alt = {image.alt}/></a></li>
            )
        }
    );
    return(
        <div className = "container-sm" data-aos = "fade-down-right" data-aos-duration="1000" data-aos-once="true" >
            <h1 className = "project-name"> {props.name} </h1>
            <h2 className = "project-date"> {props.date} </h2>
            <img className = {props.imgName} src = {props.img} alt = {props.name}/>
            <p className = "project-desc"> {props.desc} </p>
            <ul className = "logo-images">
                {listOfImages}
            </ul>
        </div>
    );
}

export default Project;