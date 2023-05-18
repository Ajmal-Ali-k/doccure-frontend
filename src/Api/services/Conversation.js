import { AxiosMessages, AxiosConversations } from "../../Axios/Axios";

// export const

export const getConversationApi = (token) => {
  try {
    const response = AxiosConversations.get(`/`, {
      headers: { Authorization: "Bearer" + token },
    });
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const getuserList = (id, token) => {
  try {
    const response = AxiosConversations.get(`/userlist?userId=` + id, {
      headers: { Authorization: "Bearer" + token },
    });
    return response;
  } catch (error) {
    return error?.response;
  }
};
export const getMessagesApi = (id, token) => {
  try {
    const response = AxiosMessages.get(`/` + id, {
      headers: { Authorization: "Bearer" + token },
    });
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const postNewMessagesApi = (message,token) => {
  try {
    const response = AxiosMessages.post(
      "/",
      { message },
      {
        headers: { Authorization: "Bearer" + token },
      }
    );
    return response;
  } catch (error) {
    return error?.response;
  }
};
