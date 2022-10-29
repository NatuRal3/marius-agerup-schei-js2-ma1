import createProduct from "./ui/createProduct.js";
import searchProducts from "./ui/searchProducts.js";

const url = "https://fakestoreapi.com/products";

async function fetchApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    createProduct(data);
    searchProducts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();
