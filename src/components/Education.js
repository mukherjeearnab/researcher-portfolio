import "./css/Education.css";

const Education = (props) => {
    return (
        <div id="Education" className="row education">
            <h3>Education, Awards &amp; Honours</h3>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default Education;
