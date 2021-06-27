let email=document.getElementsByClassName("form-control1");
let phone=document.getElementsByClassName("form-control2");
let password=document.getElementsByClassName("form-control3");
let state=document.getElementsByClassName("form-control5");
let age=document.getElementsByClassName("form-control4");

var eVal="",phoneVal=0,passwordVal="",stateVal="",ageVal=0;



var i=0;
var database;
function preload(){
  //bgImg=loadImage("bg.jpg");
}

function setup()
{
  createCanvas(400,400);
  database=firebase.database();
  
  var countRef=database.ref('count');
  countRef.on("value",(data)=>{
    i=data.val();
  });
  
}


window.onload=function(){
  document.getElementsByClassName("btn")[0].onclick=function(){
    eVal=email[0].value;
    phoneVal=phone[0].value;
    passwordVal=password[0].value;
    stateVal=state[0].value;
    ageVal=age[0].value;


    
    if(validateValues(eVal,phoneVal,ageVal)===true)
    {
      updateDetails();
    }

  }

}


function validateValues(eVal,phoneVal,ageVal){


  //Email Validator
  var flag1=false;
  for(var i=0;i<eVal.length;i++)
  {
    if(eVal.charAt(i)=='@')
      flag1=true;
  }
  if(!flag1)
    alert("Invalid EMail! Please Correct It.");

  //EMail Validator 


  //Phone Number Validator
  var flag2=true;
  if(!(phoneVal.length==10 && (phoneVal.charAt(0)=='7' || phoneVal.charAt(0)=='8' || phoneVal.charAt(0)=='9'))){
    flag2=false;
    alert("Invalid Contact Number! Please Enter a Valid 10-Digit Number");
    //document.getElementById("cPhone").style.visibility='hidden';
  }
  //Phone Number Validator
  var flag3=true;
  if(ageVal>120){
    alert("Invalid Age");
    flag3=false;
  }


  if(flag1===true && flag2===true && flag3===true)
  {
    return true;
  }
  else
  {
    return false;
  }
}


function draw()
{

}

function updateDetails(){
  if(!(email==="" || passwordVal==="" || phoneVal===0 || ageVal==="" || stateVal==="")){
    database.ref('userdet/user'+i).set({
      'email':eVal,
      'password':passwordVal,
      'phone':phoneVal,
      'age':ageVal,
      'state':stateVal,
    });
    i++;
    database.ref('/').update({
      'count':i
    });

    alert("Sign Up Successful");

    window.open("index.html","_blank");
    window.close("signup.html");
  }
}
