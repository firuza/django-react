import React, {useState,useEffect} from 'react';
import ProjectCard from './ProjectCard';
import projects from '../apis/projects'
import { Container, CardColumns } from 'react-bootstrap';

const Projects = () => {

    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects  = async () =>{
        const response = await projects.get('/projects/')
        setProjectInfo(response.data)
    }

    const showProjects = () => {
        return (
            <>
                <h2>Projects ({projectInfo.length})</h2>
                <Container>
                    <CardColumns>

                    {projectInfo.map(project => {
                        return (
                            <ProjectCard 
                                name={project.name}
                                description = {project.description}
                                image={project.image}
                                github={project.github}
                                demo={project.demo}
                                key={project.name}
                            />
                        )
                    })}
                    </CardColumns>
                </Container>
            </>
        )
    }

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            {showProjects()}
        </>
    )
}

export default Projects