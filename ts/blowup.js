var myWidth = 0, myHeight = 0;


function bhw_js() 
{

if( typeof( window.innerWidth ) == 'number' ) {
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   myWidth = document.body.clientWidth;
   myHeight = document.body.clientHeight;
  }
var h = window.pageYOffset ||
document.body.scrollTop ||
document.documentElement.scrollTop;
var browserName=navigator.appName; 

var imagedivheight=myHeight-93;
var test = myWidth*24/100;
var divwidth = myWidth-test;
var widthformizilla = myWidth-538;
var mozillawidth = widthformizilla-divwidth;
var iewidth = myWidth-516;

var mozillawidth1 = mozillawidth/2;
var iewidth1 = iewidth/2;

var mtop = h+7;
var aboveheight = myHeight-584;
var aboveheight1 = aboveheight/2+h;



document.getElementById('divscroll').style.height="500px";
document.getElementById('divscroll').style.width="504px";
document.getElementById('blwtbl').style.height="478px";
document.getElementById('message2').style.top=aboveheight1+'px';
document.getElementById('message2').style.left=iewidth1+'px';
document.getElementById('divscroll').name="miniwin";



if (myHeight <= 586)
{
document.getElementById('divscroll').style.height=imagedivheight+'px';
document.getElementById('divscroll').style.width="522px";
document.getElementById('blwtbl').style.height=imagedivheight+'px';
document.getElementById('message2').style.top=mtop+'px';

}

}



function max()
{
var imagedivheightnew=myHeight-93;
var imagedivwidthnew=myWidth-212;
var imagedivheightnew1=myHeight-94;


var h = window.pageYOffset ||
document.body.scrollTop ||
document.documentElement.scrollTop;
var browserName=navigator.appName; 
var mtop = h+7;



if (document.getElementById('divscroll').name=="miniwin")
{

document.getElementById('message2').style.left="100px";

document.getElementById('message2').style.top=mtop+'px';
document.getElementById('divscroll').style.width=imagedivwidthnew+'px';
document.getElementById('divscroll').style.height=imagedivheightnew+'px';
document.getElementById('blwtbl').style.height=imagedivheightnew1+'px';
document.getElementById('divscroll').name="maxwin";
document.getElementById('mx').className="doff";
document.getElementById('mx1').className="don";
}

else
   {
document.getElementById('mx').className="don";
document.getElementById('mx1').className="doff";
bhw_js() 
   }


}





function blowup_show()
{
bll();
var nAgt = navigator.userAgent;
var patt = /Chrome/;
if(patt.test(nAgt))
{
document.getElementById('message2').className="don";
document.getElementById('mx').className="don";
document.getElementById('mx1').className="doff";
bhw_js();
}
else
{
document.body.style.overflow = "hidden";
document.getElementsByTagName("html")[0].style.overflow = "hidden";
document.getElementById('message2').className="don";
document.getElementById('mx').className="don";
document.getElementById('mx1').className="doff";
bhw_js();
}
}




function blowup_off_js()
{
document.getElementById('message2').className="doff";
document.body.style.overflow = "";
document.getElementsByTagName("html")[0].style.overflow = "";
}


var path = '';
var imgid = "0";
var queryrfq = '';
function imageset(id)
{
   if(id == dataref1.length)
   {
      document.getElementById('next').style.display='none';
      document.getElementById('pre').style.display='block';
   }
   else if(id == 1)
   {
      document.getElementById('pre').style.display='none';
      document.getElementById('next').style.display='block';
   }
   else
   {
      document.getElementById('pre').style.display='block';
      document.getElementById('next').style.display='block';
   }
   
   set_big_img_path(id);
//alert(queryrfq);   
   imgid = id;

   var pic = document.getElementById(imgid);
   productName =pic.alt;
   productName = unescape(productName);
   if(productName.length > 40)
        {
      var c = productName.substring(0,40);
      c = c + "...";
      productName = c;
        }
      var alt='';
      if(productName != '' )
   {
      alt='alt="'+productName+'"';
   }
   document.getElementById('imagediv').innerHTML='<img src="'+path+'" onload="loadimg()"  id="bigimg" ' + alt +'>'; 
 document.getElementById('iprname').innerHTML=productName;


   if(dataref1.length == 1)
   {
         document.getElementById('pre').style.display='none';
         document.getElementById('next').style.display='none';
   }


}

