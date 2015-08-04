<?php
//	var_dump($_GET);
	//die();

	$nameErr = $emailErr = $countryErr = $stateErr = $phn_noErr= $interestErr =$genderErr=$MovieErr=$ReadingErr=$F_ballErr="";
	$name = $email = $country = $state = $phn_no= $gender= $interest= $sucMessage= $Movie=$Reading=$F_ball= "";
	$success=1;
	if (empty($_GET["name"])) {
    $nameErr = "Name is required";
    $success=0;
	} else {
	$name = ($_GET["name"]);
    }
  	if (empty($_GET["country"])) {
    $countryErr = "Select Country";
    $success=0;
	} else {
		$country = ($_GET["country"]);
  	}
    if (empty($_GET["email"])) {
    $emailErr = "Email is required";
    $success=0;
  	} else if (!filter_var(($_GET["email"]), FILTER_VALIDATE_EMAIL)) {
		$emailErr = "Invalid email format";
		$success=0;
	}
	else{			
		$email=$_GET["email"];
	}
	if (empty($_GET["state"])) {
    $stateErr = "Select A State";
    $success=0;
  	} else {	  				
    $state = ($_GET["state"]);
  	}
  	if (empty($_GET["sex"])) {
    $genderErr = "Gender is required";
    $success=0;
  	} else {
  	    $gender = ($_GET["sex"]);
  	     
		
  	}
  	if (empty($_GET["phn_no"])) {
    $phn_noErr = "Phone no. is required";
    $success=0;
  	} else if(strlen($_GET["phn_no"]) !=10){
  	$phn_noErr = "Only 10 digit number";
  	$success=0;
  	}else{
    $phn_no =($_GET["phn_no"]);
  	}
  	if (empty($_GET["interest"])){
  		$success=0;
  		$interestErr = "Interest is required";
  	} else {
  		$interest = explode(',',($_GET["interest"]),-1);
     }
  	
  	if($success == 1){
  		 	
			$sucMessage="Subscription Successful!!";
	  	
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
       
      }
      mysqli_close($conn);
			echo $sucMessage;
		}
		else{
			 echo $nameErr. "<br>".$countryErr."<br>".$emailErr."<br>".$stateErr."<br>".$genderErr."<br>".$phn_noErr."<br>".$interestErr;
			 echo $_GET["sex"];
		}
		
	?>