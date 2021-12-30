import React, { useState, useRef, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./data";
import Model from "./Model";

import { initialState, reducer } from "./reducer";

const Index = () => {
    // use Reducer Hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // redirection to an other page
    const navigate = useNavigate();

    // get The inputs Value Using useRef React Hook
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);

    // set the data get from the user inside a dictionary
    let user = [firstName, lastName, email];

    // arrow Function Handle the Form Submition
    const handleSubmit = (e) => {
        e.preventDefault();

        user[0] = firstName.current.value;
        user[1] = lastName.current.value;
        user[2] = email.current.value;

        // if Input not Empty
        if (user[0] && user[1] && user[2]) {
            const newPerson = {
                id: new Date().getTime().toString(),
                first_name: user[0],
                last_name: user[1],
                email: user[2],
            };

            dispatch({
                type: "ADD_USER",
                getData: newPerson,
            });

            firstName.current.value = null;
            lastName.current.value = null;
            email.current.value = null;
            navigate("/", { replace: true });
        } else {
            dispatch({ type: "NO_VALUE" });
        }
    };

    return (
        <>
            {state.isModelOpen && <Model modelContent={state.modelContent} />}
            <div className='container-fluid m-auto mt-5 mb-5 bg-light'>
                <h1 className='text-center mt-5 p-5'>React Use Reduce</h1>
                <form onSubmit={handleSubmit} className='border d-flex p-3'>
                    <input
                        type='text'
                        className='w-75 form-control'
                        placeholder='First Name'
                        ref={firstName}
                    />
                    <input
                        type='text'
                        className='w-75 form-control'
                        placeholder='Last Name'
                        ref={lastName}
                    />
                    <input
                        type='email'
                        name=''
                        id=''
                        className='w-75 form-control'
                        placeholder='Email'
                        ref={email}
                    />
                    <button className='btn btn-success w-25'>Create</button>
                </form>
                <div className='bg-ligh border p-3'>
                    <table className='table table-success'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.people.map((person, index) => {
                                return (
                                    <tr key={person.id}>
                                        <th scope='row'>{person.id}</th>
                                        <td>{person.first_name}</td>
                                        <td>{person.last_name}</td>
                                        <td>{person.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Index;
