// Implemented jQuery


// Navigation

function navbar() {
	$('#navbar-collapse').css("margin-left", "0px");
	$("#navBg").css("width", "100%");
	$("#navBg").css("height", "100vh");
	$("#navBg").css("z-index", "500");
	$("html").css("overflow", "hidden");
}

function closeCollapse(){
	$('#navbar-collapse').css("margin-left", "-260px");
	$("#navBg").css("width", "0%");
	$("#navBg").css("height", "0vh");
	$("html").css("overflow", "visible");
}

// Collapsed Navigation

function mov(){
	x = $('#navMovies');
	if (x.css("display") == "block") {
		x.css("display", "none");
		$('#navArrow').css("transform", "rotate(0deg)");
	} else {
		x.css("display", "block");
		$('#navArrow').css("transform", "rotate(90deg)");
	}
}

function promotions(){
	x = $('#promo_info');
	if (x.css("display") == "block") {
		x.css("display", "none");
		$('#promo-navArrow').css("transform", "rotate(0deg)");
	} else {
		x.css("display", "block");
		$('#promo-navArrow').css("transform", "rotate(90deg)");
	}
}

function cine(){
	x = $('#cine_info');
	if (x.css("display") == "block") {
		x.css("display", "none");
		$('#cine-navArrow').css("transform", "rotate(0deg)");
	} else {
		x.css("display", "block");
		$('#cine-navArrow').css("transform", "rotate(90deg)");
	}
}

function fnBev(){
	x = $('#fnb_info');
	if (x.css("display") == "block") {
		x.css("display", "none");
		$('#fnb-navArrow').css("transform", "rotate(0deg)");
	} else {
		x.css("display", "block");
		$('#fnb-navArrow').css("transform", "rotate(90deg)");
	}
}

function Help(){
	x = $('#navHelp');
	if (x.css("display") == "block") {
		x.css("display", "none");
		$('#help-navArrow').css("transform", "rotate(0deg)");
	} else {
		x.css("display", "block");
		$('#help-navArrow').css("transform", "rotate(90deg)");
	}
}

function search() {
	x = $('#nav-search');
	y = $('#navbar-search');
	z = $('#search-close');
		x.css("display", "flex");
		y.css("display", "none");
		z.css("display", "block");
}

function closeSearch() {
	x = $('#nav-search');
	y = $('#navbar-search');
	z = $('#search-close');
		x.css("display", "none");
		y.css("display", "block");
		z.css("display", "none");
}

// Tabs

function promo() {
	$("#promotions").css("color", "yellow");
	$("#contests").css("color", "white");
	$("#announcements").css("color", "white");
	x = $('#tabLine');
		x.css("transform", "translate3d(0px, 0px, 0px)");
		x.css("width", "115px")
	$("#promoPage").css("display", "block")
	$("#announcePage").css("display", "none")
}

function contests() {
	$("#promotions").css("color", "white");
	$("#contests").css("color", "yellow");
	$("#announcements").css("color", "white");
	x = $('#tabLine');
		x.css("transform", "translate3d(123px, 0px, 0px)");
		x.css("width", "115px")
	$("#promoPage").css("display", "none")
	$("#announcePage").css("display", "none")
}

function announcements() {
	$("#promotions").css("color", "white");
	$("#contests").css("color", "white");
	$("#announcements").css("color", "yellow");
	x = $('#tabLine');
		x.css("transform", "translate3d(245px, 0px, 0px)");
		x.css("width", "150px")
	$("#promoPage").css("display", "none")
	$("#announcePage").css("display", "block")
}

function All() {
	$("#all").css("filter", "grayscale(0%");
	$("#moviePerks").css("filter", "grayscale(100%");
	$("#bankPromos").css("filter", "grayscale(100%");
	$("#foodNB").css("filter", "grayscale(100%");
	$("#events").css("filter", "grayscale(100%");
	promotions_banner5 = $(".promoCard-content5");
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5.css("display", "block");
	  }
	promotions_banner4 = $(".promoCard-content4");
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4.css("display", "block");
	  }
	promotions_banner3 = $(".promoCard-content3");
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3.css("display", "block");
	  }
	promotions_banner2 = $(".promoCard-content2");
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2.css("display", "block");
	  }
	promotions_banner1 = $(".promoCard-content1");
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1.css("display", "block");
	  }
}	

