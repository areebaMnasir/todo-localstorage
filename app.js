// const theme = document.getElementById("dark").addEventListener("click", function(){
//     let themeColor = "purple";
//     document.body.style.background = themeColor;
//     let image = document.getElementById("light");
    

// })
const light = document.getElementById("light");
const body = document.querySelector("body")

function theme(){
    
    if(body.style.backgroundColor === "black"){
         body.style.backgroundColor = "white";
    }
    else{
        body.style.backgroundColor = "black";
    }
    console.log(body)
}


const openbar = document.getElementById("bar");
const sideBar = document.getElementById("responsive-bar");

function clickbar(){
    if(sideBar.style.display === "block"){
        sideBar.style.display = "none";
    }
    else{
        sideBar.style.display = "block";
    }
    
}


