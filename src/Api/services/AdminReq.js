import { AxiosAdmin } from "../../Axios/Axios";



export const approveDoc = (data,token)=>{
    try {
      
        const response = AxiosAdmin.patch('/approve_doctor',{data},{
            headers:{Authorization: "Bearer" + token}
        })
        return response
    } catch (error) {

        return error?.response;
        
    }


}


export const rejectDoc = (data,token)=>{
    try {
        console.log(data,"thiis is data from req")
        const response = AxiosAdmin.patch('/reject_doctor',{data},{
            headers:{Authorization: "Bearer" + token}
        })
        return response
    } catch (error) {

        return error?.response;
        
    }

}

export const addDepartment =(data,token)=>{
    try {
        const response = AxiosAdmin.post('/department',{data},{
            headers:{Authorization: "Bearer" + token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }
}

export const getDepartment = (token)=>{
    try {
        const response = AxiosAdmin.get('/department',{
            headers:{Authorization:"Bearer"+ token}
        })
        return response
        
    } catch (error) {
        return error?.response
    }
}

export const deleteDepartment = (id,token)=>{
    console.log("this axios id",id)
    try {
        const response = AxiosAdmin.patch(`/department`,{id},{
            headers:{Authorization:"Bearer"+ token}
        },)
        return response
        
    } catch (error) {
        return error?.response
    }
}

export const getDocdetails = (id,token)=>{
    console.log("this axios id",id)
    try {
        const response = AxiosAdmin.get(`/new_doctor_details?id=${id}`,{
            headers:{Authorization:"Bearer"+ token}
        },)
        return response
        
    } catch (error) {
        return error?.response
    }
}

export const getUsersList = (token)=>{
    console.log("this axios id",token)
    try {
        const response = AxiosAdmin.get('/users_list',{
            headers:{Authorization:"Bearer"+ token}
        },)
        return response
        
    } catch (error) {
        return error?.response
    }
}

export const getDoctorsList = (token)=>{

    try {
        const response = AxiosAdmin.get('/doctors_list',{
            headers:{Authorization:"Bearer"+ token}
        },)
        return response
        
    } catch (error) {
        return error?.response
    }
}