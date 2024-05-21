import { Col } from "react-bootstrap"
import githubSVG from '../assets/img/githubIcon.svg';
import demoSVG from '../assets/img/demoproj.svg';

export const ProjectCard = ({title, description, imgUrl, linkUrl, linkUrl2}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div className="proj-icons">
            <a href={linkUrl} target="_blank"><img src={githubSVG} alt="githubPage" /></a>
            <a href={linkUrl2} target="_blank"><img src={demoSVG} alt="demoPage" /></a>
            </div>
        </Col>
    )
}