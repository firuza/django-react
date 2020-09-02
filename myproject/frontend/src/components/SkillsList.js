import React from 'react';

const SkillsList = (props) => {
    return (
        <ul>
            {props.skills.map(skill => (
                <li key={skill}>
                    {skill}
                </li>  
            ))}
        </ul>
    )
}

export default SkillsList;
