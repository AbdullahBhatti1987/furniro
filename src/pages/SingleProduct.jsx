import { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";
import axios from "axios";
import { AddtoCartContext } from "../context/AddToCart";

function SingleProduct() {
  const [oneProduct, setOneProduct] = useState([]);
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
        setOneProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);


  

  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);

  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>
      <ProductDetail
        mainImage={oneProduct.thumbnail}
        thumbnail1={oneProduct.thumbnail}
        thumbnail2={oneProduct.thumbnail}
        thumbnail3={oneProduct.thumbnail}
        thumbnail4={oneProduct.thumbnail}            
        category={oneProduct.category}
        title={oneProduct.title}
        newPrice={oneProduct.price}
        rating={oneProduct.rating}
        description={oneProduct.description}
        onClick={()=>{addItemToCart(oneProduct)}}
        lessQuantityCart={()=>{lessQuanityFromCart(oneProduct)}}
        addQuantityIntoCart={()=>{addItemToCart(oneProduct)}}
        count={1}
       
      />
      <Descriptions />
      <Heading text={"Related Products"} />
      <OurProducts apiProducts={"https://dummyjson.com/products"} limit={4} />
    </div>
  );
}

export default SingleProduct;
