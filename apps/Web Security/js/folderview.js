function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="Admin has the power") aboutLocation=["Admin has the power.html","/home/user/Admin has the power",1];
    if(thelocation=="Dark Project") aboutLocation=["Dark Project.html","/home/user/Dark Project",2];
    if(thelocation=="Encrypted Database") aboutLocation=["Encrypted Database.html","/home/user/Encrypted Database",3];
    if(thelocation=="Iam Legend") aboutLocation=["Iam Legend.html","/home/user/Iam Legend",4];
    if(thelocation=="JOIN TEAM") aboutLocation=["JOIN TEAM.html","/home/user/JOIN TEAM",5];
    if(thelocation=="Newsletter") aboutLocation=["Newsletter.html","Newsletter",6];
    if(thelocation=="Searching for the cookie") aboutLocation=["Searching for the cookie.html","Searching for the cookie",7];
    if(thelocation=="share the ideas") aboutLocation=["share the ideas.html","share the ideas",8];
    if(thelocation=="String highlighter") aboutLocation=["String highlighter.html","String highlighter",9];
    if(thelocation=="The Restricted Sessions") aboutLocation=["The Restricted Sessions.html","The Restricted Sessions",10];
    if(thelocation=="This is Sparta") aboutLocation=["This is Sparta.html","This is Sparta",11];
    if(thelocation=="WEIRD BLOQ") aboutLocation=["WEIRD BLOQ.html","WEIRD BLOQ",12];
    if(thelocation=="who is admin") aboutLocation=["who is admin.html","who is admin",13];
    if(thelocation=="Wrong Token") aboutLocation=["Wrong Token.html","Wrong Token",14];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",15]
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