import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectGallery.css'


function ProjectGallery() {
    return (
        <>
            <div className='container-gallery'>
                <div>
                    <h1>My projects</h1>
                    <h3>Would you like to see your dream website here...?</h3>
                    
                </div>
                <div className='gallery-space'>
                    <div className='gallery-items'>

                        <div class="card gallery-card">
                            <img src="..." className="card-img-top" alt="..." /> 
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text 
                                to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                         </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;