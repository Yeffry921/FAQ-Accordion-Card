var acc = document.getElementsByClassName("question");
var panel = document.getElementsByClassName('accordion__answer');


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', (e) => {
    // add active class to the current question item div
    const cardPanel = e.target.parentElement.nextElementSibling;
    cardPanel.classList.toggle('active')
    
    // Toggle dropdown
    if(e.target.classList.contains('active')) {
      cardPanel.classList.remove('active')
    }
  })
}