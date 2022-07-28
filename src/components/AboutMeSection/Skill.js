export default function Skill(props) {

    return(
        <div className="skill">
            <div 
                /* background: bg-color bg-image position/bg-size bg-repeat; */
                style={{background: `${props.item.logoColor} url(${props.item.logoImg}) center/${props.item.logoZoom} no-repeat`}} 
                className="skill-logo"
            >
            </div>
            <h6>{props.item.skill}</h6>
        </div>
    );
}