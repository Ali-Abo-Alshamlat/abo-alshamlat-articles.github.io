function doInactive(obj){
    obj.className="location-inactive";
}

function doActive(obj){
    obj.className="location-active";
}

function openLocation(thelocation){
    if(thelocation=="Home") aboutLocation=["home.html","/home/user/",0];
    if(thelocation=="Description") aboutLocation=["Description.html","/home/user/Description",1];
    if(thelocation=="task1") aboutLocation=["task1.html","/home/user/task1",2];
    if(thelocation=="task2") aboutLocation=["task2.html","/home/user/task2",3];
    if(thelocation=="task3") aboutLocation=["task3.html","/home/user/task3",4];
    if(thelocation=="task4") aboutLocation=["task4.html","/home/user/task4",5];
    if(thelocation=="task5") aboutLocation=["task5.html","/home/user/task5",6];
    if(thelocation=="task6") aboutLocation=["task6.html","/home/user/task6",7];
    if(thelocation=="task7") aboutLocation=["task7.html","/home/user/task7",8];
    if(thelocation=="task8") aboutLocation=["task8.html","/home/user/task8",9];
    if(thelocation=="task9") aboutLocation=["task9.html","/home/user/task9",10];
    if(thelocation=="task10") aboutLocation=["task10.html","/home/user/task10",11];
    if(thelocation=="task11") aboutLocation=["task11.html","/home/user/task11",12];
    if(thelocation=="task12") aboutLocation=["task12.html","/home/user/task12",13];
    if(thelocation=="task13") aboutLocation=["task13.html","/home/user/task13",14];
    if(thelocation=="task14") aboutLocation=["task14.html","/home/user/task14",15];
    if(thelocation=="task15") aboutLocation=["task15.html","/home/user/task15",16];
    if(thelocation=="task16") aboutLocation=["task16.html","/home/user/task16",17];
    if(thelocation=="task17") aboutLocation=["task17.html","/home/user/task17",18];
    if(thelocation=="task18") aboutLocation=["task18.html","/home/user/task18",19];
    if(thelocation=="task19") aboutLocation=["task19.html","/home/user/task19",20];
    if(thelocation=="task20") aboutLocation=["task20.html","/home/user/task20",21];
    if(thelocation=="task21") aboutLocation=["task21.html","/home/user/task21",22];
    if(thelocation=="task22") aboutLocation=["task22.html","/home/user/task22",23];
    if(thelocation=="task23") aboutLocation=["task23.html","/home/user/task23",24];
    if(thelocation=="Other Locations") aboutLocation=["other_locations.html","Other Locations",25];
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