<?php
	$contract_kind_json = json_decode(file_get_contents('./../conf/contract_kind.json'), true);
	$conf_json = json_decode(file_get_contents('./../conf/conf.json'), true);

	$link_tag = '<a style="color:#FF5252; font-family:Monospace,'." 'Consolas';".'"';
	$link_tag = $link_tag.' onmouseover="$(this).css('."'text-decoration', 'underline');".'"';
	$link_tag = $link_tag.' onmouseout="$(this).css('."'text-decoration', 'none');".'"';
?>

<!DOCTYPE html>
<html>
<head>
	<?php include './include/head.tpl.html'; ?>
</head>

<body>

<!-- Wrapper -->
<div class="wrapper">

	<!-- TOP BAR -->
	<?php include './include/topbar.tpl.html';?>
	<!-- END TOP BAR -->

	<!-- LEFT SIDEBAR -->
	<?php include './include/left_sidebar_tx.tpl.html';?>
	<!-- END LEFT SIDEBAR -->

	<!-- Main content -->
	<section class="content">
		<div class="container-fluid">

			<div class="row">
				<div class="col-lg-12">
					<div class="view-header">
						<div class="header-icon">
							<i class="pe page-header-icon pe-7s-note"></i>
						</div>
						<div class="header-title">
							<h3 style="padding: 12px">Transaction Info</h3>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-filled">
						<div class="panel-body">
							<table class="table table-striped table-hover table-responsive-sm">
								<tbody style="color:#FFFFFF">
									<tr>
										<td><strong>TX ID</strong></td>
										<td><?php echo $data["tx_hash"];?></td>
									</tr>
									<tr>
										<td><strong>Block Number</strong></td>
										<td>
											<?php 
												echo $link_tag." href='?delimiter=block&key=".$data["blk_num"]."'>";
												echo $data["blk_num"];
												echo "</a>";
											?>	
										</td>
									</tr>
									<tr>
										<td><strong>Contract Create Time</strong></td>
										<td><?php echo $data["cct"];?></td>
									</tr>
									<tr>
										<td><strong>Group ID</strong></td>
										<td><?php echo $data["subnet"];?></td>
									</tr>
									<tr>
										<td><strong>Previous Contract Key</strong></td>
										<td>
											<?php
												echo $link_tag." href='?delimiter=tx&key=".$data["contract"]["PreviousKeyID"]."'>";
												echo $data["contract"]["PreviousKeyID"];
												echo "</a>";
											?>		
										</td>
									</tr>
									<tr>
										<td><strong>Raw Contract</strong></td>
										<td><pre><?php echo json_encode($data["contract"], JSON_PRETTY_PRINT); ?></pre></td>
									</tr>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-filled">
						<div class="panel-body">
							<table class="table table-striped table-hover table-responsive-sm">
								<thead>
									<tr>
										<th>Kind</th>
										<th>From</th>
										<th></th>
										<th>To</th>
										<th>Amount</th>
										<th>Fee</th>
										<th>Date</th>
									</tr>
								</thead>
								<tbody style="font-size:12px;">
									<?php 
										for($i = 0; $i < count($data["note"]); $i++) {
											echo "<tr>";
											echo "<td>".$contract_kind_json[$data["note"][$i]["Kind"]]."</td>";

											echo "<td>".$link_tag." href='?delimiter=account&key=".$data["contract"]["From"]."'>";
											echo $data["contract"]["From"];
											echo "</a></td>";

											echo '<td><img src="/img/right-arrow-orange-icon.png"></td>';

											if($data["note"][$i]["To"] == $conf_json["ADDRESS_TO_ALL_ZERO"]) {
												echo "<td>".$data["note"][$i]["To"]."</td>";
											} else {
												echo "<td>".$link_tag." href='?delimiter=account&key=".$data["note"][$i]["To"]."'>";
												echo $data["note"][$i]["To"];
												echo "</a></td>";
											}

											if($contract_kind_json["COIN_TYPE_LAST_NUMBER"] < (int)$data["note"][$i]["Kind"]) {
												echo "<td>-</td>";
												echo "<td>-</td>";
											} else {
												echo "<td>".$data["note"][$i]["Content"]["Amount"]."</td>";
												echo "<td>".$data["note"][$i]["Fee"]."</td>";
											}
											echo "<td>".$data["cct"]."</td>";

											echo "</tr>";
										}
									?>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<!-- END Main content -->

</div>
<!-- END wrapper -->

<!-- FOOT -->
<?php include './include/foot.tpl.html';?>
<!-- END FOOT -->

<!-- Vendor scripts -->
<script src="/vendor/pacejs/pace.min.js"></script>
<script src="/vendor/jquery/dist/jquery.min.js"></script>
<script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="/vendor/datatables/datatables.min.js"></script>
<script src="/vendor/datatables/dataTables.bootstrap4.min.js"></script>

<!-- App scripts -->
<script src="/scripts/luna.js"></script>
<script src="/scripts/search.js"></script>

</body>

</html>