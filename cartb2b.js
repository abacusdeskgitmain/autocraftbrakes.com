// ------------- global variable and functions --------------------------

var message1 = [];

message1["1"] = "Client-ID NOT Passed";
message1["2"] = "Item code NOT Passed";
message1["3"] = "Amount NOT Passed";
message1["4"] = "Payment Gateway NOT defined";
message1["5"] = "Company-Catalog Record Not Found";
message1["6"] = "Client Company is disabled";
message1["7"] = "Product catalog is disabled";
message1["8"] = "Please configure client service";
message1["9"] = "RFQ is not configured";
message1["10"] = "Session has been expired";
message1["11"] = "Action NOT Defined";
message1["12"] = "Item Not Found";
message1["13"] = "Item is Disabled";
message1["14"] = "Required Parameters Not Passed";
message1["15"] = "Quantity is Not Positive Numeric Value";
message1["16"] = "SiteID could pot provide encryption key";
message1["17"] = "Unable to decrypt the content recieved";
message1["18"] = "Unknown order-id from gateway";
message1["19"] = "Query has already been sent";
message1["20"] = "Template Not found";
message1["21"] = "Undefined action";
message1["22"] = "Problem with cookie-setting";
message1["23"] = "Field Size Exceeding";
message1["24"] = "Incorrect value";
message1["item_already"] = "This Item is already Present in the Enquiry Basket";
message1["itemadded"] = "Your item has been added to the Enquiry Basket";
message1["item_contains"] = "Your Enquiry Basket contains following items";
message1["item_deleted"] = "Selected items has been deleted";
message1["cart_emptied"] = "Your Enquiry Basket has been emptied";
message1["cart_updated"] = "Your Enquiry Basket has been updated";
message1["submit_enquiry"] = "<b>Carefully review the items in your Enquiry Basket below.<br>To send the enquiry please complete the form.<br>All fields marked <font COLOR='RED'>*</font> are mandatory.</b>";



function get_message(messagecode)
{
    if(messagecode == "")   {
        return;
    }
    else    {
        return eval("message1['"+messagecode+"']");
    }
}


function getCartCookie(Name)
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


function setCartCookie(name, value)
{
    expires = new Date();
    expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);

    if (value.length > 0)
    document.cookie = name + "=" + escape(value)+ ";"+"expires=" + expires.toGMTString() + ";";
}

//------------------------ cart related functions -----------------------------

function add(iid, pcode, pname, referer)
{
    var myCart;

    if((cookie = getCartCookie("CART_SESSION")) > "")   {
        myCart = eval("(" + cookie + ")");

        //when cart cookie is set

        //check if item already present in cart
        var itemsArr = myCart[0];
        var item_exists = 0;
        for(i=0; i< itemsArr.length; i++)
        {
            if(itemsArr[i].item_id == iid)  {
                myCart[1].message1 = get_message("item_already");
                item_exists=1;
                break;
            }
        }

        //item not in cart, then add new item at end or item array in cart
        if(item_exists == 0)    {
            //item not in cart, then add item
            //add new cart product object at end of array iemyCart[0]
            var item = new Object();
            item.item_quantity = '';
	    item.item_id = iid;//value can be numeric only..
            item.item_code = pcode;//value can be non numeric.. also encode it
            item.item_name = pname;//encode it as value can have " in itself
            myCart[0][myCart[0].length]=item;//add new item object to end of cart item array
            myCart[1].message1 = get_message("itemadded");
        }
    }
    else
    {
        //cookie does not exist... make new cart cookie
        var myCart = new Array(2);
        myCart[0] = new Array();
        myCart[1] = new Object();

        var item = new Object();
        item.item_quantity = '';
	item.item_id = iid;
        item.item_code = pcode;
        item.item_name = pname;
        myCart[0][myCart[0].length]=item;//add new item object to end of cart item array

        //add other information in cart
        myCart[1].message1 = get_message("itemadded");
    }

    myCart[1].referer = eval(referer);
    //reset cart cookie
    var myCartJSON = myCart.toJSONString();
    setCartCookie("CART_SESSION",myCartJSON);

    return true;
}
function removeitem1(i,frm)
{
    update_cart(frm);
    var myCart;
    if((cookie = getCartCookie("CART_SESSION")) > "")   {
        myCart = eval("(" + cookie + ")");
        //when cart cookie is set

        //delete i'th record from cookiy cart array
        var itemsArr = myCart[0];
        myCart[0].splice(i,1);
        myCart[1].message1 = get_message("item_deleted");

        if(itemsArr.length ==0)
        {
            myCart[1].message1 = get_message("cart_emptied");
        }

        //reset cart cookie
        var myCartJSON = myCart.toJSONString();
        setCartCookie("CART_SESSION",myCartJSON);
    }

    return true;
}
function removeitem(i)
{
    var myCart;
    if((cookie = getCartCookie("CART_SESSION")) > "")   {
        myCart = eval("(" + cookie + ")");
        //when cart cookie is set

        //delete i'th record from cookiy cart array
        var itemsArr = myCart[0];
        myCart[0].splice(i,1);
        myCart[1].message1 = get_message("item_deleted");

        if(itemsArr.length ==0)
        {
            myCart[1].message1 = get_message("cart_emptied");
        }

        //reset cart cookie
        var myCartJSON = myCart.toJSONString();
        setCartCookie("CART_SESSION",myCartJSON);
    }

    return true;
}

