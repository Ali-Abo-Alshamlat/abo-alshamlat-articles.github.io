if (typeof(Storage) === "undefined") { 
    console.error("Enable localStorage to best experience")
}

__get_location_info = () => {
    var _location = new XMLHttpRequest();
    _location.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        localStorage["location"]=this.responseText.replace(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g,"");
        }
    };
    _location.open("GET", "https://api.codetabs.com/v1/geolocation/json", true);
    _location.send();
}

if(localStorage["wallpaper"]==undefined) localStorage["wallpaper"]="/icons/unsplash/wall-1.webp";



window.addEventListener("load",()=>{
    document.querySelector(".wallpaper").src=localStorage["wallpaper"];
});