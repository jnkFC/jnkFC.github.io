<?
include "db.inc.php";
	$order = "UPDATE data_employees SET name='$name', address='$address' WHERE employees_number='$id'";
	          mysql_query($order);
	header("location:edit.php");
	?>