// Function to load emails into the email list
function loadEmails(category) {
    const emailList = document.getElementById("email-list-content");
    emailList.innerHTML = emails[category].join(""); // Load the selected category's emails
}

// Event listeners for sidebar links
document.getElementById("inbox").addEventListener("click", function () {
    loadEmails("inbox");
});
document.getElementById("sent").addEventListener("click", function () {
    loadEmails("sent");
});
document.getElementById("trash").addEventListener("click", function () {
    loadEmails("trash");
});
document.getElementById("starred").addEventListener("click", function () {
    loadEmails("starred");
});

// Load inbox by default on page load
window.onload = function() {
    loadEmails("inbox");
};
