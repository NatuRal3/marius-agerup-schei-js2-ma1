import createProduct from "./ui/createProduct.js";
import searchProducts from "./ui/searchProducts.js";
import { apiURL } from "./constant/api.js";
import infoMessage from "./constant/infoMessage.js";

async function fetchApi() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    createProduct(data);
    searchProducts(data);
  } catch (error) {
    console.log("API Catch");
    infoMessage("error", "Failed to get you the data. We are on it.");
  }
}

fetchApi();
