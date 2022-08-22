export default function HeroSection() {
    return(
        <section className="hero-section">
            <div className="hello-phrase">
                <h3>Hi, I'm Ahmed Ebid!</h3>
                <img className="memoji-hero" src="memoji-hero.png" alt="Memoji waving his hands"/>
            </div>
            <p>
                I'm a <span>front-end developer</span> who builds responsive, accessible, and performant user experiences on the web.
            </p>
            <div className="hero-buttons">
                <button onClick={() => document.getElementById("contact-sec").scrollIntoView()} className="hero-contact-btn">Contact</button>
                <a className="hero-cv-btn" href="https://drive.google.com/file/d/1DBZsm54ha3_6xfOToqOF66AlvOXxW932/view?usp=sharing" target="_blank" rel="noreferrer noopener">See my resume →</a>
            </div>
        </section>
    );
}