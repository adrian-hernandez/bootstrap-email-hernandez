document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#sidebar .nav-link');
    const composeLink = document.querySelector('#sidebar .nav-link[data-bs-target="#composeModal"]');
    const inboxLink = document.querySelector('#sidebar .nav-link#inbox');

    let lastActiveLink = null;

    // Function to activate a specific link
    function activateLink(link) {
        link.classList.add('active');
    }

    // Function to deactivate a specific link
    function deactivateLink(link) {
        link.classList.remove('active');
    }

    // Event listener for the Compose link
    composeLink.addEventListener('click', () => {
        // Remember the last active link if it's not the Compose link
        lastActiveLink = Array.from(navLinks).find(link => link.classList.contains('active'));
        
        // Deactivate all links and activate the Compose link
        navLinks.forEach(link => deactivateLink(link));
        activateLink(composeLink);
    });

    // Event listener for closing the Compose modal
    const composeModal = document.getElementById('composeModal');
    composeModal.addEventListener('hidden.bs.modal', () => {
        // Deactivate the Compose link and restore the previously active link
        deactivateLink(composeLink);
        if (lastActiveLink) {
            activateLink(lastActiveLink);
        }
    });

    // Event listener for other nav links
    navLinks.forEach(link => {
        if (link !== composeLink) {
            link.addEventListener('click', () => {
                // Remember the previously active link
                lastActiveLink = link;
                
                // Deactivate all links and activate the clicked link
                navLinks.forEach(link => deactivateLink(link));
                activateLink(link);
            });
        }
    });

    // Set the default active link on page load
    if (inboxLink) {
        activateLink(inboxLink);
        lastActiveLink = inboxLink; // Set lastActiveLink to Inbox
    }
});
