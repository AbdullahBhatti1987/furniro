
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";




function SingleProduct(params) {


  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>
        <ProductDetail productTitle={params.id}/>
        <Descriptions />
        <Heading text={"Related Products"}/>
        <OurProducts apiProducts={'https://dummyjson.com/products/category/smartphones'}/>
    </div>
  );
}

export default SingleProduct;
