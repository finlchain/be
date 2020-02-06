<?php

class C_BCMath
{
	public function __construct() { }

    public function bchex2dec($hex) {
        if (strlen($hex) == 1) {
            return hexdec($hex);
        } else {
            $remain = substr($hex, 0, -1);
            $last = substr($hex, -1);

            return bcadd(bcmul(16, $this->bchex2dec($remain)), hexdec($last));
        }
    }

    public function bcdec2hex($dec) {
        $last = bcmod($dec, 16);
        $remain = bcdiv(bcsub($dec, $last), 16);

        if($remain == 0) {
            return dechex($last);
        } else {
            return $this->bcdec2hex($remain).dechex($last);
        }
    }
}

?>