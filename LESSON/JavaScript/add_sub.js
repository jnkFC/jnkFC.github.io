function div_create(q){
	div_create.obj={};	
	var form = document.createElement("div");	
	form.id = 'add&sub';
	form.className = 'add_sub';
	document.getElementsByTagName('body')[0].appendChild(form);
	for(i=0;i<20;i++){
		var sum = document.createElement("p");
		sum.id = "sum"+i;
    	sum.setAttribute("style","display:inline-block");
    	sum.setAttribute("style","width:50px");
    	sum.style.margin = "8px";
    	sum.style.color="blue";
		form.appendChild(sum);
		var x = Math.round(100*Math.random());
		var y = Math.round(100*Math.random());
	
		if(q===1){
			div_create.obj[sum.id]={"result":(x+y)};
			document.getElementById(sum.id).innerHTML =x+"</br>"+"+"+y+"</br>"+"<div><input name="+sum.id+" onkeydown='shiftcursor(this)' onkeyup='check(this)' type=text></div>";
		}
		else{
			div_create.obj[sum.id]={"result":(x-y)};
			document.getElementById(sum.id).innerHTML =x+"</br>"+"-"+y+"</br>"+"<div><input name="+sum.id+" onkeydown='shiftcursor(this)' onkeyup='check(this)' type=text></div>";
		}
			
	}
	
}
function check(txtbx){
	//console.log("C" + c);
	if(div_create.obj[txtbx.name].result==txtbx.value){
		txtbx.style.background="green";
	}
	else{
		txtbx.style.background="red";
	}
}
function shiftcursor(txtbx){
	if(txtbx.setSelectionRange){
		txtbx.setSelectionRange(0,0);
	}
}