// Google Maps API Initialization
function initMap() {
  const mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
    zoom: 10,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// Load Google Maps API Script Dynamically
(function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  document.head.appendChild(script);
})();

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".animated-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert(`Button ${button.innerText} clicked!`);
    });
  });
});
