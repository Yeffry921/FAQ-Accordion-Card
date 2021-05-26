var questions = document.querySelectorAll('.question');
var answers = document.querySelectorAll('.accordion__answer');

questions.forEach((question) => {
	question.addEventListener('click', (e) => {
    // Grab the answer panel of the current question
		const panelAnswer = e.target.parentElement.nextElementSibling;

    // If answer is active, deactivate it and stop the function
		if (panelAnswer.classList.contains('active')) {
			panelAnswer.classList.remove('active');
      return;
		}

    // loop through every answer panel and deactivate them
    answers.forEach((answer) => {
      answer.classList.remove('active');
    })

    // display the panel answer of the current question clicked
		panelAnswer.classList.add('active');
	});
});

