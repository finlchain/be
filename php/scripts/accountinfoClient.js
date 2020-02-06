(function($) {
	"use strict";

	function getURLParams() {
		var params = {};
		window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
		return params;
	}

	function getImg(data, type, full, meta) {
		var orderType = data.OrderType;
		if (orderType === "Surplus") {
			return '<img src="/img/right-arrow-icon.png" />';
		} else {
			return '<img src="/img/right-arrow-icon.png" />';
		}
	}

	$(document).ready(function() {

		var params = getURLParams();
		var key = params.key;

		var link_tag = `<a style="color:#FF5252; font-family:Monospace, 'Consolas';"
						onmouseover="$(this).css('text-decoration', 'underline');"
						onmouseout="$(this).css('text-decoration', 'none');"`;

		var table = $("#userTxDataTable").DataTable({
			ordering: false,
			lengthChange: true,
			buttons: ["print", "excel", "pdf"],
			select: true,
			serverSide: true,
			paging: true,
			pageLength: 10,
			processing: true,
			dom : "<'row'<'col-sm-12'l>>rt<'row'<'col-sm-6'i><'col-sm-6'p>>",
			ajax: {
				url: `http://211.42.197.194:12081/account/txlist?key=${key}`,
				type: "GET",
				crossDomain: true
			},
			columns : [
				{ 
					data : "blk_num",
					render : (data, type, row, meta) => {
						if (type == "display") {
							data = link_tag + `href="?delimiter=block&key=${data}">${data}</a>`;
						}
						return data;
					} 
				},
				{ 
					data : "db_key",
					render: (data, type, row, meta) => {
						if (type == "display") {
							data = link_tag + `href="?delimiter=tx&key=${data}">${data}</a>`;
						}
						return data;
					}
				},
				{ 
					data : "from_pk",
					render: (data, type, row, meta) => {
						if (type == "display") {
							data = link_tag + `href="?delimiter=account&key=${data}">${data}</a>`;
						}
						return data;
					} 
				},
				{ 
					data : "to_pk",
					render : (data, type, row, meta) => {
						if (type == "display") {
							if(data != "000000000000000000000000000000000000000000000000000000000000000000") 
								data = link_tag + `href="?delimiter=account&key=${data}">${data}</a>`;
						}
						return data;
					} 
				},
				{ 	
					data : "delimiter",
					render : (data, type, row, meta) => {
						if(data == "IN") 
							data = data + "   " + `<img src="/img/up-arrow-green-icon.png"/>`;
						else if(data == "OUT") 
							data = data + "   " + `<img src="/img/down-arrow-red-icon.png"/>`;
						return data;
					}
				},
				{ 
					data : "kind",
					render : (data, type, row, meta) => {
						if(data < 251658240) 
							data = "Financial TX";
						else 
							data = "Non-Financial TX";
						return data;
					}
				},
				{ data : "amount" },
			],
			legnthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]
		});
		table
			.buttons()
			.container()
			.appendTo("#datatable_wrapper .col-md-6:eq(0)");
	});

})(jQuery);