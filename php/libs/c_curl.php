<?php

class C_Curl 
{
	private $m_url;
	private $m_headers;

	public function __construct($input_url) 
	{ 
		$this->m_url = $input_url;
	}	

	public function set_url($input_url) 
	{
		$this->m_url = $this->m_url.$input_url;
	}

	public function get_url() 
	{
		return $this->m_url;
	}

	public function curl_get($params=array()) 
	{
		$this->m_url = $this->m_url.'?'.http_build_query($params, '', '&');
		
		$ch = curl_init();
		$ch = $this->curl_common_opt_set($ch);

		$response = curl_exec($ch);
		$response = json_decode($response, true);
		curl_close($ch);

		return $response;
	}

	public function curl_post($post_data) 
	{
		$ch = curl_init();
		$ch = $this->curl_common_opt_set($ch);

		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

		$response = curl_exec($ch);
		$response = json_decode($response, true);
		curl_close($ch);

		return $response;
	}

	private function curl_common_opt_set($curl_obj) 
	{ 
		curl_setopt($curl_obj, CURLOPT_URL, $this->m_url);
		curl_setopt($curl_obj, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl_obj, CURLOPT_CONNECTTIMEOUT, 10);

		curl_setopt($curl_obj, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));

		curl_setopt($curl_obj, CURLOPT_VERBOSE, true);

		curl_setopt($curl_obj, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($curl_obj, CURLOPT_SSL_VERIFYPEER, false);

		return $curl_obj;
	}

}

?>