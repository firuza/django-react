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

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            <h2>Project Component</h2>
            <h2>Total: {projectInfo.length}</h2>
            {console.log(projectInfo)}

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