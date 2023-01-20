/**
* This is a description
* @namespace diopsi.de
* @method ~~~~~~~~~
* @param {String} some string
* @param {Object} some object
* @return {bool} some bool
*/



window.onload = dimension_update;
window.onresize = dimension_update;

function array_elements_menu() { return ["menu_about","menu_resources","menu_diopside"]; }
function array_elements_escape() { return ["escape_box"]; }
function array_elements_detail_display() { return ["detail_resources","detail_about"]; }
function array_elements_accent_detail() { return ["accent_detail_about","accent_detail_resources"]; }
function array_class() { return ["animate-draw","animate-erase","visible","hidden","fade-display", "fade-hide"]; }
function object_sizes() { return {
    wide:{detail:"passed_in_sizer",menu:"7%",exit:"3%"},
    tall:{detail:"passed_in_sizer",menu:"20%",exit:"10%"}
};
}

function call_begin () {

    console.log("call_begin was just clicked")

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:3000/", true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    
};

function call_new () {

    console.log("call_new was just clicked")

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://localhost:4000/", true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    
};

function sizer (item) {
    var w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    
    var sizes = object_sizes()

    if (h > w) {
        sizes.tall.detail= w*95/100;
        shape = "tall";
    }
    else {
        sizes.wide.detail= h*2/3;
        shape = "wide";
    }

    item_size = sizes[shape][item]
    
    return item_size
};

function dimension_update () {
    var list_menu = array_elements_menu()
    var list_escape = array_elements_escape()
    var list_detail = array_elements_detail_display()
    var length_menu = list_menu.length
    var length_escape = list_escape.length
    var length_detail = list_detail.length

    var detail_width = sizer("detail")
    var main_menu_width = sizer("menu")
    var escape_width = sizer("exit")

    for (let i = 0; i < length_detail; i++) { 
        document.getElementById(list_detail[i]).style.width = detail_width + "px";
    }

    for (let i = 0; i < length_menu; i++) {   
        document.getElementById(list_menu[i]).style.width = main_menu_width;  
    }

    for (let i = 0; i < length_escape; i++) { 
        document.getElementById(list_escape[i]).style.width = escape_width;
    }

};

function apply_class (item, action) {
    var list_class = array_class()

    if (action == "draw") {
        document.getElementById(item).classList.remove(list_class[1]);
        document.getElementById(item).classList.add(list_class[0]);
    }

    else if (action == "erase") {
        document.getElementById(item).classList.remove(list_class[0]);
        document.getElementById(item).classList.add(list_class[1]);
    }
    
    else if (action == "fadeIn") {
        document.getElementById(item).classList.remove(list_class[5]);
        document.getElementById(item).classList.add(list_class[4]);
        document.getElementById(item).classList.add(list_class[2]);
    }

    else if (action == "fadeOut") {
        document.getElementById(item).classList.remove(list_class[4]);
        document.getElementById(item).classList.add(list_class[5]);
        document.getElementById(item).classList.remove(list_class[2]);
    }
};

function display_detail (subject) {

    var list_menu = array_elements_menu()
    var list_escape = array_elements_escape()
    var list_accent = array_elements_accent_detail()
    var length_menu = list_menu.length
    var length_escape = list_escape.length
    var length_accent = list_accent.length

    localStorage.setItem("detail_displayed", subject);

    document.getElementById(subject).style.zIndex = "1";
    apply_class (subject,"fadeIn")

    for (let i = 0; i < length_accent; i++) { 
        apply_class (list_accent[i],"draw")
    }
    
    for (let i = 0; i < length_escape; i++) { 
        apply_class (list_escape[i],"draw")
        document.getElementById(list_escape[i]).style.zIndex = "1";         
    }

    for (let i = 0; i < length_menu; i++) { 
        apply_class (list_menu[i],"erase")
        document.getElementById(list_menu[i]).style.zIndex = "-1";
    }
};

function display_main () {
    var list_menu = array_elements_menu()
    var list_escape = array_elements_escape()
    var list_accent = array_elements_accent_detail()
    var length_menu = list_menu.length
    var length_escape = list_escape.length
    var length_accent = list_accent.length

    var detail_displayed = localStorage.getItem("detail_displayed");

    apply_class (detail_displayed,"fadeOut")

    console.log(detail_displayed)

    for (let i = 0; i < length_accent; i++) { 
        apply_class (list_accent[i],"erase")
    }

    for (let i = 0; i < length_escape; i++) { 
        apply_class (list_escape[i],"erase")
        document.getElementById(list_escape[i]).style.zIndex = "-1";  
    }

    for (let i = 0; i < length_menu; i++) { 
        apply_class (list_menu[i],"draw")
        document.getElementById(list_menu[i]).style.zIndex = "1";  
    }

    document.getElementById(detail_displayed).style.zIndex = "-2";   
};


