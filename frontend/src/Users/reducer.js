export const initialState = {
    users: [],
    alert: {},
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER_SUCCESS":
            const users = state.users;
            const filterUsers = users.filter(
                (user) =>
                    user.userName === action.user.userName ||
                    user.email === action.user.email
            );

            if (filterUsers.length > 0) {
                console.log("user aleardy exist");
                return {
                    ...state,
                    alert: {
                        message:
                            "Username or Email are already used by an other User!",
                        display: true,
                        bg: "alert_error",
                    },
                };
            } else {
                console.log("user not exist");
                return {
                    ...state,
                    users: [...state.users, action.user],
                    alert: {
                        message: "User Has Been successfully add",
                        display: true,
                        bg: "alert_success",
                    },
                };
            }

        // if not user put he's informations.
        case "ADD_USER_ERROR":
            return {
                ...state,
                alert: {
                    message: "pleaze put your Username and Email",
                    display: true,
                    bg: "alert_error",
                },
            };

        // remove an user
        case "REMOVE_USER":
            const newUsers = state.users.filter(
                (user) => user.id !== action.id
            );
            return {
                ...state,
                users: newUsers,
                alert: {
                    message: "User has been successfully deleted",
                    display: true,
                    bg: "alert_success",
                },
            };
        default:
            throw new Error("Action not exist");
    }
};
