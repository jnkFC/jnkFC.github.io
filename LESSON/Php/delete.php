<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "subscriber";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$email=$_GET["email"];
	
	if (!$conn) {
    	die("Connection failed: " . mysqli_connect_error());
	}
	$del = "DELETE FROM detail where email='$email'";
  	mysqli_query($conn, $del );
    $del1="DELETE from interest where email='$email'";
  	mysqli_query($conn, $del1 );
  	echo "Deletion Successful!!";
    
?>
