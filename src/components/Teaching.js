import "./css/Teaching.css";

const Teaching = (props) => {
    return (
        <div id="Teaching" className="teaching">
            <h3>Teaching</h3>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <p className="teaching-title">{item.title}</p>
                            <p className="teaching-time">{item.time}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Teaching;
