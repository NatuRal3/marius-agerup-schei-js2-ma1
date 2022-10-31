import createProduct from "./createProduct.js";
import { fetchApi } from "../script.js";
import infoMessage from "../constant/infoMessage.js";

export default function searchProducts(data) {
  const searchMaxPrice = document.querySelector("input#max-price");

  function priceFilter() {
    const maxPriceInput = event.target.value;

    if (!maxPriceInput) {
      fetchApi();
    }

    const maxPriceData = data.filter(function (item) {
      if (item.price <= maxPriceInput) {
        return true;
      }
    });
    createProduct(maxPriceData);
  }
  searchMaxPrice.addEventListener("keyup", priceFilter);
}
