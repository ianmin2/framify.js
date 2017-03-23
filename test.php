<?php

function isInteger($input){
    return(ctype_digit(strval($input)));
}

	function mappy( $v1, $v2 ){
		print($i.'  '.$v2)."\n\n";
		return $v1;
	}


	$data = json_decode("{ \"name\":\"Ian Innocent\", \"age\":\"25\", \"telephone\":\"0725678447\", \"email\":\"ianmin2@live.com\" }");

	$data = ( get_object_vars( $data )  );


	array_map("mappy",array_keys($data),$array_values($data));


?>
