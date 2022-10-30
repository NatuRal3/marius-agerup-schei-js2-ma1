export default function infoMessage(htmlClass, displayMessage) {
  const element = document.querySelector(".container");

  element.innerHTML = `
                    <div class="info-message ${htmlClass}">
                        ${displayMessage}
                    </div>
    `;
}
