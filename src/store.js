import createStore from "unistore";

export const store = createStore({
    username: "",
    password: "",
    status: false,
    listMovie: []
});

export const actions = store => ({
    login(state) {
        return { status: true };
    },

    logout(state) {
        return { status: false };
    },

    increment(state) {
        return { count: state.count + 1 };
    },

    setuserName(state, name) {
        return { username: name };
    },

    setpassWord(state, password) {
        return { password: password };
    },

    setlistMovie(state, movie) {
        return { listMovie: movie };
    }
});
