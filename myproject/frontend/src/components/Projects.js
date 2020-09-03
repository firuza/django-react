import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';


const Projects = () => {
    return (
        <>
            <h2>Project Component</h2>
            <Container>
                <Row>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                </Row>
                <Row>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects