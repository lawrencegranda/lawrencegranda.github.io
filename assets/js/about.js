document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Tab switching functionality
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove('active'));

      // Show the corresponding tab content
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Add animation when scrolling to content cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.content-card').forEach((card) => {
    observer.observe(card);
    // Add a class for the initial state (for animation purposes)
    card.classList.add('animate-on-scroll');
  });

  // Add hover effect for skill cards
  document.querySelectorAll('.skill-card').forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.classList.add('hover');
    });

    card.addEventListener('mouseleave', function () {
      this.classList.remove('hover');
    });
  });
});
