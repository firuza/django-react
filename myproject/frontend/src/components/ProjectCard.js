import React from 'react'
import { Card } from 'react-bootstrap';
import logo from '../logo.svg';

const ProjectCard = (props) => {
    return (

        <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>{props.name}</Card.Header>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Link href={props.github}>Code</Card.Link>
                <Card.Link href={props.demo}>Demo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard