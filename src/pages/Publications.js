import { useState, useEffect } from "react";

import Quicks from "../components/Quicks";
import Journals from "../components/Journals";
import Conferences from "../components/Conferences";
import Dissertations from "../components/Dissertations";

const Publications = () => {
    const [links, setLinks] = useState([]);
    const [journals, setJournals] = useState([]);
    const [conferences, setConferences] = useState([]);
    const [dissertations, setDissertations] = useState([]);

    useEffect(() => {
        // GET QuickLinks
        fetch("/data/QuickLinks.json")
            .then((res) => res.json())
            .then((content) => setLinks(content.Publications));
    }, []);

    useEffect(() => {
        // GET Journals
        fetch("/data/Journals.json")
            .then((res) => res.json())
            .then((content) => {
                setJournals(content);
            });
    }, []);

    useEffect(() => {
        // GET Conferences
        fetch("/data/Conferences.json")
            .then((res) => res.json())
            .then((content) => {
                setConferences(content);
            });
    }, []);

    useEffect(() => {
        // GET Dissertations
        fetch("/data/Dissertations.json")
            .then((res) => res.json())
            .then((content) => {
                setDissertations(content);
            });
    }, []);

    return (
        <div>
            <Quicks
                external={true}
                links={links}
                navs={[
                    { name: "Journals", link: "#Journals" },
                    { name: "Conferences", link: "#Conferences" },
                    { name: "Dissertation", link: "#Dissertation" },
                ]}
            />
            <Journals items={journals} />
            <Conferences items={conferences} />
            <Dissertations items={dissertations} />
        </div>
    );
};

export default Publications;
