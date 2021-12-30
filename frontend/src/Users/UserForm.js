import React from "react";
// import CloseIcon from "@mui/icons-material/Close";

const UserForm = ({ handleSubmitForm, userName, email, state }) => {
    const { message, display, bg } = state.alert;
    return (
        <div className='bg-info container p-4 user__container'>
            <h1 className='text-center mb-5'>Sign In</h1>
            {display && (
                <div className={"users_alert " + bg}>
                    <span>{message}</span>
                    {/* <CloseIcon className='close__alert' /> */}
                </div>
            )}
            <form className='user__login_form'>
                <div className='user__inputs'>
                    <div className='first__name_input'>
                        <input
                            ref={userName}
                            type='text'
                            placeholder='User Name'
                        />
                    </div>
                    <div className='email__input'>
                        <input ref={email} type='email' placeholder='Email' />
                    </div>
                </div>
                <div className='submit__button'>
                    <button type='submit' onClick={handleSubmitForm}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
