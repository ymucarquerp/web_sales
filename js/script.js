// ===== Marquer — interacciones básicas =====

document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    // cerrar el menú al elegir una opción
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Año automático en el footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Botón "Cotizar por WhatsApp" en la tabla de precios:
  // arma un mensaje con el tramo elegido para que el cliente no tenga que escribir todo.
  document.querySelectorAll("[data-wa-msg]").forEach(function (btn) {
    var base = "56963038624";
    var msg = encodeURIComponent(btn.getAttribute("data-wa-msg"));
    btn.setAttribute("href", "https://wa.me/" + base + "?text=" + msg);
  });
});
