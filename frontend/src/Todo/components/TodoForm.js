import React from "react";
import CSRFToken from "./CSRFToken";

const TodoForm = ({
    handleSubmitTodoForm,
    setCsrfToken,
    HandleChangeTodoInput,
    activeTodo,
    formTodoButton,
}) => {
    return (
        <form className='todo_form'>
            <CSRFToken setCsrfToken={setCsrfToken} />
            <input
                value={activeTodo.body}
                className='todo_input'
                type='text'
                name='todo'
                id='todo'
                placeholder='Enter Your To Do List'
                onChange={HandleChangeTodoInput}
            />

            <button
                className='todo_btn'
                type='submit'
                onClick={handleSubmitTodoForm}
            >
                {formTodoButton}
            </button>
        </form>
    );
};

export default TodoForm;
