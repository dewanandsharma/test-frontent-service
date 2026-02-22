(function () {
  const whatsappNumber = "917977114561"; // no spaces / no +

  const btnStyle = `
    #whatsapp-connect-btn {
      width: 48px;
      height: 48px;
      position: fixed;
      bottom: 150px;
      right: 30px;

      background-color: #25D366;
      color: white;
      border: none;
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.25);
      z-index: 9999;
    }

    #whatsapp-connect-btn i {
      font-size: 26px;
      line-height: 1;
      margin: 0;
      padding: 0;
    }

    #whatsapp-connect-btn:hover {
      background-color: #1ebe5d;
    }
  `;

  const styleEl = document.createElement("style");
  styleEl.textContent = btnStyle;
  document.head.appendChild(styleEl);

  const btn = document.createElement("button");
  btn.id = "whatsapp-connect-btn";
  btn.innerHTML = '<i class="bi bi-whatsapp"></i>';

  btn.onclick = function () {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  document.body.appendChild(btn);
})();