import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoListPage from "./Todo/pages/TodoListPage";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Todo/pages/PageNotFound";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Login/Js/Login";
import Reducer from "./Reducer";
import GithubFitchingUsers from "./GithubFitchingUsers";
import Students from "./Students";
import Users from "./Users";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/students' element={<Students />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/login/' element={<Login />} />
                    <Route path='/todo/' element={<TodoListPage />} />
                    <Route path='/reducer/' element={<Reducer />} />
                    <Route
                        path='/github/users/'
                        element={<GithubFitchingUsers />}
                    />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
