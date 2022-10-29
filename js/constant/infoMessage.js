export default function infoMessage(htmlClass, displayMessage) {
  const element = document.querySelector(".container");

  console.log("Function InfoMessage" + `${htmlClass} ${displayMessage}`);

  element.innerHTML = `
                    <div class="info-message ${htmlClass}">
                        ${displayMessage}
                    </div>
    `;
}
