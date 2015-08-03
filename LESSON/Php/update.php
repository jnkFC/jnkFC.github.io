<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "subscriber";
 		// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	$order = "UPDATE detail SET name='$_GET[name]', email='$_GET[email]', country='$_GET[country]', phn_no=$_GET[phn_no], gender='$_GET[gender]' WHERE email='$_GET[email]' ";
 	mysqli_query($conn,$order);
 	$order1 = "UPDATE interest SET football='$_GET[football]', movie='$_GET[movie]', reading='$_GET[reading]' WHERE email='$_GET[email]' ";
 	mysqli_query($conn,$order1);
 	echo "Table updated";
?>