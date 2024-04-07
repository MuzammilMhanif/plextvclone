// Video Stream JS ///
let videoplayer = document.querySelector('.video-player')
let videojee = videoplayer.querySelector(".video");
let playbtn = videoplayer.querySelector(".play-btn");


let btnmusic = document.getElementById("btnmusic");
let volturn = true;
let mymusic = new video();
mymusic.src = "../mysong.mp3";
btnmusic.addEventListener("click", function(){
    if(volturn){        
        this.setAttribute("class", "fas fa-volume-up");
        volturn = false;
        mymusic.play();
    }
    else {
        this.setAttribute("class", "fas fa-volume-mute");
        volturn = true;
        mymusic.pause();
    }
})