var catarr = new Array();
catarr[16874698] = ["Bajaj"];
catarr[16874763] = ["Bajaj"];
catarr[16874906] = ["Bajaj"];
catarr[16874951] = ["Bajaj"];
catarr[16879762] = ["Bajaj"];
catarr[16880053] = ["Bajaj"];
catarr[16880619] = ["Bajaj"];
catarr[16880650] = ["Bajaj"];
catarr[16880737] = ["Bajaj"];
catarr[16880804] = ["Hero Honda"];
catarr[16880827] = ["Hero Honda"];
catarr[16880985] = ["Hero Honda"];
catarr[16881110] = ["Honda"];
catarr[16881216] = ["Honda"];
catarr[16881302] = ["Hero Puch"];
catarr[16881383] = ["LML"];
catarr[16881399] = ["LML"];
catarr[16882149] = ["Kinetic"];
catarr[16882640] = ["TVS Suzuki"];
catarr[16882736] = ["TVS Suzuki"];
catarr[16882749] = ["TVS Suzuki"];
catarr[16882799] = ["TVS Suzuki"];
catarr[16882923] = ["TVS Suzuki"];
catarr[16882962] = ["TVS Suzuki"];
catarr[16882998] = ["Yamaha & Rajdoot"];
catarr[16883813] = ["Yamaha & Rajdoot"];
catarr[16883883] = ["Yamaha & Rajdoot"];
catarr[16883983] = ["Royal Enfield"];
catarr[16883943] = ["Royal Enfield"];
catarr[16884036] = ["Brake Linings (Set of 4 Pieces)"];
catarr[16884296] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884412] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884458] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884490] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884511] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884547] = ["Disc Brake Pads (Asbestos Free)"];
catarr[16884616] = ["Clutch Shoe"];
catarr[16884679] = ["Clutch Shoe"];
catarr[16884690] = ["Clutch Shoe"];
catarr[16884742] = ["Clutch Shoe"];
catarr[16884753] = ["Clutch Shoe"];

function preloadctrl(im)
{
    if (typeof im=='string')
    {
        var imo=new Image();
        imo.src=im;
    }
}

if(document.images&&typeof preload_ctrl_images!='undefined'&&preload_ctrl_images)
{
    var ctrlimgs=[previmg, previmg1, stopimg, playimg, nextimg, nextimg1]
    for (var i_tem = 0; i_tem < ctrlimgs.length; i_tem++)
    if (ctrlimgs[i_tem])
    preloadctrl(ctrlimgs[i_tem])
}

var iss=[]; //array to cache inter_slide instances
var product=''; //this will keep current product-detail.
var link_detail=''; //this will keep link for current product-detail.
var getnumber=0;   //this will keep product no. to display when click from cat-dropdown

