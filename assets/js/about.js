document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const dropdownToggle = document.querySelector('.dropdown-menu-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const currentTabText = document.querySelector('.current-tab');

  // Tab switching functionality
  function switchTab(button) {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove('active'));

    // Show the corresponding tab content
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');

    // Update dropdown text if it exists
    if (currentTabText) {
      currentTabText.textContent = button.textContent.trim();
    }

    // Close dropdown menu if it's open
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
      dropdownToggle.classList.remove('active');
    }
  }

  // Add click event to all tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => switchTab(button));
  });

  // Dropdown toggle functionality
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownToggle.classList.toggle('active');
      dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (
        !dropdownMenu.contains(e.target) &&
        !dropdownToggle.contains(e.target)
      ) {
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.remove('active');
      }
    });
  }

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
    },
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
