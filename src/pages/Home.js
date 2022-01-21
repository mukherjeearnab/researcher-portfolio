import { useState, useEffect } from "react";

import Quicks from "../components/Quicks";
import ResearchAndPublications from "../components/ResearchAndPublications";
import NewsUpdates from "../components/NewsUpdates";
import Education from "../components/Education";
import Projects from "../components/Projects";
import ScholarGuiding from "../components/ScholarGuiding";
import PGStudentGuiding from "../components/PGStudentGuiding";
import Teaching from "../components/Teaching";
import ShortTermCourse from "../components/ShortTermCourse";
import ProfessionalActivities from "../components/ProfessionalActivities";

const Home = () => {
    const [links, setLinks] = useState([]);
    const [research, setResearch] = useState({ paragraph: "", items: [""] });
    const [news, setNews] = useState([{ date: "", content: "" }]);
    const [education, setEducation] = useState([""]);
    const [projects, setProjects] = useState([]);
    const [scholarGuiding, setScholarGuiding] = useState([]);
    const [pgStudentGuiding, setPGStudentGuiding] = useState([]);
    const [teaching, setTeaching] = useState([]);
    const [shortTermCourse, setShortTermCourse] = useState([]);
    const [professionalActivities, setProfessionalActivities] = useState({
        MemberOfProfessionalBodies: [],
        ConferenceSessionChair: [],
        ProgramCommitteeMember: [],
        JournalReviewer: [],
        ConferenceReviewer: [],
    });

    useEffect(() => {
        // GET QuickLinks
        fetch("/data/QuickLinks.json")
            .then((res) => res.json())
            .then((content) => setLinks(content.Home));
    }, []);

    useEffect(() => {
        // GET Research And Publications
        fetch("/data/ResearchAndPublications.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setResearch(content);
            });
    }, []);

    useEffect(() => {
        // GET News Updates
        fetch("/data/NewsUpdates.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setNews(content);
            });
    }, []);

    useEffect(() => {
        // GET Education
        fetch("/data/Education.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setEducation(content);
            });
    }, []);

    useEffect(() => {
        // GET Projects
        fetch("/data/Projects.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setProjects(content);
            });
    }, []);

    useEffect(() => {
        // GET Scholar Guiding
        fetch("/data/ScholarGuiding.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setScholarGuiding(content);
            });
    }, []);

    useEffect(() => {
        // GET PG Student Guiding
        fetch("/data/PGStudentsGuiding.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setPGStudentGuiding(content);
            });
    }, []);

    useEffect(() => {
        // GET Teaching
        fetch("/data/Teaching.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setTeaching(content);
            });
    }, []);

    useEffect(() => {
        // GET Teaching
        fetch("/data/ShortTermCourse.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setShortTermCourse(content);
            });
    }, []);

    useEffect(() => {
        // GET Professional Activities
        fetch("/data/ProfessionalActivities.json")
            .then((res) => res.json())
            .then((content) => {
                // console.log(content);
                setProfessionalActivities(content);
            });
    }, []);

    return (
        <div>
            <Quicks
                links={links}
                navs={[
                    { name: "Research & Publications", link: "#ResearchAndPublications" },
                    { name: "Education, Awards & Honours", link: "#Education" },
                    { name: "Teaching", link: "#Teaching" },
                    { name: "Professional Activities", link: "#ProfessionalActivities" },
                ]}
            />
            <div className="row simple-content">
                <div className="col-md-8">
                    <ResearchAndPublications paragraph={research.paragraph} items={research.items} />
                </div>
                <div className="col-md-4">
                    <NewsUpdates news={news} />
                </div>
                <Education items={education} />
                <Projects items={projects} />
                <ScholarGuiding items={scholarGuiding} />
                <PGStudentGuiding items={pgStudentGuiding} />
                <Teaching items={teaching} />
                <ShortTermCourse items={shortTermCourse} />
                <ProfessionalActivities items={professionalActivities} />
            </div>
        </div>
    );
};

export default Home;
