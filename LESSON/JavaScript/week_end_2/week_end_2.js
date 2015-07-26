(function (){
	function create_element(tag,parent,attribute,style,event,text){
		var element = document.createElement(tag); //creating element 
		if(attribute!==null){
			for (i in attribute)
			element.setAttribute(i,attribute[i]);		//setting its attributes
		}
		if(style!==null){
			for (i in style)
			element.style[i]=style[i];			//setting its style
		}
		if(event!==null){
			for (i in event)
			element.addEventListener(i,event[i]);		//adding event
		}
		if(parent!==null){
			parent.appendChild(element);
		}
		if(text!==null){
			element.innerHTML=text;
		}

		return element;
 	}	
	var form=create_element("div",document.body,{id:"form"},{position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",background:"#000000"},null,null);
	var calculator=create_element("div",form,{id:"calculator"},{position:"fixed",top:"20%",left:"30%",height:"500px",width:"400px",background:"lightblue"},null,null);
	(function create_radio(){
		for(j=0;j<3;j++){
			var choice = create_element("input",form,{id:"choice"+j,type:"radio",name:"option"},{margin:"10px",padding:"10px"},{"click":show},null);
			var lab= create_element("label",null,null,{color:"#FFFFFF",padding:"10px"},null,null);
			if(j==0){
				lab.setAttribute("for","choice"+j);
				lab.appendChild(document.createTextNode("Basic Calculator"));				
			}
			else if(j==1){
	    		lab.setAttribute("for","choice"+j);
				lab.appendChild(document.createTextNode("Date/Time Calculator"));
			}
			if(j==2){
	    		lab.setAttribute("for","choice"+j);
				lab.appendChild(document.createTextNode("Mortgage Calculator"));
			}
			document.getElementById('form').insertBefore(lab,document.getElementById("radio"+j));
			form.appendChild(choice);
		}
	})();
	function show(){
		if ( this.id== "choice0"){
			basic_calculator();
		}
		else if( this.id== "choice1"){
			date_time();
		}
		else {
			mortgage_calc();
		}
	}
	function css_class(tag,id,class_name,styles){
		if(styles!==null){
			var style = document.createElement('style');
			style.type = 'text/css';
			if(tag!==null){
				style.innerHTML=tag+styles;
			}
			else{
				style.innerHTML = '.'+class_name+styles;
				if(document.getElementById(id).className!==undefined)
					 document.getElementById(id).className+= class_name;
				else
					document.getElementById(id).className=class_name;
			}
			document.getElementsByTagName('head')[0].appendChild(style);
			
		}
		else{
				if(document.getElementById(id).className!==undefined)
					 document.getElementById(id).className+= class_name;
				else
					document.getElementById(id).className=class_name;
		}
	}


	function basic_calculator(){
		var basic_calc=create_element("div",calculator,{id:"calc_body"},{position:"fixed",top:"30%",left:"40%",height:"330px",width:"250px",textAlign:"center",background:"#000000"},null,null);
		css_class(null,"calc_body","calcbody",'{background-color:#000000;border: 2px solid #ffffff;border-radius:10px;color: #ffffff;}');
		var p=create_element("p",basic_calc,null,null,null,null);
		css_class("p",null,null,'{width: 230px;margin: auto;margin-top:5px;margin-bottom: 10px;}')
		var ioscreen=create_element("input",p,{id:"screen1",type:"text",value:"0"},{marginTop:"10px",marginBottom:"10px",marginRight:"2px",marginLeft:"2px",height:"40px",width:"210px",fontsize:"20px"},null,null);
		css_class("input",null,null,'{background-color:#000000;border: 2px solid #ffffff;border-radius:10px;color: #ffffff;}');
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"MC",type:"button",value:"MC"},null,{"click":special},null);
		css_class(null,"MC","button",'{margin-left: 2px;margin-right: 2px;width: 50px;height: 30px;}');
		ioscreen=create_element("input",p,{id:"M+",type:"button",value:"M+"},null,{"click":special},null);
		css_class(null,"M+","button",null);
		ioscreen=create_element("input",p,{id:"M-",type:"button",value:"M-"},null,{"click":special},null);
		css_class(null,"M-","button",null);
		ioscreen=create_element("input",p,{id:"MR",type:"button",value:"MR"},null,{"click":special},null);
		css_class(null,"MR","button",null);
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"CLS",type:"button",value:"CLS"},null,{"click":special},null);
		css_class(null,"CLS","button",null);
		ioscreen=create_element("input",p,{id:"CAN",type:"button",value:"CAN"},null,{"click":special},null);
		css_class(null,"CAN","button",null);
		ioscreen=create_element("input",p,{id:"REM",type:"button",value:"REM"},null,{"click":special},null);
		css_class(null,"REM","button",null);
		ioscreen=create_element("input",p,{id:"MS",type:"button",value:"MS"},null,{"click":special},null);
		css_class(null,"MS","button",null);
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"7",type:"button",value:"7"},null,{"click":number},null);
		css_class(null,"7","button",null);
		ioscreen=create_element("input",p,{id:"8",type:"button",value:"8"},null,{"click":number},null);
		css_class(null,"8","button",null);
		ioscreen=create_element("input",p,{id:"9",type:"button",value:"9"},null,{"click":number},null);
		css_class(null,"9","button",null);
		ioscreen=create_element("input",p,{id:"%",type:"button",value:"%"},null,{"click":symbol},null);
		css_class(null,"%","button",null);
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"4",type:"button",value:"4"},null,{"click":number},null);
		css_class(null,"4","button",null);
		ioscreen=create_element("input",p,{id:"5",type:"button",value:"5"},null,{"click":number},null);
		css_class(null,"5","button",null);
		ioscreen=create_element("input",p,{id:"6",type:"button",value:"6"},null,{"click":number},null);
		css_class(null,"6","button",null);
		ioscreen=create_element("input",p,{id:"/",type:"button",value:"/"},null,{"click":symbol},null);
		css_class(null,"/","button",null);
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"1",type:"button",value:"1"},null,{"click":number},null);
		css_class(null,"1","button",null);
		ioscreen=create_element("input",p,{id:"2",type:"button",value:"2"},null,{"click":number},null);
		css_class(null,"2","button",null);
		ioscreen=create_element("input",p,{id:"3",type:"button",value:"3"},null,{"click":number},null);
		css_class(null,"3","button",null);
		ioscreen=create_element("input",p,{id:"*",type:"button",value:"*"},null,{"click":symbol},null);
		css_class(null,"*","button",null);
		p=create_element("p",basic_calc,null,null,null,null);
		ioscreen=create_element("input",p,{id:"0",type:"button",value:"0"},null,{"click":number},null);
		css_class(null,"0","button",null);
		ioscreen=create_element("input",p,{id:"-",type:"button",value:"-"},null,{"click":symbol},null);
		css_class(null,"-","button",null);
		ioscreen=create_element("input",p,{id:"+",type:"button",value:"+"},null,{"click":symbol},null);
		css_class(null,"+","button",null);
		ioscreen=create_element("input",p,{id:"=",type:"button",value:"="},null,{"click":symbol},null);
		css_class(null,"=","button",null);

		var opleft=0;
		var digits=0;
		var memory=[];
		flag=0;
		function number(){
			if(flag<1){
				(function objects(){
					objects.number=" ";
					objects.current=0;
				})();
			}
			flag=1;

			digits++;
			console.log(objects.current);	
			objects.current=objects.current*10+eval(this.value);
			document.getElementById("screen1").value=objects.current;	
			if (digits>1) {
				opleft++;
			}
			opleft--;
		}
		function symbol(){
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
			{	if(this.value==="%"){
					objects.number=parseInt(objects.number)+(objects.number.slice(-1))+(parseInt(objects.number))*(objects.current/100);
						document.getElementById("screen1").value=eval(objects.number);
						objects.current=document.getElementById("screen1").value;
						opleft=-1;
				}
				else{
					objects.number+=objects.current;
					document.getElementById("screen1").value=eval(objects.number);
					objects.number=document.getElementById("screen1").value;
					if(this.value==="="){
						console.log("=");
						objects.current=document.getElementById("screen1").value;
						opleft=-1;
					}
					else{
						objects.number+=this.value;
						objects.current=0;
					}
				}
			}
			//for first operator
			else if(opleft==0){
				if(this.value==="%"){
					objects.current/=100;
					objects.number="";
				}
				else{
					objects.number=objects.current;
					objects.number+=this.value;
					opleft++;
					objects.current=0;
				}
			}
		}	
		function special(){
			debugger;
			special.index=1;
			if (this.value=="MS") {
				memory.push(document.getElementById("screen1").value);
			}
			else if(this.value=="MC"){
				memory=[];
				special.index=1;
				alert("Memory Cleared!!");
				document.getElementById("screen1").value=0;	
				opleft=0;
				objects.current=0;
				digits=0;
			}
			else if( this.value=="MR"){
				if(typeof memory[(memory.length)-special.index] === 'undefined'){
					document.getElementById("screen1").value=0;
				}
				else{
					document.getElementById("screen1").value=memory[(memory.length)-special.index];
					special.index++;
				}
			}
			else if(this.value=="M+"){
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
			else if(this.value=="M-"){
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
			else if(this.value=="REM"){
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
			else if(this.value=="CLS"){
				objects.current=0;
				document.getElementById("screen1").value=objects.current;	
				objects.number="";
				digits=0;
				onleft=0;
			}
			else if(this.value=="CAN")
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
	}
	function mortgage_calc(){

		var mortgage=create_element("div",calculator,{id:"mortgage"},null,null,null);
		css_class(null,"mortgage","model",'{position:fixed;top: 20%;left: 40%;width: 300px;height: 500px;}');
		css_class(null,"mortgage","border",'{border: 5px solid lightgrey;border-radius:10px;}');
		var p=create_element("p",mortgage,null,null,null,"Mortgage Calculator");
		var inptbox=create_element("div",mortgage,{id:"inptbox"},null,null,null);
		css_class(null,"inptbox","inpt_box",'{position:absolute;top: 10%;width: 300px;height: 150px;}');
		var io=create_element("input",inptbox,{id:"p",type:"text",value:"Loan Amount"},null,{"focus":inputFocus(this)},null);
		css_class(null,"p","input_field",'{width: 298px;height: 50px;color:#888;}');
		io=create_element("input",inptbox,{id:"r",type:"text",value:"Rate Of Interest"},null,{"focus":inputFocus(this)},null);
		css_class(null,"r","input_field",null);
		io=create_element("input",inptbox,{id:"t",type:"text",value:"Time Period"},null,{"focus":inputFocus(this)},null);
		css_class(null,"r","input_field",null);
		io=create_element("input",inptbox,{id:"e",type:"text",value:"E.M.I."},null,{"focus":inputFocus(this)},null);
		css_class(null,"r","input_field",null);
		var find=create_element("input",mortgage,{id:"find",type:"button",value:"Find"},null,{"click":find},null);
		css_class(null,"find","menu_design",'{display : block;position: absolute;top: 55%marginLeft: 8px; marginRight : 8px; width: 80px ; height: 50px;}');
		
		function inputFocus(i){
 		   //if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
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
	}

	function date_time(){
		var dat_tim=create_element("div",calculator,{id:"dat_tim"},null,null,null);
		css_class(null,"dat_tim","model",'{position:fixed;top: 20%;left: 40%;width: 300px;height: 500px;}');
		css_class(null,"dat_tim","border",'{border: 5px solid lightgrey;border-radius:10px;}');
		var p=create_element("p",dat_tim,{id:"p"},null,null,"Date And Time Difference Calculator");
		css_class(null,"p","heading",'{position:absolute;top: 0%;left: 0%;width: 295px;}');
		css_class(null,"p","border",null);
		var inptbox=create_element("div",dat_tim,{id:"inptbox"},null,null,null);
		css_class(null,"inptbox","inpt_box",'{position:absolute;top: 10%;width: 300px;height: 150px;}');
		var io=create_element("input",inptbox,{id:"d1",type:"text",value:""},null,{"focus":inputFocus(this)},null);
		css_class(null,"d1","input_field",'{display: block;width: 298px;height: 50px;color:#888;}');
		io=create_element("input",inptbox,{id:"d2",type:"text",value:""},null,{"focus":inputFocus(this)},null);
		css_class(null,"d2","input_field",null);
		io=create_element("input",inptbox,{id:"result",type:"text",value:""},null,{"focus":inputFocus(this)},null);
		css_class(null,"result","input_field",null);
		var menu=create_element("div",dat_tim,{id:"menupos"},null,null,null);
		css_class(null,"menupos","menu_design",'{position:absolute;top: 45%;margin-left: 8px;margin-right: 8px;width: 80px;height: 50px;}');
		io=create_element("input",menu,{id:"date",type:"button",value:"Date"},null,{"click":date},null);
		css_class(null,"date","menu_design",null);
		io=create_element("input",menu,{id:"time",type:"button",value:"Time"},null,{"click":time},null);
		css_class(null,"time","menu_design",null);
		io=create_element("input",menu,{id:"d_finder",type:"button",value:"Date Finder"},null,{"click":interval},null);
		css_class(null,"d_finder","menu_design",null);
		var menu2=create_element("div",dat_tim,{id:"menu2"},null,null,null);
		css_class(null,"menu2","menu2",'{position:absolute;top: 65%;width: 298px;height: 50px;border: 2px solid lightgrey;}');
		p=create_element("p",menu2,{id:"p"},null,"HINTS!!+ </br> + Date Format: mm/dd/yyyy + </br> + Time Format: hh:mm hrs (24hr clock system)");
		


		function inputFocus(i){
 		 //  if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
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

		}
	
})();
//var myElement = document.querySelector("#superman");
//myElement.style.backgroundColor = "#D93600";


