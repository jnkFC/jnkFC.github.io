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
  	     echo $_GET["sex"];
		
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
  		$interest = $_GET["interest"];
  	}
  	
  	if($success == 1){
  		 	
			$sucMessage="Subscription Successful!!";
	  		$data = "$name, $email,$country, $state, $gender, $interest, $phn_no \n";
			$myf = fopen("/home/jiteshnk/jnkFC.github.io/LESSON/Php/details.csv", "a");
			fwrite($myf, $data);
			fclose($myf);
			echo $sucMessage;
		}
		else{
			 echo $nameErr. "<br>".$countryErr."<br>".$emailErr."<br>".$stateErr."<br>".$genderErr."<br>".$phn_noErr."<br>".$interestErr;
			 echo $_GET["sex"];
		}
		
	?>