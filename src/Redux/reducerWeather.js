import { ERROR_REQUEST, RECIVE_REQUEST, SEND_REQUEST, SEND_REQUEST2 } from "./typesWeather";

const init = {
    loading : false,
    data:[],
    error : ''

}

const ReducerWeather = (state=init , action)=>{
    switch (action.type) {
        case SEND_REQUEST:
            return{...state,loading:true}
    
        case SEND_REQUEST2:
            return{...state,loading:true}
    
        case RECIVE_REQUEST:
            return{loading:false,data : action.payload,error:''}
    
        case ERROR_REQUEST:
            return{loading:false,data : [],error:action.payload}
    
        default:
            return state
    }
}



export default ReducerWeather