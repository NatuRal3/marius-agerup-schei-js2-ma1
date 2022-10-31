import getFav from "./getFav.js";
import infoMessage from "../constant/infoMessage.js";

const element = document.querySelector(".container");
const favorites = getFav();
element.innerHTML = "";

if (favorites.length === 0) {
  infoMessage("no-favs", "You currently dont have any favorites");
}

favorites.forEach((item) => {
  element.innerHTML += `  <div class="result">

      <i class="fa-regular fa-heart"></i>
      ${item.id}
                          
</div>`;
});
