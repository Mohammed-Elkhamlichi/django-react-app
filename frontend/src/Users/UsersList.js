import React from "react";

const UsersList = ({ state, dispatch }) => {
    const users = state.users;
    return (
        <div className='bg-info container mt-3  mb-5 p-4 user__container'>
            <h1 className='text-center'>Users List</h1>

            {users?.map((user) => {
                const { id, userName, email } = user;
                console.log(user);
                return (
                    <div className='user__item' key={id}>
                        <div>{userName}</div>
                        <div>
                            <button
                                onClick={() => {
                                    dispatch({ type: "REMOVE_USER", id: id });
                                }}
                            >
                                remove
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UsersList;
