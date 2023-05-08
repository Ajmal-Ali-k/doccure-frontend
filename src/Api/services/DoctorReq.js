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
export const createSlot = (data,token)=>{
    try {
        const response = AxiosDoctor.post('/create_slot',{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }
}
export const getSlot = (token)=>{
    try {
        const response = AxiosDoctor.get('/getSlot',{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }
}