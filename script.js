function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234")
{
window.location="dashboard.html";
return false;
}
else
{
alert("Invalid Login");
return false;
}

}