import { useEffect, useState } from "react";

const useFetchApi=(url,otp)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const res=await fetch(url,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(otp)
                })
                setLoading(true)
                 setData(resData)
                const resData=await res.json();
                setLoading(false)
               
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[url])

    return {data,loading}
}
export default useFetchApi;