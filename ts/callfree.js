var myWidth = 0, myHeight = 0;
function bhw()
{
if( typeof( window.innerWidth ) == 'number' ) {
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
{
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
}
else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
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
var iewidth = myWidth-730;

var mozillawidth1 = mozillawidth/2;
var iewidth1 = iewidth/2;

var mtop = h+7;
var aboveheight = myHeight-360;
var aboveheight1 = aboveheight/2+h;


//alert(aboveheight1);
document.getElementById('divscroll_call').style.height="320px";
document.getElementById('divscroll_call').style.width="730px";
document.getElementById('message_call').style.top=aboveheight1+"px";
document.getElementById('message_call').style.left=iewidth1+"px";
document.getElementById('divscroll_call').name="miniwin";
}




function blowup_call()
{
var nAgt = navigator.userAgent;
var patt = /Chrome/;
if(patt.test(nAgt))
{
document.getElementById('message_call').className="don";
document.getElementById('mx_call').className="doff";
document.getElementById('mx1_call').className="doff";
bhw();
}
else
{

document.getElementById('message_call').className="don";
document.getElementById('mx_call').className="doff";
document.getElementById('mx1_call').className="doff";
bhw();
}
}




function blowup_off()
{
document.getElementById('message_call').className="doff";
}


var path = '';
var imgid = "0";
function call_free_test(glusr_id,modid,company,contact_person,mobile,digest)
{	
	if(glusr_id !='' && modid != '')
	{
		var d = new Date();
		var epoch_time =(d.getTime()-d.getMilliseconds())/1000;
		var url = '/cgi/datetime_test.pl?supId='+glusr_id+'&modid='+modid+'&time='+epoch_time+'&company='+company+'&contact_person='+contact_person+'&mobile='+mobile+'&digest='+digest;
			http_request = false;
			if (window.XMLHttpRequest)
			{
				http_request = new XMLHttpRequest();

				if (http_request.overrideMimeType)
				{
					http_request.overrideMimeType('text/html');
				}
			}
			else if (window.ActiveXObject)
			{
				// IE
				try
				{
					http_request = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch (e)
				{
					try
					{
						http_request = new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch (e)
					{

					}
				}
			}

			http_request.onreadystatechange = function() { alertContents(http_request); };
			http_request.open('GET', url, true);
			http_request.send(null);
	}
	else
	{
		alert('There is some technical problem.Please try after some time.');
	}
}

function alertContents(http_request)
{
	if (http_request.readyState == 4)
	{
		if (http_request.status == 200)
		{
			var my_result = http_request.responseText;			
			if(my_result == 1)
			{
				alert('There is some technical problem.Please try after some time.');
			}
			else
			{	var strarr = my_result.split("##");			
				comp_nm = strarr[1];
				comp_nm = comp_nm.replace(/\\'/g,"'");
				comp_nm = escape(comp_nm);				
				comp_nm='&supCompName='+comp_nm;
				callpath= strarr[0]+comp_nm;
				document.getElementById('call_url').value=callpath;
			}
		}
	}
}

function call_free()
{
	cll();
	if(document.getElementById('call_url').value)
	{
	var company=document.getElementById('call_url').value;
	document.getElementById('imagediv_call').innerHTML='<iframe src="'+company+'" height = "320" width = "718" onload="loadimg1_call()" FRAMEBORDER="0" MARGINWIDTH="0" SCROLLING="no"></iframe>';

	document.getElementById('divscroll_call').style.width='730px';
	document.getElementById('divscroll_call').style.height='335px';
	}
}


function loadimg1_call()
{
document.getElementById('loadimg_call').className="doff";
document.getElementById('imagediv_call').className="don";
}



document.write('<DIV ID="message_call" STYLE="position: absolute; top: 0px; left: 0px; z-index: 2000"; ALIGN="center" class="doff"><TABLE ID="tableheight" ALIGN="center" BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="center"><TABLE CLASS="bgclor" BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="center"><TABLE CLASS="mainnew" ALIGN="center" BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%" HEIGHT="35"><TR><TD id="titleBarcall" style="cursor: move;"><ilayer width="100%" onselectstart="return false"> </ilayer><layer width="100%" onmouseover="isHot=true;if (isN4) ddN4(message_call)" onmouseout="isHot=false"><DIV ID="prname" CLASS="pr-txt"></DIV></layer></TD><TD ALIGN="right" STYLE="padding-right:0px;" WIDTH="100"><TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><IMG SRC="ts/max1.gif" id="mx_call" WIDTH="21" HEIGHT="21" STYLE="cursor:pointer" ONCLICK="max()" HSPACE="3"></TD><TD><IMG SRC="ts/max.gif" id="mx1_call" WIDTH="21" HEIGHT="21" STYLE="cursor:pointer;" class="doff" ONCLICK="max()" HSPACE="3"></TD><TD><IMG SRC="ts/cl.gif" WIDTH="21" HEIGHT="21" ONCLICK="blowup_off()" STYLE="cursor:pointer"></TD></TR></TABLE></TD></TR></TABLE><DIV CLASS="image_div" ID="divscroll_call" ALIGN="center"><TABLE ALIGN="center" BGCOLOR="#ffffff" BORDER="0" CELLPADDING="0" CELLSPACING="0" ><TR><TD ALIGN="center"><DIV ID="loadimg_call" STYLE="font-family: arial; font-size: 15px;" class="don"><BR><BR><BR><BR><BR><IMG SRC="ts/indicator-new.gif" height="36" width="36"><BR>Loading...</DIV><DIV ID="imagediv_call" class="doff"></DIV></TD></TR></TABLE></DIV></TD></TR></TABLE></TD></TR></TABLE></DIV>');


isIE=document.all;
isNN=!document.all&&document.getElementById;
isN4=document.layers;
isHot=false;

function ddInitcall(e){
  topDog=isIE ? "BODY" : "HTML";
  whichDog=isIE ? document.all.message_call : document.getElementById("message_call");
  hotDog=isIE ? event.srcElement : e.target;
  while (hotDog.id!="titleBarcall"&&hotDog.tagName!=topDog){
    hotDog=isIE ? hotDog.parentElement : hotDog.parentNode;
  }
  if (hotDog.id=="titleBarcall"){
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
  else if (isN4) document.message_call.visibility="hide";
}

function showMe(){
if (isIE||isNN) whichDog.style.visibility="visible";
else if (isN4) document.message_call.visibility="show";
}
function cll()
{
document.body.onmousedown=ddInitcall;
}
document.onmouseup=Function("ddEnabled=false");