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
export const updateProfile =(data,token)=>{
    try {
        const response = AxiosClient.post(`/update_profile`,{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

export const getUserDetails =(token)=>{
    try {
        const response = AxiosClient.get(`/user_details`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}
export const changePwd =(data,token)=>{
    try {
        const response = AxiosClient.post(`/change_password`,{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}
export const filteredSlot =(data,token)=>{
    try {
        const response = AxiosClient.post(`/filtered_slot`,{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

// export const createBooking =(data,token)=>{
//     try {
//         const response = AxiosClient.post(`/create_booking`,{data},{
//             headers:{Authorization:"Bearer"+token}
//         })
//         return response
//     } catch (error) {
//         return error?.response
        
//     }

// }


export const getAppoinmentDataApi =(id,token)=>{
    try {
        const response = AxiosClient.get(`/success_page/`+id,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

// this request fetch data for client dashboard


export const getAppoinmentsApi =(token)=>{
    try {
        const response = AxiosClient.get('/appoiments',{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}
export const cancelAppoinmentsApi =(id,token)=>{
    try {
        const response = AxiosClient.put(`/appoiments?id=${id}`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}