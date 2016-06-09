function searchCheck()
{
	var str = '';
	if (document.frm.ss.value=='' || document.frm.ss.value=='Enter Search Keyword...')	{
		alert("Please enter some keyword to search.");
		document.frm.ss.focus();
                document.frm.ss.value='';
		return false;
	}

	if (document.frm.ss.value.length < 3) {
		alert("Please Enter atleast 3 character");
		document.frm.ss.focus();
		return false;
        }

        if (document.frm.ss.value) {
	var str1;
	str1 = document.frm.ss.value.replace(/^\s+/g, '').replace(/\s+$/g, '');
	str1 = str1.replace(/[^a-zA-Z0-9+ ]/g, ' ');
	str1 = str1.replace(/\+/g, ' ');
	str1 = str1.replace(/\s+/g, '+');
	str += 'ss='+str1;
window.location = "http://bhptemp.mypcat.com/autocraftbrakesystems/search.html?"+str;
return false;
        }
}

function searchClear()
{
	if (document.frm.ss.value=='Enter Search Keyword...')	{
		document.frm.ss.value='';
	}
}

function settext()
{
	if (document.frm.ss.value=='')  {
		document.frm.ss.value='Enter Search Keyword...';
	}
}

function settextvalue()
{
	document.frm.ss.value='Enter Search Keyword...';
}

function getDwsCookie(Name)
{
	var search = Name + "="
	if (document.cookie.length > 0)
	{ // if there are any cookies
		offset = document.cookie.indexOf(search)
		if (offset != -1)
		{ // if cookie exists
			offset += search.length
			// set index of beginning of value
			end = document.cookie.indexOf(";", offset)
			// set index of end of cookie value
			if (end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		}
	}
	return "";
}

function setDwsCookie(name, value)
{
	expires = new Date();
	expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);

	if (value.length > 0)
	document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";";

}

function showTradeOfferLink()
{
  if( (cookie = getDwsCookie("ETO_OFFERS")) > "")
   {
      if(cookie != "")
      {
         document.write(' | <a href="latesttradeoffers.html">Trade Offers ('+cookie+')</a>');
      }
   }
   else
   {
      var surl = "http://www.media4trade.com/tradeofferserver?id=2417519&setcookie=1&disp=link";
      document.write('<scr' + 'ipt language="javascript"' + ' src="' + surl + '"></scr' + 'ipt>');
   }
  }
function showTradeOfferLink1()
{
  if( (cookie = getDwsCookie("ETO_OFFERS")) > "")
   {
      if(cookie != "")
      {
         document.write('<LI><B><a href="latesttradeoffers.html">Trade Offers ('+cookie+')</a></B></LI>');
      }
   }
   else
   {
      var surl = "http://www.media4trade.com/tradeofferserver?id=2417519&setcookie=1&disp=link";
      document.write('<scr' + 'ipt language="javascript"' + ' src="' + surl + '"></scr' + 'ipt>');
   }
  }
function showTradeOfferCount()
{
	if( (cookie = getDwsCookie("ETO_OFFERS")) > "")
	{
		if(cookie != "")
		{
			document.write(' ('+cookie+')');
		}
	}
}

function showTradeOfferLink2()
{
	document.write(' | <a href="latesttradeoffers.html">Trade Offers</a>');
}