function nextimg()
{
   if(imgid < dataref1.length)
   {
   imgid++;
   }

   if(imgid < dataref1.length)
   {
      var newImg = imgid;
      document.getElementById('next').style.display='block';
      document.getElementById('pre').style.display='block'; 
   }
   else
   {
      var newImg = imgid;
      document.getElementById('next').style.display='none';
      document.getElementById('pre').style.display='block';
   }
   
   set_big_img_path(newImg);
   

   
   if (document.getElementById(newImg))
   {
      var pic = document.getElementById(newImg);
      productName =pic.alt;
      productName = unescape(productName);
      if(productName.length > 40)
         {
         var c = productName.substring(0,40);
         c = c + "...";
         productName = c;
         }
      var alt='';
      if(productName != '' )
   {
      alt='alt="'+productName+'"';
   }

      document.getElementById('imagediv').innerHTML='<img src="'+path+'" onload="loadimg()" ' + alt +'>'; 
  document.getElementById('iprname').innerHTML=productName;
   }
   else
   {
      var newImg = --imgid;
   }



}

function previousimg()
{
if (imgid  > 1)
{
imgid--;
}


   if (imgid <= 1)
   {
      var newImg = imgid;
      document.getElementById('pre').style.display='none';
      document.getElementById('next').style.display='block';
   }
   else
   {
      var newImg = imgid;
      document.getElementById('pre').style.display='block';
      document.getElementById('next').style.display='block';   
   }
   
   set_big_img_path(newImg);
   

   
   var pic = document.getElementById(newImg);
   productName = pic.alt;
   productName = unescape(productName);
   if(productName.length > 40)
        {
      var c = productName.substring(0,40);
      c = c + "...";
      productName = c;
        }
      var alt='';
      if(productName != '' )
   {
      alt='alt="'+productName+'"';
   }
   document.getElementById('imagediv').innerHTML='<img src="'+path+'" onload="loadimg()" ' + alt +'>';

   document.getElementById('iprname').innerHTML=productName;
}


function set_big_img_path(imgid)
{
   document.getElementById('loadimg').className="don";
   document.getElementById('imagediv').className="doff";

   var k = dataref1.length-1;
   if(k >= 0)
   {
      var i = imgid-1;
      path = eval("dataref1["+i+"].img_path");

      queryrfq = eval("dataref1["+i+"].queryrfq");
   }
}


function keyDown(e)
{var n = (window.Event) ? e.which : e.keyCode;

if(n==9 && document.getElementById('message2').className=="don")
   {
      return false;
   }


else if(n==32 && document.getElementById('message2').className=="don")
   {
      return false;
   }


else if(n==27 && document.getElementById('message2').className=="don")
   {
      blowup_off_js();
   }

if((n==37 && document.getElementById('message2').className=="don") || (n==38 && document.getElementById('message2').className=="don"))
   {
      if (imgid == 1)
      {
      return false;
      }
      previousimg();
}

else if((n==39 && document.getElementById('message2').className=="don") || (n==40 && document.getElementById('message2').className=="don"))
   {
if (imgid == dataref1.length)
{
return false;
}
nextimg();
return false;
   }
}


function loadimg()
{
document.getElementById('loadimg').className="doff";
document.getElementById('imagediv').className="don";
if(document.getElementById('bigimg').height > 500 ||
document.getElementById('bigimg').width > 500)
{
                max();
}
}



