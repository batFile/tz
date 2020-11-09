export const setToken = (token) => {
    return {
        type: "CHANGE_TOKEN",
        payload: token
    }
}