import handleFavoriteClick from "./handleFavoriteClick.js";
import getFav from "./getFav.js";

export default function createProduct(data) {
  const element = document.querySelector(".container");
  const favorite = getFav();

  element.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let cssFavorite = "fa-regular";

    const favItem = favorite.find(function (item) {
      return i === parseInt(item.id);
    });

    if (favItem) {
      cssFavorite = "fa-solid";
    }

    element.innerHTML += `  <div class="result">
                                  <h4>${data[i].title}</h4>
                                  
                                    <p>Price: <b>${data[i].price}</b></p>  
                                    <i class="${cssFavorite} fa-heart" data-id="${i}"></i>
                                                        
                            </div>`;
  }

  const favButton = document.querySelectorAll(".result i");

  favButton.forEach((button) => {
    button.addEventListener("click", handleFavoriteClick);
  });
}
