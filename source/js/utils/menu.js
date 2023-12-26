const currentPath = window.location.pathname;
const currentPage = currentPath.replace(/\/([^\/.]+)\.html$/, '$1');

if (currentPage !== 'index') {
  const navList = document.querySelector('.nav-list');
  navList.querySelector(`[data-code=${currentPage}]`).classList.add('active');
  navList.querySelector(`[data-active=${currentPage}]`).classList.add('active');


  navList.addEventListener('click', (e) => {
    if (!(e.target && e.target.classList.contains('nav-list__button'))) {
      return;
    }
    e.target.classList.toggle('active');
    const accordion = navList.querySelector(`[data-active=${e.target.dataset.code}]`);
    if (accordion) {
      accordion.classList.toggle('active');
    }
  });
}


