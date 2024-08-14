import { useEffect, useState } from "react";
import { productHome } from "../../../untils/mockup";
import ProductCard from "../common/ProductCard";
import axios from "axios";
import { url } from "../../../untils/variable";
import useCallApiNoPagination from "../../../hooks/useCallApiNoPagination";

const Section = () => {
  // const data = productHome;

//   const [data,setData] = useState([false]);
//   const [isLoading,setIsLoading] = useState([false]);
//   //call api
//   useEffect(()=>{
//   const getApi =async()=>{

// try {
//   const res =await axios.get(url);
//   // console.log(res.data)
//   // cap nhat du lieu
//   setData(res.data)
//   setIsLoading(false)
// } catch (error) {
//   console.log(error);
// }

   
//   };
//   getApi();
// },[])

const {data,isLoading}=useCallApiNoPagination(url);


//check api call xong chua  
if(isLoading===true) return <p>Loading....</p>

  // Check san pham co ton tai hay khong
  if (data.length == 0) return <p>Khong ton tai san pham!</p>;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((product) => {
            // console.log(product);
            return (
              <div key={product.id} className="col mb-5">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
