import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import ContactUs from "./ContactUs";

const App = () => {
    return (
        <>
            <div className='bg-info p-5'>
                App.js Test React.js
                <Router>
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default App;
