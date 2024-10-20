
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function SingleProduct() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 




  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>
        <ProductDetail />
        <Descriptions />
        <Heading text={"Related Products"}/>
        <OurProducts apiProducts={'https://dummyjson.com/products/category/smartphones'} limit={4}/>
    </div>
  );
}

export default SingleProduct;
