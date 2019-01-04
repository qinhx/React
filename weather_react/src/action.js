import {FETCH_STARTED,FETCH_SUCCESS,FETCH_FAIL} from './actionTypes'
export const fetchStart = ()=>({
    type:FETCH_STARTED
})
export const fetchSucces = (result)=>({
    type:FETCH_SUCCESS,
    result
})
export const fetchFail = (err)=>({
    type:FETCH_FAIL,
    err
})
export const fetchWeather = (cityCode)=>{
    return (dispatch)=>{
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        dispatch(fetchStart())
        fetch(apiUrl).then(res=>{
            res.json().then(resjson=>{
                dispatch(fetchSucces(resjson))
            })
        }).catch(err=>{
            dispatch(fetchFail(err))
        })
    }
}