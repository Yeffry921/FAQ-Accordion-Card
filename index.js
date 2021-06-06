const accordion = document.querySelector('.accordion__content');
const answers = accordion.querySelectorAll('.accordion__answer');

accordion.addEventListener('click', (e) => {
	if (e.target.className === 'question') {
		// Grab the answer panel of question clicked
		const panel = e.target.parentElement.nextElementSibling;
		showPanel(panel);
		// If its open, close it, else do nothing
	}

	if (e.target.className === 'toggler') {
		const panel = e.target.parentElement.parentElement.nextElementSibling;
		showPanel(panel);
	}
});

function showPanel(panel) {
	panel.parentElement.querySelector('.toggler');

	if (panel.classList.contains('active')) {
		panel.classList.remove('active');
		panel.parentElement.querySelector('.toggler').classList.remove('active');
		return;
	} 
  
	for (let i = 0; i < answers.length; i++) {
			answers[i].classList.remove('active');
			document.querySelectorAll('.toggler')[i].classList.remove('active');
	}
	
	panel.classList.add('active');
	panel.parentElement.querySelector('.toggler').classList.add('active');
}
