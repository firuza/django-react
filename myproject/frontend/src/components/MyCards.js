import React from 'react'
import SkillsList from './SkillsList'
import { Card } from 'react-bootstrap';

const MyCards = (props) => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.skills.name}</Card.Title>
                <Card.Text>
                    <SkillsList skills={props.skills.skills} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCards