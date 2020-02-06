(function($) {
	"use strict";

	$(document).ready(function() {

		// Set map options and initialise DataMap plugin
		var worldmap = new Datamap({
			element: document.getElementById("serverMap"),
			fills: {
				defaultFill: "#3B3D46",
				active: "#FF5252"
			},
			responsive: true,
			geographyConfig: {
				highlightOnHover: true,
				borderWidth: 0
			},
			data: {
				USA: {fillKey: "active"},
				RUS: {fillKey: "active"}
			}
		});


		// Resize map on window resize
		$(window).on('resize', function () {
			setTimeout(function() {
				worldmap.resize();
			}, 100);
		});

		// Function for map color changes
		function mapChanges() {

			var random = Math.floor(Math.random() * 100) + 1;
			var random2 = Math.floor(Math.random() * 100) + 1;
			var random3 = Math.floor(Math.random() * 100) + 1;
			var random4 = Math.floor(Math.random() * 100) + 1;
			var random5 = Math.floor(Math.random() * 100) + 1;

			var usa = "defaultFill",
				rus = "defaultFill",
				aus = "defaultFill",
				bra = "defaultFill",
				ind = "defaultFill";


			if (random > 50) {
				usa = 'active'
			} else {
				usa = 'defaultFill'
			}
			if (random2 > 50) {
				rus = 'active'
			} else {
				rus = 'defaultFill'
			}
			if (random3 > 50) {
				aus = 'active'
			} else {
				aus = 'defaultFill'
			}
			if (random4 > 50) {
				bra = 'active'
			} else {
				bra = 'defaultFill'
			}
			if (random5 > 50) {
				ind = 'active'
			} else {
				ind = 'defaultFill'
			}

			worldmap.updateChoropleth({
				USA: {fillKey: usa},
				RUS: {fillKey: rus},
				AUS: {fillKey: aus},
				BRA: {fillKey: bra},
				IND: {fillKey: ind},
			});
		}

		// Run interval map function
        var mapInterval = setInterval(mapChanges, 600);

        // node Data Table
        var table = $("#nodeDataTable").DataTable({
        	ordering: false,
        	lengthChange: true,
        	buttons : ["print", "excel", "pdf"],
        	select : true,
        	serverSide: true,
        	paging: true,
        	processing: true,
        	dom: "<'row'<'col-sm-12'l>>rt<'row'<'col-sm-6'i><'col-sm-6'p>>",
        	ajax: {
        		url: `http://211.42.197.194:12081/node/list`,
        		type: "GET",
        		crossDomain: true
        	},
        	columns: [
        		{ data : "subnet" },
        		{ data : "IP" },
        		{ data : "Region" },
        		{ data : "ID" },
        		{ data : "Role" }
        	],
        	lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]
        });

        table
        	.buttons()
        	.container()
        	.appendTo("#datatable_wrapper .col-md-6:eq(0)");

	});

})(jQuery);