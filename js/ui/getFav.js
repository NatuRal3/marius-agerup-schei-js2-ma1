import { FAV_KEY } from "../constant/settings.js";

export default function getFav() {
  const favorite = localStorage.getItem(FAV_KEY);

  if (favorite === null) {
    return [];
  } else {
    return JSON.parse(favorite);
  }
}
