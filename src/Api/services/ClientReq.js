import { AxiosClient } from "../../Axios/Axios";

export const getDepartment = (token)=>{
    try {
        const response = AxiosClient.get('/departments',{
            headers:{Authorization:"Bearer"+ token}
        })
        return response
        
    } catch (error) {
        return error?.response
    }
}