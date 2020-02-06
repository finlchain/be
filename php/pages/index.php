<?php
    // function floatValue($val) {
    //     $val = str_replace(",", ".", $val);
    //     $val = preg_replace('/\.(?=.*\./', '', $val);
    //     return floatval($val);
    // }

    // include_once './../libs/c_curl.php';

    // $conf_json = json_decode(file_get_contents('./../conf/conf.json'), true);
    // $market_cap_api_key = $conf_json["MARKET_CAP_KEY"];

    // // free for personal purpose
    // // Must update API account for deploy app
    // $market_cap_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    // $parameters = [
    //     'start' => '1',
    //     'limit' => '50',
    //     'convert' => 'USD',
    //     'CMC_PRO_API_KEY' => $market_cap_api_key
    // ];

    // $c_curl = new C_Curl($market_cap_url);
    // $res = $c_curl->curl_get($parameters);

    // $coin_name = $res[data][0][name];
    // $coin_symbol = $res[data][0][symbol];
    // $coin_price = $res[data][0][quote][USD][price];
    // $update_time = $res[data][0][last_updated];
    // $coin_market_cap = $res[data][0][quote][USD][market_cap];
?>

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
		<?php include './include/left_sidebar_index.tpl.html'; ?>		
		<!-- END LEFT SIDEBAR -->
		

    <!-- Main content-->
    <section class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12">
                    <div class="custom-view-header">
                        <div class="custom-title-header">
                            FINLCHAIN BLOCK EXPLORER
                        </div>
                    </div>
                    <hr>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-xs-6">
                    <div class="panel panel-filled">
                        <div class="panel-body">
                            <h2 class="m-b-none">
                                <i class="pe page-header-icon pe-7s-world"></i>&nbsp;&nbsp;MARKET CAP
                            </h2>
                            <br/>
                            <?php
                                echo "<h6>$ ".number_format($coin_market_cap, 2)."</h6>";
                            ?>  
                            RECENT 6MONTH HISTORY
                            <br/>
                            <br/>
                            <div>
                                <canvas id="marketcap-history" height="125"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row col-lg-9">

                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-filled">
                            <div class="panel-body">
                                <div id="total-account-pos">
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-filled">
                            <div class="panel-body">
                                <div id="active-account-pos">
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-filled">
                            <div class="panel-body">
                                <div id="active-node-pos">
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-filled">
                            <div class="panel-body">
                                <div id="total-blk-pos">
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-filled">
                            <div class="panel-body">
                                <div id="total-tx-pos">
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div class="panel panel-b-accent">
                            <div class="panel-body text-center p-m">
                                <h3 class="font-light">
                                    <i class="pe pe-7s-download"></i> +280k downloads</h3>
                                <br/>
                                <center>
                                    If you want download Finl Chain Full Block Data<br/>
                                    <strong>
                                    <a style="color:#FFC107; font-family:Monospace, 'Consolas';"
                                        onmouseover="$(this).css('text-decoration', 'underline');"
                                        onmouseout="$(this).css('text-decoration', 'none');"
                                        href="/pages/index.php">Click to here</a>
                                    </strong>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <strong>Latest Blocks</strong>
                        </div>
                        <div class="panel-body">
                            <table id="latestBlockTable" class="table table-responsive-sm">
                                <thead>
                                <tr align="center">
                                    <th align="center">Block Num</th>
                                    <th align="center">Generation Time</th>
                                    <th align="center">Transaction Count</th>
                                    <th align="center">Group</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="panel panel-filled">
                        <div class="panel-heading">
                            <strong>Latest Transactions</strong>
                        </div>
                        <div class="panel-body">
                            <table id="latestTxTable" class="table table-responsive-sm">
                                <thead>
                                    <tr align="center">
                                        <th align="center">Block Num</th>
                                        <th align="center">Tx ID</th>
                                        <th align="center">Create Time</th>
                                        <th align="center">Group</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- End main content-->

</div>

<!-- FOOT -->
<?php include './include/foot.tpl.html';?>
<!-- END FOOT -->


<!-- End wrapper-->

<!-- Vendor scripts -->
<script src="/vendor/pacejs/pace.min.js"></script>
<script src="/vendor/jquery/dist/jquery.min.js"></script>
<script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="/vendor/toastr/toastr.min.js"></script>
<script src="/vendor/chart.js/dist/Chart.min.js"></script>

<!-- App scripts -->
<script src="/scripts/luna.js"></script>
<script src="/scripts/search.js"></script>
<script src="/scripts/indexClient.js"></script>

</body>

</html>