import "./css/QuickLinks.css";

const QuickLinks = (props) => {
    return (
        <div className="quicklinks">
            <p className="d-none d-sm-block">
                <i className="fas fa-directions"></i>
                &nbsp;
                {props.navs.map((nav) => {
                    return (
                        <span key={nav.link}>
                            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                            <a href={nav.link}>{nav.name}</a>
                        </span>
                    );
                })}
            </p>
            <div className="row d-sm-none">
                <div className="col-1">
                    <i className="fas fa-directions quicklinks-iul"></i>
                </div>
                <div className="col-11">
                    <ul className="quicklinks-iul">
                        {props.navs.map((nav) => {
                            return (
                                <li key={nav.link}>
                                    <a href={nav.link}>{nav.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
