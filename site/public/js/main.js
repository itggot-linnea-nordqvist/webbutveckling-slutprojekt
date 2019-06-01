function menu(event){
    let menu=document.querySelector("nav")
    menu.classList.toggle("test")
}

function swipe1(event){
    let swipe=document.querySelector("#firstp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#first_red")
    red.classList.toggle("redfilter")
}

function swipe12(event){
    let swipe=document.querySelector("#firstp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#first_green")
    red.classList.toggle("greenfilter")
}

function swipe2(event){
    let swipe=document.querySelector("#secondp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#second_red")
    red.classList.toggle("redfilter")

}

function swipe22(event){
    let swipe=document.querySelector("#secondp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#second_green")
    red.classList.toggle("greenfilter")

}

function swipe3(event){
    let swipe=document.querySelector("#thirdp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#third_red")
    red.classList.toggle("redfilter")

}

function swipe32(event){
    let swipe=document.querySelector("#thirdp")
    swipe.classList.toggle("placering")
    let red=document.querySelector("#third_green")
    red.classList.toggle("greenfilter")
}

function bort(event){
    let bort=document.querySelector(".reklam")
    bort.classList.toggle("visibility")
}
