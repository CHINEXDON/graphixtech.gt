document.addEventListener("DOMContentLoaded", () => {
  const initialLoadingContainer = document.querySelector('.initial-loading-container');

  if (initialLoadingContainer) {
    setTimeout(() => {
      initialLoadingContainer.style.opacity = 0;

      setTimeout(() => {
        initialLoadingContainer.style.display = 'none';
      }, 300); // Fade out duration
    }, 2500); // Initial loading screen duration
  } else {
    console.error("Loading screen not found!");
  }
});
