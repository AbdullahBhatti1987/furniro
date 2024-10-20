import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { ImageModal } from "./ImageModal";

export default function CartProduct() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative flex flex-row items-center text-center border rounded-lg py-1">
      <div className="flex flex-row justify-between items-center w-2/6 gap-2 py-1">
        
        <ImageModal src={"https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A48V1PV1lZVvMFoFBeOVQueiIleT9L4nXivR7zHgx96OJZhvl5af353WPur8rpJAoMPzXUqcpOAcB9f-hOZxASk3qL9PXugNgsIJxJD8eEMvvNoE3ghPq3wxRRQxwvjNTmVrKE6CohfgM6t0Cr8opCxbM6QCPDyXBz1C-Y0wLdxSvywczpAG8376zNkORfD-l5k4YSqM1h9rjiVO9uTIz6uwxPpoXDDJLkskBACsQEtJslBVEKqpsVWTHNZ63t-3Fq0DluBS6Oc-~X8QyrmncM4jsuTPDI2klnq8PVKx6Eq3tsdv-zfGLHCuoTB5iFfvZDcx0fPrcM804f5GrjiQbg__"}>
        


        </ImageModal>
        
        
        
        
        <h3 className="w-2/3">Asgaard sofa</h3>
      </div>

      <h4 className="w-1/6">25000</h4>
      <div className="w-1/6 flex justify-center items-center">
        <div className="flex flex-row items-center border-2 border-gray-600 rounded-md shadow-sm">
          <p className="px-2 text-lg">2</p>
        </div>
      </div>
      <h4 className="w-2/6 font-bold ">
        Rs. <span>{50000}</span>
      </h4>
      <button className="absolute right-8 cursor-pointer"><AiFillDelete className="darkFont text-2xl"/></button>



    </div>
  );
}
