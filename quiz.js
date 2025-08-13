function checkAnswer() {
    let correctAnswer = 4;

    const userInput = document.querySelector("[name='quiz']");
    const userAnswer = userInput.value;

    feedbackInput = document.getElementById("feedback");
    feedback = feedbackInput.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."
        
    } else {
        feedback.textContent = "That's incorrect. Try again!"
        return;
    }
}

// form = document.getElementById('');

submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer);

