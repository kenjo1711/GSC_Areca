// Navigation

function navbar() {
	document.getElementById('navbar-collapse').style.marginLeft = "0px";
	document.getElementById('navBg').style.width = "100%";
	document.getElementById('navBg').style.height = "100vh";
	document.getElementById("navBg").style.zIndex = "500";
	document.getElementsByTagName('html')[0].style.overflow = "hidden";
}

function closeCollapse(){
	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
	document.getElementById('navBg').style.width = "0%";
	document.getElementById('navBg').style.height = "0vh";
	document.getElementsByTagName('html')[0].style.overflow = "visible";
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
	var x = document.getElementById('navHelp');
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
	document.getElementById("promoPage").style.display = "block"
	document.getElementById("announcePage").style.display = "none"
}

function contests() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "yellow";
	document.getElementById("announcements").style.color = "white";
	var x = document.getElementById('tabLine');
		x.style.transform = "translate3d(123px, 0px, 0px)";
		x.style.width = "115px"
	document.getElementById("promoPage").style.display = "none"
	document.getElementById("announcePage").style.display = "none"
}

function announcements() {
	document.getElementById("promotions").style.color = "white";
	document.getElementById("contests").style.color = "white";
	document.getElementById("announcements").style.color = "yellow";
	var x = document.getElementById('tabLine');
		x.style.transform = "translate3d(245px, 0px, 0px)";
		x.style.width = "150px"
	document.getElementById("promoPage").style.display = "none"
	document.getElementById("announcePage").style.display = "block"
}

function All() {
	document.getElementById("all").style.filter = "grayscale(0%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="block"
	  }
	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="block"
	  }
	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="block"
	  }
	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="block"
	  }
	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="block"
	  }
}

function moviePerks() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(0%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="inline-block"
	  }
	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function bankPromos() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(0%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="block"
	  }
	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function foodNB() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(0%)"
	document.getElementById("events").style.filter = "grayscale(100%)"
	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="none"
	  }
	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="inline-block"
	  }
	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}

function events() {
	document.getElementById("all").style.filter = "grayscale(100%)"
	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
	document.getElementById("foodNB").style.filter = "grayscale(100%)"
	document.getElementById("events").style.filter = "grayscale(0%)"
	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5[i].style.display ="block"
	  }
	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4[i].style.display ="none"
	  }
	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3[i].style.display ="none"
	  }
	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2[i].style.display ="none"
	  }
	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1[i].style.display ="none"
	  }
}