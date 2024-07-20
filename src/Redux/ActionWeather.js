import axios from "axios"
import { ERROR_REQUEST, RECIVE_REQUEST, SEND_REQUEST, SEND_REQUEST2 } from "./typesWeather"
import { call, put, takeLatest } from "redux-saga/effects"

export const sendrequest = (query) => {
    return {
        type: SEND_REQUEST,
        payload: query,
    }
}
export const sendrequest2 = (lat, lon) => {
    return {
        type: SEND_REQUEST2,
        payload: { lat: lat, lon: lon }
    }
}
const reciverequest = (data) => {
    return {
        type: RECIVE_REQUEST,
        payload: data
    }
}
const errorrequest = (err) => {
    return {
        type: ERROR_REQUEST,
        payload: err
    }
}

const GetAxios = (query) => {

    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6ec2e22d528b942a20b563ed5f2bad2a`)

}



function* fetchUser(action) {
    try {
        const res = yield call(GetAxios, action.payload);
        yield put(reciverequest(res.data));
    } catch (e) {
        yield put(errorrequest(e.message));
    }
}


export function* Wacher() {
    yield takeLatest(SEND_REQUEST, fetchUser);
}







const GetAxios2 = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ec2e22d528b942a20b563ed5f2bad2a`)
}


function* fetchUser2(action) {
    try {
        const res = yield call(GetAxios2, action.payload.lat, action.payload.lon);
        yield put(reciverequest(res.data));
    } catch (e) {
        yield put(errorrequest(e.message));
    }
}


export function* Wacher2() {
    yield takeLatest(SEND_REQUEST2, fetchUser2);
}

// export const GetAxios = (query)=>{
//     return dispatch =>{
//         dispatch(sendrequest())
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6ec2e22d528b942a20b563ed5f2bad2a`).then(response=>{
//             dispatch(reciverequest(response.data))
//         }).catch(error=>{
//             dispatch(errorrequest(error.message))
//         })
//     }

// }