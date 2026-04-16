function scrollGallery(btn, direction) {
  const container = btn.parentElement.querySelector('.image-gallery');
  const width = container.offsetWidth;
  container.scrollBy({ left: width * direction, behavior: 'smooth' });
}

function updateArrows(container) {
  const parent = container.parentElement;
  if (!parent) return;

  const leftArrow = parent.querySelector('.nav-zone.left');
  const rightArrow = parent.querySelector('.nav-zone.right');
  
  const scrollLeft = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;

  if (leftArrow) {
    if (scrollLeft <= 5) leftArrow.classList.add('hidden');
    else leftArrow.classList.remove('hidden');
  }

  if (rightArrow) {
    if (scrollLeft >= maxScroll - 5) rightArrow.classList.add('hidden');
    else rightArrow.classList.remove('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-gallery').forEach(gallery => {
    gallery.addEventListener('scroll', () => updateArrows(gallery));
    // Initial check to hide left arrow
    setTimeout(() => updateArrows(gallery), 100);
  });
});
