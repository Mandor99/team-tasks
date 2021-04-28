import React from 'react'
import './tasks.css'
import {useSelector} from 'react-redux'

function Tasks() {
    const projects = useSelector(state => state.projects.projects)
    const task = () => (
        projects && projects.map(({id, title, content}) => (
            <div className="col s12" key={id}>
            <div className="card white darken-1">
                <div className="card-content">
                    <h3 className="card-title tasks__heading">{title}</h3>
                    <p>{content}</p>
                    <small>at this time</small>
                </div>
            </div>
        </div>
        ))
    )
    return (
        <section className='tasks'>
            <div className="row">
                {task()}
                {/* {task()} */}
            </div>
        </section>
    )
}

export default Tasks
