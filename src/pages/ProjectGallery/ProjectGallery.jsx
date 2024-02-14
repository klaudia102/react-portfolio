import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectGallery.css'
import Project from '../../components/Project/Project';
// A list of projects (Challenges or Projects). For each project, make sure you have the following:
//  Project title
//  Link to the deployed version
//  Link to the GitHub repository
//  GIF or screenshot of the deployed application
// Must render dynamically 6 instances of the Project component
//  Be sure to store your project data in a JSON file and import it into your project

const projects = [
    {
        title: 'Wordsmith',
        deploy:'https://klaudia102.github.io/WordSmith/',
        repo: 'https://github.com/klaudia102/WordSmith',
        screenshot: 'public/wordsmith',
    },
    {
        title: 'Team Profile Generator',
        deploy:'https://klaudia102.github.io/Team-Profile-Generator/',
        repo: 'https://github.com/klaudia102/Team-Profile-Generator',
        screenshot: 'public/team-profile-generator',
    },
    {
        title: 'Generate ReadMe.md',
        deploy:'https://klaudia102.github.io/Team-Profile-Generator/',
        repo: 'https://github.com/klaudia102/generatorREADME.md',
        screenshot: 'public/generate Readme.md',
    },
    {
        title: 'password-generator',
        deploy:'https://klaudia102.github.io/password-generator/',
        repo: 'https://github.com/klaudia102/password-generator',
        screenshot: 'public/password-generator',
    },
    {
        title: 'Klaudia-portfolio',
        deploy:'https://klaudia102.github.io/Klaudia-portfolio/',
        repo: 'https://github.com/klaudia102/Klaudia-portfolio',
        screenshot: 'public/Klaudia-portfolio',
    },
    {
        title: 'Bootstrap-portfolio',
        deploy:'https://klaudia102.github.io/Bootstrap-Portfolio/',
        repo: 'https://github.com/klaudia102/Bootstrap-Portfolio',
        screenshot: 'public/Bootstrap-Portfolio',
    }
]

function ProjectGallery() {
    return (
        <>
            <div className='container-gallery'>
                <div className="container-fluid py-5 jumboCopy">
                    <h1 className="display-5 fw-bold">My projects</h1>
                    <h2>Would you like to see your dream website here...?</h2>
                </div>
                <div className='gallery-space'>
                    {/* <div class="card gallery-card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text
                                to build on the card title and make up the bulk of the card's content.</p>
                            <div button-container>
                                <a href="#" className="btn btn-primary deploy">Webside</a>
                                <a href="#" className="btn btn-primary repo">Repo</a>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default ProjectGallery;