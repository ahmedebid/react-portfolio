import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <footer id="contact-sec">
            <h2>Contact Me</h2>
            <div className="contact-details">
                <div className="contact-info">
                    <p>Do you have an idea in mind?</p>
                    <div className="catchy-phrase">
                        <p>Let's build it together!</p>
                        <img className="rocket-icon" src="rocket.png" alt="rocket"/>
                    </div>
                    <address>
                        <a className="email" href="mailto:ahmed-ebid@outlook.com">ahmed-ebid@outlook.com</a><br/>
                        <div className="social-icons-container">
                            <a href="https://twitter.com/ebid33" target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon className="social-icon" icon={faSquareTwitter} />
                            </a>
                            <a href="https://github.com/ahmedebid" target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon className="social-icon" icon={faSquareGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/ahmedebid/" target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                            </a>
                        </div>
                    </address>
                </div>

                <div className="contact-img">
                    <img src="memoji-footer.png" alt="Memoji doing 'call me' gesture" />
                </div>
            </div>
        </footer>
    );
}