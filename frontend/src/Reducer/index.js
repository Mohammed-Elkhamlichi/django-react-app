import React, { useState } from "react";
import { data } from "./data";
import Model from "./Model";

const Index = () => {
    const [people, setPeople] = useState(data);
    const [newPerson, setNewPerson] = useState({
        id: null,
        first_name: "",
        last_name: "",
        email: "",
    });

    const handleSubmit = (e) => {
        let number = 10;
        e.preventDefault();
        setNewPerson({ ...newPerson, id: number + 1 });
        if (newPerson) {
            setPeople([...people, newPerson]);
        }
    };

    return (
        <>
            <div className='container bg-light mt-5'>
                <Model />
                <h1 className='text-center'>React Use Reduce</h1>
                <form onSubmit={handleSubmit} className='border d-flex p-3'>
                    <input
                        type='text'
                        className='w-75 form-control'
                        placeholder='First Name'
                        onChange={(e) =>
                            setNewPerson({
                                ...newPerson,
                                first_name: e.target.value,
                            })
                        }
                    />
                    <input
                        type='text'
                        className='w-75 form-control'
                        placeholder='Last Name'
                        onChange={(e) =>
                            setNewPerson({
                                ...newPerson,
                                last_name: e.target.value,
                            })
                        }
                    />
                    <input
                        type='email'
                        name=''
                        id=''
                        className='w-75 form-control'
                        placeholder='Email'
                        onChange={(e) =>
                            setNewPerson({
                                ...newPerson,
                                email: e.target.value,
                            })
                        }
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
                                <th scope='col'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((people) => {
                                return (
                                    <tr key={people.id}>
                                        <th scope='row'>{people.id}</th>
                                        <td>{people.first_name}</td>
                                        <td>{people.last_name}</td>
                                        <td>{people.email}</td>
                                        <td>
                                            <button className='bg-danger text-light pt-1 pr-2 pl-2 border-none'>
                                                Remove
                                            </button>
                                        </td>
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
