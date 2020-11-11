// Navigation

function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navBg').style.width = "100%";
	document.getElementById('navBg').style.height = "100vh";
}

function closeCollapse(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navBg').style.width = "0%";
	document.getElementById('navBg').style.height = "0vh";
}

// Collapsed Navigation

function mov(){
	var x = document.getElementById('navMovies');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('navArrow').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('navArrow').style.transform = "rotate(90deg)";
	}
}

function promotions(){
	var x = document.getElementById('promo_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('promo-navArrow').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('promo-navArrow').style.transform = "rotate(90deg)";
	}
}

function cine(){
	var x = document.getElementById('cine_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('cine-navArrow').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('cine-navArrow').style.transform = "rotate(90deg)";
	}
}

function fnBev(){
	var x = document.getElementById('fnb_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('fnb-navArrow').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('fnb-navArrow').style.transform = "rotate(90deg)";
	}
}

function Help(){
	var x = document.getElementById('help_info');
	if (x.style.display === "block") {
		x.style.display = "none";
		document.getElementById('help-navArrow').style.transform = "rotate(0deg)";
	} else {
		x.style.display = "block";
		document.getElementById('help-navArrow').style.transform = "rotate(90deg)";
	}
}

function search() {
	var x = document.getElementById('nav-search');
	var y = document.getElementById('navbar-search');
	var z = document.getElementById('search-close');
		x.style.display = "flex";
		y.style.display = "none";
		z.style.display = "block";
}

function closeSearch() {
	var x = document.getElementById('nav-search');
	var y = document.getElementById('navbar-search');
	var z = document.getElementById('search-close');
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
}

// Tabs

function promo() {
	document.getElementById("promotions").style.color = "yellow";
	document.getElementById("contests").style.color = "white";
	document.getElementById("announcements").style.color = "white";
	var x = document.getElementById('tabLine');
		x.style.transform = "translate3d(0px, 0px, 0px)";
		x.style.width = "115px"
}

function contests() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "yellow";
	document.getElementById("announcements").style.color = "white";
	var x = document.getElementById('tabLine');
		x.style.transform = "translate3d(123px, 0px, 0px)";
		x.style.width = "115px"
	document.getElementById("page_1").style.display = "none"
	document.getElementById("page_2").style.display = "none"
}

function announcements() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "white";
	document.getElementById("announcements").style.color = "yellow";

	var x = document.getElementById('tabLine');
		x.style.transform = "translate3d(245px, 0px, 0px)";
		x.style.width = "150px"
	document.getElementById("page_1").style.display = "none"
	document.getElementById("page_2").style.display = "block"
}

function All() {
	document.getElementById("all").style.filter = "grayscale(0%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
}

function moviePerks() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(0%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
}

function bankPromos() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(0%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
}

function foodNB() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(0%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
}

function events() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(0%)"
}