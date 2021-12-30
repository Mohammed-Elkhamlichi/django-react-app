import React, { useRef, useReducer, useEffect } from "react";
import StudentList from "./StudentList";
// import Alerts from "./Alerts";

import { reducer, initialState } from "./Reducer";

const Index = () => {
    // get the input balue
    const getName = useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    // Arrow function to handle form submition
    // useEffect(() => {
    const hanldeFormSubmit = (e) => {
        e.preventDefault();
        const name = getName.current.value;

        if (name) {
            const student = {
                id: new Date().getTime().toString(),
                name: name,
            };
            dispatch({ type: "ADD_STUDENT", student: student });
        } else {
            dispatch({ type: "ERROR" });
        }
    };

    // }, [state]);
    console.log(state);
    return (
        <>
            <section
                style={{
                    margin: "100px auto",
                    borderRadius: "10px",
                    boxShadow: "0px 1px 10px 0 gray",
                }}
                className=' container bg-light p-5'
            >
                <div>
                    {state.alert.isDisplay ? (
                        <div className={"alert alert-" + state.alert.bg}>
                            {state.alert.content}
                        </div>
                    ) : (
                        <h2>No Alert exist</h2>
                    )}
                    <form className='d-flex'>
                        <input
                            style={{ fontSize: "1.5em", fontWeight: "bold" }}
                            ref={getName}
                            className='form-control'
                            type='text'
                            name=''
                            id=''
                        />
                        <button
                            className='btn btn-success'
                            type='submit'
                            onClick={hanldeFormSubmit}
                        >
                            Add Student
                        </button>
                    </form>
                    <StudentList
                        students={state.students}
                        dispatch={dispatch}
                    />
                </div>
            </section>
        </>
    );
};

export default Index;
