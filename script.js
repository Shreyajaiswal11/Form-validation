let flag=1;
let username= document.getElementById("username");
let password= document.getElementById("password");
function validateForm(){
    if(username.value==""){
    document.getElementById("userError").innerHTML="username is empty";
flag=0;}
    else if(username.value.length<3){
    document.getElementById("userError").innerHTML="username require min 3 char";
    flag=0;}
    else
    document.getElementById("userError").innerHTML=""
    flag=1;
  if(password.value==""){
  document.getElementById("passError").innerHTML="password is empty";
  flag=0;}
  else 
  document.getElementById("passError").innerHTML=""
  flag=1;
  return false;
  if(flag) return true;
  else return false;
}