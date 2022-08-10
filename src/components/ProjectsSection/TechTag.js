export default function TechTag(props) {

    let tagColor;

    if (props.tech === "React") {
        tagColor = "#044662";
    } else if (props.tech === "Rest API") {
        tagColor = "#004E04";
    } else if (props.tech === "HTML") {
        tagColor = "#7A2510";
    } else if (props.tech === "CSS") {
        tagColor = "#1434A9";
    } else if (props.tech === "JavaScript") {
        tagColor = "#4D4200";
    } else {
        tagColor = "#000";
    }


    return (
        <div style={{backgroundColor: tagColor}} className="tech-tag">
            <p>{props.tech}</p>
        </div>
    );
}