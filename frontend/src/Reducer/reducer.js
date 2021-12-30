export const initialState = {
    person: {
        id: null,
        firs_name: null,
        last_name: null,
        email: null,
    },
    people: [],
    isModelOpen: false,
    modelContent: "Mohammed Elkhamlichi saying  Hi!",
};

export const reducer = (state, action) => {
    if (action.type === "ADD_USER") {
        state.person = action.getData;
        const newPerson = state.person;
        console.log(newPerson);
        return {
            ...state,
            people: [...state.people, newPerson],
            isModelOpen: true,
            modelContent: "User Has Been Successfully Add",
        };
    }
    if (action.type === "NO_VALUE") {
        return {
            ...state,
            isModelOpen: true,
            modelContent: "Pleaze Complete Your Info and Try Again",
        };
    }
};
