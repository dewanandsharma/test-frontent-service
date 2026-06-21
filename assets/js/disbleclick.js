// old code for disable right click on images

// const element = document.getElementById('myImage');

// if (element) {
//     element.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//         // You could optionally display a custom message here
//         // alert("Right-click disabled!");
//     });
// }









/**
 * Global UI Protection Script - Ankush Infotech
 * Protects layout nodes, images, and brand mockups across all site routing links.
 */
(function () {
  "use strict";

  // 1. Safe-zone Bypass: Skip asset blocking if running in your local sandbox environment
  if (
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1" || 
    window.location.protocol === "file:"
  ) {
    console.log("Dev Environment Detected: Right-click protection deactivated.");
    return;
  }

  // 2. Global Right-Click Protection (Protects ALL images, text nodes, and containers)
  document.addEventListener("contextmenu", function (event) {
    // If you only want to block right-clicks on images specifically, uncomment the line below:
    // if (event.target.tagName === 'IMG' || event.target.closest('img')) { event.preventDefault(); }
    
    // Otherwise, this blocks globally across the document canvas layout:
    event.preventDefault();
  });

  // 3. Prevent Drag & Drop Copying of Logos and Graphical Previews
  document.addEventListener("dragstart", function (event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  });

  // 4. Advanced Shortcut Interception (Blocks DevTools keys: F12, Ctrl+Shift+I, Ctrl+U)
  document.addEventListener("keydown", function (event) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    
    // Condition for View Source (Ctrl + U or Cmd + Option + U)
    const isViewSource = (event.ctrlKey && event.key.toLowerCase() === "u") || 
                         (isMac && event.metaKey && event.altKey && event.key.toLowerCase() === "u");

    // Condition for DevTools panel combo overrides
    const isInspectCombo = (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(event.key.toLowerCase())) ||
                           (isMac && event.metaKey && event.altKey && ["i", "j", "c"].includes(event.key.toLowerCase()));

    if (event.key === "F12" || isViewSource || isInspectCombo) {
      event.preventDefault();
    }
  });
})();





//Right disable Click on Images Brwoser
// // 1. Target a single element by its ID
// const imageElement = document.getElementById('protected-image');

// if (imageElement) {
//     imageElement.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//         // Optional: You can show a message to the user here
//         // console.log("Right-click is disabled on this element.");
//     });
// }

// // 2. Target multiple elements by a class
// document.querySelectorAll('.no-right-click').forEach(element => {
//     element.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     });
// });

// HTML
// <img id="protected-image" src="your-image.jpg" alt="Protected Content">

// <div class="no-right-click">
//     This entire section is protected from right-click.
// </div>