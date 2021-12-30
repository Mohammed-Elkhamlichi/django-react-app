export const initialState = {
    students: [],
    alert: {
        isDisplay: false,
        content: null,
        bg: null,
        time: null,
    },
};

export const reducer = (state, action) => {
    // console.log("state", state);
    // console.log("action", action);
    if (action.type === "ADD_STUDENT") {
        // set name to the person state

        // const newStudent = state.student;

        // set the new person to the People List stateg(state);
        return {
            ...state,
            students: [...state.students, action.student],
            alert: {
                isDisplay: true,
                content: "Student has been add successfully Thank you!",
                bg: "success",
                time: 1000,
            },
        };
    }

    if (action.type === "ERROR") {
        return {
            ...state,
            alert: {
                ...state.alert,
                isDisplay: true,
                content: "Pleaze put your name and try again!",
                bg: "danger",
                time: 1000,
            },
        };
    }

    if (action.type === "REMOVE_STUDENT") {
        const StudentsFiltered = state.students.filter(
            (student) => student.id !== action.student.id
        );
        return {
            ...state,
            students: StudentsFiltered,
            alert: {
                ...state.alert,
                isDisplay: true,
                content: "Student has been successfully deleted",
                bg: "success",
                time: 1000,
            },
        };
    }

    throw new Error("Action not Exist");
};
