import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

import "./css/ResearchAndPublications.css";

const ResearchAndPublications = (props) => {
    return (
        <div id="ResearchAndPublications" className="research-and-publications">
            <h3>Research &amp; Publications</h3>
            <p>{ReactHtmlParser(props.paragraph)}</p>
            <ul>
                {props.items.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
            <br />
            <h5>
                <i className="fas fa-external-link-alt"></i>&nbsp;
                <Link to={"publications"}>Full List of Publications</Link>
            </h5>
        </div>
    );
};

export default ResearchAndPublications;
