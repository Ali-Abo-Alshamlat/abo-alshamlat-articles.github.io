function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="D4rkHun7") aboutLocation=["D4rkHun7.html","/home/user/D4rkHun7",1];
    if(thelocation=="easywin") aboutLocation=["easywin.html","/home/user/easywin",2];
    if(thelocation=="History 102") aboutLocation=["History 102.html","/home/user/History 102",3];
    if(thelocation=="Job") aboutLocation=["Job.html","/home/user/Job",4];
    if(thelocation=="Qakbot Case") aboutLocation=["Qakbot Case.html","/home/user/Qakbot Case",5];
    if(thelocation=="T3ST4R") aboutLocation=["T3ST4R.html","/home/user/T3ST4R",6];
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