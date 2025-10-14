
    const RECIPIENT_NUMBER = '+917977114561'; // Your WhatsApp number
    const form = document.getElementById('contactinfo');
    const statusDiv = document.getElementById('status');
    const fallbackDiv = document.getElementById('fallback');
    const captchaQuestion = document.getElementById('captcha-question');
    const captchaAnswer = document.getElementById('captcha-answer');

    // 🔹 Generate simple math captcha
    let num1, num2, correctAnswer;
    function generateCaptcha() {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      correctAnswer = num1 + num2;
      captchaQuestion.textContent = `Solve: ${num1} + ${num2} = ?`;
    }
    generateCaptcha();

    // 🔹 Handle form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      fallbackDiv.innerHTML = '';
      statusDiv.innerHTML = '📍 Fetching current location... please wait.';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const messageText = document.getElementById('message').value.trim();
      const userCaptcha = captchaAnswer.value.trim();

      // Validate fields
      if (!name || !email || !mobile || !messageText || !userCaptcha) {
        alert('Please fill all fields.');
        statusDiv.innerHTML = '';
        return;
      }

      if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        statusDiv.innerHTML = '';
        return;
      }

      if (parseInt(userCaptcha) !== correctAnswer) {
        alert('Incorrect captcha. Please try again.');
        generateCaptcha();
        captchaAnswer.value = '';
        statusDiv.innerHTML = '';
        return;
      }

      // 🔹 Get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationLink = `https://www.google.com/maps?q=${lat},${lon}`;
            statusDiv.innerHTML = '✅ Location detected successfully.';
            sendToWhatsAppOrSMS(name, email, mobile, messageText, locationLink);
          },
          function () {
            statusDiv.innerHTML = '⚠️ Location access denied or unavailable.';
            sendToWhatsAppOrSMS(name, email, mobile, messageText, 'Not available');
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );
      } else {
        statusDiv.innerHTML = '❌ Geolocation not supported by your browser.';
        sendToWhatsAppOrSMS(name, email, mobile, messageText, 'Not available');
      }
    });

    // 🔹 Send data to WhatsApp or fallback to SMS
    function sendToWhatsAppOrSMS(name, email, mobile, messageText, locationLink) {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const baseUrl = isMobile ? 'https://wa.me' : 'https://web.whatsapp.com/send';

      const message = [
        '🟢 New Contact Form Submission:',
        `👤 Name: ${name}`,
        `📧 Email: ${email}`,
        `📞 Mobile: ${mobile}`,
        `💬 Message: ${messageText}`,
        `📍 Location: ${locationLink}`
      ].join('\n');

      const encoded = encodeURIComponent(message);
      const waUrl = isMobile
        ? `${baseUrl}/${RECIPIENT_NUMBER}?text=${encoded}`
        : `${baseUrl}?phone=${RECIPIENT_NUMBER}&text=${encoded}`;
      const smsUrl = `sms:${RECIPIENT_NUMBER}?body=${encoded}`;

      // Try to open WhatsApp
      const popup = window.open(waUrl, '_blank');

      // Fallback to SMS
      setTimeout(() => {
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          window.open(smsUrl, '_self');
          statusDiv.innerHTML = '📩 WhatsApp not available. mobile no...';
        }
      }, 2000);

      form.reset();
      generateCaptcha();
    }
 
