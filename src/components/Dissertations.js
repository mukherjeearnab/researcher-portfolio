import "./css/Dissertations.css";

const Dissertations = (props) => {
    return (
        <div id="Dissertation" className="dissertations">
            <h3>Ph.D. Dissertation</h3>
            <ol>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5>
                                <a className="dissertation-title" target="blank" href={item.link}>
                                    {item.title}
                                </a>
                            </h5>
                            <span className="dissertation-author">
                                <i className="fas fa-user"></i>
                                &nbsp;
                                {item.authors.map((item, index, arr) => {
                                    if (index === 0) return item;
                                    else if (index === arr.length - 1) return ` & ${item}`;
                                    else return `, ${item}`;
                                })}
                            </span>
                            <br />
                            <span className="dissertation-department">
                                <i className="fas fa-university"></i>
                                &nbsp;&nbsp;
                                {item.department},&nbsp;{item.university}
                            </span>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            <span className="dissertation-date">{item.date}</span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Dissertations;