function moviePerks() {
	$("#all").css("filter", "grayscale(100%");
	$("#moviePerks").css("filter", "grayscale(0%");
	$("#bankPromos").css("filter", "grayscale(100%");
	$("#foodNB").css("filter", "grayscale(100%");
	$("#events").css("filter", "grayscale(100%");
	promotions_banner5 = $(".promoCard-content5");
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5.css("display", "none");
	  }
	promotions_banner4 = $(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4.css("display", "none");
	  }
	promotions_banner3 = $(".promoCard-content3");
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3.css("display", "none");
	  }
	promotions_banner2 = $(".promoCard-content2");
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2.css("display", "inline-block");
	  }
	promotions_banner1 = $(".promoCard-content1");
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1.css("display", "none");
	  }
}

function bankPromos() {
	$("#all").css("filter", "grayscale(100%");
	$("#moviePerks").css("filter", "grayscale(100%");
	$("#bankPromos").css("filter", "grayscale(0%");
	$("#foodNB").css("filter", "grayscale(100%");
	$("#events").css("filter", "grayscale(100%");
	promotions_banner5 = $(".promoCard-content5");
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5.css("display", "none");
	  }
	promotions_banner4 = $(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4.css("display", "none");
	  }
	promotions_banner3 = $(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3.css("display", "block");
	  }
	promotions_banner2 = $(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2.css("display", "none");
	  }
	promotions_banner1 = $(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1.css("display", "none");
	  }
}

function foodNB() {
	$("#all").css("filter", "grayscale(100%");
	$("#moviePerks").css("filter", "grayscale(100%");
	$("#bankPromos").css("filter", "grayscale(100%");
	$("#foodNB").css("filter", "grayscale(0%");
	$("#events").css("filter", "grayscale(100%");
	promotions_banner5 = $(".promoCard-content5");
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5.css("display", "none");
	  }
	promotions_banner4 = $(".promoCard-content4")
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4.css("display", "inline-block");
	  }
	promotions_banner3 = $(".promoCard-content3")
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3.css("display", "none");
	  }
	promotions_banner2 = $(".promoCard-content2")
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2.css("display", "none");
	  }
	promotions_banner1 = $(".promoCard-content1")
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1.css("display", "none");
	  }
}

function events() {
	$("#all").css("filter", "grayscale(100%");
	$("#moviePerks").css("filter", "grayscale(100%");
	$("#bankPromos").css("filter", "grayscale(100%");
	$("#foodNB").css("filter", "grayscale(100%");
	$("#events").css("filter", "grayscale(0%");
	promotions_banner5 = $(".promoCard-content5");
	for (i = 0; i < promotions_banner5.length; i++) {
	    promotions_banner5.css("display", "block");
	  }
	promotions_banner4 = $(".promoCard-content4");
	for (i = 0; i < promotions_banner4.length; i++) {
	    promotions_banner4.css("display", "none");
	  }
	promotions_banner3 = $(".promoCard-content3");
	for (i = 0; i < promotions_banner3.length; i++) {
	    promotions_banner3.css("display", "none");
	  }
	promotions_banner2 = $(".promoCard-content2");
	for (i = 0; i < promotions_banner2.length; i++) {
	    promotions_banner2.css("display", "none");
	  }
	promotions_banner1 = $(".promoCard-content1");
	for (i = 0; i < promotions_banner1.length; i++) {
	    promotions_banner1.css("display", "none");
	  }
}


// JavaScript


// Navigation

// function navbar() {
// 	document.getElementById('navbar-collapse').style.marginLeft = "0px";
// 	document.getElementById('navBg').style.width = "100%";
// 	document.getElementById('navBg').style.height = "100vh";
// 	document.getElementById("navBg").style.zIndex = "500";
// 	document.getElementsByTagName('html')[0].style.overflow = "hidden";
// }

// function closeCollapse(){
// 	document.getElementById('navbar-collapse').style.marginLeft = "-260px";
// 	document.getElementById('navBg').style.width = "0%";
// 	document.getElementById('navBg').style.height = "0vh";
// 	document.getElementsByTagName('html')[0].style.overflow = "visible";
// }


// // Collapsed Navigation

// function mov(){
// 	var x = document.getElementById('navMovies');
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 		document.getElementById('navArrow').style.transform = "rotate(0deg)";
// 	} else {
// 		x.style.display = "block";
// 		document.getElementById('navArrow').style.transform = "rotate(90deg)";
// 	}
// }

