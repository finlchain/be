<?php 
	// include libs
	include_once './../libs/c_global.php';

	$c_global = new C_Global();

	$c_base58 = $c_global->get_c_base58();
	$c_bcmath = $c_global->get_c_bcmath();
	$c_curl = $c_global->get_c_curl();
	$c_util = $c_global->get_c_util();

	$query_str = $_SERVER['QUERY_STRING'];
	parse_str($query_str, $query_array);

	$delimiter;
	$key;

	foreach($query_array as $key => $value) {

		if($key == "delimiter") {
			$delimiter = $value;
		} elseif($key == "key") {
			$key = $value;
		}
	}

	// Fullblock API Call and render

	do {
		if($delimiter == "block") {

			$c_curl->set_url("/block/blkinfo");

			if($key == is_numeric($key)) $params = array('blknum' => $key);
			else $params = array('hash' => $key);

			$blkinfo_json = $c_curl->curl_get($params);
			$empty_res = empty($blkinfo_json);

			if(empty($blkinfo_json)) break;

			$result_code = $blkinfo["errorCode"];

			if($result_code != 0) break;

			$blkinfo = $blkinfo_json["contents"]["blkinfo"];

			$blk_num = $blkinfo["blk_num"];
			$subnet = $blkinfo["subnet_id"];
			$bp = "0x".dechex($blkinfo["p2p_addr"]);
			$tx_cnt = $blkinfo["tx_cnt"];
			$blk_hash = $blkinfo["blk_hash"];
			$pbh = $blkinfo["pbh"];
			$txs = $blkinfo_json["contents"]["txlist"];

			$bgt = $blkinfo["bgt"];
			$bgt = (int)$bgt;
			$bgt = $c_util->ms_to_utc_string($bgt);

			$data = array("blk_num" => $blk_num, "bgt" => $bgt, "subnet" => $subnet, "bp" => $bp, 
							"tx_cnt" => $tx_cnt, "blk_hash" => $blk_hash, "pbh" => $pbh, "txs" => $txs);

			include './blockinfo.php';
		}
		elseif($delimiter == "tx") {
			$c_curl->set_url("/tx/txinfo");

			if($key == is_numeric($key)) $params = array('db_key' => $key);
			else $params = array('hash' => $key);

			$txinfo_json = $c_curl->curl_get($params);
			$empty_res = empty($txinfo_json);

			if(empty($txinfo_json)) break;

			$result_code = $txinfo_json["errorCode"];

			if($result_code != 0) break;

			$txinfo = $txinfo_json["contents"]["txinfo"];

			$tx_hash = $txinfo["tx_hash"];
			$blk_num = $txinfo["blk_num"];

			$cct = $txinfo["contract"]["ContractCreateTime"];
			$cct = (int)$cct;
			$cct = $c_util->ms_to_utc_string($cct);

			$subnet_id = $txinfo["subnet_id"];

			$contract = $txinfo["contract"];


			if((int)$contract["NotePrivacy"] == 0) {
				$contract["Note"] = "{ Privacy }";
			} else {
				for($i = 0; $i < count($contract["Note"]); $i++) {
					$kind = $contract["Note"][$i]["Kind"];
					if($kind == 268435489 || $kind == 268435490 || $kind == 268435491) {
						$contract["Note"][$i]["Content"] = json_decode($contract["Note"][$i]["Content"], true);
					}
				}
			}

			$note = $txinfo["contract"]["Note"];

			$data = array("tx_hash" => $tx_hash, "blk_num" => $blk_num, "subnet" => $subnet_id,
							"cct" => $cct, "contract" => $contract, "note" => $note, "test" => $test);

			include './txinfo.php';
		}
		elseif($delimiter == "account") {
			$c_curl->set_url("/account/status");
			$params = array('pubkey' => $key, 'kind' => 0);

			$account_json = $c_curl->curl_get($params);
			$empty_res = empty($account_json);

			if(empty($account_json)) break;

			$result_code = $account_json["errorCode"];

			if($result_code != 0) break;

			$accountinfo = $account_json["contents"];

			$id = $accountinfo["id"];
			$pubkey = $accountinfo["pub_key"];
			$status = $accountinfo["status"];

			$addr = $c_bcmath->bchex2dec($pubkey);
			$addr = $c_base58->finl_addr_encode($addr);

			// decode test
			// $test = $c_base58->finl_addr_decode($addr);
			// $test = $c_bcmath->bcdec2hex($test);

			// if(strlen($test) < 66) {
			// 	$test = "0".$test;
			// }

			if($status == 0) $status = "Logout";
			elseif($status == 1) $status = "Login";

			$last_revision = $accountinfo["revision"];
			$last_contract_key = $accountinfo["previous_key"];
			$balance = $accountinfo["balance"];

			$data = array("id" => $id, "addr" => $addr, "status" => $status, 
							"last_revision" => $last_revision, "last_contract_key" => $last_contract_key, "balance" => $balance, "test" => $test);

			include './accountinfo.php';
		}
	} while(0);

	if($result_code != 0 || $empty_res) 
	{
		include './error.php';
	}
?>
