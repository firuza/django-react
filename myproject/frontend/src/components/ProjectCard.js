import React from 'react'
import { Card } from 'react-bootstrap';
import logo from '../logo.svg';

const ProjectCard = () => {
    return (

        <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>Project Title</Card.Header>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Text>
                    Project description
                </Card.Text>
                <Card.Link href="#">Code</Card.Link>
                <Card.Link href="#">Demo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard