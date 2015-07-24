function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function tab(i){
	if(i===1){
		document.getElementById("date_time").style.visibility="visible";
		document.getElementById("mortgage").style.visibility="hidden";
		document.getElementById("tab2").style.background="white";
		document.getElementById("tab1").style.background="#e4efff";
		document.getElementById("tab2_a").style.color=" #6e6e6e";
		document.getElementById("tab1_a").style.color="#1b6bce";
	}
	else{
		document.getElementById("date_time").style.visibility="hidden";
		document.getElementById("mortgage").style.visibility="visible";
		document.getElementById("tab2").style.background="#e4efff";
		document.getElementById("tab1").style.background="white";
		document.getElementById("tab1_a").style.color=" #6e6e6e";
		document.getElementById("tab2_a").style.color="#1b6bce";
	}
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
	alert("Input is Not in the Correct Format Of Time (hr:mins hrs)  !!");
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
	var val1,val2,l1,l2,res_date=0,v2_hrs=0,v2_days=0,v2_mins=0,d,h,hrs1,mins1;
	var result=new Date();
	val1=document.getElementById("d1").value;
	var start_dt=new Date(val1.substring(0,(val1.indexOf(" ")))); 
	start_dt=start_dt.getTime();
	console.log(start_dt);
	hrs1=val1.substring((val1.indexOf(" ")+1),(val1.indexOf(":")) );
	mins1=val1.substring((val1.indexOf(":")+1),(val1.indexOf("hrs")-1));
	start_dt+=(eval(hrs1*60*60*1000)+eval(mins1*60*100));
	console.log("date "+val1.substring(0,(val1.indexOf(" "))));
	console.log("hrs :"+hrs1+" min"+mins1);
	val2=document.getElementById("d2").value;
	if(val2.indexOf("days")>1){
		if(val1.indexOf("/")===-1){
			alert("Please Enter a Date !!");
		}
		v2_days=eval(val2.substring(0,(val2.indexOf("days"))-1));
		d=1;
			console.log(res_date);
			res_date=res_date+eval(v2_days*24*60*60*1000);
			console.log("day:"+eval(v2_days*24*60*60*1000));

	}
	if(val2.indexOf("hrs")>1){
		if(val1.indexOf("/")===-1 && val1.indexOf("hrs")===-1){
			alert("Please Enter a relevant start date/time !!");
		}
		if(d===1){
			v2_hrs=eval(val2.substring(((val2.indexOf("days"))+5),(val2.indexOf("hrs"))-1));
		}
		else{
			v2_hrs=eval(val2.substring(0,(val2.indexOf("hrs"))-1));
		}
		h=1;
		console.log(res_date);
		res_date=res_date+eval(v2_hrs*60*60*1000);
		console.log("hrs:"+eval(v2_hrs*60*60*1000));
		
	}
	if(val2.indexOf("mins")>1){
		if(val1.indexOf("/")===-1 && val1.indexOf("hrs")===-1 ){
			alert("Please Enter a relevant start date/time !!");
		}
		if(h===1){
			v2_mins=eval(val2.substring(((val2.indexOf("hrs"))+4),(val2.indexOf("mins"))-1));	
		}
		else if(d===1){
			v2_mins=eval(val2.substring(((val2.indexOf("days"))+5),(val2.indexOf("mins"))-1));
		}
		else{
			v2_mins=eval(val2.substring(0,(val2.indexOf("mins"))-1));
		}
		m=1;
		console.log(res_date);
		res_date=res_date+eval(v2_mins*60*1000);
		console.log("min "+eval(v2_mins*60*1000));
		console.log(res_date);
	}
	console.log(start_dt);
	res_date=res_date+start_dt;
	console.log(res_date);
	result.setTime(res_date);
	document.getElementById("result").value=result;
}
function find(){
	var i=0;
	if (document.getElementById("p").value==="") {
			i++;	
	}
	if (document.getElementById("r").value==="") {
			i++;	
	}
	if (document.getElementById("t").value==="") {
			i++;	
	}
	if (document.getElementById("e").value==="") {
			i++;	
	}
	if(i>1){
		alert("Please enter the Required Fields");
	}
	else{
		p=document.getElementById("p").value;
		r=document.getElementById("r").value;
		t=document.getElementById("t").value;
		e=document.getElementById("e").value;
		r=r/(12*100);	
		if (document.getElementById("p").value=="" || document.getElementById("p").value=="Loan Amount") {
			p=eval( (e*( Math.pow((1+r),t) -1 ) ) / (r * Math.pow( (1+r),t ) ) );
			document.getElementById("p").value=p;
		}
		else if(document.getElementById("e").value=="" ||document.getElementById("e").value==="E.M.I"){
			e=eval( ( p*r*( Math.pow( (1+r),t ) )) / (( Math.pow( (1+r),t) )-1)  );
			document.getElementById("e").value=e;
		}
		else if(document.getElementById("t").value==""||document.getElementById("t").value=="Time Period"){
			t=Math.log(e/(e-p*r))/Math.log(1+r);
			document.getElementById("t").value=t;
		}
		else if(document.getElementById("r").value==""){

		}
		else{
			alert("Nothing To Calculate!!");
		}
	}

}