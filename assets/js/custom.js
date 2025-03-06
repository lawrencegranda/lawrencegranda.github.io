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

  // Try to load images via proxy if direct loading fails
  setTimeout(function () {
    githubStatsImages.forEach(function (img) {
      if (img.complete === false || img.naturalHeight === 0) {
        // Image failed to load, try with a proxy
        const originalSrc = img.getAttribute('src');
        if (originalSrc && !originalSrc.includes('cors-anywhere')) {
          img.setAttribute(
            'src',
            'https://cors-anywhere.herokuapp.com/' + originalSrc
          );
        }
      }
    });
  }, 3000); // Wait 3 seconds before trying the proxy

  // Function to ensure equal heights for side-by-side containers
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

      console.log(maxHeight);
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
});
