let fname1=document.getElementById('fname')

let lname1=document.getElementById('lname')
let rad1=document.getElementById('g1')
let rad2=document.getElementById('g2')
let rad3=document.getElementById('g3')

let num1=document.getElementById('num1')
let mail=document.getElementById('mail')

let erro1=document.getElementById("error1")

let erro3=document.getElementById("error3")
let erro4=document.getElementById("error4")

let erro6=document.getElementById("error6")
let erro7=document.getElementById("error7")
let border1="red 3px solid";
let border2='green 3px solid';

let err='Required'
let erralpha='must have alphabets'


function validation1(){
    erro1.textContent="";
    let fvalue=fname1.value;
    let reg=new RegExp("^[A-Za-z]*$")
    console.log(reg.test(fvalue))
    if (fvalue==''){
        erro1.textContent=err;
        fname1.style.border=border1;
        return false;
    }
    else if (reg.test(fvalue)==false){
        erro1.textContent=erralpha;
        fname1.style.border=border1;
        return false;
    }
    else{
        fname1.style.border=border2
        erro1.textContent='';
        return true;
    }
}

function validation2(){
    erro1.textContent=''
    let lvalue=lname1.value;
    let reg=new RegExp('^[A-Za-z]*$')
    console.log(reg.test(lvalue))
    if (lvalue==''){
        erro3.textContent='Required';
        lname1.style.border=border1;
        return false;
    }
    else if (reg.test(lvalue)==false){
        erro3.textContent=erralpha;
        lname1.style.border=border1;
        return false;
    }
    else{
        lname.style.border=border2
        erro3.textContent='';
        return true;
    }
}
function validation3(){
    if (rad1.checked || rad2.checked || rad3.checked){
        erro4.textContent='';
        return true
    }else{
        erro4.textContent=err;
        return false
    }
}

function validation4(){
    let numvalue=num1.value;
    let reg=new RegExp('^[0-9]*$')
    console.log(reg.test(numvalue))
    if (numvalue==''){
        erro6.textContent='Required';
        num1.style.border=border1;
        return false;
    }
    else if (reg.test(numvalue)==false){
        erro6.textContent='the number should contain only numbers';
        num1.style.border=border1;
        return false;
    }
    else if (numvalue.length>10 || numvalue.length<10){
        erro6.textContent='the phone number should be invalid';
        num1.style.border=border1;
        return false;
    }
    else{
        num1.style.border=border2
        erro6.textContent='';
        return true;
    }
    
}
function validation5(){
    erro7.innerHtml=''
    let mailvalue=mail.value;
    let sub=mailvalue.substring(mailvalue.indexOf('@')+1);
    console.log(sub)
    if (mailvalue==''){
        erro7.textContent='Required';
        mail.style.border=border1;
        return false;
    }else if(!mailvalue.includes('@')||sub=='') {
        erro7.textContent='Enter valid Email';
        mail.style.border=border1;
        return false;
    }
    else{
        mail.style.border=border2
        erro7.textContent='';
        return true;
    }
    
}

function validation(){
     var ab1=validation1();
    
     var ab2=validation2();
     var ab3=validation3();
    
     var ab4=validation4();
     var ab5=validation5();
     return ab1 && ab2 && ab3 && ab4 && ab5;
}