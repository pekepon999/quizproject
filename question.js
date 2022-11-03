const answerList = document.querySelectorAll('li');
const correctAnwsers = {
  question1: 'D',
  question2: 'C',
  question3: 'A',
  question4: 'B'
}
const answer = document.querySelector('.answer-content');
const falseMessage= document.querySelector('.false-message');
answerList.forEach((list)=>{
  list.addEventListener('click',checkClickedAnswer)
})



function checkClickedAnswer(event){
  let message='残念';
  let answerColorCode='#3ffe'
const clickedAnswerEl = event.currentTarget;

const selectedAnswer =clickedAnswerEl.dataset.answer;
const questionId=clickedAnswerEl.closest('ul.answers').dataset.id;
const correctAnwser = correctAnwsers[questionId];
if(selectedAnswer === correctAnwser){
  answer.style.display='block';
  falseMessage.style.display='none';
}else{
  falseMessage.style.display='block';
  answer.style.display='none';
}
  

  

  // if(event.currentTarget===)
}