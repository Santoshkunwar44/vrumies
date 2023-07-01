// const { default: instance } = require("../utils/axios/axios");

// const useHttpRequest=()=>{
//     const request=async(
//  {
//     endpointMethod,
//     body,
//     param1,
//     param2,
// },
// callback
//     )=>{
//         let  res ;
//         try {
            
//             if(url==="get"){
//                 res = await  endpointMethod(...)

//             }else{
//                 res = await endpointMethod(body)
//             }
//             const {status,data} = res;
//             if(status===200){
//                 callback(null,data)
//             }else{
//                 throw data.message;
//             }
//         } catch (error) {
//             callback(error.message,null)
//         }
        

//     }
//     return {request};
// }

// export default useHttpRequest;