function flash()
{
	objects = document.getElementsByTagName("object");
	for (var i = 0; i < objects.length; i++)
	{
	objects[i].outerHTML = objects[i].outerHTML;
	}
}
function showflash()
{
	document.getElementById("flash").innerHTML='<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" WIDTH="571" HEIGHT="270"><PARAM NAME="movie" VALUE="ts/flash.swf"><PARAM NAME="quality" VALUE="high"><PARAM NAME="wmode" VALUE="transparent"><embed src="ts/flash.swf"  WIDTH="571" HEIGHT="270" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" WMODE="transparent"></OBJECT>';
}
function openchild(sPicURL,h,w)
{
	window.open(sPicURL, 'Lookup', 'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=no,copyhistory=no,width='+w+',height='+h+'');
}
//*new-cart*/
/* for text value start*/
function RegValue(FieldName) {

if(FieldName.value == 'First Name' || FieldName.value == 'Your Name' )
{
FieldName.value = '';
FieldName.className='txtf';
}
else
{
FieldName.className='txtf';
}
}
function RegValue1(FieldName) {

if(FieldName.value == '')
{
FieldName.value = 'First Name';
FieldName.className='txtfa';
}
else
{
FieldName.className='txtf';
}
}
function RegValue2(FieldName) {

if(FieldName.value == '')
{
FieldName.value = 'Your Name';
FieldName.className='txtfa';
}
else
{
FieldName.className='txtf';
}
}
function RegeValue2(FieldName) {

	if(FieldName.value == 'Last Name')
	{
	FieldName.value = '';
	FieldName.className='txtf';
	}
	else
	{
	FieldName.className='txtf';
	}
}
function RegeValue3(FieldName) {

	if(FieldName.value == '')
	{
	FieldName.value = 'Last Name';
	FieldName.className='txtfa';
	}
}

function AriaValue(FieldName)
{
	if(FieldName.value == 'Area Code')
	{
		FieldName.value = '';
		FieldName.className='txtf';
	}
	else
	{
 		FieldName.className='txtf';
	}
}
function AriaValue1(FieldName)
{
	if(FieldName.value == '')
	{
		FieldName.value = 'Area Code';
		FieldName.className='txtfa';
	}
	else
	{
		FieldName.className='txtf';
	}
}


function PhonValue(FieldName) {
	if(FieldName.value == 'Phone Number')
	{
		FieldName.value = '';
		FieldName.className='txtf';
	}
	else
	{
		FieldName.className='txtf';
	}
}
function PhonValue1(FieldName) {
	if(FieldName.value == '')
	{
		FieldName.value = 'Phone Number';
		FieldName.className='txtfa';
	}
	else
	{
		FieldName.className='txtf';
	}
}

function CellValue(FieldName) {
	if(FieldName.value == 'Mobile / Cell Phone Number' ||  FieldName.value == 'Mobile Number')
	{
	FieldName.value = '';
	FieldName.className='txtf';
	}
}
function CellValue1(FieldName) {
	if(FieldName.value == '')
	{
		FieldName.value = 'Mobile / Cell Phone Number';
		FieldName.className='txtfa';
	}
	else
	{
		FieldName.className='txtf';
	}
}
function CellValue2(FieldName) {
	if(FieldName.value == '')
	{
		FieldName.value = 'Mobile Number';
		FieldName.className='txtfa';
	}
	else
	{
		FieldName.className='txtf';
	}
}
function FaxValue(FieldName) {

	if(FieldName.value == 'Area Code')
{
FieldName.value = '';
FieldName.className='txtf';
}

else if(FieldName.value == '')
{
FieldName.value = 'Area Code';
FieldName.className='txtfa';
}

else
{
FieldName.className='txtf';
}
}


function ContValue(FieldName) {

	if(FieldName.value == 'Your Mobile / Cell Phone')
{
FieldName.value = '';
FieldName.className='txtf';
}

else if(FieldName.value == '')
{
FieldName.value = 'Your Mobile / Cell Phone';
FieldName.className='txtfa';
}

else
{
FieldName.className='txtf';
}
}


function desc1Value(FieldName) {

	if(FieldName.value == 'Your Mobile / Cell Phone')
{
FieldName.value = '';
FieldName.className='txtf';
}

else if(FieldName.value == '')
{
FieldName.value = 'Your Mobile / Cell Phone';
FieldName.className='txtfa';
}

else
{
FieldName.className='txtf';
}
}

function bg(c)
{
document.getElementById(c).className='tlnk1'
}
function bg1(c)
{
document.getElementById(c).className='tlnk'
}



function bg2(c1)
{
document.getElementById(c1).className='tlnk3'
}
function bg3(c1)
{
document.getElementById(c1).className='tlnk2'
}


