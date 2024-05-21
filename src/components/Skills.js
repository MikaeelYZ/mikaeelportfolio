import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ninetyFivePer from "../assets/img/ninetyFive.svg";
import eightyPer from "../assets/img/ninety.svg";
import ninetyPer from "../assets/img/eighty.svg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Some of the skills I've gained from a JustIT 12-week intensive course, as well as skills I've picked up in University and working in Retail. Further details can be found in my CV at the top of the page or you can feel free to contact me down below.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={ninetyFivePer} alt="95percent"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={ninetyPer} alt="90percent"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={eightyPer} alt="80percent"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={eightyPer} alt="80percent"/>
                                <h5>AutoCAD</h5>
                            </div>
                            <div className="item">
                                <img src={eightyPer} alt="80percent"/>
                                <h5>Excel</h5>
                            </div>
                            <div className="item">
                                <img src={ninetyFivePer} alt="95percent"/>
                                <h5>Customer Service</h5>
                            </div>
                            <div className="item">
                                <img src={ninetyFivePer} alt="95percent"/>
                                <h5>Team Work</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}
        </section>
    )
}