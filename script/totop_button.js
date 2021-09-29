
arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function() {
  if (pageYOffset < 300) {
	document.getElementById('arrowTop').style.opacity = '0';
  }
  else{
	document.getElementById('arrowTop').style.opacity = '1';
  }
})

