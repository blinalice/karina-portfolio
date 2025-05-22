
document.addEventListener('DOMContentLoaded', () => {
  const spawnImg = (src, cls, x = 0, y = 0) => {
    const img = new Image();
    img.src = src;
    img.className = cls;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    document.body.append(img);
    setTimeout(() => img.remove(), 2000);
  };

  // Сердечко по клику
  document.addEventListener('click', e => {
    spawnImg('pixel_hearts.png', 'heart', e.pageX - 16, e.pageY - 16);
  });

  // Таймер стажа
  let days = 0;
  const expElement = document.getElementById("experienceCounter");
  setInterval(() => {
    days++;
    if (expElement) {
      expElement.textContent = `💻 Стаж во фронтенде: ${days} дней`;
    }
  }, 150);

  // Факт обо мне
  const facts = [
    "Обожаю всё розовое!",
    "Верстаю под музыку и кофе ☕",
    "Люблю делать сайты уютными",
    "Могу залипать на красивые кнопки",
    "Учусь каждый день понемногу!"
  ];
  const factBtn = document.getElementById("factBtn");
  if (factBtn) {
    factBtn.addEventListener("click", () => {
      const fact = document.createElement("p");
      fact.textContent = facts[Math.floor(Math.random() * facts.length)];
      document.getElementById("factContainer").appendChild(fact);
    });
  }

  // Удаление факта
  window.addEventListener('keydown', e => {
    if (e.key === 'Delete') {
      const lastFact = document.querySelector('#factContainer p:last-child');
      if (lastFact) lastFact.remove();
    }
  });

  // Переход к проектам
  const seeProjects = document.getElementById('seeProjects');
  if (seeProjects) {
    seeProjects.addEventListener('click', () => {
      window.location.href = 'projects.html';
    });
  }

  // Подсказка блок
  const toggleBtn = document.getElementById("toggleHints");
  const hintBlock = document.getElementById("hintBlock");
  if (toggleBtn && hintBlock) {
    toggleBtn.addEventListener("click", () => {
      hintBlock.style.display = hintBlock.style.display === "none" ? "block" : "none";
    });
  }
});


  // Бургер-меню
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
