(function($) {
	"use strict";

	function utcFormat(d) {
		var tail = "GMT";
		var D = [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
		var T = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];

		if(+T[0] > 12) {
			T[0] -= 12;
			tail = ' pm ' + tail;
		}
		else {
			tail = ' am ' + tail;
		}

		var i = 3;
		while(i) {
			--i;
			if(D[i] < 10) D[i] = '0' + D[i];
			if(T[i] < 10) T[i] = '0' + T[i];
		}
		return D.join('/') + ' ' + T.join(':') + tail;
	}

	$(document).ready(function() {

		var table = $("#blockDataTable").DataTable({
			ordering: false,
			lengthChange: true,
			buttons: ["print", "excel", "pdf"],
			select: true,
			serverSide: true,
			paging: true,
			pageLength: 10,
			processing: true,
			dom : "<'row'<'col-sm-6'l><'col-sm-6 text-right'f>>rt<'row'<'col-sm-6'i><'col-sm-6'p>>",
			language: {
				search: "Search Block ID (more than 5 characters)"
			},
			ajax: {
				url: `http://211.42.197.194:12081/block/list`,
				type: "GET",
				crossDomain: true,
			},
			columns: [
				{ 
					data : "blk_num",
					render: (data, type, row, meta) => {
						if (type == "display") {
							data = `<a style="color:#FF5252; font-family:Monospace, 'Consolas';"
									onmouseover="$(this).css('text-decoration', 'underline');"
									onmouseout="$(this).css('text-decoration', 'none');"
									href="search.php/?delimiter=block&key=${data}">${data}</a>`;
						}
						return data;
					} 
				},
				{ 
					data : "blk_hash",
					render: (data, type, row, meta) => {
						if (type == "display") {
							data = `<a style="color:#FF5252; font-family:Monospace, 'Consolas';"
									onmouseover="$(this).css('text-decoration', 'underline');"
									onmouseout="$(this).css('text-decoration', 'none');"
									href="search.php/?delimiter=block&key=${data}">${data}</a>`;
						}
						return data;
					} 
				},
				{
					data : "bgt",
					render: (data, type, row, meta) => {
						var timestamp = parseInt(data);
						var dateObj = new Date(timestamp);
						var utcString = utcFormat(dateObj);
						return utcString;
					}
				},
				{ data: "tx_cnt" },
				{ data : "subnet_id" }
			],
			lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]	
		});
		table
			.buttons()
			.container()
			.appendTo("#datatable_wrapper .col-md-6:eq(0)");
	});

})(jQuery);