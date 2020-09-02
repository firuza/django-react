import React from 'react'
import SkillsList from './SkillsList'

const MyCards = (props) => {

    return (
        <div className="card">
            <div className ="content">
                <div className= "center aligned header">
                    {props.skills.name}
                </div>
                <div classname="center aligned">
                    <SkillsList skills={props.skills.skills} />
                </div>
            </div>
        </div>
    )
}

export default MyCards