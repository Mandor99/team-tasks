import React from 'react'

function ProjectDetails() {
    return (
        <div className='projectDetails tasks'>
            <div className="container">
                <div className='row'>
                    <div className="col s12">
                        <div className="card white darken-1">
                            <div className="card-content">
                                <h3 className="card-title tasks__heading">test title</h3>
                                <p>posted by test</p>
                                <small>at this time</small>
                            </div>
                            <div className="card-action grey lighten-3">
                                <p> posted by ....</p>
                                <p> date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
