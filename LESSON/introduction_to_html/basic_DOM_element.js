function tab(i){
	if(i===1){
		document.getElementById("News").style.visibility="visible";
		document.getElementById("subscribe").style.visibility="hidden";
		document.getElementById("tab2").style.background="white";
		document.getElementById("tab1").style.background="#e4efff";
		document.getElementById("tab2_a").style.color=" #6e6e6e";
		document.getElementById("tab1_a").style.color="#1b6bce";
	}
	else{
		document.getElementById("News").style.visibility="hidden";
		document.getElementById("subscribe").style.visibility="visible";
		document.getElementById("tab2").style.background="#e4efff";
		document.getElementById("tab1").style.background="white";
		document.getElementById("tab1_a").style.color=" #6e6e6e";
		document.getElementById("tab2_a").style.color="#1b6bce";
	}
}
function json(){
	var interest=[];
	var subscribe={};
	subscribe.name=document.getElementById("name").value;
	subscribe.country=document.getElementById("country").value;
	subscribe.email=document.getElementById("email_id").value;
	subscribe.address=document.getElementById("address").value;
	if(document.getElementById('male').checked)
		subscribe.sex= document.getElementById('male').value;
	else if (document.getElementById('female').checked)
		subscribe.sex = document.getElementById('female').value;
	var x=document.getElementsByName("interest");
	for(var i=0;i<x.length; i++){
		if(x[i].checked===true)
			interest.push(x[i].value);
	}
	subscribe.Interest=interest;
	JSON.stringify(subscribe);
	console.log(subscribe);
}
function opt(){
	if(document.getElementById("country").options[0].selected){
		document.getElementById("country").options[0].disabled=true;
		document.getElementById("country").options[1].disabled=false;
		document.getElementById("state1").style.visibility="visible";
		document.getElementById("state2").style.visibility="hidden";

	}
	else{
		document.getElementById("country").options[0].disabled=false;
		document.getElementById("country").options[1].disabled=true;
		document.getElementById("state1").style.visibility="hidden";
		document.getElementById("state2").style.visibility="visible";	
	}
	document.getElementById("state1_name").style.visibility="visible";
	
}
function fav(){
	if(document.getElementById("F_ball").checked){
		document.getElementById("Reading_opt").style.display="none";
		document.getElementById("Movie_opt").style.display="none";
		document.getElementById("F_ball_opt").style.display="inline";
	}
	else  if(document.getElementById("Movie").checked){
		document.getElementById("Reading_opt").style.display="none";
		document.getElementById("F_ball_opt").style.display="none";
		document.getElementById("Movie_opt").style.display="inline";
	}
	else if(document.getElementById("Reading").checked){
		document.getElementById("Movie_opt").style.display="none";
		document.getElementById("F_ball_opt").style.display="none";
		document.getElementById("Reading_opt").style.display="inline";
	}
	else if(document.getElementById("Reading").uchecked)
	
	
}
// assign function to onclick property of checkbox 
//document.getElementById('active').onclick = function(){
// call toggleSub when checkbox clicked 
// toggleSub args: checkbox clicked on (this), id of element to show/hide 
//toggleSub(this, 'active_sub');
 //};
  // called onclick of checkbox 
 // function toggleSub(box, id){
   // get reference to related content to display/hide 
  // var el = document.getElementById(id);
   //if ( box.checked ){
    //el.style.display = 'block';
//}
//else 
//{ el.style.display = 'none'; 
//}
//}


