import instance from "../../axios/axios";


export const getUserByIdApi = (userId) => instance.get(`/user/${userId}`)
export const updateUser = (userId, userData) => instance.put(`/user/${userId}`, userData)
export const getLoggedInUser = () => instance.get("/user/loggedInUser")
export const logoutApi = () => instance.post("/user/logout")
export const searchUserApi = (searchQuery) => instance.get(`/user/search?search_query=${searchQuery}`)
export const searchUserByIdApi = (userId) => instance.get(`/user/search?userId=${userId}`)
export const updateUserApi = (data, userId) => instance.put(`/user/${userId}`, data)
export const searchUserByKeyword = (keyword)=>instance.get(`/user/search?search_query=${keyword}`)

export const blockUserApi = (data)=>instance.post(`/user/action?block=true`,data)
export const unblockUserApi = (data)=>instance.post(`/user/action?unblock=true`,data)
export const AddReferrerCodeApi = (data)=>instance.post(`/user/referrer`,data);
export const getMyReferUsersApi =(code) =>instance.get(`/user/myReferUsers/${code}`)


