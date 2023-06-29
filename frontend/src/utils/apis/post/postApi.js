import instance from "../../axios/axios"
export const getPostByCat = (catId) => instance.get(`/post?category=${catId}`)

export const getPostByIdApi = (postId) => instance.get(`/post?_id=${postId}`);


export const getPostByUserId = (userId, categorize) => instance.get(`/post?owner=${userId}&categorize=${categorize}`)

export const getPostByLocation = (category, state, city) => instance.get(`/post/location?state=${state}&city=${city}&category=${category}`)

export const deletePost = (postId) => instance.delete(`/post/${postId}`);



export const addMoreVBTtoPost = (postId, data) => instance.post(`/post/addMoreVBT/${postId}`, data)
export const addCommentToPost = (postId, data) => instance.post(`/post/comment/${postId}`, data)
