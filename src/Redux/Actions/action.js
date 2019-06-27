
import update from 'react-addons-update'
import constans from "./actionConstans"
const { GET_CURRENT_LOCATION } = constans

export function getCurrentLocation(){
    return(dispatch)=>{
        navigator.geolocation.watchPosition(
            (position)=>{
                dispatch({
                    type:GET_CURRENT_LOCATION,
                    payload:position
                })
                Promise.resolve()
            },
            error=>console.log(error.message),
            {
                enableHighAccurancy:true,timeout:1000,maximunAge:100
            }

        )
    }
}
