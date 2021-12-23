import React from "react";

const TodoItem = ({
    todo,
    handleEditingTodo,
    hanldeDeleteTodo,
    handleIsCompletedOrNot,
}) => {
    const { id, body, created, updated } = todo;
    const [dateCreate, timeCreate] = created.split("T");
    const [dateUpdate, timeUpdate] = updated.split("T");
    return (
        <div className='todo_list' key={id}>
            <div className='todo_item'>
                <div className='flex_box'>
                    <h5 className='todo_title'>
                        {todo.completed ? (
                            <i style={{ color: "green" }}>
                                <strike>{body}</strike> (Completed)
                            </i>
                        ) : (
                            <i>{body}</i>
                        )}
                    </h5>
                    <button
                        className='edit_todo_btn'
                        onClick={() => {
                            handleEditingTodo(todo);
                        }}
                    >
                        Edit
                    </button>
                    {todo.completed ? (
                        <button
                            className='edit_todo_btn'
                            onClick={() => handleIsCompletedOrNot(todo)}
                        >
                            Not Completed
                        </button>
                    ) : (
                        <button
                            className='edit_todo_btn'
                            onClick={() => handleIsCompletedOrNot(todo)}
                        >
                            Completed
                        </button>
                    )}
                    <button
                        className='delete_todo_btn'
                        onClick={() => {
                            hanldeDeleteTodo(id);
                        }}
                    >
                        delete
                    </button>
                </div>
                <div className='todo_info'>
                    <span className='date_create'>
                        Created :{" "}
                        <b style={{ color: "green" }}> {dateCreate}</b>{" "}
                    </span>

                    <span className='date_update'>
                        Updated :{" "}
                        <b style={{ color: "green" }}> {dateUpdate}</b>{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
