import "./css/NewsUpdates.css";

const NewsUpdates = (props) => {
    return (
        <div className="news-window">
            <h3>News Updates</h3>
            <div className="news-page">
                {props.news.map((item, index) => {
                    return (
                        <div className="news-widget" key={index}>
                            <p>
                                <span className="news-date">{item.date}&nbsp;&bull;&nbsp;</span>
                                {item.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsUpdates;