function update_cart(frm)
{
    var myCart;
    if((cookie = getCartCookie("CART_SESSION")) > "")   {
        myCart = eval("(" + cookie + ")");
        //when cart cookie is set

        //delete item from it
        var itemsArr = myCart[0];
        var d=0;

        for(i=0; i< itemsArr.length; i++)
        {
            var v = eval("document."+frm+".quantity_"+i+".value");
            //update item in cart array
            itemsArr[i].item_quantity = v;
	    myCart[1].message1 = get_message("cart_updated");
        }

        if(itemsArr.length == 0)
        {
            myCart[1].message1 = get_message("cart_emptied");
        }
        //-----------------------------------------------------

        //reset cart cookie
        var myCartJSON = myCart.toJSONString();
        setCartCookie("CART_SESSION",myCartJSON);
    }

    return true;
}

function empty_cart()
{
    var myCart;

    if((cookie = getCartCookie("CART_SESSION")) > "")   {
        myCart = eval("(" + cookie + ")");

        var itemsArr = myCart[0];
        itemsArr.splice(0,itemsArr.length);//Empty array

        var myCartJSON = myCart.toJSONString();
        setCartCookie("CART_SESSION",myCartJSON);
    }
    //do nothing as no cart found
    return true;
}

function isEmpty()
{
var isEmpty = false;

    if((cookie = getCartCookie("CART_SESSION")) > "")
    {
        var myCart = eval("(" + cookie + ")");
        var p = myCart[0];
        if(p.length > 0)
        {
            isEmpty = true;
        }
        else
        {
            isEmpty = false;
        }
    }
return isEmpty;
}

function checkAndUpdate(frm)
{
	update_cart(frm);
	eval("document."+frm+".action = \"cart.html\"");
	eval("document."+frm+".submit()");
}

function add_more_items(frm)
{
	update_cart(frm);
	if((cookie = getCartCookie("CART_SESSION")) > "")
    	{
		var myCart = eval("(" + cookie + ")");
		if(myCart[1].referer)
		{
			eval("document."+frm+".action = myCart[1].referer");
		}
		else
		{
			eval("document."+frm+".action = \"my-catalog.html\"");

		}
        }
	else
	{

		eval("document."+frm+".action = \"my-catalog.html\"");

	}
	eval("document."+frm+".submit()");
}

function submit_query(frm)
{
	update_cart(frm);
	eval("document."+frm+".action = \"checkout.html\"");
	eval("document."+frm+".submit()");
}