<html>
<head>
	
</head>
<body>
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
		?>
		<?php 
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$order = "UPDATE detail SET name='$_POST[name]', email='$_POST[email]', country='$_POST[country]', phn_no=$_POST[phn_no], gender='$_POST[gender]' WHERE email='$_POST[email]' ";
	     mysqli_query($conn,$order);
	 }
	?>
	<table border=1>
		<tr>
		  	<td align=center>Edit Data</td>
		</tr>
	  	<tr>
		  	<td>
		    	<table> <?php
		    	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		    		$email=$_POST["email"];
		    	}
		    	else
		    		$email=$_GET["email"];
		    	$order = "SELECT * FROM detail where email='$email' ";
				$result = mysqli_query($conn,$order);
	      		$row = mysqli_fetch_array($result);
	      		?>
	      		<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
	      		
	      		<tr>
	      			<td>Name</td>
	          		<td>
	          			<input type="text" name="name" size="30" value="<? echo "$row[name]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>Address</td>
	        		<td>
	          			<input type="text" name="email" size="30" value="<? echo "$row[email]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td>Country</td>
	          		<td>
	          			<input type="text" name="country" size="30" value="<? echo "$row[country]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>State</td>
	        		<td>
	          			<input type="text" name="state" size="30" value="<? echo "$row[state]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td>Phone no.</td>
	          		<td>
	          			<input type="text" name="phn_no" size="30" value="<? echo "$row[phn_no]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>Gender</td>
	        		<td>
	          			<input type="text" name="gender" size="30" value="<? echo "$row[gender]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td align="right">
	          		<input type="submit" name="submit value" value="Edit">
	          		<button><a href="editdb.php">Delete</a></button>
	      			</td>
	      		</tr>
	    		</form>
	  			</table>
	  		</td>
		</tr>
	</table>

</body>
</html>