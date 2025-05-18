let currentsong = new Audio();

function playsong(track) {
    currentsong.src = "/songs/" + track;
    currentsong.play();

}
async function song(url, originalurl) {

    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    console.log("response", response)
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log("a", as);
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            originalurl.push(element.href)
            url.push(element.href.split("/songs/")[1].replaceAll("%20", " "));
        }
    }

}

function songcard(url) {
    let card = document.getElementsByClassName("song");
    console.log("card", card);
    for (let index = 0; index < card.length; index++) {
        const element = card[index];
        element.innerHTML = element.innerHTML + url[index];

    }

}


function playsongleft() {
    Array.from(document.querySelector(".leftmid").getElementsByClassName("leftlis")).forEach(e => {
        e.addEventListener("click", element => {
            console.log("clicked")
            playsong(e.querySelector(".song").innerHTML);
        })

    })
}
function seekbar() {
    Array.from(document.querySelector(".leftmid").getElementsByClassName("leftlis")).forEach(e => {
        e.addEventListener("click", function () {
            console.log("clicked")
            console.log(e.querySelector(".song").innerHTML)
            let variable = document.querySelector(".rightseekbar").getElementsByClassName("rightsong")[0]
            variable.innerHTML = `<div class="rightsong">${e.querySelector(".song").innerHTML}</div>`
            let playbutton = document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0]
            playbutton.src = "http://127.0.0.1:3000/pause.svg"
            console.log(variable.innerHTML)

        })
    })
}
function playbutton() {
    let button = document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0]
    button.addEventListener("click", function () {
        console.log("clicked")
        // if (button.src = "http://127.0.0.1:3000/pause.svg") {
        //     console.log("clicked1")
        //     button.src = "http://127.0.0.1:3000/play.svg"
        // }
        // else {
        //     if (button.src = "http://127.0.0.1:3000/play.svg") {
        //         console.log("clicked2")
        //         button.arc = "http://127.0.0.1:3000/pause.svg"
        //     }
        // }
        if (button.src = "http://127.0.0.1:3000/play.svg") {
            console.log("clicked2")
            button.src = "http://127.0.0.1:3000/pause.svg"
        } else {
            console.log("clicked1")
            button.src = "http://127.0.0.1:3000/play.svg"
        }
    })
}
async function main() {
    let url = [];
    let originalurl = [];
    await song(url, originalurl)
    //songcard(url);

    let cards = document.querySelector(".leftmid").getElementsByTagName("ul")[0]
    for (const element of url) {
        cards.innerHTML = cards.innerHTML + `<li class="leftlis"><img height="28px" src="song.svg" alt="" class="songimg">
                <div class="song">${element}</div>
                <div class="playbutton">
                    <img height="23px" src="play.svg" alt="">
                </div></li>`
    }
    playsongleft();
    seekbar();
    document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0].addEventListener("click", function () {
        console.log("clicked")
        if (document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0].src = "http://127.0.0.1:3000/pause.svg") {
            console.log("clicked1")
            document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0].src = "http://127.0.0.1:3000/play.svg"
        }
        if (document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0].src = "http://127.0.0.1:3000/play.svg") {
            console.log("clicked2")
            document.querySelector(".rightseekbar").getElementsByClassName("seekbarplaybutton")[0].src = "http://127.0.0.1:3000/pause.svg"
        } 
    })
    
}
main();