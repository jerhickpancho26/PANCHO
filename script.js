function login(){
const u=document.getElementById("user").value;
const p=document.getElementById("pass").value;

if(u==="123" && p==="1234"){
document.getElementById("loginBox").style.display="none";
document.getElementById("app").style.display="flex";
}else{
document.getElementById("msg").innerText="Wrong login!";
}
}

function logout(){
location.reload();
}

function openModal(src){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function sendMsg(e){
e.preventDefault();
document.getElementById("sentMsg").innerText="Message sent ✔";
}
