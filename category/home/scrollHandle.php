<?php  
	require_once "MyDB_class.php";
	header("Content-Type:text/html;charset=utf-8");
	$myDb1 = new MyDB();
	echo $myDb1->fillData();
?>