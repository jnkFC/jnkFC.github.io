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
