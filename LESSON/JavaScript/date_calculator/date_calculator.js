function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function date(){
var months=0,days=0,weeks=0,year=0,diff="";
document.getElementById("result").value="";
var date1 = new Date(document.getElementById("d1").value);
var date2 = new Date(document.getElementById("d2").value);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
console.log(timeDiff+" "+timeDiff);
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
if(diffDays>365){
	diff=Math.ceil(diffDays/365)+" years ";
	diffDays=diffDays%365;
}
if( diffDays>30){
	diff+=Math.ceil(diffDays/30)+" months ";
	diffDays=diffDays%30;
}
if(diffDays>7){
	diff+=Math.ceil(diffDays/7)+" weeks ";
	diffDays=diffDays%7;
}
diff+=diffDays+" days ";
document.getElementById("result").value=diff;
}
function time(){
	var time1,time2,val1,val2,l1,l2;
	val1=document.getElementById("d1").value;
	l1=val1.length;
	val2=document.getElementById("d2").value;
	l2=val2.length;
	if(parseInt(val1.substring(0,2))>23 || parseInt(val1.substring(3,5))>59 || parseInt(val2.substring(0,2))>23 || parseInt(val2.substring(3,5))>59 || (val1.substring(5,7).toLowerCase())!="hrs" || (val2.substring(5,7).toLowerCase())!="hrs"){
	alert("Input is Not in the Correct Format Of Time (hr:mins Hrs)  !!");
	}
	else{	
		if(parseInt(val1.substring(0,2))>parseInt(val2.substring(0,2)))
			time1=val1;
		else
			time1=val1+24;
		if(parseInt(time1.substring(3,5))<parseInt(time2.substring(3,5))){
			min=parseInt(time1.substring(3,5))+60-(parseInt(time2.substring(3,5)));
			hr=parseInt(time1.substring(0,2))-1-(parseInt(time2.substring(0,2)));
		}	
		else{
			min=parseInt(time1.substring(3,5))-(parseInt(time2.substring(3,5)));
			hr=parseInt(time1.substring(0,2))-(parseInt(time2.substring(0,2)));
		}
		console.log(parseInt(time1.substring(3,5))+" "+parseInt(time1.substring(0,2)));
		document.getElementById("result").value=(hr+":"+min+" hr");
	}
}
function interval(){
	val1=document.getElementById("d1").value;
	l1=val1.length;
	val2=document.getElementById("d2").value;
	l2=val2.length;
}