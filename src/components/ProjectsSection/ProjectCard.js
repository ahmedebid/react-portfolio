import TechTag from "./TechTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

export default function Project(props) {

    const techStackElements = props.project.techStack.map(tech => 
        <TechTag 
            key={nanoid()} 
            tech={tech} 
        />
    )

    return(
        <div className="project-card">
            <h4>{props.project.name}</h4>
            <div className="tech-tag-list">
                {techStackElements}
            </div>
            <div className="project-SS">
                <img src={props.project.img} alt="project screenshot"/>
            </div>
            <div className="project-description">
                <p>{props.project.descr}</p>
            </div>
            <div className="project-links">
                <a href={`https://github.com/ahmedebid/${props.project.githubRepo}`} target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGithub} />
                    &#160;GitHub Repo
                </a>
                <a href={`https://ahmedebid.github.io/${props.project.githubRepo}`} target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGlobe} />
                    &#160;Live Version
                </a>
            </div>
        </div>
    );
}