var textbx=[];
var res=[];
function div_create(q){
	res.length=0;
	var iDiv = document.createElement('div');	
	iDiv.id = 'block';
	iDiv.className = 'block';
	document.getElementsByTagName('body')[0].appendChild(iDiv);
	for(i=0;i<20;i++){
// creating and append to iDiv
		var innerDiv = document.createElement('p');
		innerDiv.id = 'block2'+i;
    	innerDiv.setAttribute('style','width:50px');
    	innerDiv.setAttribute('style','display:inline-block');
    	innerDiv.style.margin = "8px";
    	innerDiv.style.color="blue";
	// The variable iDiv is still good... Just append to it.
		iDiv.appendChild(innerDiv);
		textbx.push(innerDiv.id);
		if(q===1)
			add(innerDiv.id);
		else
			sub(innerDiv.id);
	}
	function add(i){
		var x = Math.round(100*Math.random());
		var y = Math.round(100*Math.random());
		var z=x+y;
		res.push(z);
		document.getElementById(i).innerHTML =x+"</br>"+"+"+y+"</br>"+"<div><input name="+i+" onkeydown='shiftcursor(this)' onkeyup='check(this)' type=text></div>";
	}
	function sub(i){
		var x = Math.round(100*Math.random());
		var y = Math.round(100*Math.random());
		var z=x-y;
		res.push(z);
		document.getElementById(i).innerHTML =x+"</br>"+"+"+y+"</br>"+"<div><input name="+i+" onkeydown='shiftcursor(this)' onkeyup='check(this)' type=text></div>";
	}
}
function check(a){
	for(var i=0;i<textbx.length;i++){
		if(a.name===textbx[i]){
			if(a.value==res[i]){
				a.style.background="green";
			}
			else{
				a.style.background="red";
			}
			break;
		}
	}
}
function shiftcursor(a){
	if(a.setSelectionRange){
		a.setSelectionRange(0,0);
	}
}