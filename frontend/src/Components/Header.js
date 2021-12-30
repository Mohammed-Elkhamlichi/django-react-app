import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <div>
            <div className='nav__icons'>
                {!showNavbar ? (
                    <ReorderIcon
                        className='open__close__icon'
                        onClick={() => setShowNavbar(!showNavbar)}
                    />
                ) : (
                    <CloseIcon
                        className='open__close__icon'
                        onClick={() => setShowNavbar(!showNavbar)}
                    />
                )}
            </div>
            <nav className='navbar'>
                <h2 className='logo p-2 text-light'>Mohammed Elkhamlichi</h2>
                <ul className={showNavbar ? "nav__ul" : "nav__ul__close"}>
                    <li className='' onClick={() => setShowNavbar(!showNavbar)}>
                        <Link className='link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='' onClick={() => setShowNavbar(!showNavbar)}>
                        <Link className='link' to='/students'>
                            Students
                        </Link>
                    </li>
                    <li className='' onClick={() => setShowNavbar(!showNavbar)}>
                        <Link className='link' to='/users'>
                            Users
                        </Link>
                    </li>
                    <li className='' onClick={() => setShowNavbar(!showNavbar)}>
                        <Link className='link' to='/login/'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            to='/todo/'
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            Todo
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            to='/reducer/'
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            Reducer
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            to='/github/users/'
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            Github Users
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
