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
export const  getDocname =(token)=>{
    try {
        const response = AxiosDoctor.get('/getDocname',{
               headers:{Authorization:"Bearer"+token}

        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const change_doc_pwd = (data, token) =>{
    try {
        const response = AxiosDoctor.post('/change_password',{data},{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        console.log(error)
        return error?.response
        
    }
}
export const getTodayAppoiment = (token) =>{
    try {
        const response = AxiosDoctor.get('/todayAppoinments',{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        console.log(error)
        return error?.response
        
    }
}
export const getUpcomingAppoiment = (token) =>{
    try {
        const response = AxiosDoctor.get('/upcomingAppoinments',{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        console.log(error)
        return error?.response
        
    }
}

export const acceptAppoinmentsApi =(id,token)=>{
    try {
        const response = AxiosDoctor.put(`/accept_appoinment?id=${id}`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

export const cancelAppoinmentsApi =(id,token)=>{
    try {
        const response = AxiosDoctor.put(`/cancel_appoinment?id=${id}`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}
export const compeleteAppoinmentsApi =(id,token)=>{
    try {
        const response = AxiosDoctor.put(`/compelete_appoinment?id=${id}`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

export const pastAppoinmentsApi =(token)=>{
    try {
        const response = AxiosDoctor.get(`/past_appoiments`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}