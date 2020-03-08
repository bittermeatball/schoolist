export default {
    universities: (state) => {
        return state.universities;
    },
    university: (state) => {
        console.log("Hello getters")
        return state.university;
    }
}