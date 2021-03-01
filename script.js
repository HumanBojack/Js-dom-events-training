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

// 6 On "view" hover
let cards = document.getElementsByClassName("row")[1].children;
let card;

function onViewHover(event){
	card = event.originalTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
	
	if (card.querySelector("p").style.length > 0){

		card.querySelector("img").style = "";
		card.querySelector("p").style = "";
		card.querySelector(".text-muted").style = "";

	} else if (card.querySelector("p").style.length === 0){

		card.querySelector("img").style = "width: 20%;";
		card.querySelector("p").style = "display: none;";
		card.querySelector(".text-muted").style = "display: none;";

	}

};
for (card of cards){
	let viewBtn = card.querySelector(".btn-success");
	viewBtn.addEventListener("mouseenter", onViewHover);
}

// 7 Carrousel
let nextBtn = document.querySelector(".btn-secondary");
let allCards;
let lastCard;

function onNextBtnClick(event){
	event.preventDefault();
	allCards = document.getElementsByClassName("row")[1];
	lastCard = allCards.lastElementChild;
	allCards.removeChild(lastCard)
	allCards.prepend(lastCard)

}
nextBtn.addEventListener("click", onNextBtnClick);


// 8 Carrousel the other way around
let preBtn = document.querySelector(".btn-primary");
// let allCards;  ==> You should declare it, but because i already declared it in 7 i won't do it
// let firstCard; ==> Same here

function onPreBtnClick(event){
	event.preventDefault();
	allCards = document.getElementsByClassName("row")[1];
	firstCard = allCards.firstElementChild;
	allCards.removeChild(firstCard);
	allCards.appendChild(firstCard);
}
preBtn.addEventListener("click", onPreBtnClick);
