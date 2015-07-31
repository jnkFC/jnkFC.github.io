<html>
<head>
<link rel="stylesheet" type="text/css" href="basic_css.css">
<script type="text/javascript" src="ajax.js"></script>

<script type="text/javascript">
function validate(){
	var gender="";
	name=document.getElementById("name").value;
	country=document.getElementById("country1").value;
	email=document.getElementById("email").value;
	
	if(document.getElementById("state1").selected){
		state=document.getElementById("state1").value;
	}
	else{
		state=document.getElementById("state2").value;
	}
	phone=document.getElementById("phn").value;
	if(document.getElementById("male").checked){
		gender="male";
	}
	else if(document.getElementById("female").checked){
		gender="female";
	}
	var interest="";
	var hobby=document.getElementsByName("interest[]");
	for(var i=0;i<hobby.length;i++){
		if(hobby[i].checked)
			interest+=hobby[i].value+ ",";
	}
	var inp="?name="+name+"&country="+country+"&email="+email+"&state="+state+"&phn_no="+phone+"&sex="+gender+"&interest="+interest;
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("msg").innerHTML=xmlhttp.responseText;
			
		}
	}
	xmlhttp.open("GET","validate.php"+inp,true);
	xmlhttp.send(null);
}
</script>	
</head>
<body>
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
					<h1>Subscription Form</h1>
					<form lang="en" id="subscript">
					<table cellspacing="20">
						<tr>
    						<td>Name </td>
    						<td><input  id="name" class="inpt_box" type="text" spellcheck="true" name="name" value=""><span class="error">*  </span></td>
    						<td>Country: </td>
    						<td><select onclick="opt()" id="country1" class="inpt_box" name="country" >
								<option   value="INDIA">INDIA</option>
								<option   value="U.S.A">U.S.A</option>
								</select>
								
							</td>
							 
    					</tr>
    					<tr>
    						<td>Email </td>
    						<td><input class="inpt_box" type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value=""><span class="error">* </span></td>
    						<td id="state1_name" >State</td>
    						<td><select id="state1" class="inpt_box" name="state">
	  								<option id="jnk" value="J & K" >J & K</option>
								  	<option id="raj" value="RAJASTHAN" >Rajasthan</option>
								</select>

								<select  style="visibility: hidden" id="state2" class="inpt_box" name="state">
	  								<option id="ny" value="New York" >New York</option>
								  	<option id="sf" value="San Francisco" >San Francisco</option>
								</select>
								
							</td>
							
    					</tr>
    					<tr>
    						<td>SEX</td>
    						<td><input type="radio" name="sex" id="male" value="male"  >
    							<label for="male">Male</label>
    							<input type="radio" name="sex" id="female" value="female"  >
    							<label for="female">Female</label>
    							<span class="error">* </span>
  							</td>
  							<td>Phone No.:</td>
    						<td><input  id="phn" class="inpt_box" type="text" name="phn_no" value="">
    							<span class="error">* </span></td>
  						</tr>
  						<tr>
  							<td>Interest</td>
  							<td><input id="F_ball"  type="checkbox" name="interest[]" value="Football">Football
  								<input id="Movie"   type="checkbox" name="interest[]" value="Movie">Movie
  								<input id="Reading"  type="checkbox" name="interest[]" value="Reading">Reading  
  							</td></td>
  						</tr>
  					</table>
  					<input type="button" name="SUBSCRIBE" value="SUBSCRIBE" class="button button_pos_ryt" onclick="validate()">
					<button type="reset" value="Reset" class="button button_pos_ryt1">RESET</button>
					<div id="msg"></div>
				</form>

				</div>
		</div>
	</div>
</body>
</html>