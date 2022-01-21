import "./css/ScholarGuiding.css";

const ScholarGuiding = (props) => {
    const setBroadArea = (broadArea) => {
        if (broadArea && broadArea.length > 0)
            return (
                <p>
                    <span className="scholar-block">Broad Area: </span>
                    {broadArea}
                </p>
            );
    };

    const setThesis = (thesis) => {
        if (thesis && thesis.title.length > 0)
            return (
                <p>
                    <span className="scholar-block">Thesis: </span>
                    <a href={thesis.link}>{thesis.title}</a>
                </p>
            );
    };

    const setStatus = (status) => {
        if (status && status.length > 0)
            return (
                <p>
                    <span className="scholar-block">Status: </span>
                    {status}
                </p>
            );
    };

    return (
        <div className="scholars">
            <h3>Research Scholars Guided/Guiding</h3>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <p className="scholar-name">{item.name}</p>
                            {setBroadArea(item.broadArea)}
                            {setThesis(item.thesis)}
                            {setStatus(item.status)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ScholarGuiding;
