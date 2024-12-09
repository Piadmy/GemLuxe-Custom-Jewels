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

document.addEventListener("DOMContentLoaded", () => {
  const openFormButton = document.getElementById("open-form");
  const formModal = document.getElementById("form-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const contactForm = document.getElementById("contact-form");

  // Open the modal when the button is clicked
  openFormButton.addEventListener("click", () => {
    formModal.classList.remove("hidden");
  });

  // Close the modal when clicking the overlay
  modalOverlay.addEventListener("click", () => {
    formModal.classList.add("hidden");
  });

  // Handle form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Display popup message
    alert("We will contact you soon!");

    // Close the modal
    formModal.classList.add("hidden");

    // Reset the form
    contactForm.reset();
  });
});
