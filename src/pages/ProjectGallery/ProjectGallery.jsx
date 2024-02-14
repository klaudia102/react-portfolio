import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectGallery.css'


function ProjectGallery() {
    return (
        <>
            <div className='container-gallery'>
                <div className="container-fluid py-5 jumboCopy">
                    <h1 className="display-5 fw-bold">My projects</h1>
                    <h2>Would you like to see your dream website here...?</h2>
                </div>
                <div className='gallery-space'>
                    <div class="card gallery-card">
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
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectGallery;