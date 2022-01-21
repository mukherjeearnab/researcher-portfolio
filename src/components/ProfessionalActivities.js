import "./css/ProfessionalActivities.css";

const ProfessionalActivities = (props) => {
    return (
        <div id="ProfessionalActivities" className="professional-activities">
            <h3>Professional Activities</h3>
            <h5>Member of Professional Bodies:</h5>
            <p>
                {props.items.MemberOfProfessionalBodies.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            {item}&nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
            <h5>Conference Session Chair:</h5>
            <p>
                {props.items.ConferenceSessionChair.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            {item}&nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
            <h5>Program Committee Member:</h5>
            <p className="program-comittee-member">
                {props.items.ProgramCommitteeMember.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            <span>{item.name}&nbsp;</span>
                            {item.versions.map((item, index, arr) => {
                                return (
                                    <span key={index}>
                                        <a href={item.link} target="blank">
                                            {item.year}
                                        </a>
                                        {(() => {
                                            if (index + 1 !== arr.length) return <span>&nbsp;/&nbsp;</span>;
                                            else return <span>&nbsp;</span>;
                                        })()}
                                    </span>
                                );
                            })}
                            &nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
            <h5>(External/Invited) Journal Reviewer:</h5>
            <p>
                {props.items.JournalReviewer.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            {item}&nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
            <h5>(External/Invited) Conference Reviewer:</h5>
            <p>
                {props.items.ConferenceReviewer.map((item, index) => {
                    return (
                        <span key={index}>
                            {(() => {
                                if (index !== 0) return <span>&bull;&nbsp;&nbsp;</span>;
                            })()}
                            {item}&nbsp;&nbsp;
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default ProfessionalActivities;
