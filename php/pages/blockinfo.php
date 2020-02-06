<?php
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
	<?php include './include/left_sidebar_block.tpl.html';?>
	<!-- END LEFT SIDEBAR -->

	<!-- Main content -->
	<section class="content">
		<div class="container-fluid">
			
			<div class="row">
				<div class="col-lg-12">
					<div class="view-header">
						<div class="header-icon">
                            <i class="pe page-header-icon pe-7s-box2"></i>
                        </div>	
                        <div class="header-title">
                            <h3 style="padding: 12px">BLOCK #<?php echo $data["blk_num"]?></h3>
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
            							<td><strong>Block Number</strong></td>
            							<td><?php echo $data["blk_num"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Generation Time</strong></td>
            							<td><?php echo $data["bgt"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Group ID</strong></td>
            							<td><?php echo $data["subnet"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Node ID</strong></td>
            							<td><?php echo $data["bp"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Transaction Count</strong></td>
            							<td><?php echo $data["tx_cnt"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Block ID</strong></td>
            							<td style="font-family: Monospace, 'Consolas'"><?php echo $data["blk_hash"]?></td>
            						</tr>
            						<tr>
            							<td><strong>Previous Block ID</strong></td>
            							<td>
            								<?php 
            									echo $link_tag." href='?delimiter=block&key=".$data["pbh"]."'>";
            									echo $data["pbh"];
            									echo "</a>";
            								?>
            							</td>
            						</tr>
            						<tr>
            							<td>
            								<strong>TX List</strong>
            								<?php for($i = 0; $i < count($data["txs"]); $i++) { echo "<br>"; } ?>
            							</td>
            							<td>
            								<?php
            									for($i = 0; $i < count($data["txs"]); $i++) {
            										echo $link_tag." href='?delimiter=tx&key=".$data["txs"][$i]["sc_hash"]."'>";
            										echo $data["txs"][$i]["sc_hash"];
            										echo "</a>";
            										echo "<br>";
            									}
            								?>
            							</td>
            						</tr>
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