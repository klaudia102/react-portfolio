import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


// A list of projects (Challenges or Projects). For each project, make sure you have the following:
//  Project title
//  Link to the deployed version
//  Link to the GitHub repository
//  GIF or screenshot of the deployed application
// Must render dynamically 6 instances of the Project component
//  Be sure to store your project data in a JSON file and import it into your project
function Project(props) {
  return (
    <>
      <div class="card gallery-card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text
            to build on the card title and make up the bulk of the card's content.</p>
          <div button-container>
            <a href="#" target='blank' className="btn btn-primary deploy">Webside</a>
            <a href="#" target='blank' className="btn btn-primary repo">Repo</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;
