import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <footer id="contact-sec">
            <div className="contact-info">
                <h2>Contact Me</h2>
                <p>Do you have an idea in mind?</p>
                <div className="catchy-phrase">
                    <p>Let's build it together!</p>
                    <img src="rocket.png" alt="rocket" width="70" height="70"/>
                </div>
                <address>
                    <a href="mailto:ahmed@ebid.dev">ahmed@ebid.dev</a><br/>
                    <div className="social-icons-container">
                        <a href="https://twitter.com/ebid33" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon className="social-icon" icon={faSquareTwitter} />
                        </a>
                        <a href="https://github.com/ahmedebid" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon className="social-icon" icon={faSquareGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed3yad/" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                        </a>
                    </div>
                </address>
            </div>

            <div className="contact-form">
                <img className="memoji-footer" src="memoji-footer.png" alt="Memoji doing 'call me' gesture" />
            </div>
        </footer>
    );
}