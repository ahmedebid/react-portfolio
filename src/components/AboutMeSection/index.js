import Skill from "./Skill";
import { skillsData } from "../../data";
import { nanoid } from "nanoid";

const skillElements = skillsData.map(item =>
    <Skill 
        key={nanoid()}
        item={item}
    />
)

export default function AboutMeSection() {
    return(
        <section id="about-sec" className="about-me-section">
            <div className="about-me-details">
                <h2>About Me</h2>
                <p>I’ve always been interested in tech since a young age but life had a different plan for me and I pursued a career in engineering education. In 2020, I decided to change my career and gave web development a try and since then I never looked back.</p>
                <h4>Skills</h4>
                <div className="skills-list">
                    {skillElements}
                </div>
            </div>

            <div className="about-me-img">
                <img src="memoji-about.png" alt="Memoji waving his hands" />
            </div>
        </section>   
    );
}