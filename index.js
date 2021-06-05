var questions = document.querySelectorAll('.question');
var answers = document.querySelectorAll('.accordion__answer');

questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		if (e.target.className === 'question') {
			const panelAnswer = e.target.parentElement.nextElementSibling;
			togglePanel(panelAnswer);
		}

		if (e.target.className === 'toggler') {
			const panelAnswer = e.target.parentElement.parentElement.nextElementSibling;
			togglePanel(panelAnswer);
		}
	});
});

function removeClassesFromNode(node, className) {
	node.forEach((answer) => {
		answer.classList.remove(className);
	});
}

function addClassToNode(node, className) {
	node.classList.add(className);
}

function checkAndRemoveClassFromNode(node, className) {
	if (node.classList.contains(className)) {
		node.classList.remove(className);
		return true;
	}
	return false;
}

function togglePanel(panelAnswer) {
	if (checkAndRemoveClassFromNode(panelAnswer, 'active')) {
		return;
	}

	removeClassesFromNode(answers, 'active');

	addClassToNode(panelAnswer, 'active');
}
