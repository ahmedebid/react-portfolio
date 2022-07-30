export default function HeroSection() {
    return(
        <section className="hero-section">
            <img className="memoji-hero" src="memoji-hero.png" alt="Memoji working on a laptop"/>
            <div className="hello-phrase">
                <h3>Hi, I'm Ahmed Ebid</h3>
                <img src="waving-hand.png" alt="Waving Hand" width="70" height="70"/>
            </div>
            <p>
                I'm a <span>front-end engineer</span> who builds responsive, accessible, and performant user experiences on the web.
            </p>
            <div className="hero-buttons">
                <button onClick={() => document.getElementById("contact-sec").scrollIntoView()} className="hero-contact-btn">Contact</button>
                <a className="hero-cv-btn" href=".">Download résumé →</a>
            </div>
        </section>
    );
}