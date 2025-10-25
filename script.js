// ✅ Index Page Logic (Start Quiz button)
const startBtn = document.getElementById('start');
if(startBtn){
  startBtn.addEventListener('click', () => {
    // Reset score when quiz starts
    localStorage.setItem("score", 0);
    localStorage.setItem("i", 1); 
    window.location.href = './page1/q1.html';
  });
}



const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');
const headBox = document.getElementById('headbox');
const questionText = document.getElementById('p1');

let x = 0;
let i = 1;




// ❌ PROBLEM FIXED ✅
// This parsing MUST happen *inside the click event*,
// because after checking the answer once, you replace the question text,
// so parsing must happen BEFORE text changes every time

if(submitBtn){
  submitBtn.addEventListener('click', () => {

    // ✅ CHANGED: Parse the current question text *inside* the event
    const text = questionText.textContent.trim();
    const parts = text.split(' ');

    const num1 = Number(parts[0]);
    const operator = parts[1];
    const num2 = Number(parts[2]);

    // ✅ CHANGED: answer must be let, not const — so we can assign value
    let answer = 0;

    if(operator == '+'){
      answer = num1 + num2;
    } else if(operator == '-'){
      answer = num1 - num2;
    } else if(operator == '/'){
      answer = num1 / num2;
    } else if(operator == '*' || operator == 'x'){ 
      // ✅ CHANGED: support both * and x for multiply
      answer = num1 * num2;
    } else if(operator == '%'){
      answer = num1 % num2;
    } else if(operator == '^'){
      answer = num1 ** num2;
    }


    const userAnswer = Number(document.getElementById('ipt').value);


    if(userAnswer === answer){ // ✅ CHANGED: strict equality
      questionText.textContent = '✅ RIGHT ANSWER!';
      headBox.style.backgroundColor = 'lightgreen';
      localStorage.setItem("score", 
        Number(localStorage.getItem("score")) + 1
      );

    } else {
      questionText.textContent = '❌ WRONG ANSWER!';
      headBox.style.backgroundColor = 'lightcoral';
    }
  });
}





// ✅ Next button → go to next question 
if(nextBtn){
  nextBtn.addEventListener('click', () => {


    let i = Number(localStorage.getItem("i")) || 1;
    i++;
    localStorage.setItem("i", i);

    if(i == 11){
      window.location.href = `./final.html`;
      return;
    }
    else{
      window.location.href = `./q${i}.html`;
    }
    
  });
}

