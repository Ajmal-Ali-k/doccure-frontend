import { AxiosClient } from "../../Axios/Axios"
import { AxiosDoctor } from "../../Axios/Axios"


export const getDepartment = ()=>{
    try {
        const response = AxiosClient.get('/departments')
        return response
        
    } catch (error) {
        return error?.response
    }
}

export const doctorLogin = (data)=>{
    try {
        const response = AxiosDoctor.post('/login',{data})
        return response
        
    } catch (error) {
        return error?.response
    }
}