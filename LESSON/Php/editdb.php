<?
	$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "subscriber";
	$order = "UPDATE data_employees SET name='$name', email='$email', country='$country', phn_no='$phn_no', gender='$gender' WHERE employees_number='$id'";
	          mysql_query($order);
	header("location:editdb.php");
	?>