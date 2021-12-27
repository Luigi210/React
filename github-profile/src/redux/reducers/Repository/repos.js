const repos = {
    repos: [],
    loading: true
}

export default function repoReducer(state=repos, action){
    switch (action.type){
        case "SET":
            return {
                ...state,
                repos: action.value
            }
        case "CHANGE":
            return {
                ...state,
                loading: false
            }
        default:
            return state

    }
}
