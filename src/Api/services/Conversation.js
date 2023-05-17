import {AxiosMessages,AxiosConversations} from "../../Axios/Axios"


// export const 



export const getConversationApi=(token)=>{
    try {
        const response = AxiosConversations.get(`/`,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}

// export const  get_message=(id,data)=>{
//     try {
//         const response = AxiosMessages.get(`/`+id,{data},{
//             // headers:{Authorization:"Bearer"+token}
//         })
//         return response
//     } catch (error) {
//         return error?.response
        
//     }

// }

export const getuserList=(id,token)=>{
    try {
        const response = AxiosConversations.get(`/userlist?userId=`+id,{
            headers:{Authorization:"Bearer"+token}
        })
        return response
    } catch (error) {
        return error?.response
        
    }

}