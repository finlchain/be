<?php

    // include other lib class
    include __DIR__.'/c_base58.php';
    include __DIR__.'/c_bcmath.php';
    include __DIR__.'/c_curl.php';
    include __DIR__.'/c_common_util.php';

    class C_Global
    {
        private $conf_json;
        private $fb_url;
        
        private $c_base58;
        private $c_bcmath;
        private $c_curl;
        private $c_util;

        public function __construct() {
            $this->conf_json = json_decode(file_get_contents('./../conf/conf.json'), true);
            $this->fb_url = $this->conf_json["FBURL"];

            // init class instance
            $this->c_base58 = new C_Base58();
            $this->c_bcmath = new C_BCMath();
            $this->c_curl = new C_Curl($this->fb_url);
            $this->c_util = new C_CommonUtil();

        }

        public function get_c_base58() {
            return $this->c_base58;
        }

        public function get_c_bcmath() {
            return $this->c_bcmath;
        }

        public function get_c_curl() {
            return $this->c_curl;
        }

        public function get_c_util() {
            return $this->c_util;
        }
    }

?>