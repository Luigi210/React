const profile = {
    profile: [],
    user: ""
}

export default function profileReducer(state=profile, action){
    switch (action.type){
        case "SET":
            return {
                ...profile,
                profile: action.value
            }
        case "CHANGE":
            return {
                ...profile,
                user: action.value
            }
        default:
            return state
    }
}
