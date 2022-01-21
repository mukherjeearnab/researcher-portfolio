import "./css/Journals.css";

const Journals = (props) => {
    return (
        <div id="Journals" className="journals">
            <h3>Journals &amp; Book Chapters</h3>
            <ol>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5>
                                <a className="journal-title" target="blank" href={item.link}>
                                    {item.title}
                                </a>
                            </h5>
                            <span className="journal-author">
                                <i className="fas fa-user-friends"></i>&nbsp;
                                {item.authors.map((item, index, arr) => {
                                    if (index === 0) return item;
                                    else if (index === arr.length - 1) return ` & ${item}`;
                                    else return `, ${item}`;
                                })}
                            </span>
                            <br />
                            <span className="journal-name">
                                <i className="fas fa-newspaper"></i>
                                &nbsp;&nbsp;&nbsp;
                                {item.journal}
                            </span>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            <span className="journal-volume">Volume {item.volume}</span>
                            {item.publisher && item.publisher.length > 0 ? (
                                <span>
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                    <span className="journal-publisher">{item.publisher}</span>
                                </span>
                            ) : (
                                ""
                            )}
                            {item.year && item.year > 0 ? (
                                <span>
                                    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                    <span className="journal-year">{item.year}</span>
                                </span>
                            ) : (
                                ""
                            )}
                            &nbsp;
                            <span className="journal-status">{item.status.length > 0 ? `(${item.status})` : ""}</span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Journals;