function fb(r)
{
document.getElementById(r).className='fbg1'
}
function fb1(r)
{
document.getElementById(r).className=''
}

var persistmenu="yes" //"yes" or "no". Make sure each DIV content contains an incrementing ID starting at 1 (id="sub1", id="sub2", etc)
var persisttype="sitewide" //enter "sitewide" for menu to persist across site, "local" for this page only

if (document.getElementById){ //DynamicDrive.com change
document.write('<style type="text/css">\n')
document.write('.tog{display: none;}\n')
document.write('.tbq{display: none;}\n')
document.write('.sub1{display: none;}\n')
document.write('</style>\n')
}

function SwitchMenu(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv").getElementsByTagName("div"); //DynamicDrive.com change
		if(el.style.display != "inline"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="tbq") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "inline";
		}
	}
}

function SwitchMenu1(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv").getElementsByTagName("div"); //DynamicDrive.com change
		if(el.style.display != "block"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="tog") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "block";}
			else{
			el.style.display = "none";
		}
	}
}

function SwitchMenu2(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv2").getElementsByTagName("div"); //DynamicDrive.com change
		if(el.style.display != "block"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="sub1") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "block";}
			else{
			el.style.display = "none";
		}
	}
}

//-----------------------------------mouse over effect--------------------------------------
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		index_1 = newImage("ts/off1.gif");
		index_2 = newImage("ts/on1.gif");
		index_3 = newImage("ts/google1.png");
		index_4 = newImage("ts/skype1.png");
		index_5 = newImage("ts/msn1.png");
		index_6 = newImage("ts/yahoo1.png");
		index_7 = newImage("ts/show.png");
		index_8 = newImage("ts/show1.png");
		index_9 = newImage("ts/ply1.gif");
		index_10 = newImage("ts/stp1.gif");
		preloadFlag = true;
	}
}

//---------------------------dynamiclayout effect---------------------------------

// Title : Dynamic Resolution Dependent Layout Demo


// getBrowserWidth is taken from The Man in Blue Resolution Dependent Layout Script

function getBrowserWidth(){
		if (window.innerWidth){
			return window.innerWidth;}
		else if (document.documentElement && document.documentElement.clientWidth != 0){
			return document.documentElement.clientWidth;	}
		else if (document.body){return document.body.clientWidth;}
			return 0;
	}

// dynamicLayout
function dynamicLayout(){
	var browserWidth = getBrowserWidth();

	//Load Wider CSS Rules
	if (browserWidth > 1024){
		changeLayout("above1024");
	}
}

// changeLayout is based on setActiveStyleSheet function

function changeLayout(description){
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++){
		if(a.getAttribute("title") != "default"){
			a.disabled = true;

		}
   }

	for(i=0; (a = document.getElementsByTagName("link")[i]); i++){
		if(a.getAttribute("title") == description){
			a.disabled = false;

		}
   }
}

//addEvent()
function addEvent( obj, type, fn ){
   if (obj.addEventListener){
	  obj.addEventListener( type, fn, false );
   }
   else if (obj.attachEvent){
	  obj["e"+type+fn] = fn;
	  obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); }
	  obj.attachEvent( "on"+type, obj[type+fn] );
   }
}

//Run dynamicLayout function when page loads and when it resizes.
addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);

//for open vidio's
var win = null;

