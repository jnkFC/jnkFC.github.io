var opleft=0;
var digits=0;
var memory=[];
window.onload=function(){
	objects();
}();
function objects(){
	objects.number=" ";
	objects.current=0;
}
function number(value){
	digits++;
	console.log(objects.current);	
	objects.current=objects.current*10+eval(value);
	document.getElementById("screen1").value=objects.current;	
	if (digits>1) {
		opleft++;
	}
	opleft--;
}
function symbol(value){
	++opleft;
	digits=0;
	//for simultaneous 2nd operator
	if(opleft==2){
		alert("Error!!");
		document.getElementById("screen1").value=0;	
		opleft=0;
		objects.current=0;
	}
	//for second operator
	else if(opleft==1)
	{	if(value==="%"){
			objects.number=parseInt(objects.number)+(objects.number.slice(-1))+(parseInt(objects.number))*(objects.current/100);
			document.getElementById("screen1").value=eval(objects.number);
			objects.current=document.getElementById("screen1").value;
			opleft=-1;
		}
		else{
			if(objects.number.length==0){
				objects.number+=value;
			}
			else
			{
				objects.number+=objects.current;
				document.getElementById("screen1").value=eval(objects.number);
				objects.number=document.getElementById("screen1").value;
				if(value==="="){
					console.log("=");
					objects.current=document.getElementById("screen1").value;
					opleft=-1;
				}
				else{
					objects.number+=value;
					objects.current=0;
				}
			}
		}
	}
	//for first operator
	else if(opleft==0){
		if(value==="%"){
			objects.current/=100;
			objects.number="";
		}
		else{
			objects.number=objects.current;
			objects.number+=value;
			opleft++;
			objects.current=0;
		}
	}
}	
function special(value){
	special.index=1;
	if (value=="MS") {
		memory.push(document.getElementById("screen1").value);
		opleft=-1;
		objects.current=document.getElementById("screen1").value;
		digits=0;
	}
	else if(value=="MC"){
		memory=[];
		special.index=1;
		alert("Memory Cleared!!");
		document.getElementById("screen1").value=0;	
		opleft=0;
		objects.current=0;
		digits=0;
	}
	else if( value=="MR"){
		if(typeof memory[(memory.length)-special.index] === 'undefined'){
			document.getElementById("screen1").value=0;
		}
		else{
			document.getElementById("screen1").value=memory[(memory.length)-special.index];
			special.index++;
		}
	}
	else if(value=="M+"){
		if(digits>0|| opleft>0){
			alert("Error!!");
			document.getElementById("screen1").value=0;	
			opleft=0;
			objects.current=0;
			digits=0;
		}
		else{
			objects.current=memory[(memory.length)-special.index];
			document.getElementById("screen1").value=objects.current;
			objects.number="";
			objects.number+=objects.current+"+";
			objects.current=0;
			opleft=1;
			digits=0;
			console.log(objects.number);
		}
	}
	else if(value=="M-"){
		if(digits>0|| opleft>0){
			alert("Error!!");
			document.getElementById("screen1").value=0;	
			opleft=0;
			objects.current=0;
			digits=0;
		}
		else{
			objects.current=memory[(memory.length)-special.index];
			document.getElementById("screen1").value=objects.current;
			objects.number="";
			objects.number+=objects.current+"-";
			objects.current=0;
			opleft=1;
			digits=0;
		}
	}
	else if(value=="REM"){
		if(digits>0||opleft===0){
			objects.number+=objects.current+"%";
			objects.current=0;
			opleft++;
		}
		else{
			alert("Error!!");
			document.getElementById("screen1").value=0;	
			opleft=0;
			objects.current=0;
			digits=0;
		}
	}
	else if(value=="CLS"){
		objects.current=0;
		document.getElementById("screen1").value=objects.current;	
		objects.number="";
		digits=0;
		onleft=0;
	}
	else if(value=="CAN")
	{
		if(digits>0){
			objects.current=Math.floor(objects.current/10);
			document.getElementById("screen1").value=objects.current;	
		}
		else{
			alert("Error!! CAN only works on Input value!!");
		}
	}
}