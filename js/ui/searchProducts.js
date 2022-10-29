import createProduct from "./createProduct.js";
import { fetchApi } from "../script.js";

export default function searchProducts(data) {
  const searchMaxPrice = document.querySelector("input#max-price");

  function priceFilter() {
    const maxPriceInput = event.target.value;
    console.log(maxPriceInput);

    const maxPriceData = data.filter(function (item) {
      if (item.price <= maxPriceInput) {
        return true;
      }
      if (!item.price) {
        fetchApi();
      }
    });
    createProduct(maxPriceData);
  }
  searchMaxPrice.addEventListener("keyup", priceFilter);
}