function NewWinIM(mypage,myname,compname)
{
var embedcode='';
var arr=mypage.split('/');
if (mypage.search(/heavy\#\#/) != -1){
      mypage = mypage.replace('heavy##','');
      var hw='height=350,width=370';
      var embedcode = '<embed src="http://www.videowebtown.com/community/flvplayer/flvplayer.swf?file=http://www.videowebtown.com/indiamartvideo/video/'+mypage+'.flv&autoStart=false"  quality="high" bgcolor="#ffffff" width="352" height="288" name="movie" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
}
else{
      var hw='height=350,width=370';
      var embedcode = '<embed src="http://www.4shared.com/flash/flvplayer.swf"   style="width: 400px; height: 326px;" bgcolor="#ffffff" allowscriptaccess="always" allowfullscreen="true" flashvars="file=http://dc152.4shared.com/img/'+arr[0]+'/'+arr[1]+'/dlink__2Fdownload_2F'+arr[0]+'_2F'+arr[1]+'_3Fdsid_3DJGITKOINJZHYGJIAJPJYHXISIQKIJFIVHXHZHYJIIZJBJPIWKSIRKQITIGJTIAGHGCIAHYJHINIQKVKU/preview.flv&amp;image=http://dc152.4shared.com/img/'+mypage+'&amp;autostart=true" wmode="opaque">';
}
LeftPosition = (screen.width) ? (screen.width-400)/2 : 0;
TopPosition = (screen.height) ? (screen.height-326)/2 : 0;

var settings = 'width=460';
settings += ', height=400';
settings += ', top='+TopPosition+', left='+LeftPosition;
settings += ', directories=no';
settings += ', location=no';
settings += ', menubar=no';
settings += ', resizable=no';
settings += ', scrollbars=no';
settings += ', status=no';
settings += ', toolbar=no';

win = window.open("",myname,settings);
win.document.write('<HTML><HEAD><TITLE>'+compname+' Video</TITLE></HEAD><BODY BGCOLOR="#ffffff"><DIV style="color:#000000;font-size:11px;font-family:arial" align="center">Video by '+compname+'</DIV><DIV ALIGN="CENTER"><table BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="440"> <tr> <TD><img src="ts/top-left-1.gif"  WIDTH="7" HEIGHT="9"></TD> <TD BACKGROUND="ts/bottom-lcenter.gif"></TD> <TD><img src="ts/top-right-1.gif"  WIDTH="7" HEIGHT="9"></TD> </tr> <tr> <TD BACKGROUND="ts/l-bg1.gif"><img src="ts/zero.gif"  WIDTH="7" HEIGHT="1"></TD> <TD VALIGN="TOP"> <table CELLPADDING="0" CELLSPACING="0" BORDER="0"> <tr> <TD WIDTH="460" HEIGHT="350"> <DIV CLASS="sec-div" STYLE="background-image:url(ts/indicator-new.gif); background-repeat:no-repeat; background-position: center center;padding:10px;" > '+embedcode+'</DIV></TD> </tr> </table></TD> <TD BACKGROUND="ts/l-bg1.gif"><img src="ts/zero.gif"  WIDTH="7" HEIGHT="1"></TD> </tr> <tr> <TD><img src="ts/bottom-left-1.gif"  WIDTH="7" HEIGHT="9"></TD> <TD BACKGROUND="ts/bottom-lcenter.gif"></TD> <TD><img src="ts/bottom-right-1.gif"  WIDTH="7" HEIGHT="9"></TD> </tr> </table> </DIV></BODY></HTML>');
}

// show and hide product name on home page

var plnew = "pl2";
function show(obj, plus)
{
        if(document.getElementById)
	{
		var el = document.getElementById(obj);
		var ar = document.getElementById("masterdiv1").getElementsByTagName("div");
		for (var i=0; i<ar.length; i++)
		{
			if(ar[i].className == "on")
			{
				ar[i].className = "off";
			}
		}
		document.getElementById(obj).className = "on";
	}
	if(document.getElementById(plnew))
	{
		document.getElementById(plnew).className = "prd lh1 c5 a f2 bo2 p41 b";
	}
	if(document.getElementById(plus).className == "prd lh1 c5 a f2 bo2 p41 b")
	{
		document.getElementById(plus).className = "pr1 lh1 c5 a p43 f2 b";
	}
	plnew = plus;
}
function show1(obj, plus)
{
	document.getElementById(obj).className = "on";
	document.getElementById(plus).className = "off";
}
function show2(obj, plus)
{
	document.getElementById(obj).className = "b f2 u c5 txr";
	document.getElementById(plus).className = "off";
}
