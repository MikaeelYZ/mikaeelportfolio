import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import myLogo from '../assets/img/MikaeelYZ.svg';
import githubSVG from '../assets/img/githubIcon.svg';
import linkedInSVG from '../assets/img/linkedinIcon.svg';
import cvPdf from '../assets/CVDraft2.pdf';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={myLogo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://github.com/MikaeelYZ" target="_blank"><img src={githubSVG} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/mikaeel-zaman-1b17b0196/" target="_blank"><img src={linkedInSVG} alt="linkedin" /></a>
                    {/* <a href="#" target="_blank"><img src={navIcon3} alt="linkedin" /></a> */}
                </div>
                <a href={cvPdf} target="_blank" rel="noreferrer" className="vvd">
                    <span>View CV</span>
                </a>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}
