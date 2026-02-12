import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'

const Home = () => {
  const typedElementRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    if (typedElementRef.current) {
      typedInstanceRef.current = new Typed(typedElementRef.current, {
        strings: ['Developer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
      })
    }

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    sr.reveal('.featured-text-card', {})
    sr.reveal('.featured-name', { delay: 100 })
    sr.reveal('.featured-text-info', { delay: 200 })
    sr.reveal('.featured-text-btn', { delay: 200 })
    sr.reveal('.social_icons', { delay: 200 })
    sr.reveal('.featured-image', { delay: 300 })
  }, [])

  const handleScrollDown = (e) => {
    e.preventDefault()
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>AmirReza Noori</span>
        </div>
        <div className="featured-name">
          <p>I'm <span className="typedText" ref={typedElementRef}></span></p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually stunning
            and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire Me</button>
          <button className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <a
            href="https://instagram.com/amirrezwanoori"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="mailto:amirrezwanoori@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-dribbble"></i>
          </a>
          <a
            href="https://github.com/amirrezwa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="/assets/images/5924750374168808283.jpg" alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn" onClick={handleScrollDown}>
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  )
}

export default Home

