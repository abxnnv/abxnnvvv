document.querySelector('.cta-button').addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.add('leaving');
  window.setTimeout(() => { window.location.href = event.currentTarget.href; }, 260);
});
