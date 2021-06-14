var captionText = document.getElementById("modalLabel");
var imagenCap = document.querySelectorAll('.gallery-item');


document.addEventListener("click", function (e) {
  
  const alt = e.target.getAttribute("alt");

  if (e.target.classList.contains("gallery-item")) {

    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;

    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }

  captionText.innerHTML = alt;
});