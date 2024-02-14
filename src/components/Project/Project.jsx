import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Project(props) {
  return (
    <>
      <div class="card gallery-card">
        <img src={props.screenshot} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          
          <div button-container>
            <a href={props.deploy} target='blank' className="btn btn-primary deploy">Webside</a>
            <a href={props.repo} target='blank' className="btn btn-primary repo">Repo</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;
