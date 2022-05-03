const initState = {
    isLoading: true,
    auth:false,
    status:null,
    error:null
}

const reducer = (state,action)=>{
    switch(action.type){
        case "login":
            return {
                isLoading:false,
                status:action.payload
            }
        case "error":
            return {
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export {reducer,initState};