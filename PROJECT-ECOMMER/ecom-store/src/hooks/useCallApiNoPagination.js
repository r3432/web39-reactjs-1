

import { useEffect, useState } from "react";
import axios from "axios";


const useCallApiNoPagination = (url) =>{
  const [data,setData] = useState([false]);
  const [isLoading,setIsLoading] = useState([false]);
  //call api
  useEffect(()=>{
  const getApi =async()=>{

try {
  const res =await axios.get(url);
  // console.log(res.data)
  // cap nhat du lieu
  setData(res.data)
  setIsLoading(false)
} catch (error) {
  console.log(error);
}

   
  };
  getApi();
},[url])

return {data,isLoading}
}

export default useCallApiNoPagination