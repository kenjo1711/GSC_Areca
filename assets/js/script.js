// Navigation

function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navbar_background').style.width = "100%";
	document.getElementById('navbar_background').style.height = "100vh";
}

function closeCollapse(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navbar_background').style.width = "0%";
	document.getElementById('navbar_background').style.height = "0vh";
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