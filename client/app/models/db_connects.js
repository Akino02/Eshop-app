//const API_BASE_URL = "http://10.0.2.2:3000/";
const API_BASE_URL = "http://localhost:3000";

export const getAllProducts = async () => {
    const req = await fetch(`${API_BASE_URL}/products`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const getProductsByCategory = async (type) => {
    const req = await fetch(`${API_BASE_URL}/products?type=${type}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  
  /*export const getProductsBySearch = async (search) => {
    const req = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };*/
  
  
  export const getProductById = async (id) => {
    const req = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  
  //Pro posilani dat (+ cesta obrazku)
  export const createProduct = async (formData) => {
    const req = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      body: formData,
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  
  export const deleteProduct = async (id, formData) => {
    const req = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  
  
  /*export const updateProduct = async (id, formData) => {
    const req = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };*/