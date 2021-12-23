import React, { useState, useEffect } from "react";
import "../css/todoList.css";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
// import { Link } from "react-router-dom";

const TodoList = () => {
    // the data was fitching from the server
    const [todoList, setTodoList] = useState([]);

    const [isAddTodo, setIsAddTodo] = useState(false);

    const [isDeleteTodo, setIsDeleteTodo] = useState(false);

    const [formTodoButton, setFormTodoButton] = useState("Add");

    const [isEditingTodo, setIsEditingTodo] = useState(false);

    const [isTodoCompleted, setIsTodoCompleted] = useState(false);

    const [activeTodo, setActiveTodo] = useState({
        id: null,
        body: "",
        completed: false,
    });

    const [csrfToken, setCsrfToken] = useState(null);

    // useeffect to fetch data from the DRF API
    useEffect(() => {
        setFormTodoButton("Add");
        const url = "/todo/list/";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTodoList(data);
            })
            .catch((error) => console.log(error));
    }, [isAddTodo, isDeleteTodo, isTodoCompleted]);

    // Handle the Todo Input when is Change.
    const HandleChangeTodoInput = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setActiveTodo({
            ...activeTodo,
            body: value,
        });
    };
    let url;

    // function handle if the todo form submited
    const handleSubmitTodoForm = (e) => {
        e.preventDefault();
        // Post Data To The Server

        if (activeTodo.body !== "") {
            if (!isEditingTodo) {
                url = `/todo/create/`;
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,
                    },
                    body: JSON.stringify(activeTodo),
                })
                    .then((response) => {
                        setIsAddTodo(true);
                        setActiveTodo({
                            id: null,
                            body: "",
                            completed: false,
                        });
                    })
                    .catch((error) => console.log(error));
                setIsAddTodo(false);
            } else if (isEditingTodo) {
                url = `/todo/update/${activeTodo.id}/`;
                setIsEditingTodo(false);
                fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,
                    },
                    body: JSON.stringify(activeTodo),
                })
                    .then((response) => {
                        setIsAddTodo(true);
                        setActiveTodo({
                            id: null,
                            body: "",
                            completed: false,
                        });
                    })
                    .catch((error) => console.log(error));
                setIsAddTodo(false);
            }
        } else {
            console.log("Acive todo body is empty");
        }
    };

    // Function Handle Updat Todo
    const handleEditingTodo = (todo) => {
        setFormTodoButton("Update");
        setIsEditingTodo(true);
        setActiveTodo(todo);
    };

    // Function Handl Delete Todo
    const hanldeDeleteTodo = (id) => {
        url = `/todo/delete/${id}/`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify(id),
        })
            .then((response) => {
                setIsDeleteTodo(true);
            })
            .catch((error) => console.log(error));
        setIsDeleteTodo(false);
    };

    // function Hanlde if the Todo Is Completed Or NOt
    const handleIsCompletedOrNot = (todo) => {
        setIsAddTodo(true);
        setIsEditingTodo(true);
        setIsTodoCompleted(isTodoCompleted ? false : true);
        setActiveTodo({
            body: todo.body,
            completed: isTodoCompleted,
        });
        url = `/todo/update/${todo.id}/`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({
                body: todo.body,
                completed: isTodoCompleted,
            }),
        })
            .then((response) => {
                setIsAddTodo(false);
                setIsEditingTodo(false);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className='container bg-light mt-5'>
                <h2>Todo List Using Django With React.js</h2>
                <TodoForm
                    handleSubmitTodoForm={handleSubmitTodoForm}
                    setCsrfToken={setCsrfToken}
                    HandleChangeTodoInput={HandleChangeTodoInput}
                    activeTodo={activeTodo}
                    formTodoButton={formTodoButton}
                />

                {todoList.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            handleEditingTodo={handleEditingTodo}
                            hanldeDeleteTodo={hanldeDeleteTodo}
                            handleIsCompletedOrNot={handleIsCompletedOrNot}
                        />
                    );
                })}
            </div>
        </>
    );
};
export default TodoList;
