import ProjectCard from "./ProjectCard";
import { projectData } from "../../data";
import { nanoid } from "nanoid";

const projectCards = projectData.map(project => 
    <ProjectCard 
        key={nanoid()} 
        project={project} 
    />
);

export default function ProjectsSection() {
    return(
        <section id="projects-sec" className="projects-section">
            <div className="projects-sec-heading">
                <h2>Latest Projects</h2>
                <img src="sparkles.png" alt="sparkles" width="60px" height="60px"/>
            </div>
            <div className="projects-list">
                {projectCards}
            </div>
        </section>
    );
}