function inter_slide()
{
    if(!document.images||arguments.length==0)
    return;
    var imgs=arguments[0];
    var width=null, height=null, delay=null;
    if(arguments.length==2)
    delay=arguments[1];
    else if(arguments.length==3||arguments.length==4)
    width=arguments[1], height=arguments[2], delay=arguments[3]? arguments[3] : null;
    this.dom=(document.getElementById) //modern dom browsers
    this.da=document.all
    this.delay=imgs.delay? imgs.delay : delay? delay : 3000+iss.length*750;
    this.nextimgidx=0;
    iss[this.issid=iss.length]=this;
    this.imgs=imgs;
    if (imgs.random)
    this.imgs.sort(function() {return 0.5 - Math.random();}) //thanks to Mike (aka Mwinter) :)
    this.imgborder=imgs.border? parseInt(imgs.border) : 0;
    if (!this.dom)
    {
        this.postimgs=new Array() //preload imgs
        for (p=0;p<imgs.length;p++)
        {
            this.postimgs[p]=new Image()
            this.postimgs[p].src=this.imgs[p][0]
        }
    }

    if (this.dom)
    { //if modern browsers (ie: Firefox, IE5+)
        this.faded=0;
        this.loadimgidx=[];
        this.fade=!imgs.nofade;
        if(this.fade)
        this.degree=10 //initial opacity degree (10%)

        this.pausecheck=imgs.pause;
        this.mouseovercheck=0
        this.canvasbase="canvas"+this.issid
        this.curcanvas=this.canvasbase+"_0"
        this.descriptions=!imgs.no_descriptions;
        this.man_start=imgs.manual_start;
        this.addbr=!imgs.no_added_linebreaks;
        this.no_auto=imgs.no_auto;
        this.onclick=imgs.onclick;
        this.specs=imgs.specs;
        this.counter=imgs.counter;
        this.ics=imgs.image_controls;
        this.jumpto=imgs.jumpto;
        this.no_c=imgs.no_controls;
        this.target=imgs.target;
        this.ualt=imgs.use_alt;
        this.utit=imgs.use_title;
        this.fadecolor=imgs.fadecolor;
        this.ibut_hc=imgs.button_highlight;
        this.dp=imgs.desc_prefix? imgs.desc_prefix : ' ';
        this.imbcolor=imgs.border_color;
        this.imbstyle=imgs.border_style;
        this.width=imgs.width? imgs.width : width? width : null
        this.width=this.width? this.width+this.imgborder*2 : null;
        this.height=imgs.height? imgs.height : height? height : null
        this.height=this.height? this.height+this.imgborder*2 : null;
        var ief='', dims='';
        if(this.width||this.height)
        dims=this.width&&this.height? 'width:'+this.width+'px;height:'+this.height+'px;' : this.width? 'width:'+this.width+'px;' : 'height:'+this.height+'px;';

        if(this.fade&&document.body&&document.body.style)
        ief=document.body.filters? 'filter:progid:DXImageTransform.Microsoft.alpha(opacity=0);' : typeof document.body.style.opacity=='string'? 'opacity:0;' : 'opacity:0.10;-moz-opacity:0.10;-khtml-opacity:0.10;';

        var brs=this.addbr? '' : '';
        if (imgs.controls_top)
        {
            this.controls();
            document.write(brs)
        }

        document.write('<table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><TD VALIGN="TOP"><img src="ts/so-tl.png"   WIDTH="15" HEIGHT="37"></TD><TD VALIGN="bottom" WIDTH="100%" BACKGROUND="ts/so-tnbg.png"><div CLASS="ga-cate" align="left" ID="cat-name">Category Name <\/div></TD><TD BACKGROUND="ts/so-cate.png"><table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><td COLSPAN="2"><img src="ts/zero.gif"   WIDTH="173" HEIGHT="14"></td></tr><tr><td><img src="ts/zero.gif"   WIDTH="18" HEIGHT="1"></td><td width="100%"><a href="#"  ONClICK="exM(m1,\'m1mn2\',\'m1tlm2\',event);" ONMOUSEOUT="coM(m1,\'m1mn2\');" ID="m1tlm2"><img src="ts/so-sel-cate.png"   WIDTH="155" HEIGHT="23" NAME="sel-cate1" ALT="Select Products" ONMOUSEOVER="roll_over(\'sel-cate1\',\'ts/so-sel-cate1.png\',\'img\')" ONMOUSEOUT="roll_over(\'sel-cate1\',\'ts/so-sel-cate.png\',\'img\')"><\/a></td></tr></table></TD><td BACKGROUND="ts/so-cate-bg.png"><img src="ts/zero.gif"   WIDTH="5" HEIGHT="1"></td><TD><a href="javascript:hide();"><img src="ts/so-close.png"   WIDTH="15" HEIGHT="37" NAME="close1" ALT="Close" ONMOUSEOVER="roll_over(\'close1\',\'ts/so-close1.png\',\'img\')" ONMOUSEOUT="roll_over(\'close1\',\'ts/so-close.png\',\'img\')"><\/A></TD><td><img src="ts/so-tr.png"   WIDTH="17" HEIGHT="37"></td></tr></table><table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><TD><img src="ts/so-tcl.png"   WIDTH="15" HEIGHT="10"></TD><TD VALIGN="TOP" WIDTH="100%" BACKGROUND="ts/so-tcl-bg.png"></TD><TD><img src="ts/so-tcr.png"   WIDTH="17" HEIGHT="10"></TD></tr></table><table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0"ALIGN="CENTER"><tr><TD VALIGN="BOTTOM" BACKGROUND="ts/so-cl.png"><img src="ts/zero.gif"   WIDTH="15" HEIGHT="1"></TD><TD VALIGN="BOTTOM" WIDTH="100%" CLASS="ga-bg"><div align="center"><div id="master'+this.issid+'" style="position:relative;'+dims+'overflow:hidden;margin:0 auto;"><div id="'+this.canvasbase+'_0" style="position:absolute;'+dims+'top:0;left:0;'+ief+'background-color:'+(imgs.fadecolor? imgs.fadecolor : 'white')+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;'+dims+'top:0;left:0;'+ief+'background-color:'+(imgs.fadecolor? imgs.fadecolor : 'white')+'"></div></div></div></TD><TD VALIGN="BOTTOM" BACKGROUND="ts/so-cr.png"><img src="ts/zero.gif"   WIDTH="15" HEIGHT="1"></TD></tr></table>')


        if(this.descriptions)
        document.write(brs+'<table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><TD><img src="ts/so-ncl.png"   WIDTH="15" HEIGHT="35"></TD><TD VALIGN="TOP" BACKGROUND="ts/so-narrow.png"><img src="ts/zero.gif"   WIDTH="15" HEIGHT="1"></TD><TD VALIGN="TOP" BACKGROUND="ts/so-nrbg.png" WIDTH="100%" CLASS="ga-name"><div align="center">'+this.dp+'<span id="imgdsc'+this.issid+'">&nbsp;</span></DIV>\n</TD><TD VALIGN="TOP" CLASS="ga-bg"><img src="ts/so-nr.png"   WIDTH="10" HEIGHT="35"></TD><TD><img src="ts/so-ncr.png"   WIDTH="15" HEIGHT="35"></TD></tr></table>');

        if(this.counter&&!this.descriptions)
        document.write(brs);

        if(this.counter)
        this.cntrl()

        if (!imgs.controls_top)
        {
            document.write(this.ics? '' : brs);
            this.controls();
        }
    }
    else
    document.write('<div align="center"><img name="defaultslide'+this.issid+'" src="'+this.postimgs[0].src+'"></div>')

    if (this.dom) //if modern browsers such as Firefox, IE5+
    this.startit()
    else
    {
        this.nextimgidx++
        setInterval("iss["+this.issid+"].rotateimg()", this.delay)
    }
}

inter_slide.prototype.cntrl=function()
{
    this.cpad=this.imgs.length.toString().length;
    document.write('<div align="center">Viewing Image: <b><span id="thecnt'+this.issid+'"></span></b>of<span style="font-size:1ex;">&nbsp;</SPAN>&nbsp;<b>'+this.imgs.length+'</b></div>');
}

inter_slide.prototype.controls=function()
{
    var brs=this.addbr? '<br>' : ' &nbsp;';
    if(!this.ics&&!this.no_c)
    document.write('<table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><TD VALIGN="TOP"><img src="ts/so-bcorl.png"   WIDTH="15" HEIGHT="18"></TD><TD VALIGN="TOP" WIDTH="100%" BACKGROUND="ts/so-bcorbg.png"></TD><TD><img src="ts/so-bcorr.png"   WIDTH="15" HEIGHT="18"></TD></tr></table><table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0" ALIGN="CENTER"><tr><TD VALIGN="TOP"><img src="ts/so-iil.png"   WIDTH="20" HEIGHT="34"></TD><TD VALIGN="TOP" WIDTH="100%" BACKGROUND="ts/so-iilbg.png"><table WIDTH="100%" BORDER="0" CELLPADDING="0" CELLSPACING="0"><tr><td><img src="ts/zero.gif"   WIDTH="1" HEIGHT="8"></td></tr><tr><td><a href="javascript:detail();"><img src="ts/so-details.png"   WIDTH="73" HEIGHT="21" NAME="so-details1" ALT="View Details" ONMOUSEOVER="roll_over(\'so-details1\',\'ts/so-details1.png\',\'img\')" ONMOUSEOUT="roll_over(\'so-details1\',\'ts/so-details.png\',\'img\')"><\/A><img src="ts/zero.gif"   WIDTH="5" HEIGHT="1"><a href="javascript:enquiry();"><img src="ts/so-enquiry.png"  HEIGHT="21" WIDTH="79" NAME="so-enquiry1" ALT="Send Enquiry" ONMOUSEOVER="roll_over(\'so-enquiry1\',\'ts/so-enquiry1.png\',\'img\')" ONMOUSEOUT="roll_over(\'so-enquiry1\',\'ts/so-enquiry.png\',\'img\')"><\/A></td></tr></table></TD><TD VALIGN="TOP" BACKGROUND="ts/so-ar-rou.png"><img src="ts/zero.gif"   WIDTH="49" HEIGHT="1"></TD><TD VALIGN="TOP"><input id="prev'+this.issid+'" disabled   type="image" src="ts/so-ar-last.png"   ONCLICK="iss['+this.issid+'].changeimg(false, \'nav\');"></TD><TD background="ts/so-ar-cen1.png" valign="top"><img src="ts/zero.gif"   height="1" width="47"></TD><TD>'+ (this.no_auto? '' : ' <input id="gostp'+this.issid+'" type="image" src="ts/so-ar-pause.png"   ONCLICK="iss['+this.issid+'].gostop(this);">')+ '</TD><TD background="ts/so-ar-cen.png" valign="top"><img src="ts/zero.gif"   height="1" width="48"></TD><TD VALIGN="TOP"><input id="next'+this.issid+'" disabled   type="image" src="ts/so-next.png"   ONCLICK="iss['+this.issid+'].changeimg(true, \'nav\');">'+(this.jumpto? brs+'Jump to: <input disabled   type="image"   size="'+this.imgs.length.toString().length+'" id="goto'+this.issid+'" onkeydown="iss['+this.issid+'].jumper(event);"><input id="go'+this.issid+'" disabled   type="image"   ONCLICK="iss['+this.issid+'].jumper();" value="GO">' : '')+'</TD><TD background="ts/so-ar-r.png" valign="top"><img src="ts/zero.gif"   height="1" width="52"></TD></tr></table><table WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0" ALIGN="CENTER"><tr><TD><img src="ts/so-bl.png"   WIDTH="15" HEIGHT="10"></TD><TD VALIGN="TOP" WIDTH="100%" BACKGROUND="ts/so-bbg.png" CLASS="ga-align"></TD><TD VALIGN="TOP"><img src="ts/so-br.png"   WIDTH="15" HEIGHT="10"></TD></tr></table>')

    else if(this.ics&&!this.no_c)
    {
        var op=document.body.filters? ' style="filter:alpha(opacity=100);"' : ' style="opacity:'+(this.man_start? 0.99 : 0.45)+';"';
        document.write('<table align="center" cellpadding="0" cellspacing="0"><tr><td valign="middle" align="center" style="padding:2px 2px 1px 2px;"><input '+op+' onmouseover="iss['+this.issid+'].ibute(this,1);" onmouseout="iss['+this.issid+'].ibute(this,2);" onmousedown="iss['+this.issid+'].ibute(this,3);" onmouseup="iss['+this.issid+'].ibute(this,4);" type="image"   title="Previous" id="prev'+this.issid+'" src="'+previmg+'"   ONCLICK="iss['+this.issid+'].changeimg(false, \'nav\');"></td>'+(this.no_auto? '<td>&nbsp;</td>' : '<td valign="middle" align="center" style="padding:2px 2px 1px 2px;"><input onmouseover="iss['+this.issid+'].ibute(this,1);" onmouseout="iss['+this.issid+'].ibute(this,2);" onmousedown="iss['+this.issid+'].ibute(this,3);" onmouseup="iss['+this.issid+'].ibute(this,4);" title="Stop" type="image"   id="gostp'+this.issid+'" src="'+(this.g_fPlayMode? playimg : stopimg)+'"   ONCLICK="iss['+this.issid+'].gostop(this);"></td>')+'<td valign="middle" align="center" style="padding:2px 2px 1px 2px;"><input '+op+' onmouseover="iss['+this.issid+'].ibute(this,1);" onmouseout="iss['+this.issid+'].ibute(this,2);" onmousedown="iss['+this.issid+'].ibute(this,3);" onmouseup="iss['+this.issid+'].ibute(this,4);" type="image"   title="Next" id="next'+this.issid+'" src="'+nextimg+'"   ONCLICK="iss['+this.issid+'].changeimg(true, \'nav\');"></td></tr></table>\n');
    }
    else
    this.no_c=1;

    var next=this.go('next'+this.issid), prev=this.go('prev'+this.issid);
    next.style.cursor="default";
    prev.style.cursor="default";
}

inter_slide.prototype.jumper=function(e)
{
    var key;
    if(typeof e=='object')
    key=e.keyCode? e.keyCode : e.which? e.which : 1;
    if(key&&key!==13)
    return;
    var num=typeof e=='number'? e : parseInt(this.go('goto'+this.issid).value);
    if(num<=this.imgs.length&&num>0)
    {
        this.nextimgidx=num-2;
        this.changeimg(true, 'jump');
    }
}

inter_slide.prototype.jumper1=function()
{
    if(this.playing)
    {
        this.playing=!this.playing;
        var num=getnumber;//get value of num dynamically
        if(num<=this.imgs.length&&num>0)
        {
            this.nextimgidx=num-2;
            this.changeimg(true, 'jump');
        }
        this.playing=!this.playing;
    }
    else
    {
        var num=getnumber;//get value of num dynamically
        if(num<=this.imgs.length&&num>0)
        {
            this.nextimgidx=num-2;
            this.changeimg(true, 'jump');
        }
    }
}

inter_slide.prototype.ibute=function(obj, i)
{
    if(!obj.parentNode)
    return;
    if(i==1)
    obj.parentNode.style.backgroundColor=this.ibut_hc? this.ibut_hc : 'yellow';
    else if(i==2)
    obj.parentNode.style.backgroundColor='transparent';
    else if(i==3)
    {
        obj.parentNode.style.borderTop=obj.parentNode.style.borderLeft='1px solid gray';
        obj.parentNode.style.paddingRight='1px';obj.parentNode.style.paddingBottom=0;
    }
    if (i==2||i==4)
    {
        obj.parentNode.style.borderTop=obj.parentNode.style.borderLeft='none';
        obj.parentNode.style.paddingRight='2px';obj.parentNode.style.paddingBottom='1px';
    }
}

inter_slide.prototype.fadepic=function()
{
    if (this.fade&&this.degree<100)
    {
        this.faded=0
        this.degree+=10
        if (this.tempobj.filters&&this.tempobj.filters[0])
        {
            if (typeof this.tempobj.filters[0].opacity=="number") //if IE6+
            this.tempobj.filters[0].opacity=this.degree
            else //else if IE5.5-
            this.tempobj.style.filter="alpha(opacity="+this.degree+")"
        }
        else if (this.tempobj.style.MozOpacity)
        this.tempobj.style.MozOpacity=this.degree/101
        else if (this.tempobj.style.KhtmlOpacity)
        this.tempobj.style.KhtmlOpacity=this.degree/100
        else if (this.tempobj.style.opacity&&!this.tempobj.filters)
        this.tempobj.style.opacity=this.degree/101
    }
    else
    {
    this.faded=1
    clearInterval(this.fadeclear)
    this.nextcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_0" : this.canvasbase+"_1"
    this.tempobj=this.go(this.nextcanvas)
    if(this.playing)
    this.changeimg()
    }
}

inter_slide.prototype.populateslide=function(picobj, picidx)
{
    if(document.getElementsByTagName)
    {
        if(picobj.getElementsByTagName('a')[0]&&picobj.getElementsByTagName('a')[0].onclick)
        picobj.getElementsByTagName('a')[0].onclick=null;
        if(picobj.getElementsByTagName('img')[0]&&picobj.getElementsByTagName('img')[0].onload)
        picobj.getElementsByTagName('img')[0].onload=null;
    }
    picobj.style.backgroundColor=this.imgs[picidx].fadecolor? this.imgs[picidx].fadecolor : this.fadecolor? this.fadecolor : 'black';
    var slideHTML='<table border="0" style="margin-top:10px;" cellpadding="0" cellspacing="0" width="100%" height="100%"><tr><td width="100%" height="100%" align="center" valign="middle" style="background:transparent none;">'
    if (this.imgs[picidx][2])
    { //if associated link exists for img
        var specs=this.imgs[picidx][5]? ", '"+this.imgs[picidx][5]+"'" : this.specs? ", '"+this.specs+"'" : '';
        slideHTML+='<a href="'+this.imgs[picidx][2]+'" '+(this.imgs[picidx][4]? ' target="'+this.imgs[picidx][3]+'"' : this.target? ' target="'+this.target+'"' : '')+' ONCLICK="'+(this.onclick? this.onclick : 'window.open(this.href, (this.target? this.target : \'_top\')'+specs+');return false;')+'">'
    }
	slideHTML+='<img id="theimg'+picidx+'_'+this.issid+'" src="'+(this.loadimgidx[picidx]&&typeof this.loadimgidx[picidx].complete=='boolean'&&this.loadimgidx[picidx].complete? this.loadimgidx[picidx].src : this.imgs[picidx][0])+'" ' +this.imgs[picidx][3]+ 'alt="'+(this.ualt? this.imgs[picidx][1] : 'Slide Show Image')+'" title="'+(this.utit? this.imgs[picidx][1] : '')+'"'+(this.imbcolor&&!this.imgs[picidx].noborder? 'style="border:'+this.imgborder+'px '+(this.imbstyle? this.imbstyle : 'solid')+' '+this.imbcolor+';"' : 'border="'+(this.imgs[picidx].noborder? '0' : this.imgborder)+'"')+(!this.width||!this.height? ' onload="iss['+this.issid+'].imgload(this);"' : '')+'>'
    if (this.imgs[picidx][2]) //if associated link exists for img
    slideHTML+='</a>'
    slideHTML+='</td></tr></table>'
    picobj.innerHTML=slideHTML
}

inter_slide.prototype.buttons=function(bool)
{
    if(this.no_c)
    return;
    var next=this.go('next'+this.issid), prev=this.go('prev'+this.issid);
    next.disabled=prev.disabled=!bool;
    next.title=bool? 'next' : '';
    next.src=bool? nextimg1 : nextimg;
    prev.title=bool? 'previous' : '';
    prev.src=bool? previmg1 : previmg;
    if(this.jumpto&&!this.ics)
    this.go('go'+this.issid).disabled=this.go('goto'+this.issid).disabled=!bool;
//     if(this.ics)
//     {
//         if(!this.no_auto)
//         {
            var go=this.go('gostp'+this.issid)
            go.title=bool? 'Play' : 'Stop';
            go.src=bool? playimg : stopimg;
//         }
//         if(prev.filters&&prev.parentNode)
//         prev.parentNode.style.filter=next.parentNode.style.filter='alpha(opacity='+(bool? 100 : 45)+')';
//         else if(prev.style.opacity&&!prev.filters)
//         prev.style.opacity=next.style.opacity=bool? 0.99 : 0.45;
//     }
}

inter_slide.prototype.imgload=function(el)
{
    if(!el&&!this.imgel)
    return;
    var el=el? el : this.imgel;
    if(el.width==0||el.height==0)
    {
        this.imgel=el;
        var cacheobj=this;
        clearTimeout(this.getdim)
        this.getdim=setTimeout(function(){cacheobj.imgload()}, 300)
        return;
    }
    var m=this.go('master'+this.issid).style, c0=this.go(this.canvasbase+'_0').style, c1=this.go(this.canvasbase+'_1').style;
    if(!this.width)
    {
        this.width=el.width+this.imgborder*2;
        m.width = c0.width = c1.width = this.width+'px';
    }
    if(!this.height)
    {
        this.height=el.height+this.imgborder*2;
        m.height = c0.height = c1.height = this.height+'px';
    }
}

inter_slide.prototype.changeimg=function(bool,nav)
{
    if(this.playing)
    {
        this.buttons(false)
        this.nextimgidx=(this.keeptrack()<this.imgs.length-1)? this.keeptrack()+1 : 0
        this.populateslide(this.tempobj, this.nextimgidx)
        if(bool)
        this.rotateimg()
        else
        {
            clearTimeout(this.inprocess)
            this.inprocess=setTimeout("iss["+this.issid+"].rotateimg()", this.delay)
        }
    }
    else
    {
        if(!this.faded)
        {
            if(nav&&nav=='nav')
            return;
            this.nextimgidx=this.keeptrack()+(bool? 1 : -1)
            this.nextimgidx=(this.nextimgidx<this.imgs.length)? this.nextimgidx : this.nextimgidx-this.imgs.length
            this.nextimgidx=(this.nextimgidx>-1)? this.nextimgidx : this.imgs.length+this.nextimgidx
            return;
        }
        if(this.fadeclear)
        clearInterval(this.fadeclear);
        if(bool)
        {
            var loadidx=this.nextimgidx+2
            loadidx=(loadidx<this.imgs.length)? loadidx : loadidx-this.imgs.length;
            loadidx=(loadidx>-1)? loadidx : this.imgs.length+loadidx;
            this.loadimgidx[loadidx]=new Image();
            this.loadimgidx[loadidx].src=this.imgs[loadidx][0];
        }
        else
        {
            var loadidx=this.nextimgidx-2
            loadidx=(loadidx<this.imgs.length)? loadidx : loadidx-this.imgs.length
            loadidx=(loadidx>-1)? loadidx : this.imgs.length+loadidx
            this.loadimgidx[loadidx]=new Image();
            this.loadimgidx[loadidx].src=this.imgs[loadidx][0];
        }
        if(nav&&nav=='jump')
        this.nextimgidx++;
        else
        this.nextimgidx=this.keeptrack()+(bool? 1 : -1)
        this.nextimgidx=(this.nextimgidx<this.imgs.length)? this.nextimgidx : this.nextimgidx-this.imgs.length
        this.nextimgidx=(this.nextimgidx>-1)? this.nextimgidx : this.imgs.length+this.nextimgidx
        this.populateslide(this.tempobj, this.nextimgidx)
        this.rotateimg()
    }
}

inter_slide.prototype.go=function(id)
{
    return this.da? this.da[id] : document.getElementById(id);
}

inter_slide.prototype.rotateimg=function()
{
    if(this.dom)
    {
        var cimg=this.go('theimg'+this.nextimgidx+'_'+this.issid)? this.go('theimg'+this.nextimgidx+'_'+this.issid) : null;
        if(cimg&&typeof cimg.complete=='boolean'&&!cimg.complete)
        {
            var cacheobj=this
            clearTimeout(this.loading)
            this.loading=setTimeout(function(){cacheobj.rotateimg()}, 300)
            return;
        }
        if (this.mouseovercheck==1)
        {
            var cacheobj=this
            clearTimeout(this.mousep)
            this.mousep=setTimeout(function(){cacheobj.rotateimg()}, 100)
            return;
        }
        if(this.fade)
        this.resetit()
        var crossobj=this.tempobj=this.go(this.curcanvas)
        crossobj.style.zIndex++
        var othercanvas=this.curcanvas==this.canvasbase+"_0"? this.go(this.canvasbase+"_1") : this.go(this.canvasbase+"_0");
        othercanvas.style.zIndex=0;
        if(this.descriptions)
        {
            product=this.imgs[this.keeptrack()][1];
            var arrTemp1=product.split(" : ");
            var pname = arrTemp1[0];
            if(pname.length > 75)
            {
                var c = pname.substring(0,75);
                c = c + "...";
                pname = c;
            }

            this.go('imgdsc'+this.issid).innerHTML ='<a href="javascript:detail();">'+pname+'</A>';
            link_detail=this.imgs[this.nextimgidx][2]; //this will keep link for current product-detail.

	    var prod_id = (arrTemp1.length>2)?arrTemp1[2]:arrTemp1[1];
	    var cname = escape(catarr[prod_id]);
	    if(cname.length > 28)
            {
                var c1 = cname.substring(0,28);
                c1 = c1 + "...";
                cname = c1;
            }
	    cname = unescape(cname);
	    cname = cname.replace(/\%(2)?/g," ");
	    this.go('cat-name').innerHTML = cname;
        }


        if(this.counter)
        {
            var padit='';
            for (var p=0; p<this.cpad-(this.nextimgidx+1).toString().length; p++)
            padit+='<span style="visibility:hidden;">0</SPAN>';
            this.go('thecnt'+this.issid).innerHTML = padit+(this.keeptrack()<this.imgs.length? this.keeptrack()+1 : 1);
        }
        if (this.jumpto)
        this.go('goto'+this.issid).value=this.keeptrack()<this.imgs.length? this.keeptrack()+1 : 1;
        this.jumperidx=this.keeptrack()<this.imgs.length? this.keeptrack()+1 : 1;
        var fadeobj=this
        clearInterval(this.fadeclear)
        this.fadeclear=setInterval(function(){fadeobj.fadepic()},50)
        this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
    }
    else
    {
        var v4imgobj=document.images['defaultslide'+this.issid]
        v4imgobj.src=this.postimgs[this.nextimgidx].src
        this.nextimgidx=(this.nextimgidx<this.imgs.length-1)? this.nextimgidx+1 : 0
    }
}

inter_slide.prototype.resetit=function()
{
    this.degree=10
    var crossobj=this.go(this.curcanvas)
    if (crossobj.filters&&crossobj.filters[0])
    {
        if (typeof crossobj.filters[0].opacity=="number") //if IE6+
        crossobj.filters(0).opacity=this.degree
        else //else if IE5.5-
        crossobj.style.filter="alpha(opacity="+this.degree+")"
    }
    else if (crossobj.style.MozOpacity)
    crossobj.style.MozOpacity=this.degree/101
    else if (crossobj.style.KhtmlOpacity)
    crossobj.style.KhtmlOpacity=this.degree/100
    else if (crossobj.style.opacity&&!crossobj.filters)
    crossobj.style.opacity=this.degree/101
}

inter_slide.prototype.startit=function()
{
    this.playing=1
    var crossobj=this.go(this.curcanvas)
    this.populateslide(crossobj, this.nextimgidx)
    if (this.pausecheck==1)
    { //if slideshow should pause onmouseover
        var cacheobj=this
        var crossobjcontainer=this.go("master"+this.issid)
        crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
        crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
    }
    this.rotateimg()
    if(this.no_auto)
    this.gostop();
    else if(this.man_start)
    this.gostop(this.go('gostp'+this.issid));
    else if(this.ics&&document.body.filters)
    { //kludge for IE5.5 bug
        this.buttons(false);
    }
}

inter_slide.prototype.gostop=function(el)
{
    if(el)
    el.value=el.value==' Stop '? ' Play ' : ' Stop ';
    if(this.inprocess&&this.playing)
    {
        clearTimeout(this.inprocess);
        this.nextimgidx-=this.faded;
    }
    this.playing=!this.playing;
    if(this.playing)
    {
        clearInterval(this.fadeclear)
        this.faded=1
        this.changeimg(true);

        var next=this.go('next'+this.issid), prev=this.go('prev'+this.issid);
        next.style.cursor="default";
        prev.style.cursor="default";
    }
    else
    {
        var loadidx=(this.keeptrack()<this.imgs.length-1)? this.keeptrack()+1 : 0
        this.loadimgidx[loadidx]=new Image();
        this.loadimgidx[loadidx].src=this.imgs[loadidx][0];
        this.jumper(this.jumperidx? this.jumperidx : 0)
        this.buttons(true);

        var next=this.go('next'+this.issid), prev=this.go('prev'+this.issid);
        next.style.cursor="pointer";
        next.style.cursor="hand";
        prev.style.cursor="pointer";
        prev.style.cursor="hand";
    }
}

inter_slide.prototype.keeptrack=function()
{
    if(!document.getElementsByTagName)
    return this.nextimgidx;
    var canvases=[this.go('canvas'+this.issid+'_0'), this.go('canvas'+this.issid+'_1')]
    if(canvases[0].style.zIndex>canvases[1].style.zIndex&&canvases[0].getElementsByTagName("img")[0])
    return parseInt(canvases[0].getElementsByTagName('img')[0].id.replace(/theimg/, ''))
    else if(canvases[1].getElementsByTagName("img")[0])
    return parseInt(canvases[1].getElementsByTagName('img')[0].id.replace(/theimg/, ''))
    else
    return this.nextimgidx;
}

function hide()
{
parent.document.getElementById("googlebox").style.display="none";
}

function enquiry()
{
    var s_host = parent.document.location.host;
    var s_pathname = parent.document.location.pathname;
    var arrTemp = s_pathname.split("/");
    var s_client = (arrTemp.length>0)?arrTemp[1]:"";

    var arrTemp1=product.split(" : ");
    var pname = arrTemp1[0];
    pname = escape(pname);
    var pcode = (arrTemp1.length>2)?arrTemp1[1]:"";
    pcode = escape(pcode);
    if(pcode=="")
    {
        var pid = arrTemp1[1];
    }
    else
    {
        var pid = arrTemp1[2];
    }
if((pname)&&(pcode))
   {
      parent.document.location = "http://"+s_host+"/"+s_client+"/query.html";
      add(pid,pcode,pname,'parent.location.href');
   }
   else if(pname)
   {
      parent.document.location = "http://"+s_host+"/"+s_client+"/query.html";
      add(pid,pcode,pname,'parent.location.href');
   }
   else if(pcode)
   {
      parent.document.location = "http://"+s_host+"/"+s_client+"/query.html";
      add(pid,pcode,pname,'parent.location.href');
   }
}

function detail()
{
    var s_host = parent.document.location.host;
    var s_pathname = parent.document.location.pathname;
    var arrTemp = s_pathname.split("/");
    var s_client = (arrTemp.length>0)?arrTemp[1]:"";
    var match1 = /.html/.test(s_client);

parent.document.location ="http://"+s_host+"/"+s_client+"/"+link_detail;
}

function roll_over(imgname,imgpath,tagname)
{
    document.getElementsByTagName(tagname)[imgname].src = imgpath;
}

function display_prd_no(n)
{
coM(m1,'m1mn2');
getnumber = n;
iss[0].jumper1();
}