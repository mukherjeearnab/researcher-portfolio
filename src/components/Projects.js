import "./css/Projects.css";

const Projects = (props) => {
    const setCoInvestigator = (coinvestigator) => {
        if (coinvestigator && coinvestigator.length > 0) {
            return (
                <p>
                    <span className="project-block">Co-Investigators: </span>
                    {coinvestigator.map((item, index) => {
                        return (
                            <span key={index}>
                                {(() => {
                                    if (index !== 0) return <span>&bull;</span>;
                                })()}
                                &nbsp;&nbsp;{item}&nbsp;&nbsp;
                            </span>
                        );
                    })}
                </p>
            );
        }
    };
    return (
        <div className="projects">
            <h3>Sponsored Projects</h3>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>
                                <span className="project-block">Title: </span>
                                {item.title}
                            </p>
                            <p>
                                <span className="project-block">Principal Investigator: </span>
                                {item.principalInvestigator}
                            </p>
                            {setCoInvestigator(item.coInvestigators)}
                            <p>
                                <span className="project-block">Sponsored Agency: </span>
                                {item.sponsoredAgency}
                            </p>
                            <p>
                                <span className="project-block">Status: </span>
                                {item.status}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Projects;
