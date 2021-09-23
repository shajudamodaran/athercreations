
let CLOSE_NAV_DRAWER = () => {

    document.getElementById("navDrawer").className = "nav-drawer-hidden";
}

let OPEN_NAV_DRAWER = () => {

    document.getElementById("navDrawer").className = "nav-drawer";
}


var myIndex = 0;
window.onload = function () {


    startSliding();
}




let startSliding = () => {

    let images_count = $("#slderImages > img").length
    var x = document.getElementById("slderImages").children;


    for (i = 0; i < images_count; i++) {
        //console.log("hiding",i);
        x[i].className = "slide-image-hide";
    }

    myIndex++;

    if (myIndex > images_count) { myIndex = 1 }

    var y = document.getElementById("slderImages").children;
    //console.log(myIndex,y[myIndex-1]);
    y[myIndex - 1].className = "slide-image";
    setTimeout(startSliding, 5000); // Change image every 4 seconds



}