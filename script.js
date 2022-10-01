gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

function locomotivejs(){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
      
      // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
      });
      
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
}

locomotivejs();

gsap.to("#right img" ,{
    y:"-200vh",
    duration:12,
    repeat: -1,
    rotate:"360deg",
    ease: Power0.easeNone
})
gsap.to("#lastimg" ,{
    duration:4,
    repeat: -1,
    rotate:"360deg",
    ease: Power0.easeNone
})

document.querySelectorAll(".image")
    .forEach(function (elem) {
        gsap.from(elem, {
          opacity: 0,
          rotateX : "60deg",
          duration: 2,
          scrollTrigger: {
              scroller: "#main",
             trigger: elem,
             start: "top 50%",
           },
       })
    })

document.querySelectorAll(".t")
    .forEach(function (elem) {
        gsap.from(elem, {
          opacity: 0,
          y:100,
          duration: 1,
          scrollTrigger: {
              scroller: "#main",
             trigger: elem,
             start: "top 80%",
           },
       })
    })

gsap.from("#left",{
    opacity: 0,
     y:100,
    duration: 1,
})
gsap.from("#mail",{
        opacity:0,
        y:-40,
        duration:1.5,
        scrollTrigger:{
            trigger:"#mail",
            scroller:"#main",
        }
})
gsap.from("#nid",{
        opacity:0,
        y:40,
        duration:1,
        scrollTrigger:{
            trigger:"#nid",
            scroller:"#main",
        }
   })

gsap.from(".nav1",{
    opacity:0,
        y:40,
        duration:1,
        stagger:.1,
        scrollTrigger:{
            trigger:".nav1",
            scroller:"#main",
            start:"top 50%"
        }
})

gsap.from("#animpage",{
    y:"100vh",
    ease: Power3.easeInOut

})

gsap.to("#animpage",{
    y:"-100vh",
    duration:1.5,
    ease: Power3.easeInOut

})
gsap.from("#animpage1",{
    y:"100vh",
    ease: Power3.easeInOut,
    
})

gsap.to("#animpage1",{
    y:"-100vh",
    duration:1.6,
    ease: Power3.easeInOut,
    
})
gsap.from("#animpage2",{
    y:"100vh",
    ease: Power3.easeInOut,
    
})

gsap.to("#animpage2",{
    y:"-100vh",
    duration:1.6,
    ease: Power3.easeInOut,
    
})
gsap.from("#page1",{
    opacity:0,
    y:"100vh",
    duration:1.5,
    ease: Power3.easeInOut,
    
})