// function promotions(){
// 	var x = document.getElementById('promo_info');
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 		document.getElementById('promo-navArrow').style.transform = "rotate(0deg)";
// 	} else {
// 		x.style.display = "block";
// 		document.getElementById('promo-navArrow').style.transform = "rotate(90deg)";
// 	}
// }

// function cine(){
// 	var x = document.getElementById('cine_info');
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 		document.getElementById('cine-navArrow').style.transform = "rotate(0deg)";
// 	} else {
// 		x.style.display = "block";
// 		document.getElementById('cine-navArrow').style.transform = "rotate(90deg)";
// 	}
// }

// function fnBev(){
// 	var x = document.getElementById('fnb_info');
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 		document.getElementById('fnb-navArrow').style.transform = "rotate(0deg)";
// 	} else {
// 		x.style.display = "block";
// 		document.getElementById('fnb-navArrow').style.transform = "rotate(90deg)";
// 	}
// }

// function Help(){
// 	var x = document.getElementById('navHelp');
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 		document.getElementById('help-navArrow').style.transform = "rotate(0deg)";
// 	} else {
// 		x.style.display = "block";
// 		document.getElementById('help-navArrow').style.transform = "rotate(90deg)";
// 	}
// }

// function search() {
// 	var x = document.getElementById('nav-search');
// 	var y = document.getElementById('navbar-search');
// 	var z = document.getElementById('search-close');
// 		x.style.display = "flex";
// 		y.style.display = "none";
// 		z.style.display = "block";
// }

// function closeSearch() {
// 	var x = document.getElementById('nav-search');
// 	var y = document.getElementById('navbar-search');
// 	var z = document.getElementById('search-close');
// 		x.style.display = "none";
// 		y.style.display = "block";
// 		z.style.display = "none";
// }

// // Tabs

// function promo() {
// 	document.getElementById("promotions").style.color = "yellow";
// 	document.getElementById("contests").style.color = "white";
// 	document.getElementById("announcements").style.color = "white";
// 	var x = document.getElementById('tabLine');
// 		x.style.transform = "translate3d(0px, 0px, 0px)";
// 		x.style.width = "115px"
// 	document.getElementById("promoPage").style.display = "block"
// 	document.getElementById("announcePage").style.display = "none"
// }

// function contests() {
// 	document.getElementById("promotions").style.color = "white";
// 	document.getElementById("contests").style.color = "yellow";
// 	document.getElementById("announcements").style.color = "white";
// 	var x = document.getElementById('tabLine');
// 		x.style.transform = "translate3d(123px, 0px, 0px)";
// 		x.style.width = "115px"
// 	document.getElementById("promoPage").style.display = "none"
// 	document.getElementById("announcePage").style.display = "none"
// }

// function announcements() {
// 	document.getElementById("promotions").style.color = "white";
// 	document.getElementById("contests").style.color = "white";
// 	document.getElementById("announcements").style.color = "yellow";
// 	var x = document.getElementById('tabLine');
// 		x.style.transform = "translate3d(245px, 0px, 0px)";
// 		x.style.width = "150px"
// 	document.getElementById("promoPage").style.display = "none"
// 	document.getElementById("announcePage").style.display = "block"
// }

// function All() {
// 	document.getElementById("all").style.filter = "grayscale(0%)"
// 	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
// 	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
// 	document.getElementById("foodNB").style.filter = "grayscale(100%)"
// 	document.getElementById("events").style.filter = "grayscale(100%)"
// 	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
// 	for (i = 0; i < promotions_banner5.length; i++) {
// 	    promotions_banner5[i].style.display ="block"
// 	  }
// 	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
// 	for (i = 0; i < promotions_banner4.length; i++) {
// 	    promotions_banner4[i].style.display ="block"
// 	  }
// 	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
// 	for (i = 0; i < promotions_banner3.length; i++) {
// 	    promotions_banner3[i].style.display ="block"
// 	  }
// 	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
// 	for (i = 0; i < promotions_banner2.length; i++) {
// 	    promotions_banner2[i].style.display ="block"
// 	  }
// 	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
// 	for (i = 0; i < promotions_banner1.length; i++) {
// 	    promotions_banner1[i].style.display ="block"
// 	  }
// }

