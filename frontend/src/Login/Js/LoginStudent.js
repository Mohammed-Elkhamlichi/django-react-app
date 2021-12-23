import React, { useState, useEffect } from "react";

const LoginStudent = () => {
    const [students, setStudents] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "http://127.0.0.1:8000/login/";

    useEffect(() => {
        setIsLoaded(true);
        fetch(url)
            .then((resp) => {
                setIsLoaded(true);
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                setStudents((students) => {
                    setStudents([...students, data]);
                });
                setStudents(data);
                setTimeout(() => {
                    setIsLoaded(false);
                }, 1000);
            })

            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div>
                {!isLoaded ? (
                    students.map((student) => {
                        const { id, username } = student;
                        return (
                            <h2 key={id}>
                                <span className='text-info'>
                                    {id + " " + username}
                                </span>
                            </h2>
                        );
                    })
                ) : (
                    <h2 className='font-weight-bold bg-light p-5 text-center'>
                        Loading ...
                    </h2>
                )}
            </div>
        </>
    );
};
export default LoginStudent;
