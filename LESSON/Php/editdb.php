<?
	$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "subscriber";
	$order = "UPDATE data_employees SET name=$_POST[$name], email=$_POST[$email], country=$_POST[$country], phn_no=$_POST[$phn_no], gender=$_POST[$gender] WHERE email=$_POST[$email]";
	          mysql_query($order);
	
	?>