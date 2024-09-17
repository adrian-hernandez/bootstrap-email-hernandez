document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Toggle sidebar on navbar-toggler click
    navbarToggler.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-open'); // Prevent scrolling when sidebar is open
    });

    // Optional: Hide sidebar when a menu item is clicked (for mobile only)
    document.querySelectorAll('#sidebar .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) { // Only hide if in mobile view
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
    });
});
