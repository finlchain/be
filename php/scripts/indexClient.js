(function ($) {
	"use strict";

	function utcformat(d) {
		var tail = 'GMT';
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
		return D.join('/') + ' ' + T.join(":") + tail;
	}

	function ModifyBlockList(data, total) {	
		var dateObj = new Date();
		var T = [dateObj.getUTCHours(), dateObj.getUTCMinutes()];
		var tail = "GMT";

		if(+T[0] > 12) {
			T[0] -= 12;
			tail = ' pm ' + tail;
		}
		else {
			tail = ' am ' + tail;
		}

		var i = 2;
		while(i) {
			--i;
			if(T[i] < 10) T[i] = '0' + T[i];
		}
		var utcString = T.join(":") + tail;

		var total_blk_tag = `<h2 id = "total-blk" class="m-b-none"><i class="pe page-header-icon pe-7s-box2"></i>&nbsp;&nbsp;` 
		total_blk_tag += total
		total_blk_tag += ` <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> + 20%</span></h2>`
		total_blk_tag += `<div id = "total-blk-msg" class="small"><br/>Latest Block Number</div><div id = "total-blk-update" class="slight m-t-sm"><i class="fa fa-clock-o"> </i> Updated : `
		total_blk_tag += `<span class="c-white">${utcString}</span></div>`

		$("#total-blk").remove();
		$("#total-blk-msg").remove();
		$("#total-blk-update").remove();
		$("#total-blk-pos").append(total_blk_tag);

		var rows = [];

		var top = '<thead><tr align="center"><th align="center">Block Num</th>'
			+ '<th align "center">Generation Time</th>'
			+ '<th algin="center">Transaction Count</th><th algin="center">Group</th>'
			+ '<tbody>';

		var bottom = '</tbody>';

		for(var i = 0; i < data.length; i++) {
			var timestamp = parseInt(data[i].bgt);
			var dateObj = new Date(timestamp);
			var utcString = utcformat(dateObj);

			var row = '<tr align="center"><td>'
								+ `<a style="color:#FF5252; font-family:Monospace 'Consonlas';"`
								+ `onmouseover="$(this).css('text-decoration', 'underline');"`
								+ `onmouseout="$(this).css('text-decoration', 'none');" `
								+ `href="search.php/?delimiter=block&key=${data[i].blk_num}">` + data[i].blk_num
								+ '</a></td><td>' + utcString
								+ '</td><td>' + data[i].tx_cnt
								+ '</td><td>' + data[i].subnet_id
								+ '</td></tr>';
			rows.push(row);
		}

		for (var i = 0; i < rows.length; i++) {
			if(i == 0) {
				$('#latestBlockTable').html(top + rows[i] + bottom);
			} else {
				$('#latestBlockTable').append(rows[i]);
			}
		}
	}

	function LatestBlock() {
		$.ajax({
			url: `http://211.42.197.194:12081/block/list`,
			data: {"start" : 0, "length" : 10, "search" : { "value" : ""}},
			type: "GET",
			dataType: "json",
			cache: false,
			success: function(data, code, xhr) {
				if(data.errorCode == 0) {
					ModifyBlockList(data.data, data.recordsTotal);
				}
			},
			error : function(err) {
				console.log(err);
			}
		});
	}

	function ModifyTxList(data, total) {
		var dateObj = new Date();
		var T = [dateObj.getUTCHours(), dateObj.getUTCMinutes()];
		var tail = "GMT";

		if(+T[0] > 12) {
			T[0] -= 12;
			tail = ' pm ' + tail;
		}
		else {
			tail = ' am ' + tail;
		}

		var i = 2;
		while(i) {
			--i;
			if(T[i] < 10) T[i] = '0' + T[i];
		}
		var utcString = T.join(":") + tail;

		var total_tx_tag = `<h2 id = "total-tx" class="m-b-none"><i class="pe page-header-icon pe-7s-note"></i>&nbsp;&nbsp;` 
		total_tx_tag += total
		total_tx_tag += ` <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> + 20%</span></h2>`
		total_tx_tag += `<div id = "total-tx-msg" class="small"><br/>Total Transaction Number</div><div id = "total-tx-update" class="slight m-t-sm"><i class="fa fa-clock-o"> </i> Updated : `
		total_tx_tag += `<span class="c-white">${utcString}</span></div>`

		$("#total-tx").remove();
		$("#total-tx-msg").remove();
		$("#total-tx-update").remove();
		$("#total-tx-pos").append(total_tx_tag);

		var rows = [];

		var top = '<thead><tr align="center"><th align="center">Block Num</th>'
			+ '<th align "center">Tx ID</th>'
			+ '<th algin="center">Create Time</th><th algin="center">Group</th>'
			+ '<tbody>';

		var bottom = '</tbody>';

		for(var i = 0; i < data.length; i++) {
			var timestamp = parseInt(data[i].cct);
			var dateObj = new Date(timestamp);
			var utcString = utcformat(dateObj);

			var row = '<tr align="center"><td>' 
								+ `<a style="color:#FF5252; font-family:Monospace 'Consolas';"`
								+ `onmouseover="$(this).css('text-decoration', 'underline');"`
								+ `onmouseout="$(this).css('text-decoration', 'none');"`
								+ `href="search.php/?delimiter=block&key=${data[i].blk_num}">` + data[i].blk_num
								+ '<a/></td><td>'
								+ `<a style="color:#FF5252; font-family:Monospace 'Consolas';"`
								+ `onmouseover="$(this).css('text-decoration', 'underline');"`
								+ `onmouseout="$(this).css('text-decoration', 'none');" `
								+ `href="search.php/?delimiter=tx&key=${data[i].sc_hash}">` + data[i].sc_hash.substr(0, 10) + "...."
								+ '</a></td><td>' + utcString
								+ '</td><td>' + data[i].subnet_id
								+ '</td></tr>';
			rows.push(row);
		}

		for (var i = 0; i < rows.length; i++) {
			if(i == 0) {
				$('#latestTxTable').html(top + rows[i] + bottom);
			} else {
				$('#latestTxTable').append(rows[i]);
			}
		}

		// var body = $('tbody');
		// body.hide();
		// $('#latestTxTable.tbody:last-child').after(body);
		// body.fadeIn(250);
	}

	function LatestTx() {
		$.ajax({
			url: `http://211.42.197.194:12081/tx/list`,
			data: {"start" : 0, "length" : 10, "search" : { "value" : ""}},
			type: "GET",
			dataType: "json",
			cache: false,
			success: function(data, code, xhr) {

				if(data.errorCode == 0) {
					ModifyTxList(data.data, data.recordsTotal);
				}
			},
			error : function(err) {
				console.log(err);
			}
		})
	}

	function ModifyAccountNum(data) {	

		var dateObj = new Date();
		var T = [dateObj.getUTCHours(), dateObj.getUTCMinutes()];
		var tail = "GMT";

		if(+T[0] > 12) {
			T[0] -= 12;
			tail = ' pm ' + tail;
		}
		else {
			tail = ' am ' + tail;
		}

		var i = 2;
		while(i) {
			--i;
			if(T[i] < 10) T[i] = '0' + T[i];
		}
		var utcString = T.join(":") + tail;

		var total_account_tag = `<h2 id = "total-accounts" class="m-b-none"><i class="pe page-header-icon pe-7s-wallet"></i>&nbsp;&nbsp;` 
		total_account_tag += data.total
		total_account_tag += ` <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> + 20%</span></h2>`
		total_account_tag += `<div id = "total-accounts-percent" class="small"><br/>Total Accounts</div><div id = "total-accounts-update" class="slight m-t-sm"><i class="fa fa-clock-o"> </i> Updated : `
		total_account_tag += `<span class="c-white">${utcString}</span></div>`

		$("#total-accounts").remove();
		$("#total-accounts-percent").remove();
		$("#total-accounts-update").remove();
		$("#total-account-pos").append(total_account_tag);

		var active_account_tag = `<h2 id = "active-accounts" class="m-b-none"><i class="pe page-header-icon pe-7s-unlock"></i>&nbsp;&nbsp;`
		active_account_tag += data.active
		active_account_tag += ` <span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> 5%</span></h2>`
		active_account_tag += `<div id = "active-accounts-percent" class="small"><br/>Active Accounts</div><div id = "active-accounts-update" class="slight m-t-sm"><i class="fa fa-clock-o"> </i> Update : `
		active_account_tag += `<span class="c-white">${utcString}</span></div>`

		$("#active-accounts").remove();
		$("#active-accounts-percent").remove();
		$("#active-accounts-update").remove();
		$("#active-account-pos").append(active_account_tag);
	}

	function CurrentAccount() {
		$.ajax({
			url: `http://211.42.197.194:12081/account/num`,
			type: "GET",
			dataType: "json",
			cache: false,
			success: function(data, code, xhr) {

				if(data.errorCode == 0) {
					ModifyAccountNum(data.contents);
				}
			},
			error : function(err) {
				console.log(err);
			}
		})
	}

	function ModifyNodeNum(data) {
		var dateObj = new Date();
		var T = [dateObj.getUTCHours(), dateObj.getUTCMinutes()];
		var tail = "GMT";

		if(+T[0] > 12) {
			T[0] -= 12;
			tail = ' pm ' + tail;
		}
		else {
			tail = ' am ' + tail;
		}

		var i = 2;
		while(i) {
			--i;
			if(T[i] < 10) T[i] = '0' + T[i];
		}
		var utcString = T.join(":") + tail;

		var total_node_tag = `<h2 id = "total-nodes" class="m-b-none"><i class="pe page-header-icon pe-7s-power"></i>&nbsp;&nbsp;`
		total_node_tag += data.nodeNum;
		total_node_tag += ` <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> + 18%</span></h2>`
		total_node_tag += `<div id ="total-active-nodes" class="small"><br/>Active Nodes</div><div id = "total-nodes-update" class="slight m-t-sm"><i class="fa fa-clock-o"> </i> Update : `
		total_node_tag += `<span class="c-white">${utcString}</span></div>` 

		$("#total-nodes").remove();
		$("#total-active-nodes").remove();
		$("#total-nodes-update").remove();
		$("#active-node-pos").append(total_node_tag);
	}

	function CurrentNode() {
		$.ajax({
			url: `http://211.42.197.194:12081/node/num`,
			type: "GET",
			dataType: "json",
			cache: false,
			success: function(data, code, xhr) {

				if(data.errorCode == 0) {
					ModifyNodeNum(data.contents);
				}
			},
			error : function(err) {
				console.log(err);
			}
		});
	}

	function MarketCapHistory() {
		var chartOptions = {
			responsive: true,
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor:"#90969D"
					},
					gridLines: {
						color:"#37393F"
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#90969D"
					},
					gridLines: {
						color: "#37393F"
					}
				}]
			}
		}

		var lineData = {
			labels : ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
			datasets: [
				{
					backgroundColor: 'transparent',
					borderColor: "#FF5252",
					pointBorderWidth: 0,
					pointRadius: 2,
					pointBorderColor: "#FF5252",
					borderWidth: 1,
					data: [16, 32, 18, 26, 42, 33, 44]
				}
			]
		}

		var historyChart = document.getElementById("marketcap-history").getContext("2d");
		new Chart(historyChart, {type: 'line', data : lineData, options: chartOptions});
	}

	function initView() {
		var data = {
			total : 0,
			nodeNum : 0,
			active : 0,
		}
		var total = 0;
		ModifyBlockList(data, total);
		ModifyTxList(data, total);
		ModifyAccountNum(data);
		ModifyNodeNum(data);
	}

	$(document).ready(function() {
		//initView();

		// Latest Block Data Table
		LatestBlock();
		setInterval(LatestBlock, 3000);

		// Latest Tx Data Table
		LatestTx();
		setInterval(LatestTx, 3000);

		// Account Num
		CurrentAccount();
		// setInterval(CurrentAccount, 3000);

		// Node num
		CurrentNode();
		// setInterval(CurrentNode, 3000);

		// MarketCap History Chart
		MarketCapHistory();

	});

})(jQuery)