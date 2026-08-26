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

  initFaqChat();
});

// ===== Asistente FAQ (bot de preguntas frecuentes, sin IA, sin backend) =====
// No entiende texto libre: son respuestas fijas. Cualquier cosa que no cubra
// se redirige a WhatsApp con un mensaje pre-armado.
function initFaqChat() {
  var WA_NUMBER = "56963038624";
  var toggle = document.getElementById("faq-chat-toggle");
  var panel = document.getElementById("faq-chat-panel");
  var closeBtn = document.getElementById("faq-chat-close");
  var body = document.getElementById("faq-chat-body");
  if (!toggle || !panel || !body) return;

  var FAQS = [
    {
      q: "¿Cuál es el tamaño y capacidad de la caja?",
      a: "La Caja Tomatera (Torito) mide 470 x 340 x 288 mm, pesa aprox. 870 g y tiene 30 L de capacidad. Es de polipropileno reciclado, color gris oscuro."
    },
    {
      q: "¿Cuál es el pedido mínimo?",
      a: "El pedido mínimo es 1 pallet, que trae 128 unidades. El pallet mide 1,00 x 1,20 x 2,88 m."
    },
    {
      q: "¿Hacen despacho a todo Chile?",
      a: "Sí, despachamos a nivel nacional. El flete no está incluido en el precio del producto y se cotiza según tu comuna/región de destino — para pedidos que completan un camión, el despacho puede salir gratis, lo confirmamos por WhatsApp."
    },
    {
      q: "¿Cómo veo los precios?",
      a: "Tenemos precios por volumen (más pallets, menor precio por unidad). Puedes verlos en la sección \"Precios\" de esta misma página, un poco más abajo.",
      action: { type: "scroll", target: "#precios", label: "Ver tabla de precios" }
    },
    {
      q: "¿El producto es nuevo?",
      a: "Sí, es producto 100% nuevo — no reacondicionado ni usado."
    }
  ];

  function scrollToTarget(selector) {
    var el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function addMessage(text, from) {
    var msg = document.createElement("div");
    msg.className = "faq-msg " + from;
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  }

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function renderMenu() {
    var wrap = document.createElement("div");
    wrap.className = "faq-options";

    FAQS.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "faq-option-btn";
      btn.textContent = item.q;
      btn.addEventListener("click", function () {
        addMessage(item.q, "user");
        addMessage(item.a, "bot");
        if (item.action && item.action.type === "scroll") {
          var actionBtn = document.createElement("button");
          actionBtn.type = "button";
          actionBtn.className = "faq-option-btn";
          actionBtn.textContent = "👉 " + item.action.label;
          actionBtn.addEventListener("click", function () {
            scrollToTarget(item.action.target);
            panel.hidden = true;
            toggle.setAttribute("aria-expanded", "false");
          });
          body.appendChild(actionBtn);
        }
        renderMenu();
        body.scrollTop = body.scrollHeight;
      });
      wrap.appendChild(btn);
    });

    var waBtn = document.createElement("a");
    waBtn.className = "faq-option-btn faq-whatsapp-btn";
    waBtn.textContent = "💬 Hablar con nosotros por WhatsApp";
    waBtn.href = waLink("Hola Marquer, tengo una consulta sobre las bandejas para tomate.");
    waBtn.target = "_blank";
    waBtn.rel = "noopener";
    wrap.appendChild(waBtn);

    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function openChat() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    if (!body.dataset.initialized) {
      addMessage("¡Hola! 👋 Soy el asistente de Marquer. Elige una pregunta y te respondo altiro, o escríbenos por WhatsApp si prefieres hablar con una persona.", "bot");
      renderMenu();
      body.dataset.initialized = "true";
    }
  }

  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (panel.hidden) openChat();
    else closeChat();
  });
  closeBtn.addEventListener("click", closeChat);
}
