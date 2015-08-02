<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "subscriber";
	$order = "UPDATE data_employees SET name=$_POST[$name], email=$_POST[$email], country=$_POST[$country], phn_no=$_POST[$phn_no], gender=$_POST[$gender] WHERE email=$_POST[$email]";
	mysql_query($order);
	if (!$conn) {
    	die("Connection failed: " . mysqli_connect_error());
	}
	$del = "DELETE FROM subscribe where email=$mail";
  	if( mysqli_query($conn, $del ) ){
      	$pql="DELETE from hobby where email=$mail";
  		mysqli_query($conn, $pql );
    }
?>
