import React from "react";
import "./StudentList.css";
const StudentList = ({ students, dispatch }) => {
    const myFunction = (array) => {
        const data = array;
        for (let x = 0; x < array.length(); x++) {
            console.log(x, data[x], array[0]);
            return data[x] === array[x];
        }
    };
    return (
        <div>
            <hr className='mt-5' />
            <h3 className='text-info'>Students:</h3>
            <hr />
            {students.map((student, index) => {
                // console.log(student);
                return (
                    <div className='d-flex students__list'>
                        <div key={index} className=''>
                            {student.name}
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_STUDENT",
                                        student: student,
                                    });
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

export default StudentList;
