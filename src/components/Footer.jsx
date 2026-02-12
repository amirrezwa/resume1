const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer>
      <div className="top-footer">
        <p>AmirReza .</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </a>
          </li>
          <li className="footer_menu_list">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
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
    </footer>
  )
}

export default Footer

