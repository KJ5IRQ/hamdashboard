// config1.js

// Define the call sign text
const topBarCenterText = `KJ5IRQ - EM02wt`;

// Define the style for the top bar center
const topBarCenterStyle = "background: blue; text-align: center; font-weight: bold; color: yellow;";

// Function to update the topBarCenter dynamically
function updateTopBarCenter() {
  const topBarCenter = document.getElementById("topBarCenter");

  if (topBarCenter) {
    // Apply the style
    topBarCenter.style.cssText = topBarCenterStyle;

    // Update the content
    topBarCenter.textContent = topBarCenterText;
  }
}

// Call the function immediately to initialize the center section
updateTopBarCenter();
