(function () {
  // WhatsApp number (with country code, no spaces/dashes)
  const whatsappNumber = "+91 7977114561"; // Replace with your number

  // Button styles
  const btnStyle = `
    #whatsapp-connect-btn {
      width: 40px;               /* Circle size */
      height: 40px;
      position: fixed;
      bottom: 90px;
      right: 40px;
      background-color: #25D366;
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;   /* Center the icon */
      z-index: 9999;
    }
    #whatsapp-connect-btn:hover {
      background-color: #1ebe5d;
    }
    #whatsapp-connect-btn i {
      font-size: 24px;           /* Icon size */
      line-height: 1;
    }
  `;

  // Inject styles
  const styleEl = document.createElement("style");
  styleEl.textContent = btnStyle;
  document.head.appendChild(styleEl);

  // Create button
  const btn = document.createElement("button");
  btn.id = "whatsapp-connect-btn";
  btn.innerHTML = `<i class="bi bi-whatsapp"></i>`;

  // Add click event
  btn.onclick = function () {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  // Append button
  document.body.appendChild(btn);
})();
