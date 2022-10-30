import { FAV_KEY } from "../constant/settings.js";

export default function saveFav(fav) {
  localStorage.setItem(FAV_KEY, JSON.stringify(fav));
}
