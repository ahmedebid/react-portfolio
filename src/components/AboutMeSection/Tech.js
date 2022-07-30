export default function Tech(props) {

    return(
        <div className="tech">
            <div 
                /* background: bg-color bg-image position/bg-size bg-repeat; */
                style={{background: `${props.item.logoColor} url(${props.item.logoImg}) center/${props.item.logoZoom} no-repeat`}} 
                className="tech-logo"
            >
            </div>
            <h6>{props.item.tech}</h6>
        </div>
    );
}