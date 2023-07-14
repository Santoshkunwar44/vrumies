import instance from "../../axios/axios";

export const getReviewApi =(owner)=>instance.get(`/review?owner=${owner}`)
export const addReviewApi =(data) =>instance.post(`/review`,data)



