function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Starry") aboutLocation=["starry.html","Starry",0];
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",1];
    if(thelocation=="1337 SSH") aboutLocation=["1337 SSH.html","/home/user/1337 SSH",2];
    if(thelocation=="Admin has the power") aboutLocation=["Admin has the power.html","/home/user/Admin has the power",3];
    if(thelocation=="Bash Legend") aboutLocation=["Bash Legend.html","/home/user/Bash Legend",4];
    if(thelocation=="bean") aboutLocation=["bean.html","/home/user/bean",5];
    if(thelocation=="bronze ASM") aboutLocation=["bronze ASM.html","/home/user/bronze ASM",6];
    if(thelocation=="C0mmand0r") aboutLocation=["C0mmand0r.html","/home/user/C0mmand0r",7];
    if(thelocation=="C0unt3r") aboutLocation=["C0unt3r.html","/home/user/C0unt3r",8];
    if(thelocation=="Capture") aboutLocation=["Capture.html","/home/user/Capture",9];
    if(thelocation=="Crime scene") aboutLocation=["Crime scene.html","/home/user/Crime scene",10];
    if(thelocation=="Cutter") aboutLocation=["Cutter.html","/home/user/Cutter",11];
    if(thelocation=="Cypher Anxiety") aboutLocation=["Cypher Anxiety.html","/home/user/Cypher Anxiety",12];
    if(thelocation=="D15C0v3ry") aboutLocation=["D15C0v3ry.html","/home/user/D15C0v3ry",13];
    if(thelocation=="DIR") aboutLocation=["DIR.html","/home/user/DIR",14];
    if(thelocation=="Easy access") aboutLocation=["Easy access.html","/home/user/Easy access",15];
    if(thelocation=="Find the Pass") aboutLocation=["Find the Pass.html","/home/user/Find the Pass",16];
    if(thelocation=="Greeks") aboutLocation=["Greeks.html","/home/user/Greeks",17];
    if(thelocation=="Grep Master") aboutLocation=["Grep Master.html","/home/user/Grep Master",18];
    if(thelocation=="Guess The Password") aboutLocation=["Guess The Password.html","/home/user/Guess The Password",19];
    if(thelocation=="Hackers Gathering") aboutLocation=["Hackers Gathering.html","/home/user/Hackers Gathering",20];
    if(thelocation=="Hash3rror") aboutLocation=["Hash3rror.html","/home/user/Hash3rror",21];
    if(thelocation=="Hashable") aboutLocation=["Hashable.html","/home/user/Hashable",22];
    if(thelocation=="Hide Data") aboutLocation=["Hide Data.html","/home/user/Hide Data",23];
    if(thelocation=="htmlentities") aboutLocation=["htmlentities.html","/home/user/htmlentities",24];
    if(thelocation=="I love music") aboutLocation=["I love music.html","/home/user/I love music",25];
    if(thelocation=="Iam Legend") aboutLocation=["Iam Legend.html","/home/user/Iam Legend",26];
    if(thelocation=="Keep it Simple") aboutLocation=["Keep it Simple.html","/home/user/Keep it Simple",27];
    if(thelocation=="LOUDER") aboutLocation=["LOUDER.html","/home/user/LOUDER",28];
    if(thelocation=="M45T3R") aboutLocation=["M45T3R.html","/home/user/M45T3R",29];
    if(thelocation=="Maximum Courage") aboutLocation=["Maximum Courage.html","/home/user/Maximum Courage",30];
    if(thelocation=="Modify Code") aboutLocation=["Modify Code.html","/home/user/Modify Code",31];
    if(thelocation=="Newsletter") aboutLocation=["Newsletter.html","/home/user/Newsletter",32];
    if(thelocation=="Pay Me") aboutLocation=["Pay Me.html","/home/user/Pay Me",33];
    if(thelocation=="Permission Master") aboutLocation=["Permission Master.html","/home/user/Permission Master",34];
    if(thelocation=="Pr0c3ss") aboutLocation=["Pr0c3ss.html","/home/user/Pr0c3ss",35];
    if(thelocation=="remove") aboutLocation=["remove.html","/home/user/remove",36];
    if(thelocation=="Repeated") aboutLocation=["Repeated.html","/home/user/Repeated",37];
    if(thelocation=="Searching for the cookie") aboutLocation=["Searching for the cookie.html","/home/user/Searching for the cookie",38];
    if(thelocation=="Secret User") aboutLocation=["Secret User.html","/home/user/Secret User",39];
    if(thelocation=="security model") aboutLocation=["security model.html","/home/user/security model",40];
    if(thelocation=="The Restricted Sessions") aboutLocation=["The Restricted Sessions.html","/home/user/The Restricted Sessions",41];
    if(thelocation=="This is Sparta") aboutLocation=["This is Sparta.html","/home/user/This is Sparta",42];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",43];
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