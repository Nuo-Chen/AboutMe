document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.poetry-navigation');
  let scrollTimeout;

  if (sidebar) {
    // Function to hide scrollbar
    const hideScrollbar = () => {
      sidebar.classList.remove('show-scrollbar');
    };

    // Function to show scrollbar
    const showScrollbar = () => {
      sidebar.classList.add('show-scrollbar');
      
      // Clear the previous timer
      clearTimeout(scrollTimeout);
      
      // Set timer to hide after 3 seconds
      scrollTimeout = setTimeout(hideScrollbar, 3000);
    };

    // Trigger on scroll
    sidebar.addEventListener('scroll', showScrollbar);

    // Trigger on mouse move inside the sidebar
    sidebar.addEventListener('mousemove', showScrollbar);
    
    // Optional: Keep it visible while the mouse is hovering
    sidebar.addEventListener('mouseenter', showScrollbar);
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      // Log to console so you can check if it's working (Press F12 to see)
      console.log("Menu toggled"); 
      sidebar.classList.toggle('mobile-open');
    });
  } else {
    console.error("Sidebar or Menu Toggle button not found in the HTML.");
  }

});