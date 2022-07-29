import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return(
        <header>
            <h1><FontAwesomeIcon icon={faCode} /> Ahmed Ebid</h1>
            <nav>
                <a href="#projects-sec">Projects</a>
                <a href="#about-sec">About</a>
                <a href="#contact-sec">Contact</a>
            </nav>
        </header>
    );
}