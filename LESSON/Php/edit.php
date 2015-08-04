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
		
	<script type="text/javascript">
	function edit(i)
 	{
        var xmlhttp;
	if (window.XMLHttpRequest)
  	{
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		document.getElementById("msg").innerHTML=xmlhttp.responseText;
    	}
  	}
  	var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
 	var country= document.getElementById("country").value;
    var state=document.getElementById("state").value;
    var gender=document.getElementById("gender").value;
   	var phn_no=document.getElementById("phn_no").value;
   	var football=document.getElementById("football").value;
	var movie=document.getElementById("movie").value;
	var reading=document.getElementById("reading").value;

	var inp="?name="+name+"&email="+email+"&country="+country+"&state="+state+"&gender="+gender+"&phn_no="+phn_no+"&football="+football+"&movie="+movie+"&reading="+reading;
	if(i==1)
		xmlhttp.open("GET","update.php"+inp,true);
	else
		xmlhttp.open("GET","delete.php"+inp,true);
	xmlhttp.send(null);
	}
</script>
	<table border=1>
		<tr>
		  	<td align=center>Edit Data</td>
		</tr>
	  	<tr>
		  	<td>
		    	<table> <?php
		    	$email=$_GET["email"];
		    	$order = "SELECT * FROM detail where   email='$email' ";
		    	$result = mysqli_query($conn,$order);
				$row = mysqli_fetch_array($result);
				$order1 = "SELECT * FROM interest where   email='$email' ";
				$result1 = mysqli_query($conn,$order1);
	      		$row1 = mysqli_fetch_array($result1);
	      		?>
	      		<form>
	      		
	      		<tr>
	      			<td>Name</td>
	          		<td>
	          			<input id ="name" type="text" name="name" size="30" value="<? echo "$row[name]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>Email</td>
	        		<td>
	          			<input id="email" type="text" name="email" size="30" value="<? echo "$row[email]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td>Country</td>
	          		<td>
	          			<input id="country" type="text" name="country" size="30" value="<? echo "$row[country]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>State</td>
	        		<td>
	          			<input id="state" type="text" name="state" size="30" value="<? echo "$row[state]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td>Phone no.</td>
	          		<td>
	          			<input id="phn_no" type="text" name="phn_no" size="30" value="<? echo "$row[phn_no]"?>">
	    			</td>
	      		</tr>
	        	<tr>
	        		<td>Gender</td>
	        		<td>
	          			<input id="gender" type="text" name="gender" size="30" value="<? echo "$row[gender]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	        		<td>FOOTBALL</td>
	        		<td>
	          			<input id="football" type="text" name="football" size="30" value="<? echo "$row1[football]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	        		<td>MOVIE</td>
	        		<td>
	          			<input id="movie" type="text" name="movie" size="30" value="<? echo "$row1[movie]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	        		<td>Reading</td>
	        		<td>
	          			<input id="reading" type="text" name="reading" size="30" value="<? echo "$row1[reading]"?>">
	      			</td>
	      		</tr>
	      		<tr>
	      			<td align="right">
	          		<input type="button" name="Update" value="Edit" onclick="edit(1)">
	          		<input type="button" name="Update" value="Delete" onclick="edit(2)">
	      			</td>
	      		</tr>
	    		</form>
	    		<div id="msg"></div>
	  			</table>
	  		</td>
		</tr>
	</table>

</body>
</html>