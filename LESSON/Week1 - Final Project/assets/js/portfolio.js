function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}
function validate(i){
    if(i.value==""){
        i.value=i.defaultValue; i.style.color="#888";
    }
    var t=document.getElementById("Email");
    var x=t.value.indexOf("@");
    var y=t.value.lastIndexOf(".");
    if(x==-1 ||x==0 || y==-1 || (x+2)>=y){
        alert('Email address is not valid');
    }
    else{
        alert('Email is ok');
    }
}