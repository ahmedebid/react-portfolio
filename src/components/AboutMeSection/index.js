import Tech from "./Tech";
import { skillsData, toolsData } from "../../data";
import { nanoid } from "nanoid";

const skillElements = skillsData.map(item =>
    <Tech 
        key={nanoid()}
        item={item}
    />
);

const toolElements = toolsData.map(item =>
    <Tech 
        key={nanoid()}
        item={item}
    />
);

export default function AboutMeSection() {
    return(
        <section id="about-sec" className="about-me-section">
            <h2>About Me</h2>
            <div className="about-me-details">
                <div className="about-me-col-1">
                    <p><b>I'm Ahmed, a front-end engineer living in the beautiful coastal city of Alexandria in Egypt 🌅.</b><br/><br/>I'm passionate about bringing digital products to life and creating engaging online experiences that put the user needs first and foremost. I hold B.Sc. and M.Sc. degrees in engineering.<br/><br/>My passion for web development started at a young age where I built my first website when I was 15 years old. However, I spent a couple of years, after graduating from university, in a different career path working in academia and preparing to be a professor 😅, but then I realized that my true passion is for technology and web development, and I made the transition back to what I loved 👨🏻‍💻❤️.<br/><br/>If I'm not coding, you'll find me reading a book 📖, listening to a podcast 🎧, or enjoying a walk by the sea 🌊.</p>
                    <div className="skills-and-tools" id="skills">
                        <h4>Skills</h4>
                        <div className="tech-list">
                            {skillElements}
                        </div>
                        <h4>Tools</h4>
                        <div className="tech-list">
                            {toolElements}
                        </div>
                    </div>
                    <div className="fun-fact-card-small-screen">
                        <div className="fun-fact-heading">
                            <h5>Fun fact!</h5>
                            <img className="cowboy-face-icon" src="cowboy-hat-face.png" alt="cowboy hat face" />
                        </div>
                        <p> I built my first website (<a href="https://www.techtarget.com/searchmobilecomputing/definition/WAP" target="_blank" rel="noreferrer noopener">WAP</a> site to be more accurate 😄) in 2007 using a Nokia 6070 mobile phone which had a 1.8" display!</p>
                    </div>
                </div>

                <div className="about-me-col-2">
                    <img className="memoji-about" src="memoji-about.png" alt="Memoji raising his hands" />
                    <div className="fun-fact-card">
                        <div className="fun-fact-heading">
                            <h5>Fun fact!</h5>
                            <img className="cowboy-face-icon" src="cowboy-hat-face.png" alt="cowboy hat face" />
                        </div>
                        <p> I built my first website (<a href="https://www.techtarget.com/searchmobilecomputing/definition/WAP" target="_blank" rel="noreferrer noopener">WAP</a> site to be more accurate 😄) in 2007 using a Nokia 6070 mobile phone which had a 1.8" display!</p>
                    </div>
                </div>
            </div>
        </section>   
    );
}