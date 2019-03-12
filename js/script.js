if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready)
} else {

	ready();
}

function ready(){
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  
});
}