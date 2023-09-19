// Giving the movement to the circles along with the cursor 

var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";

    crsrBlur.style.left = dets.x - 175 + "px";
    crsrBlur.style.top = dets.y - 175 + "px";
})

// Giving animation to the cirsor when hover to the navigation elements 

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.5px solid white";
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#96c11e";
    })
})

// Giving animation to the navigation bar according to scroll 

gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: 90,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

// Giving animation body to black color when scroll down 

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

// Giving animation to the about us section 

gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
})

// Giving animation to the card section 

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
})

// Giving animation to the colons 

gsap.from("#colon1",{
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 4
    }
})

// Giving animation to the text in page 4 

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 68%",
        scrub: 3
    }
})