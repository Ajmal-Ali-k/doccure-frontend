import { AxiosClient } from "../../Axios/Axios"


export const getDepartment = ()=>{
    try {
        const response = AxiosClient.get('/departments')
        return response
        
    } catch (error) {
        return error?.response
    }
}