import React from 'react';
import SkillsCards from './SkillsCards'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const Skills = () => {

    const frontend = {
        name: 'Frontend', 
        skills: ['JavaScript','React/Redux','HTML','CSS','Bootstrap','SemanticUI']
    }
    const backend = {
        name: 'Backend',
        skills: ['Python', 'Django', 'AWS', 'PostgreSQL']
    }
    const gameDev = {
        name: 'Game Development',
        skills: ['Unity','Phaser','PyGame']
    }

    return (
        <>
            <h1>Skills</h1>

            <Row>
                <Col xs={4}>
                    <SkillsCards skills = {frontend} />
                </Col>
                <Col xs={4}>
                    <SkillsCards skills = {backend} />
                </Col>
                <Col xs={4}>
                    <SkillsCards skills = {gameDev} />
                </Col>                
            </Row>
        </>
    )
}

export default Skills;
