
const useFetch = () => {



    const fetch=async(api,parameter,cb)=>{

        try {
            const {data,status}=await api(parameter);
            console.log("rese",status,data)
            if(status===200){
                cb(null,data)
            }
        } catch (error) {
            cb(error.message,null)
            console.log(error)
        }

    }

    return {fetch}
  
}

export default useFetch