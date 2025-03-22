function page1Animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.15,
    })

    tl.from(".center-part1", {
        x: -500,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part1 p, .center-part1 button", {
        x: -200,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part2 img", {
        x: 200,
        opacity: 0,
        duration: 0.4,
    }, "-=0.3") 

    tl.from(".section1-bottom img", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
    }, "-=3")
}

function containerAnimation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "top -30%",
            scrub: 2,
        }
    }); 
    
    tl2.from(".services", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })
    
    tl2.from(".elem.line1.left", {
        x: -500,
        opacity: 0,
        duration: 1,
    }, "anim1") 
    tl2.from(".elem.line1.right", {
        x: 500,
        opacity: 0,
        duration: 1,
    }, "anim1") 
    
    tl2.from(".elem.line2.left", {
        x: -500,
        opacity: 0,
        duration: 1,
    }, "anim2") 
    tl2.from(".elem.line2.right", {
        x: 500,
        opacity: 0,
        duration: 1,
    }, "anim2") 
    
    tl2.from(".elem.line3.left", {
        x: -500,
        opacity: 0,
        duration: 1,
    }, "anim3") 
    tl2.from(".elem.line3.right", {
        x: 500,
        opacity: 0,
        duration: 1,
    }, "anim3") 
}

page1Animation();
containerAnimation();

