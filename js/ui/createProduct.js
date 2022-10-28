export default function createProduct(data) {
  const element = document.querySelector(".container");

  element.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    element.innerHTML += `<div class="result">
                                  <h4>${data[i].title}</h4>
                                  <p>Price: <b>${data[i].price}</b></p>                                   
                              </div>`;
  }
}
