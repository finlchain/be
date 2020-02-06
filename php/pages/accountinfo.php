<?php
	$link_tag = '<a style="color:#FF5252; font-family:Monospace,'." 'Consolas';".'"';
	$link_tag = $link_tag.' onmouseover="$(this).css('."'text-decoration', 'underline');".'"';
	$link_tag = $link_tag.' onmouseout="$(this).css('."'text-decoration', 'none');".'"';

	echo $data["test"];
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
	<?php include './include/topbar.tpl.html'; ?>
	<!-- END TOP BAR -->

	<!-- LEFT SIDEBAR -->
	<?php include './include/left_sidebar_account.tpl.html'; ?>
	<!-- END LEFT SIDEBAR -->

	<!-- Main content -->
	<section class="content">
		<div class="container-fluid">

			<div class="row">
				<div class="col-lg-12">
					<div class="view-header">
						<div class="header-icon">
							<i class="pe page-header-icon pe-7s-wallet"></i>
						</div>
						<div class="header-title">
							<h3 style="padding: 12px">Account Info</h3>
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
										<td><strong>Account ID</strong></td>
										<td><?php echo $data["id"];?></td>
									</tr>
									<tr>
										<td><strong>Address</strong></td>
										<td><?php echo $data["addr"];?></td>
									</tr>
									<tr>
										<td><strong>status</strong></td>
										<td><?php echo $data["status"];?></td>
									</tr>
									<tr>
										<td><strong>Last Contract Revision</strong></td>
										<td><?php echo $data["last_revision"];?></td>
									</tr>
									<tr>
										<td><strong>Last Contract Key</strong></td>
										<td>
											<?php 
												echo $link_tag." href='?delimiter=tx&key=".$data["last_contract_key"]."'>";
												echo $data["last_contract_key"];
												echo "</a>";
											?>		
										</td>
									</tr>
									<tr>
										<td><strong>Balance</strong></td>
										<td><?php echo $data["balance"];?></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-filled">
						<div class="panel-heading">
							USER TRANSACTION LIST
						</div>
						<div class="panel-body">
							<table id="userTxDataTable" class="table table-striped table-hover table-responsive-sm" style="font-size:14px;">
								<thead>
									<tr>
										<th>Block Num</th>
										<th>Contract Key</th>
										<th>From</th>
										<th>To</th>
										<th>IN/OUT</th>
										<th>Kind</th>
										<th>Amount</th>
								</thead>
								<tbody></tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<!-- END Main content -->

</div>
<!-- END Wrapper -->

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
<script src="/scripts/accountinfoClient.js"></script>
<script src="/scripts/search.js"></script>

</body>

</html>