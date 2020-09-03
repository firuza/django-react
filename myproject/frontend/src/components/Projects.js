import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';


const Projects = () => {
    return (
        <>
            <h2>Project Component</h2>
            <Container>
                <CardColumns>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </CardColumns>
            </Container>
        </>
    )
}

export default Projects