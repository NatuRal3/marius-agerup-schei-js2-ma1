import getFav from "./getFav.js";
import saveFav from "./saveFav.js";

export default function handleFavoriteClick() {
  this.classList.toggle("fa-regular");
  this.classList.toggle("fa-solid");

  const id = this.dataset.id;
  const fav = getFav();

  const favItem = fav.find(function (item) {
    return item.id === id;
  });

  if (favItem === undefined) {
    const newItem = { id: id };
    fav.push(newItem);
    saveFav(fav);
  } else {
    const newFav = fav.filter((item) => item.id !== id);
    saveFav(newFav);
  }
}
