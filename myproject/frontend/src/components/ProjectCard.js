import React from 'react'
import { Button, Card } from 'react-bootstrap';

const ProjectCard = () => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Project Title</Card.Title>
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