import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";
import axios from "axios";

function SingleProduct() {
  const [SingleProduct, setSingleProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>
      <ProductDetail
      mainImage={SingleProduct.thumbnail}
        thumbnail1={SingleProduct.thumbnail}
        thumbnail2={SingleProduct.thumbnail}
        thumbnail3={SingleProduct.thumbnail}
        thumbnail4={SingleProduct.thumbnail}            
        category={SingleProduct.category}
        title={SingleProduct.title}
        newPrice={SingleProduct.price}
        rating={SingleProduct.rating}
        description={SingleProduct.description}
      />
      <Descriptions />
      <Heading text={"Related Products"} />
      <OurProducts apiProducts={"https://dummyjson.com/products"} limit={4} />
    </div>
  );
}

export default SingleProduct;
