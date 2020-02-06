<!DOCTYPE html>
<html>
<head>	
	<?php include './include/head.tpl.html'; ?>
</head>

<body>

<!-- Wrapper-->
<div class="wrapper">

		<!-- TOP BAR -->
		<?php include './include/topbar.tpl.html'; ?>
		<!-- END TOP BAR -->		
		
		<!-- LEFT SIDEBAR -->
		<?php include './include/left_sidebar_node.tpl.html'; ?>		
		<!-- END LEFT SIDEBAR -->

    <!-- Main content-->
    <section class="content">
        <div class="container-fluid">


            <div class="row">
                <div class="col-lg-12">
                    <div class="panel m-b-none">
                        <div class="panel-body">
                            <h3 class="m-b-xs"> FINL CHAIN NODE ACTIVITY <sup>consensus group</sup></h3>
                            <hr/>
                            <p class="small">
                                <span class="c-white">Real-time view of the status of the nodes on the Transaction and Block Generation from the Blockchain Agreement Node in the worldwide Finl Chain, and real-time view of the block generation and fixed information and traffic and TPS information on the nodes in IDC Center.
                            </p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">


                <div class="col-lg-5">

                    <div class="panel">
                        <div class="panel-body">

                            <h4 class="m-t-n-sm m-b-xs">Consensus Node Server Activity</h4>
                            <samll>Real time geographically activity</samll>
                            <div id="serverMap"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">

                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            FINL CHAIN NODE LIST
                        </div>
                        <div class="panel-body">
                            <table id="nodeDataTable" class="table table-striped table-hover table-responsive-sm">
                                <thead>
                                <tr>
                                    <th>Group #</th>
                                    <th>IP</th>
                                    <th>Region</th>
                                    <th>ID</th>
                                    <th>Role</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    </section>
    <!-- End main content-->

</div>
<!-- End wrapper-->

<!-- FOOT -->
<?php include './include/foot.tpl.html';?>
<!-- END FOOT -->

<!-- Vendor scripts -->
<script src="/vendor/pacejs/pace.min.js"></script>
<script src="/vendor/jquery/dist/jquery.min.js"></script>
<script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="/vendor/d3/d3.min.js"></script>
<script src="/vendor/topojson/topojson.min.js"></script>
<script src="/vendor/datamaps/datamaps.world.min.js"></script>
<script src="/vendor/moment/moment.js"></script>
<script src="/vendor/datatables/datatables.min.js"></script>
<script src="/vendor/datatables/dataTables.bootstrap4.min.js"></script>

<!-- App scripts -->
<script src="/scripts/luna.js"></script>
<script src="/scripts/nodeClient.js"></script>
<script src="/scripts/search.js"></script>

</body>

</html>