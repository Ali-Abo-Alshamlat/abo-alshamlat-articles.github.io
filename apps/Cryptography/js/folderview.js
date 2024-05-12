function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Starry") aboutLocation=["starry.html","Starry",0];
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",1];
    if(thelocation=="Arithmetic") aboutLocation=["Arithmetic.html","/home/user/Arithmetic",2];
    if(thelocation=="Crack the Hash") aboutLocation=["Crack the Hash.html","/home/user/Crack the Hash",3];
    if(thelocation=="Eye of Sauron") aboutLocation=["Eye of Sauron.html","/home/user/Eye of Sauron",4];
    if(thelocation=="Get Rid Of Them All") aboutLocation=["Get Rid Of Them All.html","/home/user/Get Rid Of Them All",5];
    if(thelocation=="Getting Started") aboutLocation=["Getting Started.html","/home/user/Getting Started",6];
    if(thelocation=="Guess The Password") aboutLocation=["Guess The Password.html","/home/user/Guess The Password",7];
    if(thelocation=="Hash3rror") aboutLocation=["Hash3rror.html","/home/user/Hash3rror",8];
    if(thelocation=="Hide Data") aboutLocation=["Hide Data.html","/home/user/Hide Data",9];
    if(thelocation=="hsah") aboutLocation=["hsah.html","/home/user/hsah",10];
    if(thelocation=="Irving Secret") aboutLocation=["Irving Secret.html","/home/user/Irving Secret",11];
    if(thelocation=="OTMP") aboutLocation=["OTMP.html","/home/user/OTMP",12];
    if(thelocation=="RSA101") aboutLocation=["RSA101.html","/home/user/RSA101",13];
    if(thelocation=="Transposed") aboutLocation=["Transposed.html","/home/user/Transposed",14];
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

