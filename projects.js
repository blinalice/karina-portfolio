
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const closeBtn = document.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
    card.addEventListener('click', () => {
      modalImg.src = card.querySelector('img').src;
      modalTitle.textContent = card.querySelector('.title').textContent;
      modalText.textContent = card.querySelector('img').alt;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
