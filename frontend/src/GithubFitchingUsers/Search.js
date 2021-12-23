import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./search.css";

const Search = ({ users, setIsSearch, isSearch }) => {
    // input
    const [search, setSearch] = useState([]);

    // if user Found
    const [isFound, setIsFound] = useState(false);

    // filter search
    const [usersFinded, setUsersFinded] = useState([]);

    // handle Input Change
    const handleChange = (e) => {
        e.preventDefault();
        setIsFound(false);
        setIsSearch(true);
        setSearch(e.target.value);
        if (search.length >= 0) {
            const found = users.filter((user) => {
                if (user.login.includes(search.toString())) {
                    setIsFound(true);
                    return user;
                }
            });
            setUsersFinded(found);
        }
    };
    return (
        <>
            <nav className='nav_search'>
                <form className='form_search'>
                    <SearchIcon className='search_icon text-info' />
                    <input
                        onChange={handleChange}
                        className='search_input'
                        type='text'
                        placeholder='User Name'
                    />
                    <MicIcon className='mic_icon text-info' />
                </form>
                <div className='users_container bg-light'>
                    {isFound &&
                        usersFinded.map((user) => {
                            const { id, login, avatar_url, html_url } = user;
                            return (
                                <div
                                    className='bg-light text-black user_container'
                                    key={id}
                                >
                                    <img
                                        className='user_img'
                                        src={avatar_url}
                                        alt={login}
                                    />
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        className='btn user_login'
                                        href={html_url}
                                    >
                                        {login}
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </nav>
        </>
    );
};

export default Search;
