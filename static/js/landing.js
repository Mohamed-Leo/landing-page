// Start header
let closelist = document.getElementById("closelist");
let openlist = document.getElementById("openlist");
let mediadiv = document.getElementById("medianav");


closelist.addEventListener("mousedown" , () => {
    mediadiv.style.cssText = `left: -100%;`;
});

openlist.addEventListener("mousedown" , () => {
    mediadiv.style.cssText = `left: 0;`;
});

// End header



// Start scroll effect
let sections = document.querySelectorAll("section")


window.addEventListener('scroll' , () => {
    sections.forEach( sec  => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 180;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    })
})





// upbtn---------------
let upbtn = document.getElementById("upbtn");

window.onscroll = () => {
    if (scrollY >= 1000) {
        upbtn.style.display = "block";
    }
    else {
        upbtn.style.display = "none";
    }
}

upbtn.onclick = () => {
    scroll({
        top : 0,
        behavior : "smooth"
    })
};