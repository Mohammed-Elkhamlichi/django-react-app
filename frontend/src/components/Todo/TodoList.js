import React from "react";
import "./css/todoList.css";
const TodoList = () => {
    return (
        <>
            <div className='container bg-light mt-5'>
                <h2>Todo List Using Django With React.js</h2>
                <form className='todo_form'>
                    <input
                        className='todo_input'
                        type='text'
                        name='todo'
                        id='todo'
                        placeholder='Enter Your To Do List'
                    />
                    <button className='todo_btn' type='submit'>
                        Add
                    </button>
                </form>
                <div className='todo_list'>
                    <div className='todo_item'>
                        <h3 className='todo_title'>To Do Item One</h3>
                        <div className='todo_info'>
                            <span>12-12-2021</span>
                            <p>my name is mohammed Elkhamlichi ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TodoList;
