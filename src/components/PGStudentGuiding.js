import "./css/PGStudentGuiding.css";

const PGStudentGuiding = (props) => {
    return (
        <div className="students">
            <h3>PG Students Guided/Guiding</h3>
            <p>
                {props.items.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            {item}&nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default PGStudentGuiding;
