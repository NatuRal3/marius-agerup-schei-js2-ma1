const url = "https://fakestoreapi.com/products";

async function fetchApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();
