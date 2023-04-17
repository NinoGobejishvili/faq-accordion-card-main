
const questions = document.querySelectorAll('.question-box');

questions.forEach(question => {
  const arrow = question.querySelector('.arrow');
  const questionText = question.querySelector('.question'); 
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    questions.forEach(previous => {
      const second = previous.nextElementSibling;
      if (second !== answer) {
        second.classList.remove('show');
        previous.querySelector('.arrow').classList.remove('rotate');
        previous.querySelector('.question').classList.remove('bold'); 
      }
    });
    answer.classList.toggle('show');
    arrow.classList.toggle('rotate');
    questionText.classList.toggle('bold');
  });
});



