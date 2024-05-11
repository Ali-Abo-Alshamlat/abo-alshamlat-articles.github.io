function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Starry") aboutLocation=["starry.html","Starry",0];
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",1];
    if(thelocation=="Back to History") aboutLocation=["Back to History.html","/home/user/Back to History",2];
    if(thelocation=="Business Gathering") aboutLocation=["Business Gathering.html","/home/user/Business Gathering",3];
    if(thelocation=="Capture") aboutLocation=["Capture.html","/home/user/Capture",4];
    if(thelocation=="Cash") aboutLocation=["Cash.html","/home/user/Cash",5];
    if(thelocation=="Close Look") aboutLocation=["Close Look.html","/home/user/Close Look",6];
    if(thelocation=="Contribute") aboutLocation=["Contribute.html","/home/user/Contribute",7];
    if(thelocation=="Crash") aboutLocation=["Crash.html","/home/user/Crash",8];
    if(thelocation=="Crime scene") aboutLocation=["Crime scene.html","/home/user/Crime scene",9];
    if(thelocation=="CVE Number") aboutLocation=["CVE Number.html","/home/user/CVE Number",10];
    if(thelocation=="Distribution") aboutLocation=["Distribution.html","/home/user/Distribution",11];
    if(thelocation=="Do you trust senders") aboutLocation=["Do you trust senders.html","/home/user/Do you trust senders",12];
    if(thelocation=="Encoding") aboutLocation=["Encoding.html","/home/user/Encoding",13];
    if(thelocation=="Founder") aboutLocation=["Founder.html","/home/user/Founder",14];
    if(thelocation=="Greeks") aboutLocation=["Greeks.html","/home/user/Greeks",15];
    if(thelocation=="Hackers Gathering") aboutLocation=["Hackers Gathering.html","/home/user/Hackers Gathering",16];
    if(thelocation=="Hide me") aboutLocation=["Hide me.html","/home/user/Hide me",17];
    if(thelocation=="htmlentities") aboutLocation=["htmlentities.html","/home/user/htmlentities",18];
    if(thelocation=="INFRA") aboutLocation=["INFRA.html","/home/user/INFRA",19];
    if(thelocation=="Intercept") aboutLocation=["Intercept.html","/home/user/Intercept",20];
    if(thelocation=="Japanese Warrior") aboutLocation=["Japanese Warrior.html","/home/user/Japanese Warrior",21];
    if(thelocation=="JPG Magic") aboutLocation=["JPG Magic.html","/home/user/JPG Magic",22];
    if(thelocation=="CasModify Codeh") aboutLocation=["Modify Code.html","/home/user/Modify Code",23];
    if(thelocation=="My box") aboutLocation=["My box.html","/home/user/My box",24];
    if(thelocation=="one click") aboutLocation=["one click.html","/home/user/one click",25];
    if(thelocation=="Pay Me") aboutLocation=["Pay Me.html","/home/user/Pay Me",26];
    if(thelocation=="Persistence") aboutLocation=["Persistence.html","/home/user/Persistence",27];
    if(thelocation=="Precious Vulnerability") aboutLocation=["Precious Vulnerability.html","/home/user/Precious Vulnerability",28];
    if(thelocation=="remove") aboutLocation=["remove.html","/home/user/remove",29];
    if(thelocation=="Reward") aboutLocation=["Reward.html","/home/user/Reward",30];
    if(thelocation=="Robot") aboutLocation=["Robot.html","/home/user/Robot",31];
    if(thelocation=="SCADA") aboutLocation=["SCADA.html","/home/user/SCADA",32];
    if(thelocation=="Scan") aboutLocation=["Scan.html","/home/user/Scan",33];
    if(thelocation=="security model") aboutLocation=["security model.html","/home/user/security model",34];
    if(thelocation=="Silent Look") aboutLocation=["Silent Look.html","/home/user/Silent Look",35];
    if(thelocation=="TrendMicro Conference") aboutLocation=["TrendMicro Conference.html","/home/user/TrendMicro Conference",36];
    if(thelocation=="User Name") aboutLocation=["User Name.html","/home/user/User Name",37];
    if(thelocation=="Trash") aboutLocation=["trash.html","Trash",38];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",39];
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