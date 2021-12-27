const profile = {
    profile: [],
    user: ""
}

export default function profileReducer(state=profile, action){
    switch (action.type){
        case "SET":
            return {
                ...state,
                profile: action.value
            }
        case "CHANGE":
            return {
                ...state,
                user: action.value
            }
        default:
            return state
    }
}
