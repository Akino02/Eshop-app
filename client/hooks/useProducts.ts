const API_BASE_URL = "http://localhost:3000";
const requestHeaders = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  }

import { useState, useEffect } from "react";
import {Product, RequestState} from "../types/product";

export const useProducts = (id?: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>();
    const [reqState, setReqState] = useState(RequestState.Pending);
  
    const fetchData = async () => {
      try {
        let req;
        if (id == undefined){
            req = await fetch(`${API_BASE_URL}/products`, requestHeaders);        //ziskani vsech produktu
        }
        else{
            req = await fetch(`${API_BASE_URL}/products/${id}`, requestHeaders);  //ziskani jednoho produktu na zaklade id
        }
        return await req.json();
      } catch (e) {
        setReqState(RequestState.Failed);
      }
    };

    /*const deleteProduct = (id: string) => {
        try {
            await fetch(`${API_BASE_URL}/products/${id}`, )
        }
    }*/

  
    useEffect(() => {
      if (id == undefined){
        fetchData().then((products) => {
          setReqState(RequestState.Succeeded);
          console.log(products);
          products && setProducts(products.payload as Product[]);
        });
      }
      else{
        fetchData().then((product) => {
          setReqState(RequestState.Succeeded);
          console.log(product);
          product && setProduct(product.payload as Product);
        });
      }
    }, []);
  
    return { products, product, reqState };
  };