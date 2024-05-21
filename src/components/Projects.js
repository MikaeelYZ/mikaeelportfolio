import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import weatherProj from "../assets/img/WeatherApp.png";
import pythonProj from "../assets/img/filmflix.png";
import sqlproj from '../assets/img/sqlProject.png';
import 'animate.css'
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects = [
        {
            title: "Weather App",
            description: "App to determine weather based on a user picked location",
            imgUrl: weatherProj,
            linkUrl: "https://github.com/MikaeelYZ/WeatherApp",
            linkUrl2: "https://mikaeelyz.github.io/WeatherApp/",
          },
          {
            title: "Python Movie Database",
            description: "Database created in Python with a Front End UI",
            imgUrl: pythonProj,
            linkUrl: "https://github.com/MikaeelYZ/Python-DB",
            linkUrl2: "http://mikaeelyz.pythonanywhere.com/",
          },
          {
            title: "MySQL Database Project",
            description: "Database for a breakdown service, with member information and query selections",
            imgUrl: sqlproj,
            linkUrl: "https://github.com/MikaeelYZ",
            linkUrl2: "https://github.com/MikaeelYZ",
          },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>Some of the projects I've completed can be found below. I worked on these projects during my time on the course, however you can find that i am continously endevouring to complete more so that i can further strengthen my understanding. Click the github icon for the source code or the screen icon for the demo.</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                 key={index}
                                                 {...project}
                                                 />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Work in Progress</Tab.Pane>
                            <Tab.Pane eventKey="third">Work in Progress</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};