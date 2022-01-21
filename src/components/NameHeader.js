import { useState, useEffect } from "react";

import "./css/NameHeader.css";

const NameHeader = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        // GET QuickLinks
        fetch("/researcher-portfolio/data/NameHeader.json")
            .then((res) => res.json())
            .then((content) => setInfo(content));
    }, []);

    return (
        <div className="Name-Heading">
            <h2>{info.name}</h2>
            <h5>{info.department}</h5>
            <h6>{info.institute}</h6>
            <p>
                <i className="fas fa-envelope-open-text"></i> {info.email}
            </p>
        </div>
    );
};

export default NameHeader;
