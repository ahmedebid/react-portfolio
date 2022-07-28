export default function HeroSection() {
    return(
        <section className="hero-section">
            <img src="memoji-round.png" alt="Memoji face"/>
            <div className="hello-phrase">
                <h3>Hi, I'm Ahmed Ebid</h3>
                <img src="waving-hand.png" alt="Waving Hand" width="70" height="70"/>
            </div>
            <p>
                I'm a <span>front-end engineer</span> who builds responsive, accessible, and performant user experiences on the web.
            </p>
            <div className="hero-buttons">
                <button className="hero-contact-btn">Contact</button>
                <button className="hero-cv-btn">Download résumé →</button>
            </div>
        </section>
    );
}