// Custom JavaScript for handling GitHub stats images

document.addEventListener('DOMContentLoaded', function () {
  // Get all GitHub stats images
  const githubStatsImages = document.querySelectorAll('.github-stats-img');

  // Track loaded images
  let loadedImages = 0;
  const totalImages = githubStatsImages.length;

  // Add error handling for each image
  githubStatsImages.forEach(function (img) {
    img.addEventListener('error', function () {
      // Hide the image on error
      this.style.display = 'none';

      // Show a fallback message in the container
      const container = this.closest('.github-stats-container');
      if (container) {
        container.classList.add('loading-failed');
      }

      // Count as loaded (even though it failed)
      loadedImages++;
      if (loadedImages >= totalImages) {
        // All images have attempted to load
        equalizeHeights();
      }
    });

    // If the image loads successfully
    img.addEventListener('load', function () {
      // Make sure the image is visible
      this.style.display = 'block';

      // Remove any error classes from the container
      const container = this.closest('.github-stats-container');
      if (container) {
        container.classList.remove('loading-failed');
      }

      // Count as loaded
      loadedImages++;
      if (loadedImages >= totalImages) {
        // All images have loaded
        equalizeHeights();
      }

      // Equalize heights after image loads
      equalizeHeights();
    });
  });

  // Function to equalize container heights
  function equalizeHeights() {
    const rows = document.querySelectorAll('tr.center-two-side');

    rows.forEach(function (row) {
      // Get all cells in this row
      const cells = row.querySelectorAll('td');
      if (cells.length < 2) return; // Skip if not enough cells

      // Reset heights first
      cells.forEach((cell) => {
        const containers = cell.querySelectorAll('.github-stats-container');
        containers.forEach((container) => {
          container.style.height = '';
        });
      });

      // Force a reflow
      row.offsetHeight;

      // Find the tallest cell
      let maxHeight = 0;
      cells.forEach((cell) => {
        const height = cell.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      maxHeight = Math.round(maxHeight + 0.5);

      // Set all cells to the max height if it's reasonable
      cells.forEach((cell) => {
        const containers = cell.querySelectorAll('.github-stats-container');
        containers.forEach((container) => {
          // Add a little extra padding
          container.style.height = maxHeight - 20 + 'px';
        });
      });
    });
  }

  // Run equalization after a short delay to ensure content has loaded
  function debouncedEqualize() {
    clearTimeout(window.equalizeTimer);
    window.equalizeTimer = setTimeout(equalizeHeights, 500);
  }

  // Run on page load and after a delay to ensure all content is loaded
  window.addEventListener('load', function () {
    debouncedEqualize();
    // Run again after a longer delay to catch any late-loading content
    setTimeout(equalizeHeights, 2000);
  });

  // Also run when window is resized
  window.addEventListener('resize', debouncedEqualize);

  // Create modal for image zoom
  const modal = document.createElement('div');
  modal.className = 'image-modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const closeBtn = document.createElement('span');
  closeBtn.className = 'close-modal';
  closeBtn.innerHTML = '&times;';

  const modalImg = document.createElement('img');

  modalContent.appendChild(modalImg);
  modal.appendChild(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Add click event to all GitHub stats images
  githubStatsImages.forEach(function (img) {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling
    }
  });
});
