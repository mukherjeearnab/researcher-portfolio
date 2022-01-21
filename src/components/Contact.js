import { useState, useEffect } from "react";
import "./css/Contact.css";

const Contact = () => {
    // Change Theme
    const changeTheme = () => {
        var style = document.querySelector('link[rel="newest stylesheet"]');

        let current = style.getAttribute("href");
        if (current === "/css/LightTheme.css") {
            // Change to Dark Mode
            style.setAttribute("href", "/css/DarkTheme.css");
            changeMetaTheme(1);
            document.cookie = `theme=1;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        } else if (current === "/css/DarkTheme.css") {
            // Change to Light Mode
            style.setAttribute("href", "/css/LightTheme.css");
            changeMetaTheme(0);
            document.cookie = `theme=0;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }
    };

    // Change Chrome Meta Theme
    const changeMetaTheme = (mode) => {
        if (mode === 0) document.querySelector('meta[name="theme-color"]').content = "#fff";
        else if (mode === 1) document.querySelector('meta[name="theme-color"]').content = "#111";
    };

    // SET Theme based on cookie value
    useEffect(() => {
        let theme =
            document.cookie.length > 0
                ? document.cookie
                      .split("; ")
                      .find((row) => row.startsWith("theme="))
                      .split("=")[1]
                : undefined;
        if (theme && theme === "1") changeTheme();
    });

    // Contact Fetch
    const [contact, setContact] = useState({ office: { address: "", phone: "" }, lab: { address: "", phone: "" } });
    useEffect(() => {
        // GET QuickLinks
        fetch("/researcher-portfolio/data/Contact.json")
            .then((res) => res.json())
            .then((content) => setContact(content));
    }, []);

    return (
        <div className="row contact">
            <div className="col-sm-5 contact-box">
                <h6>Office</h6>
                <p>
                    <i className="fas fa-map-marked-alt"></i> {contact.office.address}
                </p>
                <p>
                    <i className="fas fa-phone-alt"></i> {contact.office.phone}
                </p>
            </div>

            <div className="col-sm-2">
                <h3 onClick={() => changeTheme()} className="mode">
                    <i className="fas fa-adjust mode-dial"></i>
                </h3>
            </div>

            <div className="col-sm-5  contact-box">
                <h6>Laboratory</h6>
                <p>
                    <i className="fas fa-map-marked-alt"></i> {contact.lab.address}
                </p>
                <p>
                    <i className="fas fa-phone-alt"></i> {contact.lab.phone}
                </p>
            </div>
        </div>
    );
};

export default Contact;
