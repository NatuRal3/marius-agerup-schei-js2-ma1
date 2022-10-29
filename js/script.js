import createProduct from "./ui/createProduct.js";
import searchProducts from "./ui/searchProducts.js";
import { apiURL } from "./constant/api.js";

async function fetchApi() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    createProduct(data);
    searchProducts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();
