/*$(function(){// Same as document.addEventListener("DOMContentLoaded"...)

	// Same as document.querySelector("#navbarToggle").
	//(contd)addEventListener("blur")
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsble-nav").collapse('hide');
		}
	});

});

(function(global){

	var dc = {};

	var homeHtml = "home-snippet.html";

	// Convinience function for inserting innerHTML for 'select'
	var insertHtml = function(selector, html){
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	// Show loading icon inside element identified by 'selector'
	var showLoading = function(selector){
		var html = "<div class = 'text-center'>"
		//ajaxload.info for gif's (google it out)
		//html += "<img src='images/ajax-loader.gif'></img></div>";
		insertHtml(selector,html);
	};

	document.addEventListener("DOMContentLoaded", function(event){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function(responseText){
				document.querySelector("#main-content")
				.innerHTML = responseText;
			},false);
	})
	global.$dc =dc;
})(window);*/