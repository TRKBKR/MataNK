<?php
header('Access-Control-Allow-Origin: *');
$mess=$_POST['message'];
$fp = @fopen("data.php", 'a');
if($fp) {
	@fwrite($fp,$mess."
");}
fclose($fp);
?>