// function moviePerks() {
// 	document.getElementById("all").style.filter = "grayscale(100%)"
// 	document.getElementById("moviePerks").style.filter = "grayscale(0%)"
// 	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
// 	document.getElementById("foodNB").style.filter = "grayscale(100%)"
// 	document.getElementById("events").style.filter = "grayscale(100%)"
// 	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
// 	for (i = 0; i < promotions_banner5.length; i++) {
// 	    promotions_banner5[i].style.display ="none"
// 	  }
// 	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
// 	for (i = 0; i < promotions_banner4.length; i++) {
// 	    promotions_banner4[i].style.display ="none"
// 	  }
// 	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
// 	for (i = 0; i < promotions_banner3.length; i++) {
// 	    promotions_banner3[i].style.display ="none"
// 	  }
// 	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
// 	for (i = 0; i < promotions_banner2.length; i++) {
// 	    promotions_banner2[i].style.display ="inline-block"
// 	  }
// 	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
// 	for (i = 0; i < promotions_banner1.length; i++) {
// 	    promotions_banner1[i].style.display ="none"
// 	  }
// }

// function bankPromos() {
// 	document.getElementById("all").style.filter = "grayscale(100%)"
// 	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
// 	document.getElementById("bankPromos").style.filter = "grayscale(0%)"
// 	document.getElementById("foodNB").style.filter = "grayscale(100%)"
// 	document.getElementById("events").style.filter = "grayscale(100%)"
// 	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
// 	for (i = 0; i < promotions_banner5.length; i++) {
// 	    promotions_banner5[i].style.display ="none"
// 	  }
// 	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
// 	for (i = 0; i < promotions_banner4.length; i++) {
// 	    promotions_banner4[i].style.display ="none"
// 	  }
// 	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
// 	for (i = 0; i < promotions_banner3.length; i++) {
// 	    promotions_banner3[i].style.display ="block"
// 	  }
// 	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
// 	for (i = 0; i < promotions_banner2.length; i++) {
// 	    promotions_banner2[i].style.display ="none"
// 	  }
// 	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
// 	for (i = 0; i < promotions_banner1.length; i++) {
// 	    promotions_banner1[i].style.display ="none"
// 	  }
// }

// function foodNB() {
// 	document.getElementById("all").style.filter = "grayscale(100%)"
// 	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
// 	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
// 	document.getElementById("foodNB").style.filter = "grayscale(0%)"
// 	document.getElementById("events").style.filter = "grayscale(100%)"
// 	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
// 	for (i = 0; i < promotions_banner5.length; i++) {
// 	    promotions_banner5[i].style.display ="none"
// 	  }
// 	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
// 	for (i = 0; i < promotions_banner4.length; i++) {
// 	    promotions_banner4[i].style.display ="inline-block"
// 	  }
// 	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
// 	for (i = 0; i < promotions_banner3.length; i++) {
// 	    promotions_banner3[i].style.display ="none"
// 	  }
// 	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
// 	for (i = 0; i < promotions_banner2.length; i++) {
// 	    promotions_banner2[i].style.display ="none"
// 	  }
// 	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
// 	for (i = 0; i < promotions_banner1.length; i++) {
// 	    promotions_banner1[i].style.display ="none"
// 	  }
// }

// function events() {
// 	document.getElementById("all").style.filter = "grayscale(100%)"
// 	document.getElementById("moviePerks").style.filter = "grayscale(100%)"
// 	document.getElementById("bankPromos").style.filter = "grayscale(100%)"
// 	document.getElementById("foodNB").style.filter = "grayscale(100%)"
// 	document.getElementById("events").style.filter = "grayscale(0%)"
// 	promotions_banner5 = document.querySelectorAll(".promoCard-content5")
// 	for (i = 0; i < promotions_banner5.length; i++) {
// 	    promotions_banner5[i].style.display ="block"
// 	  }
// 	promotions_banner4 = document.querySelectorAll(".promoCard-content4")
// 	for (i = 0; i < promotions_banner4.length; i++) {
// 	    promotions_banner4[i].style.display ="none"
// 	  }
// 	promotions_banner3 = document.querySelectorAll(".promoCard-content3")
// 	for (i = 0; i < promotions_banner3.length; i++) {
// 	    promotions_banner3[i].style.display ="none"
// 	  }
// 	promotions_banner2 = document.querySelectorAll(".promoCard-content2")
// 	for (i = 0; i < promotions_banner2.length; i++) {
// 	    promotions_banner2[i].style.display ="none"
// 	  }
// 	promotions_banner1 = document.querySelectorAll(".promoCard-content1")
// 	for (i = 0; i < promotions_banner1.length; i++) {
// 	    promotions_banner1[i].style.display ="none"
// 	  }
// }