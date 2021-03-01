// 1/1.1 Footer clicks counter
let footer = document.querySelector("footer");
let clickCount = 0
function onFooterClick(){
	clickCount += 1
	console.log(`Clic n° ${clickCount}`);
};

footer.addEventListener("click", onFooterClick);

// 2 Hamburger menu
let buttonToggler = document.querySelector(".navbar-toggler");
let navbarHeader = document.getElementById("navbarHeader");
let navbarDeployed = false;
function navbarExpand() {
	if (navbarDeployed === true){
		navbarHeader.classList.add("collapse");
		navbarDeployed = false;
	} else if (navbarDeployed === false){
		navbarHeader.classList.remove("collapse");
		navbarDeployed = true;
	}
}
buttonToggler.addEventListener("click", navbarExpand);

// 3 Edit on first card
let firstCard = document.getElementsByClassName("card")[0];
let firstCardButton = firstCard.getElementsByClassName("btn-group")[0].children[1];
function onEditButtonClick1(){
	firstCard.style = "color: red;"
}
firstCardButton.addEventListener("click", onEditButtonClick1)

// 4 Edit on second card
let secondCard = document.getElementsByClassName("card")[1];
let secondCardButton = secondCard.getElementsByClassName("btn-group")[0].children[1];
let clicked = false;
function onEditButtonClick2(){
	if (clicked === false){
		secondCard.style = "color: green;";
		clicked = true;
	} else {
		secondCard.style = "color: ;";
		clicked = false;
	}
}
secondCardButton.addEventListener("click", onEditButtonClick2)

// 5 Remove cdn when double click on navbar
let navbar = document.querySelector("header");
let style = document.styleSheets[0]

function onNavbarDoubleClick(){
	if (style.disabled === true){
		style.disabled = false
	} else if (style.disabled === false){
		style.disabled = true
	}
};
navbar.addEventListener("dblclick", onNavbarDoubleClick);