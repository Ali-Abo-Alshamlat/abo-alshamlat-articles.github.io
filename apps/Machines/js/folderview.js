function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="Crashed") aboutLocation=["Crashed.html","/home/user/Crashed",1];
    if(thelocation=="Injector") aboutLocation=["Injector.html","/home/user/Injector",2];
    if(thelocation=="Open Doors") aboutLocation=["Open Doors.html","/home/user/Open Doors",3];
    if(thelocation=="Shadower") aboutLocation=["Shadower.html","/home/user/Shadower",4];
    if(thelocation=="version") aboutLocation=["version.html","/home/user/version",5];
    if(thelocation=="WPA Crack") aboutLocation=["WPA Crack.html","/home/user/WPA Crack",6];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",7];
    parent.document.getElementsByClassName("content-iframe")[0].src=aboutLocation[0];

    try {
        doInactive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-active")[0]);
    } catch {}
    if(aboutLocation[2]!=-1) doActive(parent.document.getElementsByClassName("side-iframe")[0].contentWindow.document.getElementsByClassName("location-inactive")[aboutLocation[2]]);
    parent.document.getElementById("url-bar").value=aboutLocation[1];
}

function openFile(theFile){
    if(theFile=="9XngoIpxcEo.jpg") aboutFile=["../../icons/unsplash/9XngoIpxcEo.jpg","picture"];
    if(theFile=="qDG7XKJLKbs.jpg") aboutFile=["../../icons/unsplash/qDG7XKJLKbs.jpg","picture"];
    if(theFile=="Tjbk79TARiE.jpg") aboutFile=["../../icons/unsplash/Tjbk79TARiE.jpg","picture"];

    if(aboutFile[1]=="picture"){
        parent.parent.start_app('eog',"file="+aboutFile[0]);
    }
}