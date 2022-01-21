import { useEffect } from "react";

import "./css/PhotoFrame.css";

const PhotoFrame = (props) => {
    useEffect(() => {
        let key = 0;

        // Initial Run
        swtichFrame(key);
        key++;

        // Interval Sequence
        const interval = setInterval(() => {
            swtichFrame(key);
            key++;
        }, 10000);
        return () => clearInterval(interval);
    });

    const swtichFrame = (key) => {
        setTimeout(function () {
            document.querySelector(`#frame-0-${key % props.frames.length}`).style.opacity = 100;
            document.querySelector(`#frame-0-${(key === 0 ? 1 : key - 1) % props.frames.length}`).style.opacity = 0;

            document.querySelector(`#frame-1-${key % props.frames.length}`).style.opacity = 100;
            document.querySelector(`#frame-1-${(key === 0 ? 1 : key - 1) % props.frames.length}`).style.opacity = 0;

            document.querySelector(`#frame-2-${key % props.frames.length}`).style.opacity = 100;
            document.querySelector(`#frame-2-${(key === 0 ? 1 : key - 1) % props.frames.length}`).style.opacity = 0;
        }, 2000);
    };

    const frameRunner = (index, sequencer) => {
        const key = (index + sequencer) % props.frames.length;
        const delay = 0.5 * sequencer;

        return (
            <li key={index}>
                <span
                    style={{
                        zIndex: key,
                        transitionDelay: `${delay}s`,
                    }}
                    id={`frame-${sequencer}-${key}`}
                >
                    <img
                        className="frame-foreground"
                        alt={props.frames[index]}
                        src={`/researcher-portfolio/img/frames/${props.frames[index]}`}
                    ></img>
                    <img
                        className="frame-background"
                        alt={`bg-${props.frames[index]}`}
                        src={`/researcher-portfolio/img/frames/${props.frames[index]}`}
                    ></img>
                </span>
            </li>
        );
    };

    return (
        <div className="row photo-frame">
            <div className="col-sm-4 col-12 photo-box">
                <ul className="cb-slideshow">{props.frames.map((_, index) => frameRunner(index, 0))}</ul>
            </div>
            <div className="col-sm-4 col-12 d-none d-sm-block photo-box">
                <ul className="cb-slideshow">{props.frames.map((_, index) => frameRunner(index, 1))}</ul>
            </div>
            <div className="col-sm-4 col-12 d-none d-sm-block photo-box">
                <ul className="cb-slideshow">{props.frames.map((_, index) => frameRunner(index, 2))}</ul>
            </div>
        </div>
    );
};

export default PhotoFrame;
