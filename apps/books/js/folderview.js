function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="CISCO - 640-802-ccna") aboutLocation=["CISCO - 640-802-ccna.html","/home/user/CISCO - 640-802-ccna",1];
    if(thelocation=="CompTIA Security Plus Syllabus and Outline") aboutLocation=["CompTIA Security Plus Syllabus and Outline.html","/home/user/CompTIA Security Plus Syllabus and Outline",2];
    if(thelocation=="Fundamentals of IP and SoC Security") aboutLocation=["Fundamentals of IP and SoC Security.html","/home/user/Fundamentals of IP and SoC Security",3];
    if(thelocation=="Jon_Erickson_Hacking_the_art_of_exploitation_No_Starch_Press_2008") aboutLocation=["Jon_Erickson_Hacking_the_art_of_exploitation_No_Starch_Press_2008.html","/home/user/Jon_Erickson_Hacking_the_art_of_exploitation_No_Starch_Press_2008",4];
    if(thelocation=="Just_for_fun_The_Story_of_an_Accidental_Revolutionary_pdf_PDFDrive") aboutLocation=["Just_for_fun_The_Story_of_an_Accidental_Revolutionary_pdf_PDFDrive.html","/home/user/Just_for_fun_The_Story_of_an_Accidental_Revolutionary_pdf_PDFDrive",5];
    if(thelocation=="Linux Forensics - Philip Polstra") aboutLocation=["Linux Forensics - Philip Polstra.html","/home/user/Linux Forensics - Philip Polstra",6];
    if(thelocation=="linux-bible-9th-ed-2015-") aboutLocation=["linux-bible-9th-ed-2015-.html","/home/user/linux-bible-9th-ed-2015-",7];
    if(thelocation=="McGraw_Hill_Principles_Of_Computer_Security_CompTIA_Security_Plus") aboutLocation=["McGraw_Hill_Principles_Of_Computer_Security_CompTIA_Security_Plus.html","/home/user/McGraw_Hill_Principles_Of_Computer_Security_CompTIA_Security_Plus",8];
    if(thelocation=="Penetration Testing - A hands-on introduction to Hacking") aboutLocation=["Penetration Testing - A hands-on introduction to Hacking.html","/home/user/Penetration Testing - A hands-on introduction to Hacking",9];
    if(thelocation=="Wireshark Network Security") aboutLocation=["Wireshark Network Security.html","/home/user/Wireshark Network Security",10];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",11];
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