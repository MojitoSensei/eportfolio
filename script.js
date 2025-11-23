document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function openTab(hash) {
        // Find the tab content to activate
        const activeTab = document.querySelector(hash);
        if (!activeTab) return; // Exit if the hash doesn't match any tab

        // Deactivate all links and content
        tabLinks.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        // Activate the new tab link and content
        const activeLink = document.querySelector(`.tab-link[href="${hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        activeTab.classList.add('active');
    }

    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump
            const hash = link.getAttribute('href');
            // Change the URL hash, which will trigger the 'hashchange' event
            if (window.location.hash !== hash) {
                window.location.hash = hash;
            }
        });
    });

    // Listen for changes in the URL hash
    window.addEventListener('hashchange', () => openTab(window.location.hash || '#home'));
    
    // Open the correct tab on initial page load
    openTab(window.location.hash || '#home');
});