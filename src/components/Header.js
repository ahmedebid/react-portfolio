import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return(
        <header>
            <h1><FontAwesomeIcon icon={faCode} /> Ahmed Ebid</h1>
            <nav>
                <a href=".">Home</a>
                <a href=".">Projects</a>
                <a href=".">About</a>
                <a href=".">Contact</a>
            </nav>
        </header>
    );
}