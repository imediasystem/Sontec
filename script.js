$(document).ready(function(){
	
	$(".banner h2").hide().slideToggle(2000);
	
	$("#send").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var surname = $("#surname").val();
		var email = $("#email").val();
		var phone =  $("#phone").val();
		alert(name);
		alert(surname);
		alert(email);
		alert(phone);
	});
});



var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});



(function(){
	'use strict';
	
	var navSelector = '.nav';
	var linksSelector = '.nav a';
	var scrollSpeed = 30;
	
	var timer, targetPosition;
  
	function scroll() {
	  var delta = targetPosition - document.documentElement.scrollTop;
	  if (delta > 0) {
		document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
	  }
	  else if (delta < 0) {
		document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
	  }
	  else {
		clearInterval(timer);
	  }
	  
	  if(window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
		clearInterval(timer);
	  }
	};
	
	var onLinkClick = function(event){
	  event.preventDefault();
	  clearInterval(timer)
	  
	  var navHeight = document.querySelector(navSelector).offsetHeight;
	  var target = document.querySelector(this.getAttribute('href'));
	  if(target){
		targetPosition = Math.max(0, target.offsetTop - navHeight);
		scroll();
		timer = setInterval(scroll, 1000/30);
	  }
	};
	
	var links = document.querySelectorAll(linksSelector);
	
	for(var i=0; i<links.length; i++){
	  links[i].addEventListener('click', onLinkClick);
	}
	
  })();