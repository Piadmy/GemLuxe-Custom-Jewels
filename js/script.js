// Handle form submission
document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const design = document.getElementById('design').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    alert(`Thank you, ${name}! Your order for a ${design} has been placed.`);
});
