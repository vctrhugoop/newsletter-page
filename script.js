const form = document.querySelector('.form-content');
const sectionContent = document.querySelector('.section-content');
const messageContent = document.querySelector('.message-content');
form.addEventListener('submit', e => {
  e.preventDefault();
  sectionContent.classList.add('hide');
  messageContent.classList.remove('hide');
});
