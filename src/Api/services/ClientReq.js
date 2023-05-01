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
export const getDoctors = (token)=>{
    try {
        const response = AxiosClient.get('/doctors',{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getFilteredDoctors =(data,token)=>{
    try {
        const response = AxiosClient.post('/filteredDoctors',{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}
export const getDoctorDetail =(data,token)=>{
    try {
        const response = AxiosClient.get(`/doctorDetail?id=${data}`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}