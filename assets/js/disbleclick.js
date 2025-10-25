const element = document.getElementById('myImage');

if (element) {
    element.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        // You could optionally display a custom message here
        // alert("Right-click disabled!");
    });
}




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