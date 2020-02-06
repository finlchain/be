<?php

Class C_CommonUtil 
{

	public function __construct() { }

	public function ms_to_utc_string($timestamp) {
		$timestamp_s = $timestamp / 1000;
		$timestamp_h = $timestamp / 1000;

		$hour = gmdate("h", $tiemstamp_h);
		$tail = "GMT";

		if($hour > 12) {
			$timestamp_s -= (3600 * 12);
			$tail = ' pm '.$tail;
		} else {
			$tail = ' am '.$tail;
		}

		$utc_string = gmdate("Y/m/d h:i:s", $timestamp_s);
		$utc_string = $utc_string.$tail;

		return $utc_string;
	}
}

?>