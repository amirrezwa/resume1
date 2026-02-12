import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    sr.reveal('.project-box', { interval: 200 })
    sr.reveal('.top-header', {})
  }, [])

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>10+ Finished Projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-users-alt"></i>
          <h3>Clients</h3>
          <label>25+ Happy Clients</label>
        </div>
        <div className="project-box">
          <i className="uil uil-award"></i>
          <h3>Experience</h3>
          <label>2+ Years in the field</label>
        </div>
      </div>
    </section>
  )
}

export default Projects

