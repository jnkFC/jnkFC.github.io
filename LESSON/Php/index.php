<!doctype>
<html>
<head>
<link rel="stylesheet" type="text/css" href="basic_css.css">
<script type="text/javascript" src="basic_DOM_element.js"></script>
<?php
//	var_dump($_POST);
	//die();

	$nameErr = $emailErr = $countryErr = $stateErr = $phn_noErr= $interestErr =$genderErr=$MovieErr=$ReadingErr=$F_ballErr="";
	$name = $email = $country = $state = $phn_no= $gender= $interest= $sucMessage= $Movie=$Reading=$F_ball= "";
	$success=1;
print_r($_POST);
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["name"])) {
	    $nameErr = "Name is required";
	    $success=0;
		} else {
		$name = ($_POST["name"]);
	    }
	  	if (empty($_POST["country"])) {
	    $countryErr = "Select Country";
	    $success=0;
	  	} else {	  		
	    $countr = ($_POST["country"]);
	  	}
	    if (empty($_POST["email"])) {
	    $emailErr = "Email is required";
	    $success=0;
	  	} else if (!filter_var(($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
  		$emailErr = "Invalid email format";
  		$success=0;
		}
		else{			
			$email=$_POST["email"];
		}
		if (empty($_POST["state"])) {
	    $stateErr = "Select A State";
	    $success=0;
	  	} else {	  				
	    $state = ($_POST["state"]);
	  	}
	  	if (empty($_POST["sex"])) {
	    $genderErr = "Gender is required";
	    $success=0;
	  	} else {
	  	    $gender = ($_POST["sex"]);
	  	}
	  	if (empty($_POST["phn_no"])) {
	    $phn_noErr = "Phone no. is required";
	    $success=0;
	  	} else if(strlen($_POST["phn_no"]) !=10){
	  	$phn_noErr = "Only 10 digit number";
	  	$success=0;
	  	}else{
	    $phn_no =($_POST["phn_no"]);
	  	}
	  	if (empty($_POST["interest"])){
	  		$success=0;
	  		$interestErr = "Interest is required";
	  	} else {
	  		$interest = $_POST["interest"];
	  	}
	  	if (empty($_POST["F_ball"])){
	  		$success=0;
	  		$F_ballErr = "Interest is required";
	  	} else {
	  		$F_ball = $_POST["F_ball"];
	  	}
	  	if (empty($_POST["Movie"])) {
	  		$success=0;
	  		$MovieErr = "Interest is required";
	  	} else {
	  		$Movie = $_POST["Movie"];
	  	}
	  	if (empty($_POST["Reading"])) {
	  		$success=0;
	  		$ReadingErr = "Interest is required";
	  	} else {
	  		$Reading = $_POST["Movie"];
	  	}
	  	if($success == 1){
	  		echo "success";
			$sucMessage="Subscription Successful!!";
	  		$data = "$name, $email,$country, $state, $gender, $interest, $phn_no \n";
			$myf = fopen("/home/jiteshnk/jnkFC.github.io/LESSON/Php/details.csv", "a");
			fwrite($myf, $data);
			fclose($myf);
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

			$sql1 = "INSERT INTO detail (name,email,gender,phn_no,country,state) VALUES ('$name', '$email', '$gender', '$phn_no', '$country', '$state')";
			$sql2 = "INSERT INTO interest (email,football,movie,reading) VALUES ('$email', '$interest[0]','$interest[1]','$interest[2]')";
			if (mysqli_query($conn, $sql1)) {
						echo "New record created successfully";
				} else {
			    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			}
			if(mysqli_query($conn, $sql2)){
				echo "Successful 2 ";
			}
			mysqli_close($conn);
	    }
	}
	?>
</head>
<body>
	<?php ?>
	<div id="Page" position="relative"> 
		<ul>
			<li id="tab1" class="news_tab" onclick="tab(1)"><a id="tab1_a" href="#">News</a></li>
			<li id="tab2" class="subs_tab" onclick="tab(2)"><a id="tab2_a" href="#">Subscribe</a></li>
		</ul>
		<div id="News" class="outer_frame border" >
			
			<div class="frame1 fram_pos positioning border">
				<h1>Welcome</h1>
					<p>Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library.Simple and 	effective AngularJS bindings for FusionCharts JavaScript Charting Library.</p>
					<p style="color:#1b6bce"> AngularJS bindings for FusionCharts JavaScript Charting Library</p>
					<button class="button button_pos_lft">LEARN MORE</button>
			</div>
			<div class="frame2 fram_pos positioning border">
				<h1>Latest News</h1>
				<img class="image" src="image.jpg"> 
			</div>
		</div>
		<div id="subscribe" class="outer_frame border">
				<div class="sub fram_pos positioning border">
					<h1>Subscription Form</h1><h2><?php echo $sucMessage;?></h2>
					<form lang="en" id="subscript" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
					<table cellspacing="20">
						<tr>
    						<td>Name </td>
    						<td><input  id="name" class="inpt_box" type="text" spellcheck="true" name="name" value="<?php echo $name ?>"><span class="error">* <?php echo $nameErr;?></span></td>
    						<td>Country: </td>
    						<td><select onclick="opt()" id="country1" class="inpt_box" name="country" >
								<option value="INDIA" <?php if (isset($country) && $country=="INDIA") echo "selected";?>>INDIA</option>
								<option  value="U.S.A" <?php if (isset($country) && $country=="U.S.A") echo "selected";?> >U.S.A</option>
								</select>
								
							</td>
							<span class="error">* <?php echo $countryErr;?></span> 
    					</tr>
    					<tr>
    						<td>Email </td>
    						<td><input class="inpt_box" type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value="<?php echo $email ?>"><span class="error">* <?php echo $emailErr;?></span></td>
    						<td id="state1_name" >State</td>
    						<td><select id="state1" class="inpt_box" name="state">
	  								<option value="J & K" <?php if (isset($state) && $state=="J & K") echo "selected";?> >J & K</option>
								  	<option value="RAJASTHAN" <?php if (isset($state) && $state=="RAJASTHAN") echo "selected";?> >Rajasthan</option>
								</select>
								<select  style="visibility: hidden" id="state2" class="inpt_box" name="state">
	  								<option value="New York" <?php if (isset($state) && $state=="New York") echo "selected";?>>New York</option>
								  	<option value="San Francisco" <?php if (isset($state) && $state=="San Francisco") echo "selected";?> >San Francisco</option>
								</select>
								
							</td>
							<span class="error">* <?php echo $stateErr;?></span>
    					</tr>
    					<tr>
    						<td>SEX</td>
    						<td><input type="radio" name="sex" id="male" value="male" <?php if (isset($gender) && $gender=="male") echo "checked";?> >
    							<label for="male">Male</label>
    							<input type="radio" name="sex" id="female" value="female" <?php if (isset($gender) && $gender=="female") echo "checked";?> >
    							<label for="female">Female</label>
    							<span class="error">* <?php echo $genderErr;?></span>
  							</td>
  							<td>Phone No.:</td>
    						<td><input  id="phn" class="inpt_box" type="text" name="phn_no" value="<?php echo $phn_no ?>">
    							<span class="error">* <?php echo $phn_noErr;?></span></td>
  						</tr>
  						<tr>
  							<td>Interest</td>
  							<td><input id="F_ball" onclick="fav()" type="checkbox" name="interest[]" value="Football">Football
  								<input id="Movie"  onclick="fav()" type="checkbox" name="interest[]" value="Movie">Movie
  								<input id="Reading" onclick="fav()" type="checkbox" name="interest[]" value="Reading">Reading  
  							</td></td>
  						</tr>
  					</table>
  					<div id="F_ball_opt" class="check_opt">Which is your Favourite Team??</br><input  type="checkbox" name="F_ball[]" value="Brazil">Brazil
  								<input type="checkbox" name="F_ball[]" value="Argentina">Argentina
  								<input type="checkbox" name="F_ball[]" value="Germany">Germany</div>
  					<div id="Movie_opt" class="check_opt">What type of mocies do you like ??</br>
  							<input type="checkbox" name="Movie[]" value="Romantic">Brazil
  							<input type="checkbox" name="Movie[]" value="Horror">Horror
  							<input type="checkbox" name="Movie[]" value="Action">Action</div>
  					<div id="Reading_opt" class="check_opt">What do you like ro read??</br>
  							<input  type="checkbox" name="Reading[]" value="Blogs">Blogs
  							<input type="checkbox" name="Reading[]" value="Novel">Novel
  							<input type="checkbox" name="Reading[]" value="Short Stories">Short Stories</div>
					<input type="submit" name="SUBSCRIBE" value="SUBSCRIBE" class="button button_pos_ryt">
					<?php if (isset($_POST['SUBSCRIBE'])) { echo "<script type='text/javascript'>tab(2);</script>"; } ?>
					<button type="reset" value="Reset" class="button button_pos_ryt1">RESET</button>
					
				</form>

				</div>
		</div>
	</div>
	
	
	
</body>
</html>

