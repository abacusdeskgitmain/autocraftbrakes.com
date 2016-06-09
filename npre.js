var n=1;
var h=1;
function preimgn(){
n--;
if(n==0){
n=0;
v=1;
document.getElementById("npro"+v).style.display='none';
document.getElementById("npro"+n).style.display='';
}
else{
v=n+1;
document.getElementById("npro"+v).style.display='none';
document.getElementById("npro"+n).style.display='';
}
}
function nextimgn(){
n++;
if(n==0){
n=1;
v=0;
document.getElementById("npro"+v).style.display='none';
document.getElementById("npro"+n).style.display='';
}
else{
v=n-1
document.getElementById("npro"+v).style.display='none';
document.getElementById("npro"+n).style.display='';
}
}

function preimgh(){
h--;
if(h==0){
h=0;
v1=1;
document.getElementById("hpro"+v1).style.display='none';
document.getElementById("hpro"+h).style.display='';
}
else{
v1=h+1;
document.getElementById("hpro"+v1).style.display='none';
document.getElementById("hpro"+h).style.display='';
}
}
function nextimgh(){
h++;
if(h==0){
h=1;
v1=0;
document.getElementById("hpro"+v1).style.display='none';
document.getElementById("hpro"+h).style.display='';
}
else{
v1=h-1
document.getElementById("hpro"+v1).style.display='none';
document.getElementById("hpro"+h).style.display='';
}
}