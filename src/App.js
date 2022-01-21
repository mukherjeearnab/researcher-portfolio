import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Publications from "./pages/Publications";

import Contact from "./components/Contact";
import NameHeader from "./components/NameHeader";

function App() {
    return (
        <div className="App">
            <NameHeader />
            <Contact />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/publications" component={Publications}></Route>
        </div>
    );
}

export default App;
