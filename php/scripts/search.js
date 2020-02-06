(function($) {
	"use strict";

	function check_hex_str(str) {
		const regex = /^[a-fA-F0-9]+$/;
		return regex.test(str);
	}

	function search_onclick() {
		var input_text = $("#search-input-text").val();
		var regex_result = check_hex_str(input_text);
		var url = document.location.href;
		var href_url;

		if(regex_result && input_text.length >= 64) {

			if(input_text.length == 66) {
				// address
				if(url.indexOf("search.php") != -1) {
					href_url = `?delimiter=account&key=${input_text}`;
				} else {
					href_url = `search.php/?delimiter=account&key=${input_text}`;
				}
			} else {
				// Transaction
				if(url.indexOf("search.php") != -1) {
					href_url = `?delimiter=tx&key=${input_text}`;
				} else {
					href_url = `search.php/?delimiter=tx&key=${input_text}`;
				}
			}
		}
		else if(!isNaN(input_text)) {
			if(url.indexOf("search.php") != -1) {
				href_url = `?delimiter=block&key=${input_text}`;
			} else {
				href_url = `search.php/?delimiter=block&key=${input_text}`;
			}
		} 
		
		window.location.assign(href_url);
	}

	$(document).ready(function() {

		$("#search-button").click(function() {
			search_onclick();
		});

		$("#search-input-text").keydown(function (event) {

			// 13 is enter key code
			if (event.keyCode == 13) {
				$("#search-button")[0].click();
			}
		});
	});

})(jQuery);

