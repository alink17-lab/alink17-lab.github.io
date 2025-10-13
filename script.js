const projects = [
  {
    name: "First Script",
    path: "first-script/",
    description: "Первый проект с базовым функционалом",
    image: "first-script/preview.jpg"
  },
  {
    name: "Test Array",
    path: "testarr/",
    description: "Тестовый проект для работы с массивами",
    image: "testarr/preview.jpg"
  },
  {
    name: "Guess Game",
    path: "guess.html",
    description: "Игра-угадайка с простым интерфейсом",
    image: "guess/preview.jpg"
  }
];

window.onload = function() {
  const container = document.getElementById('projects-container');
  
  projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'project-link';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Открыть проект ${project.name}`);

    const title = document.createElement('h2');
    title.textContent = project.name;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = project.description;
    card.appendChild(desc);

    card.addEventListener('click', () => openModal(project));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(project);
      }
    });

    container.appendChild(card);
  });

  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
};

function openModal(project) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalLink = document.getElementById('modal-link');

  if (modalImg) {
    modalImg.src = project.image;
    modalImg.alt = project.name;
  }
  
  if (modalTitle) modalTitle.textContent = project.name;
  if (modalDesc) modalDesc.textContent = project.description;
  
  if (modalLink) {
    modalLink.href = project.path;
    modalLink.textContent = "Открыть проект";
  }
  
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }
  
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
  
  document.body.style.overflow = 'auto';
}