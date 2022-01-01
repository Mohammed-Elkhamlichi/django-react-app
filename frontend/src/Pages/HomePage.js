import React, { useContext } from "react";
import { useUsersContext } from "../Users/UsersProvider";
function HomePage() {
    const [state, dispatch] = useUsersContext();
    console.log(state);
    return (
        <div className='container bg-light text' style={{ marginTop: "100px" }}>
            <h1 className='text-center mt-5'>Home Page</h1>
        </div>
    );
}

export default HomePage;
