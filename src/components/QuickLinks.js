import { Link } from "react-router-dom";

import "./css/QuickLinks.css";

const QuickLinks = (props) => {
    return (
        <div className="quicklinks">
            <p className="d-none d-sm-block">
                <i className="fas fa-external-link-alt"></i>
                {props.external ? (
                    <span>
                        &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;<Link to="/">Home</Link>
                    </span>
                ) : (
                    ""
                )}
                {props.links.map((link) => {
                    return (
                        <span key={link.link}>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            {link.link.includes("://") ? (
                                <a target="blank" href={link.link}>
                                    {link.name}
                                </a>
                            ) : (
                                <Link to={"/" + link.link}>{link.name}</Link>
                            )}
                        </span>
                    );
                })}
            </p>
            <div className="row d-sm-none">
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-external-link-alt quicklinks-iul"></i>
                    </div>
                    <div className="col-11">
                        <ul className="quicklinks-iul">
                            {props.external ? (
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            ) : (
                                ""
                            )}
                            {props.links.map((link) => {
                                return (
                                    <li key={link.link}>
                                        {link.link.includes("://") ? (
                                            <a target="blank" href={link.link}>
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={"/" + link.link}>{link.name}</Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
