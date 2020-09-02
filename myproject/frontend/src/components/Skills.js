import React from 'react';
import SkillsList from './SkillsList'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';

const Skills = () => {

    const frontend = ['JavaScript','React/Redux','HTML','CSS','Bootstrap','SemanticUI']
    const backend = ['Python', 'Django', 'AWS', 'PostgreSQL']
    const gameDev = ['Unity','Phaser','PyGame']

    return (
        <>
            <h1>Skills</h1>

            <Row>
                <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Frontend Tech Stack</Card.Title>
                            <Card.Text>
                                <SkillsList skills = {frontend}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Backend Tech Stack</Card.Title>
                            <Card.Text>
                                <SkillsList skills = {backend}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Game Development</Card.Title>
                            <Card.Text>
                                <SkillsList skills = {gameDev}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Skills;
