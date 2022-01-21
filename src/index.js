import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import PhotoFrame from "./components/PhotoFrame";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/researcher-portfolio">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

ReactDOM.render(
    <React.StrictMode>
        <PhotoFrame frames={["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]} />
    </React.StrictMode>,
    document.getElementById("photo-root")
);
