import memojiFace from "../images/memoji-round.png";

export default function HeroSection() {
    return(
        <section className="hero-section">
            <img src={memojiFace} alt="Memoji face"/>
            <h2>Hi, I'm Ahmed Ebid 👋🏻</h2>
            <p>
                I'm a <span>front-end engineer</span> who builds beautiful, responsive, accessible, and performant user experiences on the web.
            </p>
            <div className="hero-buttons">
                <button className="hero-contact-btn">Contact</button>
                <button className="hero-cv-btn">Download résumé →</button>
            </div>
        </section>
    );
}