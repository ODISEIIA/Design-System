const progress = document.querySelector('.progress__meter--active');
const progressText = document.querySelector('.progress-label__label');

let value = 0;

const changeProgress = () => {
  value += 1;
  if (value === 100) {
    value = 0;
  }
  progress.style.width = `${value}%`;
  progressText.textContent = `${value}%`;
};

if (progress) {
  progressText.textContent = `${progress.getAttribute('value')}%`;
  const time = 7000 / 100;

  const progressAnimation = setInterval(changeProgress, time);
}
