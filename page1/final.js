const final = document.getElementById('text');

let score = Number(localStorage.getItem("score"));
final.textContent = `${score} / 10`;

const restartBtn = document.getElementById('start');
restartBtn.addEventListener('click', () => {
  window.location.href = '../index.html';
});
