<?php

class C_Base58
{
    private $alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    private $finl_prefix = "FINL";
    private $base_count;

    public function __construct() { 
        $this->base_count = strlen($this->alphabet);
    }

    public function finl_addr_encode($bc_pub_key) {
        $base58_string = "";
        
        while(bccomp($bc_pub_key, $this->base_count) >= 0) {
            $div = bcdiv($bc_pub_key, $this->base_count);
            $mod = bcmod($bc_pub_key, $this->base_count);
            $base58_string = substr($this->alphabet, intval($mod), 1).$base58_string;
            $bc_pub_key = $div;
        }

        if($bc_pub_key) {
            $base58_string = $this->alphabet{intval($bc_pub_key)}.$base58_string;
        }

        $base58_string = $this->finl_prefix.$base58_string;
        return $base58_string;
    }

    public function finl_addr_decode($addr) {
        $pub_key = strval(0);
        $multi = strval(1);
        $addr = substr($addr, 4, strlen($addr) - 1);

        while(strlen($addr) > 0) {
            $digit = substr($addr, strlen($addr) - 1);
            $pub_key = bcadd($pub_key, bcmul($multi, strval(strpos($this->alphabet, $digit))));
            $multi = bcmul($multi, $this->base_count);
            $addr = substr($addr, 0, strlen($addr) - 1);
        }

        return $pub_key;
    }

}

?>