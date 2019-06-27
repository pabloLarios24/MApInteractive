
export const getLocation = ( prevState = { } , action = {})=>{
    switch(action.type){
        case "GET_CURRENT_LOCATION":
            console.log(action)
            return action.payload
        default:
            return prevState
    }
}