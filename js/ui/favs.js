import getFav from "./getFav.js";
import infoMessage from "../constant/infoMessage.js";
import createProduct from "./createProduct.js";

const favorites = getFav();

if (favorites.length === 0) {
  infoMessage("no-favs", "You currently don´t have any favorites");
}

favorites.forEach((item) => {
  createProduct(item);
});
