import React from "react";

const Model = ({ modelContent }) => {
    return (
        <div className='container-fluid m-auto mt-5 mb-5'>
            <h1 className='text-center m-auto pt-4  pb-4 w-100 mt-5  bg-light'>
                {modelContent}
            </h1>
        </div>
    );
};

export default Model;
