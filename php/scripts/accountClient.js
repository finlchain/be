(function($) {
	"use strict";

	$(document).ready(function() {

		// var v = new c_base58();
		// console.log(v.test_class());

		var table = $("#accountDataTable").DataTable({
			ordering: false,
			lengthChange: true,
			buttons: ["print", "excel", "pdf"],
			select: true,
			serverSide: true,
			paging: true,
			pageLength: 10,
			processing: true,
			dom : "<'row'<'col-sm-6'l><'col-sm-6 text-right'f>>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
			language: {
				search: "Search Address (more than 5 char)"
			},
			ajax: {
				url: "http://211.42.197.194:12081/account/list",
				type: "GET",
				crossDomain: true,
			},
			columns: [
				{
					data: "id",
					render: (data, type, row, meta) => {
						if(data === null) {
							data = "account no have id";
						}
						return data;
					}
				},
				{
					data : "pubkey",
					render: (data, type, row, meta) => {
						if(type == "display") {
							data = `<a style="color:#FF5252; font-family:Monospace, 'Consolas';"
									onmouseover="$(this).css('text-decoration', 'underline');"
									onmouseout="$(this).css('text-decoration', 'none');"
									href="search.php/?delimiter=account&key=${data}">${data}</a>`;
						}
						return data;
					}
				}
			],
			lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]
		});
		table
			.buttons()
			.container()
			.appendTo("#datatable_wrapper .col-md-6:eq(0)");
	});

})(jQuery);