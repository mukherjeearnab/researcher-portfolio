import "./css/ShortTermCourse.css";

const ShortTermCourse = (props) => {
    return (
        <div className="short-term-course">
            <h3>Short-term Courses</h3>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default ShortTermCourse;
