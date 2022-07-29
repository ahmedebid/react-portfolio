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
            <h2>Latest Projects</h2>
            <div className="projects-list">
                {projectCards}
            </div>
        </section>
    );
}