import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import ContactUs from "./ContactUs";

const App = () => {
    return (
        <>
            App.js Test React.js
            <Router>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
