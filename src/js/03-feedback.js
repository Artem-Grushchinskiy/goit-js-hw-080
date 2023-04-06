import throttle from 'lodash.throttle';
const feedBack = document.querySelector('.feedback-form');
feedBack.addEventListener('input', throttle(onFormInput, 500));
let formData = {
  email: '',
  message: '',
};
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

feedBack.email.value = formData.email ?? '';
feedBack.message.value = formData.message ?? '';

feedBack.addEventListener('submit', finishDeal);
function finishDeal(event) {
  event.preventDefault();
  localStorage.clear();
  feedBack.reset();
  console.log(formData);
  formData = {};
}
