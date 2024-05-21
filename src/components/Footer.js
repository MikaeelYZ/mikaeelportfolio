import { Col, Container, Row } from "react-bootstrap"
import myLogo from '../assets/img/MikaeelYZ.svg';
import githubSVG from '../assets/img/githubIcon.svg';
import linkedInSVG from '../assets/img/linkedinIcon.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={myLogo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=''><img src={githubSVG} /></a>
                            <a href=''><img src={linkedInSVG} /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved MikaeelYZ</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}