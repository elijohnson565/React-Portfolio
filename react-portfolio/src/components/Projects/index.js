import React from 'react'
import cmntImg from "../../assets/cmnt img.PNG";
import readMeImg from "../../assets/readme-gen.PNG"
import covidByCountryImg from "../../assets/covid-by-country.PNG"
function Projects(){
    return (
        <section className="my-work" id="my-work">
            <h1 className="sections">My Work</h1>
            <div className="projects text-color">
                <h1>cmnt.</h1>
                <a href="https://cmnt-project.herokuapp.com/"><img src={cmntImg} alt="" /></a>
                <p className="text-color desc">cmnt. was the product of the second group project I did in the bootcamp. I mostly worked on the back-end, setting up routes and fixing bugs as we went. cmnt. is a simple forum type website where users can make an account, post topics or questions that they find interesting, and comment on other peoples topics with their opinions and ideas.</p>
            </div>
            <div className="projects text-color">
                <h1>Readme Generator</h1>
                <a href="https://github.com/elijohnson565/CLI-Readme-generator"><img src={readMeImg} alt="" /></a>
                <p className="text-color desc">This CLI Readme Generator harnesses the power of nodejs and the inquirer package to get user input from the command line and turn it into a readme file for your project!</p>
            </div>
            <div className="projects text-color">
                <h1>Covid By Country</h1>
                <a href="https://elijohnson565.github.io/Covid-By-Country/"><img src={covidByCountryImg} alt="" /></a>
                <p className="text-color desc">Covid By Country is a website that allows you to search for a country, and receive accurate, current data on the Covid19 pandemic in that country. You can see the current death total since 2020, the current case total, and total global cases</p>
            </div>
       
        </section>
    )
}
export default Projects;