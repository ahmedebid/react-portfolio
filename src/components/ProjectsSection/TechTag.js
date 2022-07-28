export default function TechTag(props) {

    let tagColor;

    if (props.tech === "React") {
        tagColor = "#38BDF8";
    } else if (props.tech === "Rest API") {
        tagColor = "#F43F5E";
    } else if (props.tech === "HTML") {
        tagColor = "#E34C26";
    } else if (props.tech === "CSS") {
        tagColor = "#214CE5";
    } else if (props.tech === "JS") {
        tagColor = "#FCDC00";
    } else {
        tagColor = "#000";
    }


    return (
        <div style={{backgroundColor: tagColor}} className="tech-tag">
            <p>{props.tech}</p>
        </div>
    );
}