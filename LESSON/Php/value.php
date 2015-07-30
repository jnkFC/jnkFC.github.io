<html>
<head></head>
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
	<table>
	<tr>
	  	<td align="center">EDIT DATA</td>
	</tr>
	<tr>
	  <td>
	    <table border="1">
	      <?
	      $order = "SELECT * FROM detail";
	      $result = mysqli_query($conn,$order);
	      while ($row=mysqli_fetch_array($result)){
	      	echo ("<tr><td>$row[name]</td>");
	        echo ("<td>$row[email]</td>");
	        echo ("<td>$row[country]</td>");
	        echo ("<td>$row[state]</td>");
	        echo ("<td>$row[phn_no]</td>");
	        echo ("<td>$row[gender]</td>");
	        echo ("<td><a href=\"edit.php?email=$row[email]\">Edit</a></td></tr>");

	    }?>
	  	</table>
	  </td>
	</tr>
	</table>
</body>
</html>