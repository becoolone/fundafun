window.addEventListener("DOMContentLoaded", () => {
  fetch("cards.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("cards-section").innerHTML = data;
    });

  fetch("news.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("news-section").innerHTML = data;
    });
});
