import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./users.css";

const Users = () => {
    // if is Search hide the users List
    const [isSearch, setIsSearch] = useState(false);
    //   users
    const [users, setUsers] = useState([]);
    //   if the data is Loaded from API
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "https://api.github.com/users";
    useEffect(() => {
        setIsLoaded(true);
        fetch(url)
            .then((response) => {
                setIsLoaded(true);
                if (response.status === 200 && response.ok === true) {
                    return response.json();
                } else {
                    setIsLoaded(false);
                }
            })
            .then((data) => {
                setUsers(data);
                setTimeout(() => {
                    setIsLoaded(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Search
                users={users}
                setIsSearch={setIsSearch}
                isSearch={isSearch}
            />
            {isLoaded ? (
                <h4 className='loading_container'>
                    <h4 className='spinner-border text-info loading1_content'>
                        <span class='d-none'>Loading...</span>
                    </h4>
                    <h4 className='spinner-border text-info loading2_content'>
                        <span class='d-none'>Loading...</span>
                    </h4>
                </h4>
            ) : (
                <div>
                    <div className='users_container'>
                        {!isSearch &&
                            users.map((user) => {
                                const { id, login, avatar_url, html_url } =
                                    user;
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
                </div>
            )}
        </>
    );
};
export default Users;