document.write('<DIV ID="message2" STYLE="position: absolute; top: 0px; left: 0px; z-index: 2000;" ALIGN="center" class="doff"><TABLE ID="tableheightp" ALIGN="center" BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="center"><TABLE CLASS="bgclor" BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="center"><TABLE CLASS="main" ALIGN="center" BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%" HEIGHT="35"><TR><TD ID="titleBar"  STYLE="cursor:move"><ILAYER WIDTH="100%" ONSELECTSTART="return false"> </ILAYER><LAYER WIDTH="100%" ONMOUSEOVER="isHot=true;if (isN4) ddN4(message2)" ONMOUSEOUT="isHot=false"><DIV ID="iprname" CLASS="pr-txt"></DIV></LAYER></TD><TD ALIGN="right" STYLE="padding-right:0px;" WIDTH="100"><TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><IMG SRC="ts/max1.gif" id="mx" WIDTH="21" HEIGHT="21" STYLE="cursor:pointer" ONCLICK="max()" HSPACE="3"></TD><TD><IMG SRC="ts/max.gif" id="mx1" WIDTH="21" HEIGHT="21" STYLE="cursor:pointer;" class="doff" ONCLICK="max()" HSPACE="3"></TD><TD><IMG SRC="ts/cl.gif" WIDTH="21" HEIGHT="21" ONCLICK="blowup_off_js()" STYLE="cursor:pointer"></TD></TR></TABLE></TD></TR></TABLE><DIV STYLE="height: 500px; width: 504px;" CLASS="image_div" ID="divscroll" ALIGN="center"><TABLE ID="blwtbl" ALIGN="center" BGCOLOR="#ffffff" BORDER="0" CELLPADDING="0" CELLSPACING="0" ><TR><TD ALIGN="center"><DIV ID="loadimg" STYLE="font-family: arial; font-size: 15px;" class="doon"><IMG SRC="ts/indicator-new.gif"><BR><BR>Loading...</DIV><DIV ID="imagediv" class="doff"></DIV></TD></TR></TABLE></DIV><TABLE CLASS="button" BORDER="0" id="table_nxt" CELLPADDING="0" CELLSPACING="0" WIDTH="100%"><TR><TD HEIGHT="22"><IMG SRC="ts/zero.gif" WIDTH="70" HEIGHT="1"><BR><IMG class="doff" SRC="ts/back01.gif" style="cursor:pointer" ID="pre" ONCLICK="previousimg()" BORDER="0" WIDTH="70" HEIGHT="10" title="Use <- arrow key to view previous image"></TD><TD WIDTH="100%" align="center"></TD><TD ALIGN="right"><IMG SRC="ts/zero.gif" WIDTH="40" HEIGHT="1"><BR><IMG class="don" SRC="ts/next01.gif" ID="next" style="cursor:pointer" ONCLICK="nextimg()" BORDER="0" WIDTH="40" HEIGHT="10" title="Use -> arrow key to view next image"> </TD></TR></TABLE></TD></TR></TABLE></TD></TR></TABLE></DIV>'); 


isIE=document.all;
isNN=!document.all&&document.getElementById;
isN4=document.layers;
isHot=false;

function ddInitp(e){
  topDog=isIE ? "BODY" : "HTML";
  whichDog=isIE ? document.all.message2 : document.getElementById("message2");  
  hotDog=isIE ? event.srcElement : e.target;  
  while (hotDog.id!="titleBar"&&hotDog.tagName!=topDog){
    hotDog=isIE ? hotDog.parentElement : hotDog.parentNode;
  }  
  if (hotDog.id=="titleBar"){
    offsetx=isIE ? event.clientX : e.clientX;
    offsety=isIE ? event.clientY : e.clientY;
    nowX=parseInt(whichDog.style.left);
    nowY=parseInt(whichDog.style.top);
    ddEnabled=true;
    document.onmousemove=dd;
  }
}

function dd(e){
  if (!ddEnabled) return;
  whichDog.style.left=isIE ? nowX+event.clientX-offsetx : nowX+e.clientX-offsetx+'px'; 
  whichDog.style.top=isIE ? nowY+event.clientY-offsety : nowY+e.clientY-offsety+'px';
  return false;  
}

function ddN4(whatDog){
  if (!isN4) return;
  N4=eval(whatDog);
  N4.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);
  N4.onmousedown=function(e){
    N4.captureEvents(Event.MOUSEMOVE);
    N4x=e.x;
    N4y=e.y;
  }
  N4.onmousemove=function(e){
    if (isHot){
      N4.moveBy(e.x-N4x,e.y-N4y);
      return false;
    }
  }
  N4.onmouseup=function(){
    N4.releaseEvents(Event.MOUSEMOVE);
  }
}

function hideMe(){
  if (isIE||isNN) whichDog.style.visibility="hidden";
  else if (isN4) document.message2.visibility="hide";
}

function showMe(){
  if (isIE||isNN) whichDog.style.visibility="visible";
  else if (isN4) document.message2.visibility="show";
}
function bll()
{
document.onmousedown=ddInitp;
}
document.onmouseup=Function("ddEnabled=false");

