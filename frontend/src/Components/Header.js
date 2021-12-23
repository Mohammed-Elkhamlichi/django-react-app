import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
// import TodoList from "../Todo/pages/TodoListPage";
function Header() {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <div className='nav-items collapse navbar-collapse'>
                        <li className=''>
                            <Link className='link' to='/'>
                                Home
                            </Link>
                        </li>
                        <li className=''>
                            <Link className='link' to='/about'>
                                About
                            </Link>
                        </li>
                        <li className=''>
                            <Link className='link' to='/contact-us'>
                                Contact US
                            </Link>
                        </li>
                        <li className=''>
                            <Link className='link' to='/login/'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='/todo/'>
                                Todo
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='/reducer/'>
                                Reducer
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='/github/users/'>
                                Github Users
                            </Link>
                        </li>
                    </div>
                    <div className='nav-search'>
                        {/* <form>
              <div className='search_input'>
                <input type='text' name='' id='' />
              </div>
              <div className='search_btn'>
                <button type='submit'>Search</button>
              </div>
            </form> */}
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
